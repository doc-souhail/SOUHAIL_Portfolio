<script setup>
import Banner from "@/components/Banner.vue";


import { ref, onMounted, onUnmounted } from "vue";
import gsap from "gsap";

const preview = ref(null);
const previewImg = ref(null);

const projects = [
  { id: "p1", name: "Quickeeeer", location: "Bordeaux", category: "CMS", year: "2025", img: "Quickeeeer.png" },
  { id: "p2", name: "Bunto", location: "Bordeaux", category: "CMS", year: "2025", img: "Webflow.png" },
  { id: "p3", name: "Bloggy", location: "Paris", category: "API", year: "2024", img: "Quickeeeer.png" },
];

let isInside = false;
let projectElements = [];

const movePreview = (e) => {
  const mouseInside = isMouseInsideContainer(e);

  if (mouseInside !== isInside) {
    isInside = mouseInside;
    gsap.to(preview.value, { scale: isInside ? 1 : 0, duration: 0.3 });
  }

  preview.value.style.left = `${e.pageX - 125}px`;
  preview.value.style.top = `${e.pageY - 125}px`;
};

const updatePreviewImage = (img) => {
  gsap.to(previewImg.value, { opacity: 0, duration: 0.2, onComplete: () => {
      previewImg.value.style.backgroundImage = `url('/ImgProjects/${img}')`; // Chemin correct
      gsap.to(previewImg.value, { opacity: 1, duration: 0.3 });
    }});
};

const isMouseInsideContainer = (e) => {
  const containerRect = document.querySelector(".projects").getBoundingClientRect();
  return e.clientX >= containerRect.left &&
      e.clientX <= containerRect.right &&
      e.clientY >= containerRect.top &&
      e.clientY <= containerRect.bottom;
};

onMounted(() => {
  projectElements = Array.from(document.querySelectorAll(".project"));
  projectElements.forEach((project, index) => {
    project.addEventListener("mouseenter", () => updatePreviewImage(projects[index].img));
  });

  window.addEventListener("mousemove", movePreview);
});

onUnmounted(() => {
  window.removeEventListener("mousemove", movePreview);
  projectElements.forEach((project) => {
    project.removeEventListener("mouseenter", updatePreviewImage);
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
  <div class="container">
    <div ref="preview" class="preview">
      <div ref="previewImg" class="preview-img"></div>
    </div>

    <div class="container my-5">
      <div class="projects">
        <div class="project header">
          <div class="client"><p>Project</p></div>
          <div class="location"><p>Location</p></div>
          <div class="service"><p>Category</p></div>
          <div class="year"><p>Year</p></div>
        </div>

        <div v-for="project in projects" :key="project.id" class="project">
          <div class="client"><p>{{ project.name }}</p></div>
          <div class="location"><p>{{ project.location }}</p></div>
          <div class="service"><p>{{ project.category }}</p></div>
          <div class="year"><p>{{ project.year }}</p></div>
        </div>
      </div>
    </div>
  </div>
</template>

<Footer/>



<style>
.preview {
  position: absolute;
  width: 250px;
  height: 250px;
  overflow: hidden;
  pointer-events: none;
  transform-origin: center;
  transform: scale(0);
  z-index: 2;
  border-radius: 10px;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.2);
}

.preview-img {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  transition: opacity 0.3s ease-in-out;
}

p {
  font-size: 14px;
  text-transform: uppercase;
  line-height: 100%;
}

.header p {
  opacity: 0.5;
}

.container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.projects {
  width: 70%;
  display: flex;
  flex-direction: column;
}

.project {
  width: 100%;
  padding: 2.5em 1em;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
}

.project:hover {
  background-color: rgba(0, 0, 0, 0.05);
}

.project > div {
  flex: 3;
}

.project div:last-child {
  flex: 1;
}

@media (max-width: 900px) {
  .location, .service {
    display: none;
  }
}

</style>
