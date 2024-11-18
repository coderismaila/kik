<template>
    <footer class="bg-gray-900 text-white py-12">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 class="text-xl font-bold mb-4">KIK Engineering Ltd</h3>
            <p class="text-gray-400">Your trusted partner for professional electrical services.</p>
          </div>
          <div>
            <h4 class="text-lg font-semibold mb-4">Quick Links</h4>
            <ul class="space-y-2">
              <li v-for="link in quickLinks" :key="link.text">
                <NuxtLink :to="link.href" class="text-gray-400 hover:text-white transition-colors">
                  {{ link.text }}
                </NuxtLink>
              </li>
            </ul>
          </div>
          <div>
            <h4 class="text-lg font-semibold mb-4">Services</h4>
            <ul class="space-y-2">
              <li v-for="service in services" :key="service">
                <span class="text-gray-400">{{ service }}</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 class="text-lg font-semibold mb-4">Contact</h4>
            <ul class="space-y-2 text-gray-400">
              <li>Phone: (555) 123-4567</li>
              <li>Email: info@powerpro.com</li>
              <li>123 Electric Ave</li>
              <li>City, ST 12345</li>
            </ul>
          </div>
        </div>
        <div class="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {{ new Date().getFullYear() }} KIK Engineering Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </template>
  
  <script setup lang="ts">
  const quickLinks = [
    { text: 'Home', href: '/' },
    { text: 'Services', href: '#services' },
    { text: 'About', href: '#about' },
    { text: 'Contact', href: '#contact' }
  ]
  
  const services = [
    'Residential Services',
    'Commercial Services',
    'Emergency Repairs',
    'Lighting Installation',
    'Electrical Maintenance',
    'Safety Inspections'
  ]
  </script>