<script setup>
import {RouterView, useRouter} from 'vue-router'
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";

import { ref, onMounted } from "vue";
import LoadingOverlay from "@/components/LoadingOverlay.vue";

const router = useRouter();
const loadingOverlay = ref(null);

onMounted(() => {
  loadingOverlay.value.show();
  setTimeout(() => {
    loadingOverlay.value.hide();
  }, 1000);
});

</script>

<template>
  <LoadingOverlay ref="loadingOverlay" />
  <NavBar/>
  <Transition :name="$route.meta.transition" mode="out-in">
    <RouterView />
  </Transition>
  <Footer v-if="$route.meta.showFooter" />
</template>

<style scoped>
/* Transition zoom */
.zoom-enter-active, .zoom-leave-active {
  transition: transform 0.5s ease-in-out;
}
.zoom-enter-from {
  transform: scale(0.8);
}
.zoom-leave-to {
  transform: scale(1.2);
}
</style>
