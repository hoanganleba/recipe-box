<template>
  <div
    class="
      container
      mt-10
      mx-auto
      grid grid-cols-1
      md:grid-cols-2
      gap-20
      px-4
      md:px-0
    "
  >
    <div>
      <img
        class="w-full"
        :src="recipe.imageUrl"
        :alt="recipe.name"
      />
      <button
        class="
          px-4
          py-2
          text-sm
          font-semibold
          text-gray-900
          bg-gray-200
          rounded
          mt-4
          hover:text-gray-900
          focus:text-gray-900
          hover:bg-gray-200
          focus:bg-gray-200
          focus:outline-none
          focus:shadow-outline
        "
        @click="editRecipe"
      >
        Edit Recipe
      </button>
      <button
        class="
          px-4
          py-2
          text-sm
          font-semibold
          text-red-900
          bg-red-200
          rounded
          mt-4
          focus:outline-none
          focus:shadow-outline
        "
        @click="deleteRecipe"
      >
        Delete Recipe
      </button>
    </div>
    <div>
      <h1 class="text-2xl font-bold mb-6">{{ recipe.name }}</h1>
      <label class="text-lg font-bold">Ingredients</label>
      <div class="mt-1 mb-3" v-html="recipe.ingredients"></div>
      <label class="text-lg font-bold">Directions</label>
      <div class="mt-1" v-html="recipe.directions"></div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
      recipe() {
          return this.$store.recipe
      }
  },
  methods: {
    deleteRecipe() {
      if (confirm("Do you want to delete")) {
        this.$actions.deleteRecipe(this.data);
        this.$actions.setPage("");
      }
    },
    editRecipe() {
        this.$actions.setPage("addRecipe");
        this.$actions.setEdit(true);
    }
  },
};
</script>
