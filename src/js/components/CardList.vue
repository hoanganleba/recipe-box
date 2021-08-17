<template>
  <div
    class="container px-4 md:px-0 mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-20"
  >
    <div v-for="(item, index) in data" :key="index">
      <Card :name="item.name" :description="item.description" />
    </div>
  </div>
</template>

<script>
import Card from "./Card.vue";

export default {
  components: {
    Card,
  },
  data() {
      return {
        data: JSON.parse(localStorage.getItem("data"))
      };
    },
};
</script>

<style></style>
