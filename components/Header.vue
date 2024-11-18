<template>
    <header class="fixed w-full bg-white shadow-md z-50">
      <nav class="container mx-auto px-4 py-4">
        <div class="flex items-center justify-between">
          <NuxtLink to="/" class="text-2xl font-bold text-yellow-600">
            KIK Engineering Ltd
          </NuxtLink>
          
          <!-- Mobile menu button -->
          <button @click="isOpen = !isOpen" class="lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path v-if="!isOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
  
          <!-- Desktop menu -->
          <div class="hidden lg:flex space-x-8">
            <NuxtLink v-for="item in menuItems" :key="item.text"
              :to="item.href"
              class="text-gray-600 hover:text-yellow-600 transition-colors">
              {{ item.text }}
            </NuxtLink>
          </div>
        </div>
  
        <!-- Mobile menu -->
        <div v-show="isOpen" class="lg:hidden mt-4">
          <div class="flex flex-col space-y-4">
            <NuxtLink v-for="item in menuItems" :key="item.text"
              :to="item.href"
              class="text-gray-600 hover:text-yellow-600 transition-colors"
              @click="isOpen = false">
              {{ item.text }}
            </NuxtLink>
          </div>
        </div>
      </nav>
    </header>
  </template>
  
  <script setup>
  const isOpen = ref(false)
  
  const menuItems = [
    { text: 'Home', href: '/' },
    { text: 'Services', href: '#services' },
    { text: 'About', href: '#about' },
    { text: 'Contact', href: '#contact' }
  ]
  </script>