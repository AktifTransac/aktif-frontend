<template>
  <section id="biens">
    <article class="container">
      <h2>
        {{ $t('home.goods.title') }}<span>{{ $t('home.goods.span') }}</span>
      </h2>
      <nuxt-link to="/biens" class="btn">{{ $t('home.goods.btn') }}</nuxt-link>
    </article>
    <article id="slider">
      <div id="inner-slider">
        <aside v-for="(bien, i) in newGoods" :key="i" class="slide">
          <img
            :src="
              bien.IMAGES.IMG.length
                ? bien.IMAGES.IMG[0]._text
                : bien.IMAGES.IMG._text
            "
            :alt="bien.INTITULE.FR._cdata"
            @error="setFallbackImageUrl"
          />
          <div>
            <h3>
              {{ goodsType(bien) }}
              <span> {{ surface(bien) }} m² </span>
            </h3>
            <p>{{ prix(bien) }}</p>
            <div>
              <nuxt-link
                :to="
                  $i18n.path('biens') + '/' + bien.INFO_GENERALES.AFF_NUM._text
                "
                class="btn-biens"
                >{{ $t('goods.btn') }}</nuxt-link
              >
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
            </div>
          </div>
        </aside>
      </div>
    </article>
    <article class="container">
      <nav :class="[step > 0 ? 'active' : '']" @click="handlePrev">
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
      <nav :class="[step < handleNextBtn ? 'active' : '']" @click="handleNext">
        {{ $t('goods.next')
        }}<svg
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
  </section>
</template>

<script>
export default {
  data() {
    return {
      position: 0,
      step: 0,
      slider: {
        pressed: false,
        startx: 0,
      },
    }
  },
  computed: {
    newGoods() {
      return this.$store.getters.newGoods
    },
    likes() {
      return this.$store.getters.likes
    },
    handleNextBtn() {
      if (process.client) {
        if (window.screen.width >= 1280) {
          return 2
        } else if (window.screen.width >= 768) {
          return 3
        } else {
          return this.newGoods.length - 1
        }
      } else {
        return 3
      }
    },
  },
  mounted() {
    if (this.$cookies.isKey('likes') && !this.$store.state.likes.length) {
      this.$store.commit('setLikes')
    }

    const slider = document.getElementById('slider')

    if (window.screen.width < 1280) {
      slider.addEventListener('touchstart', (e) => this.handleTouchStart(e))
      slider.addEventListener('touchend', (e) => this.handleTouchEnd(e))
    } else {
      slider.addEventListener('mousedown', (e) => this.handleMouseDown(e))
      slider.addEventListener('mouseup', (e) => this.handleMouseUp(e))
    }
  },
  beforDestroy() {
    const slider = document.getElementById('slider')

    if (window.screen.width < 1280) {
      slider.removeEventListener('touchstart', (e) => this.handleTouchStart(e))
      slider.removeEventListener('touchend', (e) => this.handleTouchEnd(e))
    } else {
      slider.removeEventListener('mousedown', (e) => this.handleMouseDown(e))
      slider.removeEventListener('mouseup', (e) => this.handleMouseUp(e))
    }
  },
  methods: {
    handleMouseDown(e) {
      const slider = document.getElementById('slider')
      const innerSlider = document.getElementById('inner-slider')

      this.slider.pressed = true
      this.slider.startx = e.offsetX - innerSlider.offsetLeft
      slider.style.cursor = 'grabbing'

      slider.addEventListener('mousemove', (e) => this.handleMouseMove(e))
    },
    handleMouseUp(e) {
      const slider = document.getElementById('slider')

      this.slider.pressed = false
      slider.style.cursor = 'auto'

      window.removeEventListener('mousemove', (e) => this.handleMouseMove(e))
    },
    handleMouseMove(e) {
      const innerSlider = document.getElementById('inner-slider')

      if (!this.slider.pressed) return
      e.preventDefault()

      const x = e.offsetX
      innerSlider.style.left = `${x - this.slider.startx}px`

      this.checkBoundary()
    },
    handleTouchStart(e) {
      const slider = document.getElementById('slider')
      const innerSlider = document.getElementById('inner-slider')

      this.slider.pressed = true
      this.slider.startx = e.touches[0].clientX - innerSlider.offsetLeft

      slider.addEventListener('touchmove', (e) => this.handleTouchMove(e))
    },
    handleTouchEnd(e) {
      this.slider.pressed = false

      window.removeEventListener('touchmove', (e) => this.handleTouchMove(e))
    },
    handleTouchMove(e) {
      const innerSlider = document.getElementById('inner-slider')
      if (!this.slider.pressed) return
      e.preventDefault()

      const x = e.changedTouches[0].clientX
      innerSlider.style.left = `${x - this.slider.startx}px`

      this.checkBoundary()
    },
    checkBoundary() {
      const innerSlider = document.getElementById('inner-slider')
      const slide = document.getElementsByClassName('slide')

      const el = slide[0].getBoundingClientRect()

      if (parseInt(innerSlider.style.left) > 0) {
        innerSlider.style.left = '0px'
      } else if (window.screen.width >= 1280) {
        if (Math.abs(parseInt(innerSlider.style.left)) > (el.width + 30) * 2) {
          innerSlider.style.left = `-${(el.width + 30) * 2}px`
        }
      } else if (window.screen.width >= 768) {
        if (Math.abs(parseInt(innerSlider.style.left)) > (el.width + 30) * 3) {
          innerSlider.style.left = `-${(el.width + 30) * 3}px`
        }
      } else if (
        Math.abs(parseInt(innerSlider.style.left)) >
        (el.width + 30) * 4
      ) {
        innerSlider.style.left = `-${(el.width + 30) * 4}px`
      }
    },
    setFallbackImageUrl(event) {
      event.target.src = require('~/assets/images/logo.png')
    },
    goodsType(bien) {
      if (bien.APPARTEMENT) {
        return this.$t('goods.apartment')
      } else if (bien.MAISON) {
        return this.$t('goods.house')
      } else if (bien.TERRAIN) {
        return this.$t('goods.ground')
      } else if (bien.IMMEUBLE) {
        return this.$t('goods.building')
      } else if (bien.LOCAL_PROFESSIONNEL) {
        return 'Local'
      } else if (bien.FOND_COMMERCE) {
        return 'FDC'
      } else if (bien.PARKING) {
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
    like(dossier) {
      this.$store.commit('like', dossier)
    },
    dislike(dossier) {
      this.$store.commit('dislike', dossier)
    },
    handlePrev() {
      const innerSlider = document.getElementById('inner-slider')
      const slides = document.getElementsByClassName('slide')
      const el = slides[0].getBoundingClientRect()

      innerSlider.style.transition = 'left 0.3s linear'
      if (this.step > 0) {
        this.step--
        innerSlider.style.left = `-${(el.width + 30) * this.step}px`
      }
      setTimeout(() => {
        innerSlider.style.transition = ''
      }, 300)
    },
    handleNext() {
      const innerSlider = document.getElementById('inner-slider')
      const slides = document.getElementsByClassName('slide')
      const el = slides[0].getBoundingClientRect()

      innerSlider.style.transition = 'left 0.3s linear'
      if (window.screen.width >= 1280) {
        if (this.step < 2) {
          this.step++
        }
      } else if (window.screen.width >= 768) {
        if (this.step < 3) {
          this.step++
        }
      } else if (this.step < this.newGoods.length - 1) {
        this.step++
      }
      innerSlider.style.left = `-${(el.width + 30) * this.step}px`
      setTimeout(() => {
        innerSlider.style.transition = ''
      }, 300)
    },
  },
}
</script>

<style scoped lang="scss" src="@/assets/styles/pages/Home/Biens.scss"></style>
