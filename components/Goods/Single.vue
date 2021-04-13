<template>
  <client-only>
    <section id="single" class="container">
      <nav>
        <nuxt-link to="/">{{ $t('links.home') }}</nuxt-link>
        <p>></p>
        <nuxt-link to="/biens">{{ $t('links.property') }}</nuxt-link>
        <p>></p>
        <p @click="redirectChoice(bien)">{{ offerType(bien) }}</p>
        <p>></p>
        <p @click="redirectProject(bien)">{{ goodsType(bien) }}</p>
        <p>></p>
        <p>{{ goodsType(bien) }} {{ surface(bien) }} m²</p>
      </nav>

      <article>
        <h3>
          {{ goodsType(bien) }}
          <span> {{ surface(bien) }} m² </span>
        </h3>
      </article>
      <article>
        <div>
          <img
            :src="
              bien.IMAGES.IMG.length
                ? bien.IMAGES.IMG[img]._text
                : bien.IMAGES.IMG._text
            "
            :alt="bien.INTITULE.FR._cdata"
            @error="setFallbackImageUrl"
          />
          <aside>
            <p>{{ page }}</p>
            <svg
              v-show="!likes.includes(bien.INFO_GENERALES.AFF_NUM._text)"
              aria-hidden="true"
              focusable="false"
              data-prefix="far"
              data-icon="heart"
              class="svg-inline--fa fa-heart fa-w-16"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              @click="like(bien.INFO_GENERALES.AFF_NUM._text)"
            >
              <path
                fill="#FC5555"
                d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"
              ></path>
            </svg>
            <svg
              v-show="likes.includes(bien.INFO_GENERALES.AFF_NUM._text)"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="heart"
              class="svg-inline--fa fa-heart fa-w-16"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              @click="dislike(bien.INFO_GENERALES.AFF_NUM._text)"
            >
              <path
                fill="#FC5555"
                d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"
              ></path>
            </svg>
          </aside>
        </div>
        <aside>
          <img
            v-if="images.a"
            :src="
              bien.IMAGES.IMG.length
                ? bien.IMAGES.IMG[0]._text
                : bien.IMAGES.IMG._text
            "
            :alt="bien.INTITULE.FR._cdata"
            @error="setFallbackImageUrl"
            @click="img = 0"
          />
          <img
            v-if="images.b"
            :src="bien.IMAGES.IMG[1]._text"
            :alt="bien.INTITULE.FR._cdata"
            @error="setFallbackImageUrl"
            @click="img = 1"
          />
          <img
            v-if="images.c"
            :src="bien.IMAGES.IMG[2]._text"
            :alt="bien.INTITULE.FR._cdata"
            @error="setFallbackImageUrl"
            @click="img = 2"
          />
          <img
            v-if="images.d"
            :src="bien.IMAGES.IMG[3]._text"
            :alt="bien.INTITULE.FR._cdata"
            @error="setFallbackImageUrl"
            @click="img = 3"
          />
          <img
            v-if="images.e"
            :src="bien.IMAGES.IMG[4]._text"
            :alt="bien.INTITULE.FR._cdata"
            @error="setFallbackImageUrl"
            @click="img = 4"
          />
        </aside>
      </article>
      <article>
        <h4>Description</h4>
        <p>{{ desc }}</p>
      </article>
      <article>
        <aside>
          <h4>{{ $t('goods.location') }}</h4>
          <h3>{{ lieu(bien) }}</h3>
        </aside>
        <aside>
          <h4>{{ $t('goods.price') }}</h4>
          <h3>{{ prix(bien) }}</h3>
        </aside>
        <aside>
          <h4>{{ $t('goods.area') }}</h4>
          <h3>{{ surface(bien) }} m²</h3>
        </aside>
        <aside v-show="pieces(bien) !== '0'">
          <h4>{{ $t('goods.rooms') }}</h4>
          <h3>
            {{ pieces(bien) }}
          </h3>
        </aside>
        <aside v-show="annee(bien) !== '0'">
          <h4>{{ $t('goods.year') }}</h4>
          <h3>
            {{ annee(bien) }}
          </h3>
        </aside>
        <aside v-show="terrasse(bien) !== '0'">
          <h4>{{ $t('goods.terrace') }}</h4>
          <h3>
            {{ terrasse(bien) }}
          </h3>
        </aside>
        <aside v-show="balcon(bien) !== '0'">
          <h4>{{ $t('goods.balcony') }}</h4>
          <h3>{{ balcon(bien) }}</h3>
        </aside>
        <aside v-show="jardin(bien) !== '0'">
          <h4>{{ $t('goods.garden') }}</h4>
          <h3>
            {{ jardin(bien) }}
            m²
          </h3>
        </aside>
      </article>
      <article>
        <h4>{{ $t('goods.share') }}</h4>
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
        <form @submit.prevent="handleSubmit">
          <p v-show="error" id="error">{{ error }}</p>
          <fieldset>
            <div>
              <label>{{ $t('goods.form.name') }}*</label>
              <input v-model="name" type="text" />
            </div>
            <div>
              <label>{{ $t('goods.form.phone') }}</label>
              <input v-model="phone" type="tel" />
            </div>
            <div>
              <label>{{ $t('goods.form.mail') }}*</label>
              <input v-model="mail" type="mail" />
            </div>
            <div>
              <label>{{ $t('goods.form.pref.title') }}</label>
              <div>
                <!-- <span> -->
                <select v-model="pref.day">
                  <option value="Lundi">
                    {{ $t('goods.form.pref.monday') }}
                  </option>
                  <option value="Mardi">
                    {{ $t('goods.form.pref.tuesday') }}
                  </option>
                  <option value="Mercredi">
                    {{ $t('goods.form.pref.wednesday') }}
                  </option>
                  <option value="Jeudi">
                    {{ $t('goods.form.pref.thursday') }}
                  </option>
                  <option value="Vendredi">
                    {{ $t('goods.form.pref.friday') }}
                  </option>
                </select>
                <!-- </span> -->
                <!-- <span> -->
                <select v-model="pref.time">
                  <option value="Matin">
                    {{ $t('goods.form.pref.morning') }}
                  </option>
                  <option value="Après-midi">
                    {{ $t('goods.form.pref.afternoon') }}
                  </option>
                </select>
                <!-- </span> -->
              </div>
            </div>
            <div>
              <label>{{ $t('goods.form.choice.title') }}</label>
              <div>
                <button
                  :class="[choix.visite ? 'selected' : '']"
                  @click.prevent="choix.visite = !choix.visite"
                >
                  {{ $t('goods.form.choice.1') }}
                </button>
                <button
                  :class="[choix.details ? 'selected' : '']"
                  @click.prevent="choix.details = !choix.details"
                >
                  {{ $t('goods.form.choice.2') }}
                </button>
                <button
                  :class="[choix.rappel ? 'selected' : '']"
                  @click.prevent="choix.rappel = !choix.rappel"
                >
                  {{ $t('goods.form.choice.3') }}
                </button>
              </div>
            </div>
          </fieldset>
          <p>{{ $t('goods.form.required') }}</p>
          <input
            type="submit"
            :value="sended ? $t('contact.sended') : $t('goods.form.btn')"
          />
        </form>
      </article>
    </section>
  </client-only>
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
      error: '',
      sended: false,
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
      img: 0,
      images: {
        a: false,
        b: false,
        c: false,
        d: false,
        e: false,
      },
      desc: '',
      filters: {
        choice: '',
        project: 'All',
        localization: '',
        budget: {
          min: '',
          max: '',
        },
        surface: {
          min: '',
          max: '',
        },
      },
    }
  },
  computed: {
    likes() {
      return this.$store.getters.likes
    },
    page() {
      return this.bien.IMAGES.IMG.length
        ? this.img + 1 + '/' + this.bien.IMAGES.IMG.length
        : 1 + '/' + 1
    },
  },
  async beforeMount() {
    if (this.$i18n.locale === 'en') {
      const { v4: uuidv4 } = require('uuid')
      const subscriptionKey = process.env.TRANSLATOR_SUBSCRIPTION_KEY
      const location = process.env.TRANSLATOR_REGION
      await this.$axios({
        method: 'post',
        url: `https://api.cognitive.microsofttranslator.com/translate`,
        headers: {
          'Ocp-Apim-Subscription-Key': subscriptionKey,
          'Ocp-Apim-Subscription-Region': location,
          'Content-type': 'application/json',
          'X-ClientTraceId': uuidv4().toString(),
        },
        params: {
          'api-version': '3.0',
          from: 'fr',
          to: ['en'],
        },
        data: [
          {
            text: this.bien.INTITULE.FR._cdata,
          },
        ],
        responseType: 'json',
      }).then((response) => {
        this.desc = response.data[0].translations[0].text
      })
    } else {
      this.desc = this.bien.COMMENTAIRES.FR._cdata
    }
    switch (this.bien.IMAGES.IMG.length) {
      case 2:
        this.images.a = true
        this.images.b = true
        break
      case 3:
        this.images.a = true
        this.images.b = true
        this.images.c = true
        break
      case 4:
        this.images.a = true
        this.images.b = true
        this.images.c = true
        this.images.d = true
        break
      case 5:
        this.images.a = true
        this.images.b = true
        this.images.c = true
        this.images.d = true
        this.images.e = true
        break
      default:
        this.images.a = true
    }
  },
  mounted() {
    if (this.$cookies.isKey('likes')) {
      this.$store.commit('setLikes')
    }
  },
  methods: {
    setFallbackImageUrl(event) {
      event.target.src = require('~/assets/images/logo.png')
    },
    offerType(bien) {
      if (bien.VENTE) {
        return this.$t('filters.benefit.sales')
      } else {
        return this.$t('filters.benefit.rentals')
      }
    },
    redirectChoice(bien) {
      if (bien.VENTE) {
        this.filters.choice = 'Ventes'
      } else {
        this.filters.choice = 'Locations'
      }
      return this.$router.push({
        path: '/biens',
        query: {
          choice: this.filters.choice,
          projet: this.filters.project,
          localization: this.filters.localization,
          budget: this.filters.budget,
          surface: this.filters.surface,
        },
      })
    },
    redirectProject(bien) {
      if (bien.APPARTEMENT) {
        this.filters.project = 'Appartement'
      } else if (bien.MAISON) {
        this.filters.project = 'Maison'
      } else if (bien.TERRAIN) {
        this.filters.project = 'Terrain'
      } else if (bien.IMMEUBLE) {
        this.filters.project = 'Immeuble'
      } else if (bien.LOCAL_PROFESSIONNEL) {
        this.filters.project = 'Local'
      } else if (bien.FOND_COMMERCE) {
        this.filters.project = 'FDC'
      } else if (bien.PARKING) {
        this.filters.project = 'Parking'
      }

      if (bien.VENTE) {
        this.filters.choice = 'Ventes'
      } else {
        this.filters.choice = 'Locations'
      }

      return this.$router.push({
        path: '/biens',
        query: {
          choice: this.filters.choice,
          projet: this.filters.project,
          localization: this.filters.localization,
          budget: this.filters.budget,
          surface: this.filters.surface,
        },
      })
    },
    goodsType(offer) {
      if (offer.APPARTEMENT) {
        return this.$t('goods.apartment')
      } else if (offer.MAISON) {
        return this.$t('goods.house')
      } else if (offer.TERRAIN) {
        return this.$t('goods.ground')
      } else if (offer.IMMEUBLE) {
        return this.$t('goods.building')
      } else if (offer.LOCAL_PROFESSIONNEL) {
        return 'Local'
      } else if (offer.FOND_COMMERCE) {
        return 'FDC'
      } else if (offer.PARKING) {
        return this.$t('goods.park')
      }
    },
    prix(bien) {
      if (bien.VENTE) {
        return String(parseFloat(bien.VENTE.PRIX._text).toFixed()) + ' €'
      } else {
        return (
          String(parseFloat(bien.LOCATION.LOYER._text).toFixed()) + '€ / mois'
        )
      }
    },
    surface(bien) {
      if (bien.APPARTEMENT) {
        if (bien.APPARTEMENT.SURFACE_CARREZ) {
          return String(
            parseFloat(bien.APPARTEMENT.SURFACE_CARREZ._text).toFixed()
          )
        } else if (bien.APPARTEMENT.SURFACE_COMMERCE) {
          return String(
            parseFloat(bien.APPARTEMENT.SURFACE_COMMERCE._text).toFixed()
          )
        } else if (bien.APPARTEMENT.SURFACE_HABITABLE) {
          return String(
            parseFloat(bien.APPARTEMENT.SURFACE_HABITABLE._text).toFixed()
          )
        } else if (bien.APPARTEMENT.SURFACE_SOL) {
          return String(
            parseFloat(bien.APPARTEMENT.SURFACE_SOL._text).toFixed()
          )
        }
      } else if (bien.MAISON) {
        if (bien.MAISON.SURFACE_CARREZ) {
          return String(parseFloat(bien.MAISON.SURFACE_CARREZ._text).toFixed())
        } else if (bien.MAISON.SURFACE_COMMERCE) {
          return String(
            parseFloat(bien.MAISON.SURFACE_COMMERCE._text).toFixed()
          )
        } else if (bien.MAISON.SURFACE_HABITABLE) {
          return String(
            parseFloat(bien.MAISON.SURFACE_HABITABLE._text).toFixed()
          )
        } else if (bien.MAISON.SURFACE_SOL) {
          return String(parseFloat(bien.MAISON.SURFACE_SOL._text).toFixed())
        }
      } else if (bien.TERRAIN) {
        if (bien.TERRAIN.SURFACE_CARREZ) {
          return String(parseFloat(bien.TERRAIN.SURFACE_CARREZ._text).toFixed())
        } else if (bien.TERRAIN.SURFACE_COMMERCE) {
          return String(
            parseFloat(bien.TERRAIN.SURFACE_COMMERCE._text).toFixed()
          )
        } else if (bien.TERRAIN.SURFACE_HABITABLE) {
          return String(
            parseFloat(bien.TERRAIN.SURFACE_HABITABLE._text).toFixed()
          )
        } else if (bien.TERRAIN.SURFACE_SOL) {
          return String(parseFloat(bien.TERRAIN.SURFACE_SOL._text).toFixed())
        }
      } else if (bien.IMMEUBLE) {
        if (bien.IMMEUBLE.SURFACE_CARREZ) {
          return String(
            parseFloat(bien.IMMEUBLE.SURFACE_CARREZ._text).toFixed()
          )
        } else if (bien.IMMEUBLE.SURFACE_COMMERCE) {
          return String(
            parseFloat(bien.IMMEUBLE.SURFACE_COMMERCE._text).toFixed()
          )
        } else if (bien.IMMEUBLE.SURFACE_HABITABLE) {
          return String(
            parseFloat(bien.IMMEUBLE.SURFACE_HABITABLE._text).toFixed()
          )
        } else if (bien.IMMEUBLE.SURFACE_SOL) {
          return String(parseFloat(bien.IMMEUBLE.SURFACE_SOL._text).toFixed())
        }
      } else if (bien.LOCAL_PROFESSIONNEL) {
        if (bien.LOCAL_PROFESSIONNEL.SURFACE_CARREZ) {
          return String(
            parseFloat(bien.LOCAL_PROFESSIONNEL.SURFACE_CARREZ._text).toFixed()
          )
        } else if (bien.LOCAL_PROFESSIONNEL.SURFACE_COMMERCE) {
          return String(
            parseFloat(
              bien.LOCAL_PROFESSIONNEL.SURFACE_COMMERCE._text
            ).toFixed()
          )
        } else if (bien.LOCAL_PROFESSIONNEL.SURFACE_HABITABLE) {
          return String(
            parseFloat(
              bien.LOCAL_PROFESSIONNEL.SURFACE_HABITABLE._text
            ).toFixed()
          )
        } else if (bien.LOCAL_PROFESSIONNEL.SURFACE_SOL) {
          return String(
            parseFloat(bien.LOCAL_PROFESSIONNEL.SURFACE_SOL._text).toFixed()
          )
        }
      } else if (bien.FOND_COMMERCE) {
        if (bien.FOND_COMMERCE.SURFACE_CARREZ) {
          return String(
            parseFloat(bien.FOND_COMMERCE.SURFACE_CARREZ._text).toFixed()
          )
        } else if (bien.FOND_COMMERCE.SURFACE_COMMERCE) {
          return String(
            parseFloat(bien.FOND_COMMERCE.SURFACE_COMMERCE._text).toFixed()
          )
        } else if (bien.FOND_COMMERCE.SURFACE_HABITABLE) {
          return String(
            parseFloat(bien.FOND_COMMERCE.SURFACE_HABITABLE._text).toFixed()
          )
        } else if (bien.FOND_COMMERCE.SURFACE_SOL) {
          return String(
            parseFloat(bien.FOND_COMMERCE.SURFACE_SOL._text).toFixed()
          )
        }
      } else if (bien.PARKING) {
        if (bien.PARKING.SURFACE_CARREZ) {
          return String(parseFloat(bien.PARKING.SURFACE_CARREZ._text).toFixed())
        } else if (bien.PARKING.SURFACE_COMMERCE) {
          return String(
            parseFloat(bien.PARKING.SURFACE_COMMERCE._text).toFixed()
          )
        } else if (bien.PARKING.SURFACE_HABITABLE) {
          return String(
            parseFloat(bien.PARKING.SURFACE_HABITABLE._text).toFixed()
          )
        } else if (bien.PARKING.SURFACE_SOL) {
          return String(parseFloat(bien.PARKING.SURFACE_SOL._text).toFixed())
        }
      }
    },
    lieu(bien) {
      if (bien.LOCALISATION.VILLE) {
        const lieu = bien.LOCALISATION.VILLE._cdata
        return lieu.charAt(0) + lieu.substring(1).toLowerCase()
      } else {
        const lieu = bien.AGENCE.AGENCE_VILLE._cdata
        return lieu.charAt(0) + lieu.substring(1).toLowerCase()
      }
    },
    pieces(bien) {
      if (bien.APPARTEMENT) {
        if (bien.APPARTEMENT.NBRE_PIECES) {
          return String(
            parseFloat(bien.APPARTEMENT.NBRE_PIECES._text).toFixed()
          )
        } else {
          return '0'
        }
      } else if (bien.MAISON) {
        if (bien.MAISON.NBRE_PIECES) {
          return String(parseFloat(bien.MAISON.NBRE_PIECES._text).toFixed())
        } else {
          return '0'
        }
      } else if (bien.TERRAIN) {
        if (bien.TERRAIN.NBRE_PIECES) {
          return String(parseFloat(bien.TERRAIN.NBRE_PIECES._text).toFixed())
        } else {
          return '0'
        }
      } else if (bien.IMMEUBLE) {
        if (bien.IMMEUBLE.NBRE_PIECES) {
          return String(parseFloat(bien.IMMEUBLE.NBRE_PIECES._text).toFixed())
        } else {
          return '0'
        }
      } else if (bien.LOCAL_PROFESSIONNEL) {
        if (bien.LOCAL_PROFESSIONNEL.NBRE_PIECES) {
          return String(
            parseFloat(bien.LOCAL_PROFESSIONNEL.NBRE_PIECES._text).toFixed()
          )
        } else {
          return '0'
        }
      } else if (bien.FOND_COMMERCE) {
        if (bien.FOND_COMMERCE.NBRE_PIECES) {
          return String(
            parseFloat(bien.FOND_COMMERCE.NBRE_PIECES._text).toFixed()
          )
        } else {
          return '0'
        }
      } else if (bien.PARKING) {
        if (bien.PARKING.NBRE_PIECES) {
          return String(parseFloat(bien.PARKING.NBRE_PIECES._text).toFixed())
        } else {
          return '0'
        }
      }
    },
    annee(bien) {
      if (bien.APPARTEMENT) {
        if (bien.APPARTEMENT.ANNEE_CONSTRUCTION) {
          return String(
            parseFloat(bien.APPARTEMENT.ANNEE_CONSTRUCTION._text).toFixed()
          )
        } else {
          return '0'
        }
      } else if (bien.MAISON) {
        if (bien.MAISON.ANNEE_CONSTRUCTION) {
          return String(parseFloat(bien.MAISON.NBRE_PIECES._text).toFixed())
        } else {
          return '0'
        }
      } else if (bien.TERRAIN) {
        if (bien.TERRAIN.ANNEE_CONSTRUCTION) {
          return String(
            parseFloat(bien.TERRAIN.ANNEE_CONSTRUCTION._text).toFixed()
          )
        } else {
          return '0'
        }
      } else if (bien.IMMEUBLE) {
        if (bien.IMMEUBLE.ANNEE_CONSTRUCTION) {
          return String(
            parseFloat(bien.IMMEUBLE.ANNEE_CONSTRUCTION._text).toFixed()
          )
        } else {
          return '0'
        }
      } else if (bien.LOCAL_PROFESSIONNEL) {
        if (bien.LOCAL_PROFESSIONNEL.ANNEE_CONSTRUCTION) {
          return String(
            parseFloat(
              bien.LOCAL_PROFESSIONNEL.ANNEE_CONSTRUCTION._text
            ).toFixed()
          )
        } else {
          return '0'
        }
      } else if (bien.FOND_COMMERCE) {
        if (bien.FOND_COMMERCE.ANNEE_CONSTRUCTION) {
          return String(
            parseFloat(bien.FOND_COMMERCE.ANNEE_CONSTRUCTION._text).toFixed()
          )
        } else {
          return '0'
        }
      } else if (bien.PARKING) {
        if (bien.PARKING.ANNEE_CONSTRUCTION) {
          return String(
            parseFloat(bien.PARKING.ANNEE_CONSTRUCTION._text).toFixed()
          )
        } else {
          return '0'
        }
      }
    },
    terrasse(bien) {
      if (bien.APPARTEMENT) {
        if (bien.APPARTEMENT.NBRE_TERRASSE) {
          return String(
            parseFloat(bien.APPARTEMENT.NBRE_TERRASSE._text).toFixed()
          )
        } else {
          return '0'
        }
      } else if (bien.MAISON) {
        if (bien.MAISON.NBRE_TERRASSE) {
          return String(parseFloat(bien.MAISON.NBRE_TERRASSE._text).toFixed())
        } else {
          return '0'
        }
      } else if (bien.TERRAIN) {
        if (bien.TERRAIN.NBRE_TERRASSE) {
          return String(parseFloat(bien.TERRAIN.NBRE_TERRASSE._text).toFixed())
        } else {
          return '0'
        }
      } else if (bien.IMMEUBLE) {
        if (bien.IMMEUBLE.NBRE_TERRASSE) {
          return String(parseFloat(bien.IMMEUBLE.NBRE_TERRASSE._text).toFixed())
        } else {
          return '0'
        }
      } else if (bien.LOCAL_PROFESSIONNEL) {
        if (bien.LOCAL_PROFESSIONNEL.NBRE_TERRASSE) {
          return String(
            parseFloat(bien.LOCAL_PROFESSIONNEL.NBRE_TERRASSE._text).toFixed()
          )
        } else {
          return '0'
        }
      } else if (bien.FOND_COMMERCE) {
        if (bien.FOND_COMMERCE.NBRE_TERRASSE) {
          return String(
            parseFloat(bien.FOND_COMMERCE.NBRE_TERRASSE._text).toFixed()
          )
        } else {
          return '0'
        }
      } else if (bien.PARKING) {
        if (bien.PARKING.NBRE_TERRASSE) {
          return String(parseFloat(bien.PARKING.NBRE_TERRASSE._text).toFixed())
        } else {
          return '0'
        }
      }
    },
    balcon(bien) {
      if (bien.APPARTEMENT) {
        if (bien.APPARTEMENT.NBRE_BALCON) {
          return String(
            parseFloat(bien.APPARTEMENT.NBRE_BALCON._text).toFixed()
          )
        } else {
          return '0'
        }
      } else if (bien.MAISON) {
        if (bien.MAISON.NBRE_BALCON) {
          return String(parseFloat(bien.MAISON.NBRE_BALCON._text).toFixed())
        } else {
          return '0'
        }
      } else if (bien.TERRAIN) {
        if (bien.TERRAIN.NBRE_BALCON) {
          return String(parseFloat(bien.TERRAIN.NBRE_BALCON._text).toFixed())
        } else {
          return '0'
        }
      } else if (bien.IMMEUBLE) {
        if (bien.IMMEUBLE.NBRE_BALCON) {
          return String(parseFloat(bien.IMMEUBLE.NBRE_BALCON._text).toFixed())
        } else {
          return '0'
        }
      } else if (bien.LOCAL_PROFESSIONNEL) {
        if (bien.LOCAL_PROFESSIONNEL.NBRE_BALCON) {
          return String(
            parseFloat(bien.LOCAL_PROFESSIONNEL.NBRE_BALCON._text).toFixed()
          )
        } else {
          return '0'
        }
      } else if (bien.FOND_COMMERCE) {
        if (bien.FOND_COMMERCE.NBRE_BALCON) {
          return String(
            parseFloat(bien.FOND_COMMERCE.NBRE_BALCON._text).toFixed()
          )
        } else {
          return '0'
        }
      } else if (bien.PARKING) {
        if (bien.PARKING.NBRE_BALCON) {
          return String(parseFloat(bien.PARKING.NBRE_BALCON._text).toFixed())
        } else {
          return '0'
        }
      }
    },
    jardin(bien) {
      if (bien.APPARTEMENT) {
        if (bien.APPARTEMENT.SURFACE_JARDIN) {
          return String(
            parseFloat(bien.APPARTEMENT.SURFACE_JARDIN._text).toFixed()
          )
        } else {
          return '0'
        }
      } else if (bien.MAISON) {
        if (bien.MAISON.SURFACE_JARDIN) {
          return String(parseFloat(bien.MAISON.SURFACE_JARDIN._text).toFixed())
        } else {
          return '0'
        }
      } else if (bien.TERRAIN) {
        if (bien.TERRAIN.SURFACE_JARDIN) {
          return String(parseFloat(bien.TERRAIN.SURFACE_JARDIN._text).toFixed())
        } else {
          return '0'
        }
      } else if (bien.IMMEUBLE) {
        if (bien.IMMEUBLE.SURFACE_JARDIN) {
          return String(
            parseFloat(bien.IMMEUBLE.SURFACE_JARDIN._text).toFixed()
          )
        } else {
          return '0'
        }
      } else if (bien.LOCAL_PROFESSIONNEL) {
        if (bien.LOCAL_PROFESSIONNEL.SURFACE_JARDIN) {
          return String(
            parseFloat(bien.LOCAL_PROFESSIONNEL.SURFACE_JARDIN._text).toFixed()
          )
        } else {
          return '0'
        }
      } else if (bien.FOND_COMMERCE) {
        if (bien.FOND_COMMERCE.SURFACE_JARDIN) {
          return String(
            parseFloat(bien.FOND_COMMERCE.SURFACE_JARDIN._text).toFixed()
          )
        } else {
          return '0'
        }
      } else if (bien.PARKING) {
        if (bien.PARKING.SURFACE_JARDIN) {
          return String(parseFloat(bien.PARKING.SURFACE_JARDIN._text).toFixed())
        } else {
          return '0'
        }
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
    handleSubmit() {
      const headers = {
        'Content-Type': 'application/json',
      }

      const data = {
        name: this.name,
        mail: this.mail,
        phone: this.phone,
        prefDay: this.pref.day,
        prefTime: this.pref.time,
        choix: this.choix,
        bien: window.location.href,
      }

      if (!this.name || !this.mail) {
        return (this.error = this.$t('contact.error'))
      } else {
        return this.$axios
          .$post(`https://api.aktif-transac.com/bien`, data, {
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
      title: `${this.goodsType(this.bien)} ${this.surface(
        this.bien
      )} m² - Aktif Transac`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.bien.INTITULE.FR._cdata,
        },
      ],
    }
  },
}
</script>

<style scoped lang="scss" src="@/assets/styles/pages/Goods/Single.scss"></style>
