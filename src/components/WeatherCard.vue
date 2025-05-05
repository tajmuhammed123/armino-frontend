<template>
  <div class="bg-orange-100 p-6 rounded-2xl shadow-md w-full max-w-sm mx-auto">
    <h2 class="text-lg mb-2">Today</h2>
    <div class="flex items-center justify-between">
      <div>
        <p class="text-5xl font-bold">{{ weather.temperature }}°</p>
        <p class="text-md capitalize">{{ weather.description }}</p>
        <p class="text-sm text-gray-600">{{ weather.city }}</p>
        <p class="text-sm text-gray-600">Feels like {{ weather.feels_like }}° | Sunset: {{ weather.sunset }}</p>
      </div>
      <img :src="`http://openweathermap.org/img/wn/${weather.icon}@2x.png`" alt="icon" />
    </div>
  </div>
</template>

<script setup>
defineProps(['weather']);
</script>