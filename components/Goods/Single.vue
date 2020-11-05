<template>
  <section id="single" class="container">
    <article>
      <h3>
        {{ goodsType(bien) }}
        <span> {{ surface(bien) }} m² </span>
      </h3>
    </article>
    <article>
      <img src="~/assets/images/test.jpg" alt="test" />
      <aside>
        <img src="~/assets/images/test.jpg" alt="test" />
        <img src="~/assets/images/test.jpg" alt="test" />
        <img src="~/assets/images/test.jpg" alt="test" />
        <img src="~/assets/images/test.jpg" alt="test" />
        <img src="~/assets/images/test.jpg" alt="test" />
      </aside>
    </article>
    <article>
      <h4>Description</h4>
      <p>{{ bien.TEXTE_FR._cdata }}</p>
    </article>
    <article>
      <aside>
        <h4>Lieu</h4>
        <h3>{{ lieu(bien) }}</h3>
      </aside>
      <aside>
        <h4>Prix</h4>
        <h3>{{ prix(bien) }}</h3>
      </aside>
    </article>
    <article>
      <h4>Partagez le bien :</h4>
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        @click="fbShare"
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
        @click="mailShare"
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
    </article>
    <article>
      <form>
        <fieldset>
          <div>
            <label>Nom & Prenom*</label>
            <input v-model="name" type="text" />
          </div>
          <div>
            <label>Numéros de téléphone</label>
            <input v-model="phone" type="tel" />
          </div>
          <div>
            <label>Adresse mail*</label>
            <input v-model="mail" type="mail" />
          </div>
          <div>
            <label>Vos préférences</label>
            <div>
              <!-- <span> -->
              <select v-model="pref.day">
                <option value="Lundi">Lundi</option>
                <option value="Mardi">Mardi</option>
                <option value="Mercredi">Mercredi</option>
                <option value="Jeudi">Jeudi</option>
                <option value="Vendredi">Vendredi</option>
              </select>
              <!-- </span> -->
              <!-- <span> -->
              <select v-model="pref.time">
                <option value="Matin">Matin</option>
                <option value="Après-midi">Après-midi</option>
              </select>
              <!-- </span> -->
            </div>
          </div>
          <div>
            <label>Choix</label>
            <div>
              <button
                :class="[choix.visite ? 'selected' : '']"
                @click.prevent="choix.visite = !choix.visite"
              >
                Visite du bien
              </button>
              <button
                :class="[choix.details ? 'selected' : '']"
                @click.prevent="choix.details = !choix.details"
              >
                Plus de détails
              </button>
              <button
                :class="[choix.rappel ? 'selected' : '']"
                @click.prevent="choix.rappel = !choix.rappel"
              >
                Être rappelé(e)
              </button>
            </div>
          </div>
        </fieldset>
        <input type="submit" value="Faire une demande" />
      </form>
    </article>
  </section>
</template>

<script>
export default {
  scrollToTop: true,
  props: {
    bien: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },
  data() {
    return {
      name: '',
      phone: '',
      mail: '',
      pref: {
        day: 'Lundi',
        time: 'Matin',
      },
      choix: {
        visite: false,
        details: false,
        rappel: false,
      },
    }
  },
  methods: {
    goodsType(offer) {
      if (offer.TYPE_OFFRE._cdata === '1' || offer.TYPE_OFFRE._cdata === '11') {
        return `Appartement`
      } else if (
        offer.TYPE_OFFRE._cdata === '2' ||
        offer.TYPE_OFFRE._cdata === '12'
      ) {
        return 'Maison'
      } else if (offer.TYPE_OFFRE._cdata === '3') {
        return 'Terrain'
      } else if (offer.TYPE_OFFRE._cdata === '4') {
        return 'Immeuble'
      } else if (
        offer.TYPE_OFFRE._cdata === '5' ||
        offer.TYPE_OFFRE._cdata === '13'
      ) {
        return 'Local'
      } else if (offer.TYPE_OFFRE._cdata === '6') {
        return 'FDC'
      } else if (
        offer.TYPE_OFFRE._cdata === '7' ||
        offer.TYPE_OFFRE._cdata === '14'
      ) {
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
    lieu(bien) {
      if (bien.VILLE_OFFRE || bien.VILLE_AGENCE) {
        const lieu = bien.VILLE_OFFRE._cdata || bien.VILLE_AGENCE._cdata
        return lieu.charAt(0) + lieu.substring(1).toLowerCase()
      }
    },
    like(dossier) {
      this.$store.commit('like', dossier)
    },
    dislike(dossier) {
      this.$store.commit('dislike', dossier)
    },
    fbShare() {
      window.open(
        'https://www.facebook.com/sharer/sharer.php?u=' + location.href,
        '_blank'
      )
    },
    mailShare() {
      const email = ''
      const subject = 'Un bien a ne pas rater chez Aktif-Transac !'
      const emailBody = `Regarde le super bien que je viens de trouver chez Aktif-Transac ! ${location.href}`
      window.open(
        `mailto:${email}?subject=${subject}&body=${emailBody}`,
        '_blank'
      )
    },
  },
}
</script>

<style scoped lang="scss" src="@/assets/styles/pages/Goods/Single.scss"></style>
