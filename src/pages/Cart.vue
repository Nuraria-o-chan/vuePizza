<script setup>
import pizzaCart from "../assets/pizzaCart.png"
import plus from "../assets/icons/Group 36.svg"
import minus from "../assets/icons/Group 35.svg"
import cancel from "../assets/icons/Group 36 (1).svg"
</script>

<template>
  <div class="cart__item">
    <div class="cart__item-img">
      <img
          class="pizza-block__image"
          :src="pizzaCart"
          alt="Pizza"
      />
    </div>
    <div class="cart__item-info">
      <h3>Сырный цыпленок</h3>
      <p>тонкое тесто, 26 см.</p>
    </div>
    <div class="cart__item-count">
      <div class="button button--outline button--circle cart__item-count-minus">
        <img
            class="pizza-block__image"
            :src="plus"
            alt="plus"
        />
      </div>
      <b>2</b>
      <div class="button button--outline button--circle cart__item-count-plus">
        <img
            class="pizza-block__image"
            :src="minus"
            alt="minus"
        />
      </div>
    </div>
    <div class="cart__item-price">
      <b>770 ₽</b>
    </div>
    <div class="cart__item-remove">
      <div class="button button--outline button--circle">
        <img
            class="pizza-block__image"
            :src="cancel"
            alt="cancel"
        />
      </div>
    </div>
  </div>

  <div class="cart__item">
    <div class="cart__item-img">
      <img
          class="pizza-block__image"
          :src="pizzaCart"
          alt="Pizza"
      />
    </div>
    <div class="cart__item-info">
      <h3>Сырный цыпленок</h3>
      <p>тонкое тесто, 26 см.</p>
    </div>
    <div class="cart__item-count">
      <div class="button button--outline button--circle cart__item-count-minus">
        <img
            class="pizza-block__image"
            :src="plus"
            alt="plus"
        />
      </div>
      <b>2</b>
      <div class="button button--outline button--circle cart__item-count-plus">
        <img
            class="pizza-block__image"
            :src="minus"
            alt="minus"
        />
      </div>
    </div>
    <div class="cart__item-price">
      <b>770 ₽</b>
    </div>
    <div class="cart__item-remove">
      <div class="button button--outline button--circle">
        <img
            class="pizza-block__image"
            :src="cancel"
            alt="cancel"
        />
      </div>
    </div>
  </div>

  <div class="cart__item">
    <div class="cart__item-img">
      <img
          class="pizza-block__image"
          :src="pizzaCart"
          alt="Pizza"
      />
    </div>
    <div class="cart__item-info">
      <h3>Сырный цыпленок</h3>
      <p>тонкое тесто, 26 см.</p>
    </div>
    <div class="cart__item-count">
      <div class="button button--outline button--circle cart__item-count-minus">
        <img
            class="pizza-block__image"
            :src="plus"
            alt="plus"
        />
      </div>
      <b>2</b>
      <div class="button button--outline button--circle cart__item-count-plus">
        <img
            class="pizza-block__image"
            :src="minus"
            alt="minus"
        />
      </div>
    </div>
    <div class="cart__item-price">
      <b>770 ₽</b>
    </div>
    <div class="cart__item-remove">
      <div class="button button--outline button--circle">
        <img
            class="pizza-block__image"
            :src="cancel"
            alt="cancel"
        />
      </div>
    </div>
  </div>


</template>

<style scoped lang="scss">

</style>