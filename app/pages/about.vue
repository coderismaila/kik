<script setup lang="ts">
useSeoMeta({
  title: 'About Us - KIK Engineering Ltd',
  ogTitle: 'About Us - KIK Engineering Ltd',
  description: 'Learn about KIK Engineering Ltd, a leading provider of power infrastructure and renewable energy solutions across Nigeria and Africa.',
  ogDescription: 'Learn about KIK Engineering Ltd, a leading provider of power infrastructure and renewable energy solutions across Nigeria and Africa.'
})

const stats = [
  { label: 'Years of Experience', value: '6+', icon: 'i-lucide-calendar' },
  { label: 'Projects Completed', value: '200+', icon: 'i-lucide-briefcase-business' },
  { label: 'States Covered', value: '15+', icon: 'i-lucide-map-pin' },
  { label: 'Clients Served', value: '150+', icon: 'i-lucide-users' }
]

const values = [
  {
    title: 'Excellence',
    description: 'We strive for excellence in every project, maintaining the highest standards of quality and professionalism.',
    icon: 'i-lucide-award'
  },
  {
    title: 'Integrity',
    description: 'We conduct our business with transparency, honesty, and ethical practices in all our dealings.',
    icon: 'i-lucide-shield-check'
  },
  {
    title: 'Innovation',
    description: 'We embrace cutting-edge technology and innovative solutions to deliver modern power infrastructure.',
    icon: 'i-lucide-lightbulb'
  },
  {
    title: 'Sustainability',
    description: 'We are committed to sustainable engineering practices and renewable energy solutions for a greener future.',
    icon: 'i-lucide-leaf'
  }
]

const team = [
  {
    name: 'Engr. Kamal Yusuf',
    role: 'Managing Director',
    image: '/images/kamal.png',
    description: 'Visionary leader with over 12 years in power engineering and infrastructure development.'
  }
]

const timeline = [
  {
    year: '2021',
    title: 'Foundation',
    description: 'KIK Engineering Ltd was established with a vision to transform Nigeria\'s power infrastructure.'
  },
  {
    year: '2022',
    title: 'Expansion',
    description: 'Expanded operations to Kaduna and Northern Nigeria, establishing regional offices.'
  },
  {
    year: '2024',
    title: 'Renewable Energy Focus',
    description: 'Launched dedicated solar and renewable energy division to meet growing demand.'
  },
  {
    year: '2025',
    title: 'Industry Leadership',
    description: 'Became one of the most trusted electrical engineering companies in Nigeria with 150+ projects.'
  }
]
</script>

<template>
  <div class="relative">
    <HeroBackground />
    
    <UPageHero
      title="About KIK Engineering Ltd"
      description="Pioneering power infrastructure and renewable energy solutions across Nigeria and Africa since 2001."
      :ui="{
        container: 'md:pt-18 lg:pt-20',
        title: 'max-w-4xl mx-auto',
        description: 'max-w-2xl mx-auto text-lg'
      }"
    >
      <template #title>
        About <span class="text-primary">KIK Engineering Ltd</span>
      </template>
    </UPageHero>

    <USeparator :ui="{ border: 'border-primary/30' }" />

    <UPageSection>
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 class="text-3xl font-bold mb-6">Building Power Infrastructure for <span class="text-primary">Tomorrow</span></h2>
          <p class="text-lg text-muted mb-6">
            KIK Engineering Ltd is a leading indigenous engineering company dedicated to delivering efficient, reliable, and sustainable power solutions across Nigeria and Africa.
          </p>
          <p class="text-muted mb-6">
            Since our founding in 2021, we have grown from a small electrical contractor to a comprehensive power infrastructure provider, serving government agencies, private corporations, and communities with distinction.
          </p>
          <p class="text-muted">
            Our team of certified engineers and technicians combines technical expertise with regulatory compliance and innovative thinking to deliver dependable solutions that power growth and development.
          </p>
        </div>
        <div class="grid grid-cols-2 gap-4">
          <div class="bg-primary/10 rounded-xl p-6 text-center">
            <UIcon name="i-lucide-zap" class="w-10 h-10 text-primary mb-3 mx-auto" />
            <div class="text-3xl font-bold text-primary">15+</div>
            <div class="text-sm text-muted">Years Experience</div>
          </div>
          <div class="bg-primary/10 rounded-xl p-6 text-center">
            <UIcon name="i-lucide-briefcase-business" class="w-10 h-10 text-primary mb-3 mx-auto" />
            <div class="text-3xl font-bold text-primary">200+</div>
            <div class="text-sm text-muted">Projects Done</div>
          </div>
          <div class="bg-primary/10 rounded-xl p-6 text-center">
            <UIcon name="i-lucide-map-pin" class="w-10 h-10 text-primary mb-3 mx-auto" />
            <div class="text-3xl font-bold text-primary">15+</div>
            <div class="text-sm text-muted">States Covered</div>
          </div>
          <div class="bg-primary/10 rounded-xl p-6 text-center">
            <UIcon name="i-lucide-users" class="w-10 h-10 text-primary mb-3 mx-auto" />
            <div class="text-3xl font-bold text-primary">500+</div>
            <div class="text-sm text-muted">Happy Clients</div>
          </div>
        </div>
      </div>
    </UPageSection>

    <USeparator :ui="{ border: 'border-primary/30' }" />

    <UPageSection headline="Our Mission & Vision">
      <template #title>
        Driving Nigeria's <span class="text-primary">Energy Future</span>
      </template>
      
      <div class="grid md:grid-cols-2 gap-8">
        <UCard class="border-2 border-primary/20 hover:border-primary/50 transition-colors">
          <template #header>
            <div class="flex items-center gap-3">
              <div class="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <UIcon name="i-lucide-eye" class="w-6 h-6 text-primary" />
              </div>
              <h3 class="text-xl font-bold">Our Vision</h3>
            </div>
          </template>
          <p class="text-lg text-muted">
            To be the foremost indigenous engineering company in Nigeria and Africa, delivering innovative and sustainable power infrastructure that drives economic development and improves the quality of life for all.
          </p>
        </UCard>
        
        <UCard class="border-2 border-primary/20 hover:border-primary/50 transition-colors">
          <template #header>
            <div class="flex items-center gap-3">
              <div class="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <UIcon name="i-lucide-target" class="w-6 h-6 text-primary" />
              </div>
              <h3 class="text-xl font-bold">Our Mission</h3>
            </div>
          </template>
          <p class="text-lg text-muted">
            To provide world-class engineering solutions in power distribution, renewable energy, and electrical infrastructure while maintaining the highest standards of safety, quality, and customer satisfaction.
          </p>
        </UCard>
      </div>
    </UPageSection>

    <USeparator :ui="{ border: 'border-primary/30' }" />

    <UPageSection headline="Our Core Values">
      <template #title>
        Principles That <span class="text-primary">Guide Us</span>
      </template>
      
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <UCard v-for="value in values" :key="value.title" class="text-center hover:shadow-lg transition-shadow">
          <div class="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
            <UIcon :name="value.icon" class="w-8 h-8 text-primary" />
          </div>
          <h3 class="text-xl font-bold mb-2">{{ value.title }}</h3>
          <p class="text-muted">{{ value.description }}</p>
        </UCard>
      </div>
    </UPageSection>

    <USeparator :ui="{ border: 'border-primary/30' }" />

    <UPageSection headline="Our Journey">
      <template #title>
        From Startup to <span class="text-primary">Industry Leader</span>
      </template>
      
      <div class="relative">
        <div class="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20 hidden md:block"></div>
        
        <div class="space-y-12">
          <div v-for="(item, index) in timeline" :key="item.year" class="relative flex items-center justify-center">
            <div class="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary hidden md:block"></div>
            <UCard :class="index % 2 === 0 ? 'md:mr-auto md:ml-0 md:w-[45%]' : 'md:ml-auto md:mr-0 md:w-[45%]'" class="w-full">
              <div class="text-2xl font-bold text-primary mb-2">{{ item.year }}</div>
              <h3 class="text-xl font-bold mb-2">{{ item.title }}</h3>
              <p class="text-muted">{{ item.description }}</p>
            </UCard>
          </div>
        </div>
      </div>
    </UPageSection>

    <USeparator :ui="{ border: 'border-primary/30' }" />

    <UPageSection headline="Leadership">
      <template #title>
        Meet Our <span class="text-primary">Team</span>
      </template>
      
      <div class="grid md:grid-cols-3 gap-8">
        <UCard v-for="member in team" :key="member.name" class="text-center hover:shadow-lg transition-shadow">
          <template #header>
            <NuxtImg :src="member.image" :alt="member.name" class="w-32 h-32 rounded-full mx-auto object-cover border-4 border-primary/20" />
          </template>
          <h3 class="text-xl font-bold">{{ member.name }}</h3>
          <p class="text-primary font-medium mb-2">{{ member.role }}</p>
          <p class="text-muted text-sm">{{ member.description }}</p>
        </UCard>
        
        <UCard class="text-center bg-linear-to-br from-primary/5 to-primary/10 border-2 border-dashed border-primary/30">
          <div class="py-8">
            <UIcon name="i-lucide-users" class="w-16 h-16 text-primary/50 mx-auto mb-4" />
            <h3 class="text-xl font-bold mb-2">Join Our Team</h3>
            <p class="text-muted mb-4">We're always looking for talented engineers and technicians.</p>
            <UButton variant="outline" color="primary">View Careers</UButton>
          </div>
        </UCard>
      </div>
    </UPageSection>

    <USeparator :ui="{ border: 'border-primary/30' }" />

    <UPageSection>
      <UPageLogos title="Certified & Trusted by Industry Professionals" marquee>
        <NuxtImg src="/images/partners/cac.png" alt="cac" height="80" />
        <NuxtImg src="/images/partners/nemsa.png" alt="nemsa" height="80" />
        <NuxtImg src="/images/partners/ke.png" alt="kaduna electric" width="80" />
        <NuxtImg src="/images/partners/kedco.png" alt="kedco" height="50" />
        <NuxtImg src="/images/partners/ihs.png" alt="ihs" height="50" />
      </UPageLogos>
    </UPageSection>

    <USeparator :ui="{ border: 'border-primary/30' }" />

    <UPageSection class="py-20">
      <UCard class="bg-primary/5 border-2 border-primary/20 text-center py-12">
        <h2 class="text-3xl font-bold mb-4">Ready to Power Your <span class="text-primary">Projects?</span></h2>
        <p class="text-lg text-muted max-w-2xl mx-auto mb-8">
          Whether you need power distribution solutions, renewable energy installations, or electrical infrastructure, our team is ready to deliver excellence.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <UButton size="xl" color="primary" icon="i-lucide-mail">
            Contact Us Today
          </UButton>
          <UButton size="xl" variant="outline" color="primary" to="/project" icon="i-lucide-briefcase-business">
            View Our Projects
          </UButton>
        </div>
      </UCard>
    </UPageSection>
  </div>
</template>
