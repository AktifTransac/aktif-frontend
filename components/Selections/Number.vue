<template>
  <h3 class="container">Vos biens sélectionnés : {{ numberoflikes }}</h3>
</template>

<script>
export default {
  computed: {
    numberoflikes() {
      return this.$store.getters.numberOfLikes
    },
  },
  mounted() {
    if (this.$cookies.isKey('likes') && !this.$store.state.likes.length) {
      this.$store.commit('setLikes')
    }
  },
}
</script>

<style
  scoped
  lang="scss"
  src="@/assets/styles/pages/Selections/Number.scss"
></style>
