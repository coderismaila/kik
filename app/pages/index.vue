<script setup lang="ts">
const { data: page } = await useAsyncData('index', () => queryCollection('index').first())
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

useSeoMeta({
  title: page.value.seo?.title || page.value.title,
  ogTitle: page.value.seo?.title || page.value.title,
  description: page.value.seo?.description || page.value.description,
  ogDescription: page.value.seo?.description || page.value.description
})
</script>

<template>
  <div v-if="page" class="relative">
    <UPageHero :description="page.description" :links="page.hero.links" :ui="{
      container: 'md:pt-18 lg:pt-20',
      title: 'max-w-3xl mx-auto'
    }">
      <template #top>
        <HeroBackground />
      </template>

      <template #title>
        <MDC :value="page.title" unwrap="p" />
      </template>
    </UPageHero>

    <UPageSection v-for="(section, index) in page.sections" :key="index" :description="section.description"
      :features="section.features" :headline="section.headline" :orientation="section.orientation"
      :reverse="section.reverse">
      <template #title>
        <MDC :value="section.title" class="sm:*:leading-11" />
      </template>
      <img :src="section.images.desktop" :alt="section.title"
        class="hidden lg:block 2xl:hidden left-0 w-full max-w-2xl">
      <img :src="section.images.desktop" :alt="section.title"
        class="block lg:hidden 2xl:block 2xl:w-full 2xl:max-w-2xl">
    </UPageSection>

    <USeparator :ui="{ border: 'border-primary/30' }" />

    <UPageSection :description="page.features.description">
      <template #title>
        <MDC :value="page.features.title" class="sm:*:leading-11" />
      </template>
      <UPageGrid>
        <UPageCard v-for="(feature, i) in page.features.items" :title="feature.title" reverse variant="soft">
          <NuxtImg :src="feature.image" :alt="feature.title" />
        </UPageCard>
        <UPageCard title="Inverter installation at Raven Media, Abuja Office" reverse variant="soft">
          <video class="rounded-xl" data-v-baf90ddd="" preload="none"
            poster="https://res.cloudinary.com/hasmos/image/upload/v1760268708/inverter_070_cmodbg.png"
            :controls="true">
            <source data-v-baf90ddd=""
              src="https://res.cloudinary.com/hasmos/video/upload/v1760267271/inverter_abxdfm.mp4"
              type="video/mp4">
          </video>
        </UPageCard>
      </UPageGrid>
    </UPageSection>

    <USeparator :ui="{ border: 'border-primary/30' }" />

    <UPageSection title="Certifications & Partnership">
      <UPageLogos title="Certified & Trusted by Industry Professionals" marquee>
        <NuxtImg src="/images/partners/ihs.png" alt="ihs" height="100" />
        <NuxtImg src="/images/partners/cac.png" alt="cac" height="100" />
        <NuxtImg src="/images/partners/kedco.png" alt="kedco" height="150" />
        <NuxtImg src="/images/partners/nemsa.png" alt="nemsa" height="100" />
        <NuxtImg src="/images/partners/ke.png" alt="kaduna electric" height="90" />
      </UPageLogos>
    </UPageSection>


    <UPageCTA v-bind="page.cta" variant="naked" class="overflow-hidden @container">
      <template #title>
        <MDC :value="page.cta.title" />
      </template>

    </UPageCTA>
  </div>
</template>
