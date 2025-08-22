<script setup>
const props = defineProps({
  year: { type: String, default: "2025" },
  title: { type: String, default: "Software" },
  subtitle: { type: String, default: "Developer" },
  location: { type: String, default: "Actuellement à Bordeaux" }
});
</script>

<template>
  <section class="container hero__section mt-4">
    <p class="text-center text-sm-end mb-0">[{{year}}]</p>
    <div>
      <h1 class="text-center text-sm-start word title">{{title}}<span> —</span></h1>
    </div>
    <div class="pt-3">
      <h2 class="text-center text-sm-end word mb-0 subtitle ">{{subtitle}}</h2>
    </div>
    <div class="mt-1">
        <p class="text-center text-sm-start">[{{location}}]</p>
    </div>
  </section>
</template>

<style scoped>

span{
  color: #4C60E6;
}
</style>