<template>
  <div class="md:max-w-xl md:mx-auto mt-10 px-4 md:px-0">
    <div class="shadow-lg p-6 rounded">
      <h1 class="mb-4 text-lg font-bold">
        <span v-if="$store.edit">Edit</span>
        <span v-else>Add</span>
        Recipe
      </h1>
      <label class="block">
        <span class="text-gray-700">Name</span>
        <input
          v-model="name"
          class="rounded border border-gray-300 px-3 py-2 w-full mt-1"
          placeholder="Example"
        />
      </label>
      <label class="block mt-4">
        <span class="text-gray-700">Image Url</span>
        <input
          v-model="imageUrl"
          class="rounded border border-gray-300 px-3 py-2 w-full mt-1"
          placeholder="image url"
        />
      </label>
      <label class="block mt-4">
        <span class="text-gray-700">Ingredients</span>
        <vue-editor class="mt-1" v-model="ingredients"></vue-editor>
      </label>
      <label class="block mt-4">
        <span class="text-gray-700">Directions</span>
        <vue-editor class="mt-1" v-model="directions"></vue-editor>
      </label>
      <button
        @click="handleSubmit"
        class="
          mt-4
          px-4
          py-2
          text-sm
          font-semibold
          text-gray-900
          bg-gray-200
          rounded
          focus:outline-none
          focus:shadow-outline
        "
      >
        Submit
      </button>
    </div>
  </div>
</template>

<script>
import { VueEditor } from "vue2-editor";

export default {
  components: {
    VueEditor,
  },
  data() {
    return {
      name: "",
      imageUrl: "",
      ingredients: "",
      directions: "",
    };
  },
  created() {
    if (this.$store.recipe && this.$store.edit) {
      this.id = this.$store.recipe.id;
      this.name = this.$store.recipe.name;
      this.imageUrl = this.$store.recipe.imageUrl;
      this.ingredients = this.$store.recipe.ingredients;
      this.directions = this.$store.recipe.directions;
    }
  },
  methods: {
    handleSubmit() {
      if (this.$store.edit) {
        let index = this.$store.recipes.indexOf(this.$store.recipe);
        this.$actions.editRecipe(index, {
          id: this.$store.recipe.id,
          name: this.name,
          imageUrl: this.imageUrl,
          ingredients: this.ingredients,
          directions: this.directions,
        });
      } else {
        this.$actions.addRecipe({
          id: this.$store.recipes.length + 1,
          name: this.name,
          imageUrl: this.imageUrl,
          ingredients: this.ingredients,
          directions: this.directions,
        });
      }
      this.$actions.setPage("");
    },
  },
};
</script>
