<script setup>
import "./scss/app.scss";
import Header from "@/components/Header.vue";
import Home from "@/pages/Home.vue";
import NotFound from "@/pages/NotFound.vue";


</script>

<template>
  <div class="wrapper">
    <Header/>
    <div class="content">
      <div class="container">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
