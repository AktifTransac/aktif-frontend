<template>
  <div
    :class="[selected === 'mensualite' ? 'calculs selected' : 'calculs']"
    @click="select"
  >
    <h3>Vous souhaitez calculer le montant de votre mensualité</h3>
    <aside v-show="selected === 'mensualite'">
      <p>Mensualite</p>
    </aside>
  </div>
</template>

<script>
export default {
  props: {
    selected: {
      type: String,
      default: '',
    },
  },
  methods: {
    select() {
      this.$emit('selected')
    },
  },
}
</script>

<style
  scoped
  lang="scss"
  src="@/assets/styles/components/Calculettes.scss"
></style>
