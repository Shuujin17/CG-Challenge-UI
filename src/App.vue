<template>
  <div class="app">
    <NavBar />
    <main class="main-content">
      <div class="hero-section">
        <h1>Condimentum consectetur</h1>
        <FiltersSection />
        <div class="results-header">
          <p class="results-count">Showing 20 - from 135</p>
          <div class="sort-container">
            <img src="../src/assets/img/search.png">
            <div class="sort-group">
              <span class="sort-label">Sort by</span>
              <div class="sort-button">Featured</div>
            </div>
            <i class="fas fa-chevron-down icon-arrow"></i>
          </div>
        </div>

        <div class="products-grid">
          <ProductCard 
            v-for="(product, index) in products" 
            :key="index" 
            :sale="index % 3 === 0"
            :titleGame="product.titleGame" 
            :price="product.price" 
            :original-price="product.otherPrice"
            :main-image="product.mainImage" 
            :icon="product.icon" 
          />
        </div>

        <Pagination :current-page="1" :total-pages="11" />
      </div>
    </main>
    <FooterSection />
  </div>
</template>

<script src="./App.js"></script>
<style scoped src="./App.scss" lang="scss"></style>