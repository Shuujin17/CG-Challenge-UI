<template>
    <div class="filters-container">
        <!-- Game Select Filter -->
        <div class="filter-item game-select">
            <div class="filter-content">
                <i class="fas fa-pen-fancy icon-sword"></i>
                <span class="filter-text">Select a game</span>
                <i class="fas fa-chevron-down icon-arrow"></i>
            </div>
        </div>

        <div class="search-container">
            <i class="fas fa-search search-icon"></i>
            <input type="text" placeholder="Search" class="search-input" />

            <div class="filter-item price-filter">
                <div class="filter-content">
                    <div class="filter-label-group">
                        <i class="fas fa-gem icon-gem"></i>
                        <div class="filter-label-content">
                            <span class="filter-label">Price</span>
                            <span class="filter-value">All</span>
                        </div>
                    </div>
                    <i class="fas fa-chevron-down icon-arrow"></i>
                </div>
            </div>

            <div class="filter-item type-filter">
                <div class="filter-content">
                    <div class="filter-label-group">
                        <i class="fas fa-leaf icon-leaf"></i>
                        <div class="filter-label-content">
                            <span class="filter-label">Item Type</span>
                            <span class="filter-value">All</span>
                        </div>
                    </div>
                    <i class="fas fa-chevron-down icon-arrow"></i>
                </div>
            </div>
        </div>

    </div>
</template>

<style scoped src="./FiltersSection.scss" lang="scss"></style>