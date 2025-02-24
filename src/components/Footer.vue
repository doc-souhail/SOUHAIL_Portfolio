<script setup>
</script>

<template>

  <footer>
    <div class="box-1 mb-5">
      <div class="pe-0 me-0">
        <ul class="d-flex  justify-content-around py-5">
          <li><a class="footer_links p-2 rounded-2" href="https://www.linkedin.com/in/souhail-naji-3ba02726b/">LINKEDIN</a></li>
          <li><a class="footer_links p-2 rounded-2" href="https://github.com/doc-souhail">GITHUB</a></li>
          <li><a class="footer_links p-2 rounded-2" href="https://www.instagram.com/moooore__protein/">INSTAGRAM
          </a></li>
          <li><a class="footer_links p-2 rounded-2" href="#">DRIBBBLE</a></li>
          <li><a class="footer_links p-2 rounded-2" href="#">BEHANCE</a></li>
        </ul>
      </div>
      <div class="px-5">
        <p class="text-capitalize text-center mt-5">
          tu veux forger quelque chose contacte moi
        </p>
      </div>
    </div>
    <div class="droits text-center">
      <p>[Designé & Développé par Souhail Naji ©2025 Tous droits réservés]</p>
    </div>
  </footer>

</template>

<style scoped>


footer{
  width: 100vw;
  height: 100vh;
  background: var(--text-color-1);
  color: var(--text-color-2);
}

footer .box-1{
  max-width: 100%;
}

footer a{
  font-size: 14px;
  letter-spacing: -1px;
}

.footer_links{
  transition: background-color 0.3s ease-in;
}

footer p{
  font-size: 6vw;
  font-family: "zora", sans-serif;
}

.droits p{
  font-size: 14px;
  font-family: "nohemiRegular", sans-serif;
  text-transform: uppercase;
}




</style>