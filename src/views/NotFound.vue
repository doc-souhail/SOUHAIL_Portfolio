<script setup>

</script>

<template>
  <div class="not-found">
    <h1>RIP</h1>
    <p>The page you are looking for does not exist.</p>
    <router-link to="/">Go back to Home</router-link>
  </div>
</template>

<style scoped>
.not-found {
  text-align: center;
  margin-top: 100px;
}
h1 {
  font-size: 2rem;
  color: red;
}
p {
  font-size: 1.2rem;
}
</style>