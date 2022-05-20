<template>
  <section class="articles">
    <article>
      <h1>My Articles</h1>
      <section v-for="(header, index) in headers" :key="header">
        <h2 :id="index">{{ header }}</h2>
        <p>
          There are many variations of passages of Lorem Ipsum available, but the majority have
          suffered alteration in some form, by injected humour, or randomised words which don't look
          even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be
          sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum
          generators on the Internet tend to repeat predefined chunks as necessary, making this the
          first true generator on the Internet. It uses a dictionary of over 200 Latin words,
          combined with a handful of model sentence structures, to generate Lorem Ipsum which looks
          reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected
          humour, or non-characteristic words etc. There are many variations of passages of Lorem
          Ipsum available, but the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable. If you are going to
          use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden
          in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat
          predefined chunks as necessary, making this the first true generator on the Internet. It
          uses a dictionary of over 200 Latin words, combined with a handful of model sentence
          structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is
          therefore always free from repetition, injected humour, or non-characteristic words etc.
        </p>
      </section>
    </article>
    <aside>
      <div>
        <a
          v-for="(header, index) in headers"
          :key="header"
          :href="`#${index}`"
          :class="{ active: index == currentSection }"
        >
          {{ header }}
        </a>
      </div>
    </aside>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const headers = ['Section 1', 'Section 2', 'How this works', 'Placeholder', 'Section 5']
const currentSection = ref('')

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
          currentSection.value = entry.target.getAttribute('id')
        }
      })
    },
    {
      rootMargin: '0px 0px -70% 0px',
    },
  )

  document.querySelectorAll('article h2').forEach((section) => {
    observer.observe(section)
  })
})
</script>

<style scoped>
section.articles {
  display: flex;
}

article {
  width: 75%;
}

aside {
  width: 25%;
}

aside > div {
  position: fixed;
  padding-left: 3em;
}

aside > div > a {
  display: block;
  color: #2c3e50;
  text-decoration: none;
  border-left: 1px solid #ccc;
  padding-left: 2em;
}

aside a.active {
  font-weight: bold;
  border-color: black;
}
</style>
