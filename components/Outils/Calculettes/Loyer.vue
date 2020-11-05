<template>
  <div
    :class="[selected === 'loyer' ? 'calculs selected' : 'calculs']"
    @click="select"
  >
    <h3>Vous souhaitez calculer le montant de votre loyer</h3>
    <aside v-show="selected === 'loyer'">
      <p>Loyer</p>
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
