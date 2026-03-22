<script setup>
import "./scss/app.scss";
import Header from "@/components/Header.vue";
import Sort from "@/components/Sort.vue";
import PizzaBlock from "@/components/PizzaBlock.vue";
import Category from "@/components/Category.vue";
import pizzas from "@/assets/pizza.json"
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
