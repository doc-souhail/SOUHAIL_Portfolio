<script setup>
import Banner from "@/components/Banner.vue";
import gsap from "gsap";
import {onMounted} from "vue";

onMounted(() => {
  const links = document.querySelectorAll(".link-item");
  links.forEach((link) => {
    const arrow = link.querySelector(".arrow-icon");
    gsap.set(arrow, { y: 30, rotate: -45, opacity: 0 });
    link.addEventListener("mouseenter", () => {
      gsap.to(arrow, {
        y: 0,
        rotate: 0,
        opacity: 1,
        duration: 0.4,
        ease: "power3.out",
      });
    });
    link.addEventListener("mouseleave", () => {
      gsap.to(arrow, {
        y: 30,
        rotate: -45,
        opacity: 0,
        duration: 0.4,
        ease: "power3.in",
      });
    });
  });
});

</script>

<template>
  <Banner
      year="2025"
      title="Things I Built"
      subtitle="Cool Stuff"
      location="Crafted with Code 👩‍💻"
  />

  <section class="my-5 position-relative">
  <div class="container">
    <div class="py-5 my-5">
      <h2 class="text-center text-sm-start">RECENT WORKS</h2>
    </div>
    <div class="Projects text-uppercase ">

      <div class="links border-top">
        <a class="link-item" href="https://quickeeeer.softr.app/">
          <div class="py-5 d-flex align-items-center">
            <p class="ps-4 mb-0 lh-1">Quickeeeer</p>
            <span class="stack text-capitalize ps-4">Softr / Bootstrap</span>
            <img src="../assets/imgs/arrow.svg" class="arrow-icon" alt="arrow-icon">
          </div>
        </a>
      </div>

      <div class="border-top links">
        <a class="link-item" href="https://bento-1-1a7a35.webflow.io/">
          <div class="py-5 d-flex align-items-center">
            <p class="ps-4">Bento Design</p>
            <span class="stack text-capitalize ps-4">WebFlow</span>
            <img src="../assets/imgs/arrow.svg" class="arrow-icon" alt="arrow-icon">
          </div>
        </a>
      </div>
      <div class="border-top links">
        <a class="link-item" href="">
          <div class="py-5 d-flex align-items-center">
            <p class="ps-4">The EveryThing blog</p>
            <span class="stack text-capitalize ps-4">RestAPI / Java / Spring Boot / Junit</span>
            <img src="../assets/imgs/arrow.svg" class="arrow-icon" alt="arrow-icon">
          </div>
        </a>
      </div>
      <div class="border-top links">
        <a class="link-item" href="">
          <div class="py-5 d-flex align-items-center">
            <p class="ps-4">Snake Game</p>
            <span class="stack text-capitalize ps-4">Java</span>
            <img src="../assets/imgs/arrow.svg" class="arrow-icon" alt="arrow-icon">
          </div>
        </a>
      </div>
      <div class="border-top border-bottom links">
        <a class="link-item" href="">
          <div class="py-5 d-flex align-items-center">
            <p class="ps-4">Goofy portfolio</p>
            <span class="stack text-capitalize ps-4">VueJs</span>
            <img src="../assets/imgs/arrow.svg" class="arrow-icon" alt="arrow-icon">
          </div>
        </a>
      </div>
    </div>
  </div>
    <div class="text-center my-5">
      <a href="#" class="button-projetcs py-3 px-5 rounded text-uppercase">See more</a>
    </div>
  </section>

</template>

<style scoped>

h2{
  font-size: 8vw;
  font-family: 'Rothefight', sans-serif;
}

.links{
  transition: 0.5s ease-in-out;
}

.links:hover{
  background-color: var(--text-color-3);
}

.link-item{
  color: var(--text-color-1);
  font-size: 4.5vw;
  font-family: 'Rothefight', sans-serif;
  font-weight: bold;
  letter-spacing: 3px;
  transition: 0.4s ease-in-out;
}

.arrow-icon {
  width: 140px;
  transform-origin: center;
}

.link-item:hover{
  letter-spacing: 6px;
  font-size: 4.7vw;
}

.stack{
  font-size: 18px;
  letter-spacing: 1px;
  font-family: 'neutralFace-bold', sans-serif;

}

.button-projetcs {
  color: var(--text-color-1);
  font-family: 'Rothefight', sans-serif;
  font-size: 25px;
  background-color: var(--text-color-3);
  transition: 0.4s ease-in-out;
}

.button-projetcs:hover{
  box-shadow: 12px 6px 0px 2px rgba(0,0,0,1);
  -webkit-box-shadow: 12px 6px 0px 2px rgba(0,0,0,1);
  -moz-box-shadow: 12px 6px 0px 2px rgba(0,0,0,1);
}


</style>
