<template>
  <article id="calculette">
    <Emprunt :selected="selected" @selected="selected = 'emprunt'"></Emprunt>
    <Remboursement
      :selected="selected"
      @selected="selected = 'remboursement'"
    ></Remboursement>
    <Mensualite
      :selected="selected"
      @selected="selected = 'mensualite'"
    ></Mensualite>
    <Loyer :selected="selected" @selected="selected = 'loyer'"></Loyer>
  </article>
</template>

<script>
import Emprunt from './Emprunt'
import Loyer from './Loyer'
import Mensualite from './Mensualite'
import Remboursement from './Remboursement'
export default {
  components: {
    Emprunt,
    Loyer,
    Remboursement,
    Mensualite,
  },
  data() {
    return {
      selected: '',
    }
  },
}
</script>

<style
  scoped
  lang="scss"
  src="@/assets/styles/components/Calculettes.scss"
></style>
