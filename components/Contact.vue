<template>
    <section id="contact" class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center" v-motion="{ initial: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }">
          <h2 class="text-3xl md:text-4xl font-bold mb-6">Contact Us</h2>
          <p class="text-gray-600 mb-12">Get in touch for a free quote or to discuss your electrical needs</p>
          
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <input type="text" v-model="form.name" placeholder="Your Name" required
                  class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200">
              </div>
              <div>
                <input type="email" v-model="form.email" placeholder="Your Email" required
                  class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200">
              </div>
            </div>
            <div>
              <input type="tel" v-model="form.phone" placeholder="Phone Number"
                class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200">
            </div>
            <div>
              <textarea v-model="form.message" placeholder="Your Message" rows="4" required
                class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-blue-200"></textarea>
            </div>
            <button type="submit" 
              class="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-3 px-8 rounded-full transition-colors">
              Send Message
            </button>
          </form>
  
          <div class="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div v-for="(item, index) in contactInfo" :key="index" class="flex flex-col items-center">
              <Icon :name="item.icon" class="w-8 h-8 text-yellow-600 mb-4" />
              <h3 class="text-lg font-semibold mb-2">{{ item.title }}</h3>
              <p class="text-gray-600">{{ item.value }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">  
  const form = ref({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  
  const contactInfo = [
    {
      icon: 'i-heroicons-phone',
      title: 'Phone',
      value: '(555) 123-4567'
    },
    {
      icon: 'i-heroicons-envelope',
      title: 'Email',
      value: 'info@powerpro.com'
    },
    {
      icon: 'i-heroicons-map-pin',
      title: 'Address',
      value: '123 Electric Ave, City, ST 12345'
    }
  ]
  
  const handleSubmit = () => {
    // Handle form submission
    console.log('Form submitted:', form.value)
    // Reset form
    form.value = {
      name: '',
      email: '',
      phone: '',
      message: ''
    }
  }
  </script>