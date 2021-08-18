<template>
  <div
    class="
      container
      px-4
      md:px-0
      mx-auto
      mt-10
      grid grid-cols-1
      md:grid-cols-2
      xl:grid-cols-3
      gap-20
    "
  >
    <div v-for="(item, index) in recipes" :key="index">
      <Card @click.native="getRecipe(item)" :item="item" />
    </div>
  </div>
</template>

<script>
import Card from "./Card.vue";

export default {
  components: {
    Card,
  },
  created() {
    this.$actions.getRecipes();
  },
  computed: {
    recipes() {
      return this.$store.recipes;
    },
  },
  methods: {
    getRecipe(item) {
      this.$actions.getRecipe(item);
      this.$actions.setPage("detail");
    },
  },
};
</script>

