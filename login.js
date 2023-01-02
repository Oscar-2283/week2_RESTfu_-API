import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';

createApp({
  data() {
    return {
      user:{
        username:"",
        password:""
      }
    }
  },
  methods: {
    login(){
      const url = 'https://vue3-course-api.hexschool.io/v2/admin/signin'
      axios.post( `${url}` , this.user)
        .then((res) => {
          const {expired, token} = res.data
          console.log(expired, token)
          document.cookie = `myToken=${token}; expires=${new Date(expired)};`
          location.href ="product.html"
        }).catch((err) => {
          console.log(err.response)
        });
    }
  },
  mounted() {
    
  },
}).mount('#app')