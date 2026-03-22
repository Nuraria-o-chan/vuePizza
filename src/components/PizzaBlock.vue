<script setup>
import pizza from "../assets/pizzaImg.jpg"
import {ref} from "vue";

const {title, types, sizes, price, category, rating} = defineProps(['title', 'types', 'sizes', 'price']);
const typeArr = ['тонкое', 'традиционное'];
const counter = ref(0);
const activeSize = ref(0);
const activeType = ref(0);
const setActiveSize = (idx) => {
  activeSize.value = idx
}
const setActiveType = (idx) => {
  activeType.value = idx;
}


</script>

<template>
  <div class="pizza-block">
    <img
        class="pizza-block__image"
        :src="pizza"
        alt="Pizza"
    />
    <h4 class="pizza-block__title">{{ title }}</h4>
    <div class="pizza-block__selector">
      <ul>
        <li @click="setActiveType(type)" v-for="(type) in types" :class="{active: activeType === type}">
          {{ typeArr[type] }}
        </li>
      </ul>
      <ul>
        <li @click="setActiveSize(idx)" v-for="(size, idx) in sizes" :key="idx" :class="{active: activeSize === idx }">
          {{ size }}
        </li>
      </ul>
    </div>
    <div class="pizza-block__bottom">
      <div class="pizza-block__price">от {{ price }} ₽</div>
      <div @click="counter++" class="button button--outline button--add">
        <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
          <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
          />
        </svg>
        <span>Добавить</span>
        <i>{{ counter }}</i>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>