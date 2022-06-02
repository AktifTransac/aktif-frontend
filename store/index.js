import cookie from 'vue-cookies'
const convert = require('xml-js')
const _ = require('lodash')

export const state = () => ({
  locales: ['en', 'fr'],
  locale: 'fr',
  goods: [],
  likes: [],
})

export const getters = {
  getLang(state) {
    return state.locale
  },
  newGoods(state) {
    let goods = _.cloneDeep(state.goods)
    goods.sort((a, b) => {
      return (
        new Date(b.INFO_GENERALES.DATE_CREATION._text) -
        new Date(a.INFO_GENERALES.DATE_CREATION._text)
      )
    })
    goods = goods.filter((el) => el.VENTE)
    const newGoods = goods.splice(0, 5)
    return newGoods
  },
  lastSale(state) {
    let goods = _.cloneDeep(state.goods)
    goods.sort((a, b) => {
      return (
        new Date(b.INFO_GENERALES.DATE_CREATION._text) -
        new Date(a.INFO_GENERALES.DATE_CREATION._text)
      )
    })
    goods = goods.filter((el) => el.VENTE)
    const lastSale = goods.splice(0, 1)
    return lastSale[0]
  },
  lastRent(state) {
    let goods = _.cloneDeep(state.goods)
    goods.sort((a, b) => {
      return (
        new Date(b.INFO_GENERALES.DATE_CREATION._text) -
        new Date(a.INFO_GENERALES.DATE_CREATION._text)
      )
    })
    goods = goods.filter((el) => el.LOCATION)
    const lastRent = goods.splice(0, 1)
    return lastRent[0]
  },
  goods(state) {
    const goods = _.cloneDeep(state.goods)
    return goods
  },
  likes(state) {
    return state.likes
  },
  numberOfLikes(state) {
    return state.likes.length
  },
  goodsLiked(state) {
    const goods = _.cloneDeep(state.goods)
    return goods
  },
  single: (state) => (id) => {
    return state.goods.find((el) => el.INFO_GENERALES.AFF_NUM._text === id)
  },
}

export const mutations = {
  setLang(state, locale) {
    if (state.locales.includes(locale)) {
      state.locale = locale
    }
  },
  async setGoods(state, data) {
    const biens = convert.xml2json(data, { compact: true, spaces: 4 })
    const formated = await JSON.parse(biens)
    state.goods = formated.LISTEPA.BIEN
  },
  like(state, dossier) {
    if (!cookie.isKey('likes')) {
      const cookies = []
      cookies.push(dossier)
      cookie.set('likes', JSON.stringify(cookies))
    } else {
      const cookies = JSON.parse(cookie.get('likes'))
      cookies.push(dossier)
      cookie.set('likes', JSON.stringify(cookies))
    }
    state.likes = JSON.parse(cookie.get('likes'))
  },
  dislike(state, dossier) {
    const cookies = JSON.parse(cookie.get('likes'))
    const index = cookies.findIndex((el) => el === dossier)
    cookies.splice(index, 1)
    if (cookies.length === 0) {
      cookie.remove('likes')
      state.likes = []
    } else {
      cookie.set('likes', JSON.stringify(cookies))
      state.likes = JSON.parse(cookie.get('likes'))
    }
  },
  setLikes(state) {
    state.likes = JSON.parse(cookie.get('likes'))
  },
}

export const actions = {
  async getGoods({ commit }) {
    const data = await this.$axios.$get(
      'https://clients.immo-facile.com/office12/sarlaktiftrans_02032021/cache/export.xml',
      {
        headers: {
          'Content-Type': 'application/xml',
        },
      }
    )
    await commit('setGoods', data)
  },
}
