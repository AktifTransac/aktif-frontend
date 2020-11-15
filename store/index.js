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
      return new Date(b.DATE_OFFRE._cdata) - new Date(a.DATE_OFFRE._cdata)
    })
    goods = goods.filter((el) => el.TYPE_OFFRE._cdata <= 7)
    const newGoods = goods.splice(0, 5)
    return newGoods
  },
  lastSale(state) {
    let goods = _.cloneDeep(state.goods)
    goods.sort((a, b) => {
      return new Date(b.DATE_OFFRE._cdata) - new Date(a.DATE_OFFRE._cdata)
    })
    goods = goods.filter((el) => el.TYPE_OFFRE._cdata <= 7)
    const lastSale = goods.splice(0, 1)
    return lastSale[0]
  },
  lastRent(state) {
    let goods = _.cloneDeep(state.goods)
    goods.sort((a, b) => {
      return new Date(b.DATE_OFFRE._cdata) - new Date(a.DATE_OFFRE._cdata)
    })
    goods = goods.filter((el) => el.TYPE_OFFRE._cdata > 7)
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
    return state.goods.find((el) => el.NO_DOSSIER._cdata === id)
  },
}

export const mutations = {
  setLang(state, locale) {
    if (state.locales.includes(locale)) {
      state.locale = locale
    }
  },
  setGoods(state, data) {
    const biens = convert.xml2json(data, { compact: true, spaces: 4 })
    const formated = JSON.parse(biens)
    formated.BIENS.BIEN.forEach((el) => {
      const format = el.DATE_OFFRE._cdata.split('/').reverse().join('/')
      el.DATE_OFFRE._cdata = format
    })
    state.goods = formated.BIENS.BIEN
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
    const data = await this.$axios.$get('https://api.aktif-transac.com/biens')
    await commit('setGoods', data)
  },
}
