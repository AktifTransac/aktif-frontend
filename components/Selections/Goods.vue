<template>
  <section id="goods">
    <article class="container">
      <div v-for="(bien, i) in displayed" :key="i">
        <div>
          <img
            :src="
              'https://api.aktif-transac.com/data/6993-01-' +
              bien.NO_ASP._cdata +
              '-a' +
              '.jpg'
            "
            :alt="bien.TEXTE_FR._cdata"
            @error="setFallbackImageUrl"
          />
          <aside>
            <h3>
              {{ goodsType(bien.TYPE_OFFRE._cdata) }}
              <span> {{ surface(bien) }} m² </span>
            </h3>
            <p>{{ prix(bien) }}</p>
            <div>
              <nuxt-link
                :to="'/biens/' + bien.NO_DOSSIER._cdata"
                class="btn-biens"
                >{{ $t('goods.btn') }}</nuxt-link
              >
              <span
                v-show="!likes.includes(bien.NO_DOSSIER._cdata)"
                @click="like(bien.NO_DOSSIER._cdata)"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="far"
                  data-icon="heart"
                  class="svg-inline--fa fa-heart fa-w-16"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#FC5555"
                    d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"
                  ></path>
                </svg>
              </span>
              <span
                v-show="likes.includes(bien.NO_DOSSIER._cdata)"
                @click="dislike(bien.NO_DOSSIER._cdata)"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="heart"
                  class="svg-inline--fa fa-heart fa-w-16"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    :fill="handleHeartColor"
                    d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"
                  ></path>
                </svg>
                <p>{{ $t('goods.selected') }}</p>
              </span>
            </div>
          </aside>
        </div>
        <aside>
          <h3>
            {{ goodsType(bien.TYPE_OFFRE._cdata) }}
            <span> {{ surface(bien) }} m² </span>
          </h3>
          <div>
            <p>{{ prix(bien) }}</p>
            <p>{{ surface(bien) }} m²</p>
            <p>{{ bien.NB_PIECES._cdata }} {{ $t('goods.rooms') }}</p>
          </div>
          <p>{{ description(bien) }}</p>
          <div>
            <nuxt-link :to="'/biens/' + bien.NO_DOSSIER._cdata" class="btn">
              {{ $t('goods.btn') }}
            </nuxt-link>
            <div>
              <h4>{{ $t('goods.share') }}</h4>
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                @click="fbShare(bien.NO_DOSSIER._cdata)"
              >
                <path
                  d="M28.3443 29.9999C29.2586 29.9999 30 29.2585 30 28.3441V1.65573C30 0.741204 29.2586 0 28.3443 0H1.65574C0.741094 0 0 0.741204 0 1.65573V28.3441C0 29.2585 0.741094 29.9999 1.65574 29.9999H28.3443Z"
                  fill="#395185"
                />
                <path
                  d="M20.6993 30.0004V18.3828H24.5989L25.1828 13.8552H20.6993V10.9644C20.6993 9.65354 21.0634 8.76022 22.9432 8.76022L25.3407 8.75916V4.70973C24.9259 4.65453 23.5028 4.53125 21.8471 4.53125C18.3903 4.53125 16.0239 6.64122 16.0239 10.5162V13.8552H12.1143V18.3828H16.0239V30.0004H20.6993Z"
                  fill="white"
                />
              </svg>
              <svg
                width="38"
                height="30"
                viewBox="0 0 38 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                @click="mailShare(bien.NO_DOSSIER._cdata)"
              >
                <path
                  d="M34.1998 0H7.59981C5.50411 0 3.7998 1.68186 3.7998 3.74997V13.1249H7.59981V7.49994L19.7598 16.4999C20.0888 16.743 20.4888 16.8744 20.8998 16.8744C21.3108 16.8744 21.7108 16.743 22.0398 16.4999L34.1998 7.49994V24.3748H18.9998V28.1248H34.1998C36.2955 28.1248 37.9998 26.4429 37.9998 24.3748V3.74997C37.9998 1.68186 36.2955 0 34.1998 0ZM20.8998 12.6562L8.86521 3.74997H32.9344L20.8998 12.6562Z"
                  fill="#FC5555"
                />
                <path
                  d="M0 15H13.3V18.75H0V15ZM3.8 20.625H15.2V24.375H3.8V20.625ZM9.5 26.2499H17.1V29.9999H9.5V26.2499Z"
                  fill="#FC5555"
                />
              </svg>
            </div>
          </div>
        </aside>
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
        {{ $t('goods.prev') }}
      </nav>
      <nav :class="[page < nbPages ? 'active' : '']" @click="nextPage">
        {{ $t('goods.next') }}
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
      <p>Page {{ page }} / {{ nbPages }}</p>
    </article>
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
    handleHeartColor() {
      if (process.client) {
        if (window.innerWidth >= 768) {
          return '#FCFCFC'
        } else {
          return '#FC5555'
        }
      } else {
        return '#FC5555'
      }
    },
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
      const nb = Math.ceil(this.filteredgoods.length / this.itemsByPage)
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
    setFallbackImageUrl(event) {
      event.target.src = require('~/assets/images/logo.png')
    },
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
        return this.$t('goods.apartment')
      } else if (offer === '2' || offer === '12') {
        return this.$t('goods.house')
      } else if (offer === '3') {
        return this.$t('goods.ground')
      } else if (offer === '4') {
        return this.$t('goods.building')
      } else if (offer === '5' || offer === '13') {
        return 'Local'
      } else if (offer === '6') {
        return 'FDC'
      } else if (offer === '7' || offer === '14') {
        return this.$t('goods.park')
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
    description(bien) {
      const truncated = []
      let numberOfChar = 140
      for (let i = 0; i <= numberOfChar; i++) {
        if (i === numberOfChar && bien.TEXTE_FR._cdata.charAt(i + 1) !== ' ') {
          numberOfChar++
        }
        truncated.push(bien.TEXTE_FR._cdata.charAt(i))
      }
      truncated.push('...')
      return truncated.join('')
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
    fbShare(dossier) {
      window.open(
        'https://www.facebook.com/sharer/sharer.php?u=https://aktif-transac.com/biens/' +
          dossier,
        '_blank'
      )
    },
    mailShare(dossier) {
      const email = ''
      const subject = 'Un bien a ne pas rater chez Aktif-Transac !'
      const emailBody = `Regarde le super bien que je viens de trouver chez Aktif-Transac ! https://aktif-transac.com/biens/${dossier}`
      window.open(
        `mailto:${email}?subject=${subject}&body=${emailBody}`,
        '_blank'
      )
    },
  },
}
</script>
<style
  scoped
  lang="scss"
  src="@/assets/styles/pages/Selections/Selections.scss"
></style>
