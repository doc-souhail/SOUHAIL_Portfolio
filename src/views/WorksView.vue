<script setup>
import Banner from "@/components/Banner.vue";
import gsap from "gsap";
import {onMounted} from "vue";


onMounted( () => {
  gsap.to(".bg-w", {
    inset: "100px",
    duration: 0.1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".bg-w",
      start: "top bottom",
      end: "bottom top",
      scrub: 1,
    },
  });
})



</script>

<template>
  <Banner
      year="2025"
      title="Things I Built"
      subtitle="Cool Stuff"
      location="Crafted with Code 👩‍💻"
  />

  <section class="my-5 position-relative">
  <div class="bg-w"></div>
  <div class="container">
    <div class="py-5">
      <h2>RECENT WORKS</h2>
    </div>
    <div class="border-bottom border-2 border-black"></div>
    <div class="Projects text-uppercase ">

      <a href="https://quickeeeer.softr.app/">
        <div class="py-5 d-flex">
          <p>Quickeeeer</p>
          <img src="../assets/imgs/arrow.svg" class="arrow-icon" alt="arrow-icon">
        </div>
      </a>
      <a href="https://bento-1-1a7a35.webflow.io/">
        <div class="py-5 d-flex">
          <p>Bento Design</p>
          <img src="../assets/imgs/arrow.svg" class="arrow-icon" alt="arrow-icon">
        </div>
      </a>
      <a href="">
        <div class="py-5 d-flex">
          <p>The EveryThing blog</p>
          <img src="../assets/imgs/arrow.svg" class="arrow-icon" alt="arrow-icon">
        </div>
      </a>
      <a href="">
        <div class="py-5 d-flex">
          <p>Snake Game</p>
          <img src="../assets/imgs/arrow.svg" class="arrow-icon" alt="arrow-icon">
        </div>
      </a>
    </div>
  </div>
  </section>

</template>

<style scoped>

.bg-w {
  position: absolute;
  background: #ffd436;
  display: block;
  opacity: 1;
  z-index: -1;
  inset: 50px;
}

h2{
  font-size: 9vw;
}


.Projects a{
  color: var(--text-color-1);
  font-size: 5vw;
  font-family: 'Rothefight', sans-serif;
  font-weight: bold;
  letter-spacing: 3px;
}

.arrow-icon{
  width: 120px
}

</style>
