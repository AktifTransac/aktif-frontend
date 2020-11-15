<template>
  <div>
    <Presentation></Presentation>
    <NewGoods></NewGoods>
    <Estimation></Estimation>
  </div>
</template>

<script>
import Presentation from '@/components/Agence/Presentation'
import NewGoods from '@/components/NewGoods'
import Estimation from '@/components/Estimation'

export default {
  scrollToTop: true,
  components: {
    Presentation,
    NewGoods,
    Estimation,
  },
  async fetch({ store }) {
    if (!store.state.goods.length) {
      await store.dispatch('getGoods')
    }
  },
  head() {
    return {
      title: `${this.$t('links.agency')} - Aktif Transac`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('meta.agency'),
        },
      ],
    }
  },
}
</script>
