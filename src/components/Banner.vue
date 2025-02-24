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
    <p class="text-end mb-0">[{{year}}]</p>
    <div>
      <h1 class="text-start word">{{title}}<span> —</span></h1>
    </div>
    <div class="pt-3">
      <h2 class="text-end word mb-0">{{subtitle}}</h2>
    </div>
    <p class="mb-0">[{{location}}]</p>
  </section>
</template>

<style scoped>
.hero__section{
  max-height: 80vh;
}
.hero__section h1{
  font-family: 'neutralFace-bold', sans-serif;
  font-size: 11vw;
  color: var(--text-color-1);
  font-weight: 900;
  letter-spacing: -5px;
}

.hero__section h2{
  font-family: "zora", sans-serif;
  font-size: 10vw;
  color: var(--text-color-1);
}

.hero__section p{
  font-size: 11px;
}

span{
  color: #4C60E6;
}
</style>