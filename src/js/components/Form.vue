<template>
  <div class="md:max-w-xl md:mx-auto mt-10 px-4 md:px-0">
    <div class="shadow-lg p-6 rounded">
      <h1 class="mb-4 text-lg font-bold">Add Recipe</h1>
      <label class="block">
        <span class="text-gray-700">Name</span>
        <input
          v-model="name"
          class="rounded border border-gray-300 px-3 py-2 w-full mt-1"
          placeholder="Example"
        />
      </label>
      <label class="block mt-4">
        <span class="text-gray-700">Description</span>
        <textarea
          v-model="description"
          class="border border-gray-300 px-3 py-2 w-full rounded mt-1"
          rows="3"
          placeholder="Enter some Description."
        ></textarea>
      </label>
      <label class="block mt-4">
        <span class="text-gray-700">Recipe</span>
        <vue-editor class="mt-1" v-model="recipe"></vue-editor>
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
          dark-mode:bg-gray-700
          dark-mode:hover:bg-gray-600
          dark-mode:focus:bg-gray-600
          dark-mode:focus:text-white
          dark-mode:hover:text-white
          dark-mode:text-gray-200
          hover:text-gray-900
          focus:text-gray-900
          hover:bg-gray-200
          focus:bg-gray-200
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
      data: [],
      name: "",
      description: "",
      recipe: "",
    };
  },
  methods: {
    handleSubmit() {
      if (localStorage.hasOwnProperty("data")) {
        let data = JSON.parse(localStorage.getItem("data"));
        data.push({
          id: data.length + 1,
          name: this.name,
          description: this.description,
          recipe: this.recipe,
        });
        localStorage.setItem("data", JSON.stringify(data));
        alert("Added Successfully");
      } else {
        this.data.push({
          id: this.data.length + 1,
          name: this.name,
          description: this.description,
          recipe: this.recipe,
        });
        localStorage.setItem("data", JSON.stringify(this.data));
        alert("Added Successfully");
      }
    },
  },
};
</script>

<style></style>
