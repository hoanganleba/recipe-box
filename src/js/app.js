import Vue from "vue";
import App from "./App.vue";

const store = Vue.observable({
  page: "",
  recipes: [],
  recipe: {},
  edit: false,
});

const actions = {
  setEdit(edit) {
    store.edit = edit;
  },
  setPage(page) {
    store.page = page;
  },
  getRecipes() {
    if (localStorage.hasOwnProperty("recipes")) {
      store.recipes = JSON.parse(localStorage.getItem("recipes"));
    }
  },
  getRecipe(item) {
    store.recipe = item;
  },
  editRecipe(editedIndex, editedItem) {
    Object.assign(store.recipes[editedIndex], editedItem)
    localStorage.setItem("recipes", JSON.stringify(store.recipes));
    alert("Edited Successfully");
  },
  deleteRecipe(item) {
    let index = store.recipes.indexOf(item);
    store.recipes.splice(index, 1);
    localStorage.setItem("recipes", JSON.stringify(store.recipes));
  },
  addRecipe(item) {
    if (localStorage.hasOwnProperty("recipes")) {
      store.recipes = JSON.parse(localStorage.getItem("recipes"));
      store.recipes.push(item);
      localStorage.setItem("recipes", JSON.stringify(store.recipes));
      alert("Added Successfully");
    } else {
      store.recipes.push(item);
      localStorage.setItem("recipes", JSON.stringify(store.recipes));
      alert("Added Successfully");
    }
  },
};

Vue.prototype.$store = store;
Vue.prototype.$actions = actions;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
