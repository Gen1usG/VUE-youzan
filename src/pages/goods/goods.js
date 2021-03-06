
import './goods_common.css'
import './goods_custom.css'
import './goods.css'
import './goods_theme.css'
import './goods_mars.css'
import './goods_sku.css'
import './goods_transtion.css'

import Vue from 'vue'
import axios from 'axios'
import url from 'js/api.js'
import mixin from 'js/mixin.js'
import qs from 'qs'

let {id} = qs.parse(location.search.substr(1))
let Tab = ['商品详情','本店成交']

new Vue({
  el:'#app',
  data: {
    details: null,
    Tab,
    tabIndex: 0,
    dealLists: null,
    bannerLists: [],
    skuType: 1,
    showSku: false,
    skuNum: 1,
    showAddMsg: false,
    isAddSku: false,
    loading: false,
    buyMsg: false
    
  },
  created() {
    this.getDetails()

  },
  methods: {
    getDetails() {
      axios.get(url.details, {params:{id}}).then(res => {
        this.details = res.data.data
        this.details.imgs.forEach(item =>{
          this.bannerLists.push({
            clickUrl: 'javascript:;',
            img: item
          })
        })
      })
    },
    changeTab(index) {
      this.tabIndex = index
      if(index) {
        this.getDeal()
      }
    },
    getDeal() {

      if (!this.dealLists){
        this.loading = true
        axios.get(url.deal).then(res => {
          this.dealLists = res.data.data.lists
          this.loading = false
        })
      }

    },
    chooseSku(type) {
      this.skuType = type
      this.showSku = true
    },
    changeSkuNum(num) {
      if(num<0 && this.skuNum === 1) return
      this.skuNum += num
    },
    addCart() {
      axios.post(url.addCart, {
        id: id,
        number: this.skuNum
      }).then(res => {
        if(res.data.status === 200) {          
          this.showSku = false
          this.isAddSku = true
          this.showAddMsg = true

          setTimeout(() => {
            this.showAddMsg = false
          },1000)
        }
      })
    },
    buy() {
      this.buyMsg = true
      setTimeout( () => {
        this.buyMsg = false
      },1000)
    }
  },
  watch: {
    showSku(val, oldVal) {
      document.body.style.overflow = val ? 'hidden': 'auto'
      document.querySelector('html').style.overflow = val ? 'hidden': 'auto'
      document.body.style.height = val ? '100%' : 'auto'
      document.querySelector('html').style.height = val ? '100%' : 'auto'
    }
  },
  mixins: [mixin]
})
