<template>
    <section class="relative h-screen flex items-center justify-center bg-gray-900 text-white">
      <div class="absolute inset-0 overflow-hidden">
        <NuxtImg src="/hero.jpg" alt="Electrical work" class="w-full h-full object-cover" />
        <div class="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      <div class="relative container mx-auto px-4 text-center" v-motion="{ initial: { opacity: 0, y: 100 }, visible: { opacity: 1, y: 0 } }">
        <h1 class="text-4xl md:text-6xl font-bold mb-6">Professional Electrical Services</h1>
        <p class="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">Your trusted partner for all electrical needs. Residential and commercial services with a commitment to safety and quality.</p>
        <NuxtLink to="#contact" class="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-3 px-8 rounded-full transition-colors inline-block">
          Get a Free Quote
        </NuxtLink>
      </div>
    </section>
  </template>