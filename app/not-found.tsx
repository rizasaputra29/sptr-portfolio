import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-24">
      <div className="text-center max-w-xl mx-auto">
        {/* Large 404 */}
        <h1 className="text-[120px] md:text-[180px] font-bold text-gray-900 leading-none tracking-tighter">
          404
        </h1>
        
        {/* Message */}
        <h2 className="text-2xl md:text-3xl font-medium text-gray-900 mt-4 mb-4">
          Page not found
        </h2>
        <p className="text-gray-500 text-lg mb-8">
          Sorry, the page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-8 py-3 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-colors"
          >
            Go Home
          </Link>
          <Link
            href="/#projects"
            className="px-8 py-3 border border-gray-300 text-gray-900 rounded-full font-medium hover:bg-gray-50 transition-colors"
          >
            View Projects
          </Link>
        </div>
      </div>
    </div>
  );
}
