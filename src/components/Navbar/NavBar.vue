<template>
  <header class="navbar">
    <div class="navbar-container">
      <!-- Logo -->
      <div class="navbar-logo">
        <img src="https://chicksgold.com/logo/logo-footer.svg" alt="Chicks Gold Logo">
      </div>

      <!-- Navigation Menu -->
      <nav class="navbar-menu">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a href="#" class="nav-link">CURRENCY</a>
            <i class="fas fa-chevron-down icon-arrow"></i>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">ITEMS</a>
            <i class="fas fa-chevron-down icon-arrow"></i>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">ACCOUNTS</a>
            <i class="fas fa-chevron-down icon-arrow"></i>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">SERVICES</a>
            <i class="fas fa-chevron-down icon-arrow"></i>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">SWAP</a>
            <i class="fas fa-chevron-down icon-arrow"></i>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">SELL</a>
            <i class="fas fa-chevron-down icon-arrow"></i>
          </li>
        </ul>
      </nav>

      <!-- Right Actions -->
      <div class="navbar-actions">
        <!-- Currency Selector -->
        <div class="currency-selector">
          <span>USD</span>
          <i class="fas fa-chevron-down icon-arrow"></i>
        </div>

        <!-- Cart Button -->
        <div class="cart-button">
          <i class="fas fa-shopping-cart"></i>
          <span class="cart-text">CART (5)</span>
        </div>

        <!-- Sign In Button -->
        <button class="sign-in-button">
          SIGN IN
          <i class="fas fa-user"></i>
        </button>
      </div>

      <!-- Mobile Menu Toggle (Hidden in Desktop) -->
      <button class="mobile-menu-toggle">
        <span class="menu-icon">☰</span>
      </button>
    </div>
  </header>
</template>

<style scoped src="./Navbar.scss" lang="scss"></style>