<template>
  <div>
    <nav class="flex container mx-auto items-center px-4 md:px-0 py-4">
      <div
        @click="backToMenu"
        class="text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline"
      >
        Recipe Box
      </div>
      <button
        @click="openAddRecipeForm"
        class="ml-auto px-4 py-2 text-sm font-semibold text-gray-900 bg-gray-200 rounded md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
      >
        Add Recipe
      </button>
    </nav>
    <div v-if="addRecipe">
      <Form />
    </div>
    <div v-else>
      <CardList />
    </div>
  </div>
</template>

<script>
import CardList from "./components/CardList.vue";
import Form from "./components/Form.vue";

export default {
  components: {
    CardList,
    Form,
  },
  data() {
    return {
      addRecipe: false,
    };
  },
  methods: {
    openAddRecipeForm() {
      this.addRecipe = true;
    },
    backToMenu() {
      this.addRecipe = false;
    },
  },
};
</script>
