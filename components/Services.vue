<template>
  <section id="services" class="py-20 bg-white">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-12">
        Our Services
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="service in services"
          :key="service.title"
          class="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-sm ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10"
          v-motion="{
            initial: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }"
        >
          <span
            class="absolute top-10 z-0 h-20 w-20 rounded-full bg-yellow-500 transition-all duration-300 group-hover:scale-[10]"
          ></span>
          <div class="relative z-10 mx-auto max-w-md">
            <span
              class="grid h-20 w-20 place-items-center rounded-full bg-yellow-500 transition-all duration-300 group-hover:bg-yellow-400"
            >
              <Icon :name="service.icon" class="w-12 h-12 text-white" />
            </span>
            <div
              class="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90"
            >
              <h3 class="text-xl font-semibold mb-3">{{ service.title }}</h3>
              <p class="text-gray-600">{{ service.description }}</p>
            </div>
            <div class="pt-5 text-base font-semibold leading-7">
              <p>
                <a
                  href="#"
                  class="text-yellow-500 transition-all duration-300 group-hover:text-white"
                  >Read more &rarr;
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const services = [
  {
    title: "Residential Services",
    description:
      "Complete electrical solutions for your home, from repairs to new installations.",
    icon: "i-heroicons-home",
  },
  {
    title: "Commercial Services",
    description:
      "Comprehensive electrical services for businesses and commercial properties.",
    icon: "i-heroicons-home",
  },
  {
    title: "Emergency Repairs",
    description:
      "24/7 emergency electrical repair services when you need them most.",
    icon: "i-heroicons-wrench-screwdriver",
  },
  {
    title: "Lighting Installation",
    description:
      "Modern lighting solutions for both indoor and outdoor spaces.",
    icon: "i-heroicons-light-bulb",
  },
  {
    title: "Electrical Maintenance",
    description:
      "Regular maintenance to keep your electrical systems running safely.",
    icon: "i-heroicons-bolt",
  },
  {
    title: "Safety Inspections",
    description: "Thorough electrical safety inspections and certifications.",
    icon: "i-heroicons-shield-check",
  },
];
</script>
