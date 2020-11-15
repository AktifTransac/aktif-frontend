<template>
  <div>
    <section id="contact" class="container">
      <h2>{{ $t('contact.title') }}</h2>
      <p v-show="error">{{ error }}</p>
      <form @submit.prevent="handleSubmit">
        <input v-model="name" type="text" :placeholder="$t('contact.name')" />
        <input v-model="mail" type="mail" :placeholder="$t('contact.mail')" />
        <input v-model="phone" type="tel" :placeholder="$t('contact.phone')" />
        <fieldset>
          <label>{{ $t('contact.request.title') }}</label>
          <select id="project-select" v-model="project" name="project">
            <option value="Achat de biens">
              {{ $t('contact.request.purchase') }}
            </option>
            <option value="Location">{{ $t('contact.request.rental') }}</option>
            <option value="Gestion">
              {{ $t('contact.request.management') }}
            </option>
            <option value="Autre">{{ $t('contact.request.other') }}</option>
          </select>
        </fieldset>
        <fieldset>
          <label for="infos">{{ $t('contact.supp') }}</label>
          <textarea v-model="infos" name="infos" rows="10"></textarea>
        </fieldset>

        <input
          type="submit"
          :value="sended ? $t('contact.sended') : $t('contact.btn')"
        />
      </form>
    </section>
    <section>
      <p>Ventes</p>
      <article>
        <img
          :src="
            'https://api.aktif-transac.com/data/6993-01-' +
            lastSale.NO_ASP._cdata +
            '-a' +
            '.jpg'
          "
          :alt="lastSale.TEXTE_FR._cdata"
          @error="setFallbackImageUrl"
        />
        <aside>
          <h3>
            {{ goodsType(lastSale.TYPE_OFFRE._cdata) }}
            <span> {{ surface(lastSale) }} m² </span>
          </h3>
          <p>{{ prix(lastSale) }}</p>
          <nav>
            <nuxt-link
              :to="'/biens/' + lastSale.NO_DOSSIER._cdata"
              class="btn-biens"
              >{{ $t('goods.btn') }}</nuxt-link
            >
            <svg
              v-show="!likes.includes(lastSale.NO_DOSSIER._cdata)"
              aria-hidden="true"
              focusable="false"
              data-prefix="far"
              data-icon="heart"
              class="svg-inline--fa fa-heart fa-w-16"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              @click="like(lastSale.NO_DOSSIER._cdata)"
            >
              <path
                fill="#FC5555"
                d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"
              ></path>
            </svg>
            <svg
              v-show="likes.includes(lastSale.NO_DOSSIER._cdata)"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="heart"
              class="svg-inline--fa fa-heart fa-w-16"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              @click="dislike(lastSale.NO_DOSSIER._cdata)"
            >
              <path
                fill="#FC5555"
                d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"
              ></path>
            </svg>
          </nav>
        </aside>
      </article>
      <p>Locations</p>
      <article>
        <img
          :src="
            'https://api.aktif-transac.com/data/6993-01-' +
            lastRent.NO_ASP._cdata +
            '-a' +
            '.jpg'
          "
          onerror="this.onerror=null;this.src='https://api.aktif-transac.com/assets/logo.png';"
          :alt="lastRent.TEXTE_FR._cdata"
        />
        <aside>
          <h3>
            {{ goodsType(lastRent.TYPE_OFFRE._cdata) }}
            <span> {{ surface(lastRent) }} m² </span>
          </h3>
          <p>{{ prix(lastRent) }}</p>
          <nav>
            <nuxt-link
              :to="'/biens/' + lastRent.NO_DOSSIER._cdata"
              class="btn-biens"
              >{{ $t('goods.btn') }}</nuxt-link
            >
            <svg
              v-show="!likes.includes(lastRent.NO_DOSSIER._cdata)"
              aria-hidden="true"
              focusable="false"
              data-prefix="far"
              data-icon="heart"
              class="svg-inline--fa fa-heart fa-w-16"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              @click="like(lastRent.NO_DOSSIER._cdata)"
            >
              <path
                fill="#FC5555"
                d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"
              ></path>
            </svg>
            <svg
              v-show="likes.includes(lastRent.NO_DOSSIER._cdata)"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="heart"
              class="svg-inline--fa fa-heart fa-w-16"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              @click="dislike(lastRent.NO_DOSSIER._cdata)"
            >
              <path
                fill="#FC5555"
                d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"
              ></path>
            </svg>
          </nav>
        </aside>
      </article>
    </section>
  </div>
</template>

<script>
export default {
  scrollToTop: true,
  async fetch({ store }) {
    if (!store.state.goods.length) {
      await store.dispatch('getGoods')
    }
  },
  data() {
    return {
      sended: false,
      error: '',
      name: '',
      mail: '',
      phone: '',
      project: 'Achat de biens',
      infos: '',
    }
  },
  computed: {
    lastSale() {
      return this.$store.getters.lastSale
    },
    lastRent() {
      return this.$store.getters.lastRent
    },
    likes() {
      return this.$store.getters.likes
    },
  },
  mounted() {
    if (this.$cookies.isKey('likes') && !this.$store.state.likes.length) {
      this.$store.commit('setLikes')
    }
  },
  methods: {
    setFallbackImageUrl(event) {
      event.target.src = require('~/assets/images/logo.png')
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
    like(dossier) {
      this.$store.commit('like', dossier)
    },
    dislike(dossier) {
      this.$store.commit('dislike', dossier)
    },
    handleSubmit() {
      const headers = {
        'Content-Type': 'application/json',
      }

      const data = {
        name: this.name,
        mail: this.mail,
        phone: this.phone,
        type: this.project,
        message: this.infos,
      }

      if (!this.name || !this.mail) {
        return (this.error = this.$t('contact.error'))
      } else {
        return this.$axios
          .$post(`https://api.aktif-transac.com/contact`, data, {
            headers,
          })
          .then((response) => {
            if (response.text === 'Mail envoyé') {
              this.sended = !this.sended
              this.error = ''
              setTimeout(() => {
                this.sended = !this.sended
              }, 3000)
            }
          })
      }
    },
  },
  head() {
    return {
      title: `${this.$t('links.contact')} - Aktif Transac`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('meta.contact'),
        },
      ],
    }
  },
}
</script>

<style
  scoped
  lang="scss"
  src="~/assets/styles/pages/Contact/Contact.scss"
></style>
