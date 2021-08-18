<template>
  <div class="rounded overflow-hidden shadow-lg">
    <img class="w-full" :src="item.imageUrl" :alt="item.name" />
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">{{ item.name }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["item"],
};
</script>
