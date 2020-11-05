<template>
  <div>
    <NewGoods></NewGoods>
    <Gestion></Gestion>
    <Estimation></Estimation>
    <Agence></Agence>
    <Outils></Outils>
  </div>
</template>

<script>
import NewGoods from '@/components/NewGoods'
import Gestion from '@/components/Home/Gestion'
import Estimation from '@/components/Estimation'
import Agence from '@/components/Home/Agence'
import Outils from '@/components/Home/Outils'

export default {
  layout: 'home',
  components: {
    NewGoods,
    Gestion,
    Estimation,
    Agence,
    Outils,
  },
  async fetch({ store }) {
    if (!store.state.goods.length) {
      await store.dispatch('getGoods')
    }
  },
}
</script>
