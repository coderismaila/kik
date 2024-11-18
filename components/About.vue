<template>
    <section id="about" class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="flex flex-col lg:flex-row items-center gap-12">
          <div class="lg:w-1/2" v-motion="{ initial: { opacity: 0, x: -100 }, visible: { opacity: 1, x: 0 } }">
            <h2 class="text-3xl md:text-4xl font-bold mb-6">Why Choose Us?</h2>
            <div class="space-y-4">
              <div v-for="(feature, index) in features" :key="index" class="flex items-start">
                <Icon name="i-heroicons-check-circle" class="w-6 h-6 text-yellow-600 mt-1 flex-shrink-0" />
                <div class="ml-4">
                  <h3 class="text-xl font-semibold mb-2">{{ feature.title }}</h3>
                  <p class="text-gray-600">{{ feature.description }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="lg:w-1/2" v-motion="{ initial: { opacity: 0, x: 100 }, visible: { opacity: 1, x: 0 } }">
            <NuxtImg
              src="/about.jpg"
              alt="Professional electrician at work"
              class="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>  
  const features = [
    {
      title: 'Licensed & Insured',
      description: 'Our team consists of fully licensed and insured professionals with years of experience.'
    },
    {
      title: 'Quality Guaranteed',
      description: 'We stand behind our work with satisfaction guarantees and warranties.'
    },
    {
      title: 'Available 24/7',
      description: 'Emergency services available around the clock for your peace of mind.'
    },
    {
      title: 'Competitive Pricing',
      description: 'Fair and transparent pricing with no hidden fees or surprises.'
    }
  ]
  </script>