import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    Background: [243, 244, 246],
    nav: [31, 41, 55],
    FontSizeTitle: 19,
    FontSizeText: 16,
    LineHeight: 20,
    num:9,
    cont:0,
    datas:[]
  },
  getters: {
  },
  mutations: {
    setdata(Store, str){
      this.state.datas[this.state.cont] = str
    },
    setnum(){
      this.state.cont=++this.state.cont
    },
    setBackground(Store, str) {
      this.state.Background = str
    },
    setNav(Store, str) {
      this.state.nav = str
    },
    setFontSizeTitle(Store, str) {
      this.state.FontSizeTitle = str
    },
    setFontSizeText(Store, str) {
      this.state.FontSizeText = str
    },
    setLineHeight(Store, str) {
      this.state.LineHeight = str
    },
    setStore(Store, str) {
      this.state.Background = str.Background
      this.state.nav = str.nav
      this.state.FontSizeTitle = str.FontSizeTitle
      this.state.FontSizeText = str.FontSizeText
      this.state.LineHeight = str.LineHeight
    }
  },
  actions: {
  },
  modules: {
  }
})
