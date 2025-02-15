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
  <RouterView />
  <Footer v-if="$route.meta.showFooter" />
</template>

<style scoped>

</style>
