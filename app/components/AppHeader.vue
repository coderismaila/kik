<script setup lang="ts">
const nuxtApp = useNuxtApp();
const { activeHeadings, updateHeadings } = useScrollspy();

const items = computed(() => [
  {
    label: "Project",
    to: "/project",
    active: activeHeadings.value.includes("projects"),
  },
  {
    label: "About",
    to: "#about",
    active:
      activeHeadings.value.includes("about") &&
      !activeHeadings.value.includes("projects"),
  },
  {
    label: "Contacts",
    to: "#contacts",
    active:
      activeHeadings.value.includes("contacts") &&
      !activeHeadings.value.includes("about"),
  },
]);

nuxtApp.hooks.hookOnce("page:finish", () => {
  updateHeadings(
    [
      document.querySelector("#services"),
      document.querySelector("#projects"),
      document.querySelector("#about"),
    ].filter(Boolean) as Element[],
  );
});
</script>

<template>
  <UHeader>
    <template #left>
      <NuxtLink to="/">
        <div class="flex gap-2 items-center justify-center">
          <AppLogo />
          <div class="grid grid-cols-1">
            <div class="text-gray-600 dark:text-yellow-500 font-bold">
              KIK Engineering
            </div>
            <div>Limited</div>
          </div>
        </div>
      </NuxtLink>
    </template>

    <template #right>
      <UNavigationMenu :items="items" variant="link" class="hidden lg:block" />

      <UColorModeButton />
    </template>

    <template #body>
      <UNavigationMenu :items="items" orientation="vertical" class="-mx-2.5" />
    </template>
  </UHeader>
</template>
