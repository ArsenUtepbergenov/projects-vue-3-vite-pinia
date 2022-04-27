<template>
  <section class="page">
    <h1>Home</h1>
    <p>Name: {{ userStore.name }}</p>
    <p>Full: {{ userStore.firstAndLastName }}</p>
    <!-- <Suspense>
      <template #default>
        <ProfileCard />
      </template>
      <template #fallback>
        <ProfileCardSkeleton />
      </template>
    </Suspense> -->
  </section>
</template>

<script setup>
import { useUserStore } from '@/stores/user'
const userStore = useUserStore()
// import ProfileCard from '@/components/Cards/ProfileCard.vue'
// import ProfileCardSkeleton from '@/components/Cards/ProfileCardSkeleton.vue'
</script>
