<template>
  <section id="goods">
    <article class="container">
      <div v-for="(bien, i) in displayed" :key="i">
        <img src="~/assets/images/test.jpg" alt="test" />
        <div>
          <h3>
            {{ goodsType(bien.TYPE_OFFRE._cdata) }}
            <span> {{ surface(bien) }} m² </span>
          </h3>
          <p>{{ prix(bien) }}</p>
          <div>
            <nuxt-link
              :to="'/biens/' + bien.NO_DOSSIER._cdata"
              class="btn-biens"
              >Découvrir</nuxt-link
            >
            <svg
              v-show="!likes.includes(bien.NO_DOSSIER._cdata)"
              aria-hidden="true"
              focusable="false"
              data-prefix="far"
              data-icon="heart"
              class="svg-inline--fa fa-heart fa-w-16"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              @click="like(bien.NO_DOSSIER._cdata)"
            >
              <path
                fill="currentColor"
                d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"
              ></path>
            </svg>
            <svg
              v-show="likes.includes(bien.NO_DOSSIER._cdata)"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="heart"
              class="svg-inline--fa fa-heart fa-w-16"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              @click="dislike(bien.NO_DOSSIER._cdata)"
            >
              <path
                fill="currentColor"
                d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </article>
    <article class="container">
      <nav :class="[page > 1 ? 'active' : '']" @click="previousPage">
        <svg
          width="61"
          height="8"
          viewBox="0 0 61 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.646442 3.64644C0.45118 3.8417 0.451179 4.15829 0.646442 4.35355L3.82842 7.53553C4.02369 7.73079 4.34027 7.73079 4.53553 7.53553C4.73079 7.34027 4.73079 7.02368 4.53553 6.82842L1.7071 3.99999L4.53553 1.17157C4.73079 0.976306 4.73079 0.659723 4.53553 0.464461C4.34027 0.269199 4.02369 0.269199 3.82842 0.464461L0.646442 3.64644ZM61 3.5L0.999996 3.49999L0.999996 4.49999L61 4.5L61 3.5Z"
          />
        </svg>
        Précédent
      </nav>
      <nav :class="[page < nbPages ? 'active' : '']" @click="nextPage">
        Suivant
        <svg
          width="61"
          height="8"
          viewBox="0 0 61 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M60.3536 4.35355C60.5488 4.15829 60.5488 3.84171 60.3536 3.64645L57.1716 0.464466C56.9763 0.269204 56.6597 0.269204 56.4645 0.464466C56.2692 0.659728 56.2692 0.976311 56.4645 1.17157L59.2929 4L56.4645 6.82843C56.2692 7.02369 56.2692 7.34027 56.4645 7.53553C56.6597 7.7308 56.9763 7.7308 57.1716 7.53553L60.3536 4.35355ZM0 4.5H60V3.5H0V4.5Z"
          />
        </svg>
      </nav>
    </article>
    <p>Page {{ page }} / {{ nbPages }}</p>
  </section>
</template>

<script>
import cookie from 'vue-cookies'

export default {
  props: {
    filteredgoods: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      page: 1,
      goods: this.$store.getters.goodsLiked.slice(),
      likes: [],
    }
  },
  computed: {
    itemsByPage() {
      return 6
    },
    displayed() {
      return this.filteredgoods.slice(
        this.page * this.itemsByPage - this.itemsByPage,
        this.page * this.itemsByPage
      )
    },
    nbPages() {
      const nb = (this.filteredgoods.length / this.itemsByPage).toFixed()
      if (nb < 1) {
        return 1
      } else {
        return nb
      }
    },
  },
  updated() {
    if (this.page > this.nbPages) {
      this.page = 1
    }
  },
  mounted() {
    if (this.$cookies.isKey('likes')) {
      this.$store.commit('setLikes')
      this.likes = JSON.parse(cookie.get('likes'))
    }
  },
  methods: {
    nextPage() {
      if (this.page + 1 <= this.nbPages) {
        location.hash = '#filters'
        this.page++
      }
    },
    previousPage() {
      if (this.page - 1 >= 1) {
        // location.hash = '#filters'
        this.page--
      }
    },
    goodsType(offer) {
      if (offer === '1' || offer === '11') {
        return `Appartement`
      } else if (offer === '2' || offer === '12') {
        return 'Maison'
      } else if (offer === '3') {
        return 'Terrain'
      } else if (offer === '4') {
        return 'Immeuble'
      } else if (offer === '5' || offer === '13') {
        return 'Local'
      } else if (offer === '6') {
        return 'FDC'
      } else if (offer === '7' || offer === '14') {
        return 'Parking'
      }
    },
    prix(bien) {
      switch (bien.TYPE_OFFRE._cdata) {
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
          return bien.PRIX._cdata + ' €'
        case '11':
        case '12':
        case '13':
        case '14':
          return bien.LOYER._cdata + '€ / mois'
      }
    },
    surface(bien) {
      if (bien.TYPE_OFFRE._cdata === '6') {
        return String(parseFloat(bien.SURFACEPROFESSIONNELLE._cdata).toFixed())
      } else {
        return String(parseFloat(bien.SURF_HAB._cdata).toFixed())
      }
    },
    like(dossier) {
      if (!cookie.isKey('likes')) {
        const cookies = []
        cookies.push(dossier)
        cookie.set('likes', JSON.stringify(cookies))
        this.likes = JSON.parse(cookie.get('likes'))
      } else {
        const cookies = JSON.parse(cookie.get('likes'))
        cookies.push(dossier)
        cookie.set('likes', JSON.stringify(cookies))
        this.likes = JSON.parse(cookie.get('likes'))
      }
    },
    dislike(dossier) {
      const cookies = JSON.parse(cookie.get('likes'))
      const index = cookies.findIndex((el) => el === dossier)
      cookies.splice(index, 1)
      if (cookies.length === 0) {
        cookie.remove('likes')
        this.likes = []
      } else {
        cookie.set('likes', JSON.stringify(cookies))
        this.likes = JSON.parse(cookie.get('likes'))
      }
    },
  },
}
</script>

<style scoped lang="scss" src="@/assets/styles/pages/Goods/Goods.scss"></style>
