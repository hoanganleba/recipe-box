<template>
  <div class="rounded overflow-hidden shadow-lg">
    <img
      class="w-full"
      src="https://www.inspiredtaste.net/wp-content/uploads/2019/11/Homemade-Apple-Pie-From-Scratch-1200.jpg"
      alt="Mountain"
    />
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">{{ name }}</div>
      <p class="text-gray-700 text-base">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["name", "description"],
};
</script>

<style></style>
