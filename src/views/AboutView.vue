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


  gsap.from('.text-about .word', {
    opacity: 0.3,
    duration: 0.1,
    ease: 'power1.out',
    stagger: 0.1,
    scrollTrigger: {
      trigger: '.text-about',
      start: 'top center',
    },
  });

  // Animation du texte dans le portfolio pendant le scroll
  gsap.utils.toArray('.portfolio-text').forEach((textElement) => {
    gsap.from(textElement, {
      opacity: 0,
      y: 100, // Déplace le texte vers le bas avant qu'il n'apparaisse
      duration: 1.5,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: textElement,
        start: 'top bottom', // L'animation démarre lorsque l'élément atteint le bas de la fenêtre
        end: 'bottom top', // L'animation se termine lorsque l'élément atteint le haut de la fenêtre
        scrub: 1, // Cela synchronise l'animation avec le scroll
        once: true, // L'animation ne se répète pas
      },
    });
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
    <img src="../assets/imgs/beach.webp" class="w-100 img-fluid parallax-img" alt="Beach">
  </section>
  <section class="container mt-5">
    <div class="bg"></div>
    <h3 class="text-uppercase pb-5 text-center">My Journey into Web Development </h3>
  </section>
  <div class="px-5">
    <p class="text-center fw-bold fs-1 text-uppercase text-about animate">
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
  </div>

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



</style>