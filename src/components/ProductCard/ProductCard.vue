<template>
  <div class="product-card">
    <div class="product-header">
      <div v-if="sale" class="sale-badge">
        <span class="sale-dot"></span> ON SALE
      </div>
      <div v-else class="stock-badge">
        <span class="stock-dot"></span> IN STOCK
      </div>
      
      <div class="in-stock-label">
        In stock
      </div>
      
      <div class="quantity-selector">
        <div class="quantity-value">1</div>
        <div class="quantity-arrows">
          <button class="arrow-up"><i class="fas fa-chevron-up"></i></button>
          <button class="arrow-down"><i class="fas fa-chevron-down"></i></button>
        </div>
      </div>
    </div>
    
    <div class="product-image-container">
      <img :src="mainImage" alt="img" class="product-image-preview">
    </div>
    
    <div class="product-info">
      <h3 class="product-title">{{ titleGame }}</h3>
      
      <div class="product-price">
        <span v-if="price !== null && price !== 1" class="current-price">
          ${{ price.toFixed(2) }}
        </span>
        <span v-if="originalPrice !== null && originalPrice !== 1" class="original-price">
          ${{ originalPrice.toFixed(2) }}
        </span>
      </div>
      
      <p class="product-description">
        Lorem ipsum dolor sit amet consetetur sadipscing elitr.
      </p>
    </div>
    
    <div class="product-footer">
      <button class="details-button">DETAILS</button>
      <button class="add-button">
        ADD <i class="fas fa-shopping-cart"></i>
      </button>
    </div>
    
    <div class="game-badge">
      <span class="text-game">
        <img :src="icon" alt="" class="icon-game">
      </span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  sale: {
    type: Boolean,
    default: false
  },
  price: {
    type: Number,
    default: null
  },
  originalPrice: {
    type: Number,
    default: null 
  },
  mainImage: String,
  icon: String,
  titleGame: String,
});
</script>

<style scoped src="./ProductCard.scss" lang="scss"></style>