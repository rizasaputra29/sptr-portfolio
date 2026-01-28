import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  const experiences = [
    {
      role: 'Software Engineer',
      company: 'Apple Inc.',
      period: '2022–Now',
      description: 'Building scalable features for millions of users.',
    },
    {
      role: 'Lead Engineer',
      company: 'Scale-up Company',
      period: '2020–2022',
      description: 'Led a team of 5 engineers to ship core product features.',
    },
    {
      role: 'Senior Software Engineer',
      company: 'SaaS Company',
      period: '2018–2020',
      description: 'Optimized backend performance and reduced latency by 40%.',
    },
    {
      role: 'Software Engineer',
      company: 'Startup Studio',
      period: '2016–2018',
      description: 'Full-stack development for early-stage startups.',
    },
  ]

  for (const exp of experiences) {
    await prisma.experience.create({ data: exp })
  }

  const skills = [
    { name: 'Frontend Engineering', category: 'General', featured: false },
    { name: 'Backend Engineering', category: 'General', featured: false },
    { name: 'API & System Design', category: 'General', featured: false },
    { name: 'Full-Stack Web Development', category: 'General', featured: true },
    { name: 'DevOps & Deployment', category: 'General', featured: false },
  ]

  for (const skill of skills) {
    await prisma.skill.create({ data: skill })
  }

  const siteStats = [
    { key: 'deployments', value: '+320', label: 'Production Deployments' },
    { key: 'features', value: '+280', label: 'Features Shipped' },
  ]

  for (const stat of siteStats) {
    await prisma.siteStats.create({ data: stat })
  }

  console.log('Seed data inserted.')
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
