<template>
  <div class="mt-6">
    <h3 class="text-lg font-semibold mb-2">Weather History</h3>
    <table class="table-auto w-full text-left border-collapse">
      <thead class="bg-gray-100">
        <tr>
          <th class="p-2">Date</th>
          <th class="p-2">Temp (°C)</th>
          <th class="p-2">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="entry in history" :key="entry.date" class="border-b">
          <td class="p-2">{{ entry.date }}</td>
          <td class="p-2">{{ entry.temperature }}</td>
          <td class="p-2 capitalize">{{ entry.description }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
defineProps(['history']);
</script>