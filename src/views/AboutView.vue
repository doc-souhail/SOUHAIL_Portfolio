<script setup>

import Banner from "@/components/Banner.vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import {onMounted, ref} from "vue";

const marqueeText = ref("🚀 Hire Me • Hire Me • Hire Me 🚀 Hire Me • Hire Me • Hire Me ");
gsap.registerPlugin(ScrollTrigger);

onMounted(() => {

  const container = document.querySelector(".marquee-inner");

  container.innerHTML += container.innerHTML;

  gsap.to(container, {
    x: "-50%",
    duration: 30,
    ease: "linear",
    repeat: -1
  });

  gsap.to(".parallax-img", {
    y: -100, // L'image bouge légèrement vers le haut
    ease: "none",
    scrollTrigger: {
      trigger: ".img-container",
      start: "top bottom",
      end: "bottom top",
      scrub: 2, // Animation fluide synchronisée avec le scroll
    },
  });
});
</script>

<template>
  <Banner
      year="2025"
      title="Hello there"
      subtitle="I'm Souhail"
      location="About me 🫡"
  />
<section class="container">
<div class="row mt-1">
  <p class="col text-uppercase fs-6">
    I’m Souhail, a full-stack developer, UI designer, and tech enthusiast navigating the digital universe 🌍.
    Currently based in Bordeaux, but always exploring new technologies and ideas.
  </p>
  <div class="col"></div>
</div>
</section>
  <div class="marquee">
    <div class="marquee-inner">
      {{ marqueeText }}
    </div>
  </div>
  <section class="img-container">
    <img src="../assets/imgs/beach.webp" class="w-100 img-fluid parallax-img" alt="Beach">
  </section>
  <section class="container">
    <h1 class="display-1">Hello</h1>
  </section>
</template>

<style scoped>

.marquee {
  width: 100%;
  overflow: hidden;
  color: black;
  font-size: 60px;
  font-weight: bold;
  text-transform: uppercase;
  padding: 10px 0;
  display: flex;
  align-items: center;
  position: relative;
  white-space: nowrap;
}

.marquee-inner {
  display: flex;
  gap: 2rem;
  white-space: nowrap;
  min-width: max-content;
}

.img-container {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100vh;
}

.parallax-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}



</style>