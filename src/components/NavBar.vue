<script setup>
import { ref, watch, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import gsap from "gsap";

const marqueeTextNav =
    ref("ILLUSTRATION • PHP • UI DESIGN • VUE.JS  • WEB DEVELOPMENT • JAVA • WEB DEVELOPMENT • CREATIVE • ANGULAR • ");

onMounted(() => {

  const container = document.querySelector(".marquee-inner-nav");

  container.innerHTML += container.innerHTML;

  gsap.to(container, {
    x: "-50%",
    duration: 60,
    ease: "linear",
    repeat: -1
  });
});

const isModalOpen = ref(false);
const route = useRoute();

const toggleModal = () => {
  isModalOpen.value = !isModalOpen.value;
};

const closeModal = () => {
  isModalOpen.value = false;
};

watch(route, () => {
  isModalOpen.value = false;
});
</script>
<template>
  <div class="marqueeNav">
    <div class="marquee-inner-nav">
      {{ marqueeTextNav }}
    </div>
  </div>
  <nav class="container">
    <ul class="d-flex justify-content-between align-items-center ps-0 pt-3 mb-0">
      <li class="logo__name position-relative">
        <span class="time text-nowrap" id="date"></span>
        <router-link class="hover__link__white" to="/">
          <img src="../assets/imgs/noun-happy-face-6015012.svg" alt="smily-face">
        </router-link>
      </li>
      <li @click="toggleModal" class="menu__burger">
        <img src="../assets/imgs/Menu.svg" alt="menu-icon">
      </li>
    </ul>
  </nav>

  <div
      v-show="isModalOpen"
      class="menu__modale ps-5 pe-5 rounded-3 d-flex flex-column justify-content-between"
      :class="{ 'active_modale': isModalOpen }"
  >
    <div class="modale_body pt-5">
      <ul class="p-0">
        <li class="pb-2">
          <router-link class="hover__link__white text-capitalize" to="/" @click="closeModal"><span class="pe-2">1</span>
            HOME
          </router-link>
        </li>
        <li class="pb-2">
          <router-link class="hover__link__white text-capitalize" to="/about" @click="closeModal"><span>2</span> ABOUT
          </router-link>
        </li>
        <li class="pb-2">
          <router-link class="hover__link__white text-capitalize" to="/works" @click="closeModal"><span>3</span> WORKS
          </router-link>
        </li>
        <li class="pb-2">
          <router-link class="hover__link__white text-capitalize" to="/contact" @click="closeModal"><span>4</span>
             CONTACT</router-link>
        </li>
      </ul>
    </div>
    <div class="modale_footer pb-3 d-flex justify-content-between align-items-center">
      <div>
        <p class="mb-0">souhail888@hotmail.com</p>
        <p>@moooore__protein</p>
      </div>
      <div>
        <div class="text-capitalize">Software Developer & UI Designer 🫡</div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.hover__link__white span{
  font-family: "zora", sans-serif;
  font-size: 45px;
}


.menu__burger {
  width: 50px;
  position: relative;
  z-index: 1000;
}
.logo__name {
  width: 60px;
}


.time {
  position: absolute;
  left: 80px;
  top: 20px;
  font-size: 13px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.menu__modale {
  z-index: 10000;
  background-color: var(--secondary-color);
  color: var(--primary-color);
  width: 60vw;
  height: auto;
  position: absolute;
  right: 180px;
  top: 20px;
  transform: translateY(-20px);
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.5s ease, transform 0.5s ease, visibility 0.5s ease;
}

.menu__modale.active_modale {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.modale_body ul li a {
  font-size: 55px;
}

.modale_footer {
  text-transform: lowercase;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  letter-spacing: 0;
  font-size: 13px;
}

@keyframes morph1 {
  0% {
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  }

  50% {
    border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
  }

  100% {
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  }
}

@keyframes morph2 {
  0% {
    border-radius: 53% 47% 43% 57% / 51% 39% 61% 49%;
  }

  50% {
    border-radius: 60% 70% 40% 70% / 40% 50% 60% 30% ;
  }

  100% {
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  }
}


.marqueeNav {
  width: 100%;
  overflow: hidden;
  color: white;
  background: black;
  font-size: 25px;
  font-weight: lighter;
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


</style>
