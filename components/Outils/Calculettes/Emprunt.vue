<template>
  <div
    :class="[selected === 'emprunt' ? 'calculs selected' : 'calculs']"
    @click="select"
  >
    <h3>Vous souhaitez calculer votre capacité d’emprunt</h3>
    <aside v-show="selected === 'emprunt'">
      <p>Emprunt</p>
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
