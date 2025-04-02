<template>
  <div class="pagination">
    <button class="pagination-button prev">
      &lt;
    </button>

    <div class="pagination-pages">
      <button
        v-for="page in pages"
        :key="page"
        :class="['pagination-button', { active: page === currentPage }]"
        @click="goToPage(page)"
      >
        {{ page }}
      </button>
      <span class="pagination-ellipsis" v-if="showEllipsis">...</span>
      <button
        v-if="showLastPage"
        class="pagination-button"
        @click="goToPage(totalPages)"
      >
        {{ totalPages }}
      </button>
    </div>

    <button class="pagination-button next">
      &gt;
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPage: 1,
      totalPages: 11,
      pages: [1, 2, 3, 4], 
      showEllipsis: true,
      showLastPage: true,
    };
  },
  methods: {
    goToPage(page) {
      this.currentPage = page;
    },
  },
};
</script>

<style scoped src="./Pagination.scss" lang="scss"></style>