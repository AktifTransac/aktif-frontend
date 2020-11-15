<template>
  <section id="outils">
    <article class="container">
      <h2>{{ $t('home.tools.title') }}</h2>
      <div>
        <input
          type="button"
          :value="$t('home.tools.subtitle.1')"
          :class="[selected === 'calculette' ? 'selected' : '']"
          @click="selected = 'calculette'"
        />
        <input
          type="button"
          :value="$t('home.tools.subtitle.2')"
          :class="[selected === 'loi' ? 'selected' : '']"
          @click="selected = 'loi'"
        />
        <input
          type="button"
          :value="$t('home.tools.subtitle.3')"
          :class="[selected === 'expertises' ? 'selected' : '']"
          @click="selected = 'expertises'"
        />
      </div>
    </article>
    <Calculettes v-show="selected === 'calculette'"></Calculettes>
    <LoiAlur v-show="selected === 'loi'"></LoiAlur>
    <Expertises v-show="selected === 'expertises'"></Expertises>
  </section>
</template>

<script>
import Calculettes from '~/components/Outils/Calculettes/Calculettes'
import LoiAlur from '~/components/Outils/LoiAlur/LoiAlur'
import Expertises from '~/components/Outils/Expertises/Expertises'
export default {
  components: {
    Calculettes,
    LoiAlur,
    Expertises,
  },
  data() {
    return {
      selected: 'calculette',
    }
  },
}
</script>

<style scoped lang="scss" src="@/assets/styles/components/Outils.scss"></style>
