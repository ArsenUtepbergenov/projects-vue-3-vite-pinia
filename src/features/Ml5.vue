<template>
  <div class="mt-2 flex">
    <input type="color" name="color" value="#e66465" @change="colorPicked" />
    <label for="color" class="ml-2">Color</label>
  </div>
  <div class="mt-2 text-2xl">{{ colorLabel }}</div>
</template>

<script setup>
import { computed } from 'vue'
import * as useMl5 from '@/hooks/useMl5'
import data from '@/data/color-ish.json'
import { convertToRgb } from '@/utils/convertToRgb'

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

function colorPicked(event) {
  const hexCode = event.target.value.substring(1, 7)
  const input = convertToRgb(hexCode)
  console.log(input)
  useMl5.classify(input)
}
</script>
