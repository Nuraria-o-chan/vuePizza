<script setup>
import Sort from "@/components/Sort.vue";
import PizzaBlock from "@/components/PizzaBlock.vue";
import Category from "@/components/Category.vue";
import {instance} from "../axios.config.js"
import {onMounted, ref} from "vue";
import Header from "@/components/Header.vue";

const pizzas = ref(null);
const isLoading = ref(false);
const errors = ref(null);
// url get request
// https://69c123ff085e1a9fae402aed.mockapi.io/pizzas

const getPizzas = async () => {
  try {
    isLoading.value = true;
    const res = await instance.get('/')
    return pizzas.value = res.data;
  } catch (error) {
    errors.value = `Произошла ошибка ${error.status} во время загрузки контента, повторите позже.`;
    setTimeout(() => {
      errors.value = '';
    }, 2000)
  } finally {
    isLoading.value = false;
  }
}

onMounted(getPizzas);
</script>

<template>
  <div class="content__top">
    <Category/>
    <Sort/>
  </div>
  <h2 class="content__title">Все пиццы</h2>
  <div class="content__items">
    <PizzaBlock v-if="isLoading===false" v-bind="pizza" v-for="pizza in pizzas" :key="pizza.id"/>
    <div v-else>Loading</div>
  </div>
</template>

<style scoped lang="scss">

</style>