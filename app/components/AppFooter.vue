<script setup lang="ts">
const columns = [
  {
    label: "Services",
    children: [
      {
        label: "Power Distribution",
      },
      {
        label: "Electrical Installations",
      },
      {
        label: "Renewable Energy",
      },
      {
        label: "Public Lighting",
      },
    ],
  },
  {
    label: "Company",
    children: [
      {
        label: "Projects",
      },
      {
        label: "About Us",
      },
      {
        label: "Contact Us",
      },
    ],
  },
  {
    label: "Contacts",
    children: [
      {
        label: "No.24 Waziri Ibrahim Crescent,<br/> Apo, Gudu District, Abuja.",
        class: 'max-w-xs'
      },
      {
        label: "No.10 Daura Road New Extension, Marafa, Kaduna, Kaduna.",
         class: 'max-w-xs'
      },
      {
        label: "No.13 Kanya Yamma, Kanya Babba, Babura L.G.A, Jigawa State.",
        class: 'max-w-xs',
      },
      {
        label: "info@kikengineeringltd.com",
      },
    ],
  },
];
</script>

<template>
  <USeparator class="h-px" :avatar="{ src: '/logo.png', size: '3xs' }" />

  <UFooter :ui="{ top: 'border-b border-default' }">
    <template #top>
      <UContainer>
        <UFooterColumns :columns="columns">
          <template #left>
            <div>
 <div class="flex gap-4 items-center">
              <NuxtImg src="/logo.png" width="80" />
              <div
                class="text-2xl text-gray-800 dark:text-yellow-500 font-extrabold"
              >
                KIK Engineering <br /><span class="text-lg dark:text-gray-200"
                  >Limited</span
                >
              </div>
            </div>
            <p class="text-muted mt-4">
              Leading engineering solutions provider specializing in power infrastructure.
            </p>
            </div>
           
          </template>
        </UFooterColumns>
      </UContainer>
    </template>

    <template #left>
      <p class="text-sm text-muted">
        Built by Ismail for KIK Engineering Ltd • ©
        {{ new Date().getFullYear() }}
      </p>
    </template>
  </UFooter>
</template>
