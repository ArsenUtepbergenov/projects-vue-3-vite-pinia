<template>
  <div class="content">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/articles">Articles</router-link>
    <!-- <router-view v-slot="{ Component, route }">
      <transition
        :enter-active-class="route.meta.enterClass"
        :leave-active-class="route.meta.leaveClass"
      >
        <component :is="Component" />
      </transition>
    </router-view> -->
    <router-view />
  </div>
</template>

<style>
/* .page {
  position: absolute;
  top: 30px;
} */

.content {
  width: 40%;
  min-width: 500px;
  margin: 0 auto;
  position: relative;
}

a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  margin-right: 1em;
}

a:hover,
a.router-link-active {
  border-bottom: 2px solid #3498db;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-out;
}
</style>
