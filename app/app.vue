<script setup lang="ts">
const colorMode = useColorMode();

const color = computed(() =>
  colorMode.value === "dark" ? "#171717" : "white",
);

useHead({
  meta: [
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { key: "theme-color", name: "theme-color", content: color },
  ],
  link: [{ rel: "icon", href: "/favicon.ico" }],
  htmlAttrs: {
    lang: "en",
  },
});

useSeoMeta({
  ogImage: "https://res.cloudinary.com/hasmos/image/upload/v1760269939/kikog_l6yrcp.png",
  twitterImage: "https://res.cloudinary.com/hasmos/image/upload/v1760269939/kikog_l6yrcp.png",
  twitterCard: "summary_large_image",
});
</script>

<template>
  <UApp :toaster="{ expand: false }">
    <NuxtLoadingIndicator />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
