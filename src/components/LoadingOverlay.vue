<script setup>
import { ref, nextTick } from "vue";
import gsap from "gsap";

const isLoading = ref(false);

const show = () => {
  isLoading.value = true;
  nextTick(() => {
    gsap.set(".bar", { height: "105vh" });
  });
};

const hide = () => {
  gsap.to(".bar", {
    height: 0,
    duration: 1.3,
    stagger: {
      amount: 0.5,
    },
    ease: "power4.inOut",
    onComplete: () => (isLoading.value = false),
  });
};

defineExpose({ show, hide });
</script>

<template>
  <div v-if="isLoading" class="overlay">
    <div class="bar" v-for="n in 10" :key="n"></div>
  </div>
</template>

<style scoped>

.overlay {
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  display: flex;
  overflow: hidden;
}

.bar {
  width: 10vw;
  height: 105vh;
  background: var(--text-color-1);
}
</style>