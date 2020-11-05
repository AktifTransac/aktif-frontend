<template>
  <div
    :class="[selected === 'remboursement' ? 'calculs selected' : 'calculs']"
    @click="select"
  >
    <h3>Vous souhaitez calculer la durée de vos remboursements</h3>
    <aside v-show="selected === 'remboursement'">
      <p>Remboursement</p>
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
