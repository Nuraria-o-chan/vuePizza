<script setup>
import "./scss/app.scss";
import Header from "@/components/Header.vue";
import Sort from "@/components/Sort.vue";
import PizzaBlock from "@/components/PizzaBlock.vue";
import Category from "@/components/Category.vue";

/*import pizzas from "@/assets/pizza.json"*/
import {instance} from "./axios.config.js"
import {onMounted, ref} from "vue";

const pizzas = ref(null);
// url get request
// https://69c123ff085e1a9fae402aed.mockapi.io/pizzas

const getPizzas = async () => {
  const res = await  instance.get('/')
  return pizzas.value = res.data;
}

onMounted(getPizzas);


</script>

<template>
  <div class="wrapper">
    <Header/>
    <div class="content">
      <div class="container">
        <div class="content__top">
          <Category/>
          <Sort />
        </div>
        <h2 class="content__title">Все пиццы</h2>
        <div class="content__items">
          <PizzaBlock v-bind="pizza" v-for="pizza in pizzas" :key="pizza.id" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
