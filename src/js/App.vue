<template>
  <div>
    <nav class="flex container mx-auto items-center px-4 md:px-0 py-4">
      <div
        @click="backToMenu"
        class="
          text-lg
          font-semibold
          tracking-widest
          text-gray-900
          uppercase
          rounded-lg
          dark-mode:text-white
          focus:outline-none
          focus:shadow-outline
        "
      >
        Recipe Box
      </div>
      <button
        @click="addRecipe"
        class="
          ml-auto
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
        Add Recipe
      </button>
    </nav>
    <div v-if="page === 'addRecipe'">
      <Form />
    </div>
    <div v-else-if="page === 'detail'">
      <Detail />
    </div>
    <div v-else>
      <CardList />
    </div>
  </div>
</template>

<script>
import CardList from "./components/CardList.vue";
import Form from "./components/Form.vue";
import Detail from "./components/Detail.vue";

export default {
  components: {
    CardList,
    Form,
    Detail,
  },
  computed: {
    page() {
      return this.$store.page;
    },
  },
  methods: {
    addRecipe() {
      this.$actions.setPage("addRecipe");
      this.$actions.setEdit(false);
    },
    backToMenu() {
      this.$actions.setPage("");
    },
  },
};
</script>
