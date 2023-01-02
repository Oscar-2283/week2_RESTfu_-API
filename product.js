import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';

createApp({
  data() {
    return {
      url:'https://vue3-course-api.hexschool.io/v2',
      path:'test8283',
      products:[],
      temp:{},
    }
  },
  methods: {
    checkUser(){
      axios.post(`${this.url}/api/user/check`)
        .then(res=>{
          console.log(res.data)
        })
        .catch(err=>{
          alert(err.data.message)
          location.href='login.html'
        })
    },
    getProduct(){
      axios.get(`${this.url}/api/${this.path}/admin/products`)
        .then((res) => {
        console.log(res.data)
          this.products = res.data.products
        }).catch((err) => {
        console.dir(err)
        });
    },
    showProduct(product){
      this.temp = product
    }
  },
  mounted() {
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)myToken\s*\=\s*([^;]*).*$)|^.*$/,
      '$1'
    );
    axios.defaults.headers.common['Authorization'] = token;
    this.checkUser()
    this.getProduct()
  },
}).mount('#app')
