<template>
  <h1 class="font-extrabold text-3xl mb-6">Home</h1>
  <p class="mb-6">Name in store is: {{ name }}</p>
  <input v-model="newName" type="text" class="p-2 mr-4 border border-gray-600 rounded" />
  <button @click="saveName" class="p-2 text-white bg-indigo-600 rounded">Submit</button>

  <div class="mt-2 flex">
    <input type="color" name="color" value="#e66465" @change="colorPicked" />
    <label for="color" class="ml-2">Color</label>
  </div>
  <div class="mt-2 text-2xl">
    {{ colorLabel }}
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

import * as useMl5 from '../useMl5'
import data from '../data/color-ish.json'
import { convertToRgb } from '../convertToRgb'

useMl5.init(data)

setTimeout(() => {
  useMl5.classify({
    r: 255,
    g: 0,
    b: 0,
  })
}, 2000)

const colorLabel = computed(() => {
  return useMl5.colorLabel.value
})

const store = useStore()
const router = useRouter()

const name = computed(() => {
  return store.state.user.name
})

const newName = ref('')

function colorPicked(event) {
  const hexCode = event.target.value.substring(1, 7)
  const input = convertToRgb(hexCode)
  console.log(input)
  useMl5.classify(input)
}

function saveName() {
  store.dispatch('saveName', newName.value)
  newName.value = ''
  router.push('/about')
}
</script>
