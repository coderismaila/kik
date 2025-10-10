<script setup lang="ts">
const { data: page } = await useAsyncData('index', () => queryCollection('content').first())
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

    <UPageSection :description="page.section.description" :features="page.section.features"
      :headline="page.section.headline" orientation="horizontal" reverse>
      <template #title>
        <MDC :value="page.section.title" class="sm:*:leading-11" />
      </template>
      <img :src="page.section.images.desktop" :alt="page.section.title"
        class="hidden lg:block 2xl:hidden left-0 w-full max-w-2xl">
      <img :src="page.section.images.desktop" :alt="page.section.title"
        class="block lg:hidden 2xl:block 2xl:w-full 2xl:max-w-2xl">
    </UPageSection>

    <USeparator :ui="{ border: 'border-primary/30' }" />

    <UPageSection :description="page.features.description">
      <template #title>
        <MDC :value="page.features.title" class="sm:*:leading-11" />
      </template>
      <UPageGrid>
        <UPageCard v-for="(feature, i) in page.features.features" :title="feature.title" reverse variant="soft">
          <NuxtImg :src="feature.image" :alt="feature.title" />
        </UPageCard>
      </UPageGrid>
    </UPageSection>

    <USeparator :ui="{ border: 'border-primary/30' }" />

    <UPageSection title="Certifications & Partnership">
      <UPageLogos title="Certified & Trusted by Industry Professionals" marquee>
        <NuxtImg src="/images/partners/ihs.png" sizes="80" />
        <NuxtImg src="/images/partners/kedco.png" sizes="120" />
        <NuxtImg src="/images/partners/nemsa.png" sizes="80" />
        <NuxtImg src="/images/partners/ke.png" sizes="80" />
      </UPageLogos>
    </UPageSection>


    <UPageCTA v-bind="page.cta" variant="naked" class="overflow-hidden @container">
      <template #title>
        <MDC :value="page.cta.title" />
      </template>

    </UPageCTA>
  </div>
</template>
