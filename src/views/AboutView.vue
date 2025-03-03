<script setup>

import Banner from "@/components/Banner.vue";
import gsap from "gsap";
import SplitType from "split-type";
import ScrollTrigger from "gsap/ScrollTrigger";

import {onMounted, ref} from "vue";
gsap.registerPlugin(ScrollTrigger);

const marqueeText = ref("🚀 Hire Me • Hire Me • Hire Me 🚀 Hire Me • Hire Me • Hire Me ");


onMounted(() => {

  const container = document.querySelector(".marquee-inner");

  container.innerHTML += container.innerHTML;

  gsap.to(container, {
    x: "-50%",
    duration: 60,
    ease: "linear",
    repeat: -1
  });

  gsap.to(".parallax-img", {
    y: -100,
    ease: "none",
    scrollTrigger: {
      trigger: ".img-container",
      start: "top bottom",
      end: "bottom top",
      scrub: 2,
    },
  });

  const textElement = document.querySelector('.text-about');
  const typeSplit = new SplitType(textElement, {
    types: 'lines, words, chars',
    tagName: 'span',
  });
  gsap.from('.text-about .line', {
    opacity: 0.3,
    duration: 0.9,
    ease: 'power1.out',
    stagger: 0.1,
    scrollTrigger: {
      trigger: '.text-about',
      start: 'top 80%', // Active l'animation plus tôt
      end: 'bottom top',
      scrub: false,
    },
  });

  gsap.to(".bg", {
    inset: "0px",
    duration: 0.1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".bg",
      start: "top bottom",
      end: "bottom top",
      scrub: 1,
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
    A full-stack developer, UI designer, and tech enthusiast navigating the digital universe 🌍.
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
    <img src="../assets/imgs/beach.webp" class="w-100 img-fluid parallax-img position-relative" alt="Beach">
  </section>
  <section class="position-relative">
    <div class="bg"></div>
    <section class="container mt-5 ">
      <h3 class="text-uppercase pb-5 text-center portfolio-text">My Journey into Web Development </h3>
    </section>
    <section class="px-5  text-center">
      <p class="fw-bold fs-1 text-uppercase text-about animate">
        I started my journey in tech by modding games like GTA San Andreas and exploring Linux,
        where I experimented with hacking Wi-Fi passwords back when WEP security was weak.
        My real introduction to coding came at university when a friend showed me Arduino,
        but I quickly gravitated toward web development. I began with HTML, CSS,
        then pursued formal studies in computer science and web development, learning Python, C.
        While I liked problem-solving, I quickly realized I wanted to build real applications rather than focus on pure theory.
        Through internships and freelance work,
        I gained hands-on experience, eventually specializing in Java (Spring Boot),
        Angular, VueJs, and UI/UX design. Today, I focus on building scalable applications while constantly improving my
        skills.
      </p>
      <div class="py-5 text-uppercase portfolio-text">
        <h3 class="">My stack <span> —</span></h3>
        <p class="fw-bold fs-1 text-uppercase">Java / PHP / Spring boot / Angular / VueJs / Gsap </p>
      </div>
    </section>
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

h3{
  font-size: 9vw;
  color: var(--text-color-1);
  font-weight: 200;
  letter-spacing: -10px;
}

.text-about{
    letter-spacing: -1px;
    line-height: 38px;
}

.bg {
  position: absolute;
  background: #ffd436;
  display: block;
  opacity: 1;
  z-index: -1;
  inset: 50px;
}

span{
  color: #4C60E6;
}



</style>
