"use client"

import { IconArrowNarrowLeft, IconArrowNarrowRight, IconX } from "@tabler/icons-react"
import { AnimatePresence, motion } from "framer-motion"
import React, { createContext, useContext, useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"
import { useOnClickOutside } from "@/hooks/use-outside-click"
import { useLenis } from "lenis/react"

export interface CarouselProps {
  items: React.JSX.Element[]
  initialScroll?: number
}

export interface Card {
  src: string
  title: string
  category: string
  content: React.ReactNode
}

export const CarouselContext = createContext<{
  onCardClose: (index: number) => void
  currentIndex: number
}>({
  onCardClose: () => {
    /* default context value */
  },
  currentIndex: 0,
})

export const Carousel = ({ items, initialScroll = 0 }: CarouselProps) => {
  const carouselRef = React.useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = React.useState(false)
  const [canScrollRight, setCanScrollRight] = React.useState(true)
  const [currentIndex, setCurrentIndex] = useState(0)

  const checkScrollability = React.useCallback(() => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth)
    }
  }, [])

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll
      checkScrollability()
    }
  }, [initialScroll, checkScrollability])

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" })
    }
  }

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" })
    }
  }

  const handleCardClose = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = isMobile() ? 160 : 224 // (w-40 = 160px, md:w-56 = 224px)
      const gap = isMobile() ? 4 : 8
      const scrollPosition = (cardWidth + gap) * (index + 1)
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      })
      setCurrentIndex(index)
    }
  }

  const isMobile = () => {
    return window && window.innerWidth < 768
  }

  return (
    <CarouselContext.Provider value={{ onCardClose: handleCardClose, currentIndex }}>
      <div className="relative w-full">
        <div
          className="flex w-full overflow-x-scroll overscroll-x-auto scroll-smooth py-6 [scrollbar-width:none] md:py-10"
          onScroll={checkScrollability}
          ref={carouselRef}
        >
          <div
            className={cn(
              "absolute right-0 z-1000 h-auto w-[5%] overflow-hidden bg-linear-to-l",
            )}
          />

          <div
            className={cn(
              "flex flex-row justify-start gap-4 pl-4",
              "mx-auto max-w-7xl", // remove max-w-4xl if you want the carousel to span the full width of its container
            )}
          >
            {items.map((item, index) => (
              <motion.div
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: 0.2 * index,
                    ease: "easeOut",
                  },
                }}
                className="rounded-3xl last:pr-[5%] md:last:pr-[33%]"
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                key={`card${index}`}
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
        <div className="mr-10 flex justify-end gap-2">
          <button
            type="button"
            className="relative z-40 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 disabled:opacity-50"
            disabled={!canScrollLeft}
            onClick={scrollLeft}
          >
            <IconArrowNarrowLeft className="h-6 w-6 text-gray-500" />
          </button>
          <button
            type="button"
            className="relative z-40 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 disabled:opacity-50"
            disabled={!canScrollRight}
            onClick={scrollRight}
          >
            <IconArrowNarrowRight className="h-6 w-6 text-gray-500" />
          </button>
        </div>
      </div>
    </CarouselContext.Provider>
  )
}

export interface CardProps {
  card: Card
  index: number
  layout?: boolean
}

export const Card = ({ card, index, layout = false }: CardProps) => {
  const [open, setOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const { onCardClose } = useContext(CarouselContext)
  const lenis = useLenis()

  const handleClose = React.useCallback(() => {
    setOpen(false)
    onCardClose(index)
  }, [onCardClose, index])

  const handleOpen = () => {
    setOpen(true)
  }

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        handleClose()
      }
    }

    if (open) {
      document.body.style.overflow = "hidden"
      lenis?.stop()
    } else {
      document.body.style.overflow = "auto"
      lenis?.start()
    }

    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [open, lenis, handleClose])

  useOnClickOutside(containerRef as React.RefObject<HTMLElement>, () => handleClose())

  return (
    <>
      <AnimatePresence>
        {open && (
          <div 
            className="fixed inset-0 z-50 h-dvh overflow-y-auto overflow-x-hidden overscroll-contain touch-pan-y"
            onWheel={(e) => e.stopPropagation()}
            onTouchMove={(e) => e.stopPropagation()}
          >
            <motion.div
              animate={{ opacity: 1 }}
              className="fixed inset-0 h-full w-full bg-black/80 backdrop-blur-lg"
              exit={{ opacity: 0 }}
              initial={{ opacity: 0 }}
              onClick={handleClose}
            />
            <motion.div
              animate={{ opacity: 1 }}
              className="relative z-60 mx-4 my-10 h-fit max-w-5xl rounded-3xl bg-white p-4 font-sans md:mx-auto md:p-10 dark:bg-neutral-900"
              exit={{ opacity: 0 }}
              initial={{ opacity: 0 }}
              layoutId={layout ? `card-${card.title}` : undefined}
              ref={containerRef}
            >
              <button
                type="button"
                className="sticky top-4 right-0 ml-auto flex h-8 w-8 items-center justify-center rounded-full bg-black dark:bg-white z-10"
                onClick={handleClose}
              >
                <IconX className="h-6 w-6 text-neutral-100 dark:text-neutral-900" />
              </button>
              <motion.p
                className="text-base font-medium text-black dark:text-white"
                layoutId={layout ? `category-${card.title}` : undefined}
              >
                {card.category}
              </motion.p>
              <motion.p
                className="mt-4 text-2xl font-semibold text-neutral-700 md:text-5xl dark:text-white"
                layoutId={layout ? `title-${card.title}` : undefined}
              >
                {card.title}
              </motion.p>
              <div className="py-10">{card.content}</div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <motion.button
        className="relative z-10 flex w-80 h-[200px] md:w-[520px] md:h-[325px] flex-col items-start justify-end overflow-hidden rounded-3xl bg-gray-100 dark:bg-neutral-900 ring-1 ring-gray-200 dark:ring-neutral-700 hover:ring-gray-300 transition-all duration-300"
        layoutId={layout ? `card-${card.title}` : undefined}
        onClick={handleOpen}
      >
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-30 h-1/2 bg-linear-to-t from-black/80 via-black/40 to-transparent" />
        <div className="relative z-40 p-4 md:p-8">
          <motion.p
            className="text-left font-sans text-xs font-bold text-white md:text-sm uppercase tracking-wider"
            layoutId={layout ? `category-${card.category}` : undefined}
          >
            {card.category}
          </motion.p>
          <motion.p
            className="mt-2 max-w-xs text-left font-sans text-xl font-semibold text-balance text-white md:text-3xl"
            layoutId={layout ? `title-${card.title}` : undefined}
          >
            {card.title}
          </motion.p>
        </div>
        <BlurImage
          alt={card.title}
          className="absolute inset-0 z-10 object-cover"
          fill
          src={card.src}
        />
      </motion.button>
    </>
  )
}

export interface BlurImageProps {
  src: string
  alt?: string
  className?: string
  fill?: boolean
  width?: number
  height?: number
}

export const BlurImage = ({
  height,
  width,
  src,
  className,
  alt,
}: BlurImageProps) => {
  const [isLoading, setLoading] = useState(true)
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      alt={alt ? alt : "Background of a beautiful view"}
      className={cn(
        "h-full w-full transition duration-300",
        isLoading ? "blur-sm" : "blur-0",
        className,
      )}
      decoding="async"
      height={height}
      loading="lazy"
      onLoad={() => setLoading(false)}
      src={src}
      width={width}
    />
  )
}

// Demo
const demoCards: Card[] = [
  {
    src: "https://picsum.photos/seed/1/400/600",
    title: "Forest Adventure",
    category: "Nature",
    content: <p className="text-muted-foreground">Explore the beauty of ancient forests and discover hidden trails.</p>,
  },
  {
    src: "https://picsum.photos/seed/2/400/600",
    title: "Urban Photography",
    category: "City",
    content: <p className="text-muted-foreground">Capture the essence of city life through stunning urban landscapes.</p>,
  },
  {
    src: "https://picsum.photos/seed/3/400/600",
    title: "Ocean Waves",
    category: "Beach",
    content: <p className="text-muted-foreground">Feel the rhythm of the waves and embrace coastal serenity.</p>,
  },
  {
    src: "https://picsum.photos/seed/4/400/600",
    title: "Mountain Peaks",
    category: "Adventure",
    content: <p className="text-muted-foreground">Conquer new heights and witness breathtaking mountain vistas.</p>,
  },
]

export function Demo() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background py-10">
      <Carousel
        items={demoCards.map((card, index) => (
          <Card key={card.title} card={card} index={index} layout />
        ))}
      />
    </div>
  )
}
