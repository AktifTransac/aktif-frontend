<template>
  <div>
    <Single :bien="bien"></Single>
  </div>
</template>

<script>
import Single from '@/components/Goods/Single'
export default {
  scrollToTop: true,
  layout: 'bien',
  components: {
    Single,
  },
  async fetch({ store }) {
    if (!store.state.goods.length) {
      await store.dispatch('getGoods')
    }
  },
  computed: {
    bien() {
      return this.$store.getters.single(this.$route.params.id)
    },
  },
}
</script>

<style></style>
