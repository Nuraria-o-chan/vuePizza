<script setup>
import {ref, watch} from "vue";

const categoryState = ref(0);
const setCategoryState = (idx) => {
  categoryState.value = idx
}
const categoryArr = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

</script>

<template>
  <div class="categories">
    <ul>
      <li v-for="(category, idx) in categoryArr" :key="idx" :class="{ active: categoryState === idx}"
          @click="setCategoryState(idx)">{{ category }}
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">

</style>