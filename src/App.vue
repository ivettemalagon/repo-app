<template>
  <div id="app" class="app">

    <div class="header">

      <img
      class="logo"
      src="https://anima-uploads.s3.amazonaws.com/projects/5fdc158d8688b1df3f41bd9a/releases/5fdc15ff302a7106407a24bf/img/logo@1x.png"
    />
    <nav>
      <button v-on:click="init" v-if="is_auth" > INICIO </button>
      <button v-on:click="getInventory" v-if="is_auth" > INVENTARIO </button>
      <button v-if="is_auth" > VENTAS </button>
      <button v-on:click="logOut" v-if="is_auth" >SALIR</button>
    </nav>
    </div>
    
    

    <div class="main-component">
      <router-view  v-on:log-in="logIn" ></router-view>
    </div>
    

  

    <div class="footer">
      <h2>     <br/>Ivette Malagon<br/>G1M2<br/></h2>
      <img 
        class="mintic"
        src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/32f16345-b125-4b8e-8f3d-065d7c4aeab2/deat8kp-fb0aa021-718c-4eb2-9e56-864ece5ab5ce.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvMzJmMTYzNDUtYjEyNS00YjhlLThmM2QtMDY1ZDdjNGFlYWIyXC9kZWF0OGtwLWZiMGFhMDIxLTcxOGMtNGViMi05ZTU2LTg2NGVjZTVhYjVjZS5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.62CkIKNcdlbto5GY9z31IpU4EoEdrmmdafWOPbrbLEY" />
    
    </div>


  </div>
</template>









<script>


import vueRouter from 'vue-router'

export default {
  name: 'App',

  data: function(){
      return{ 
        is_auth: localStorage.getItem('isAuth') || false
      

        
      }    
  },

  components: {
  },

  methods:{
    updateAuth: function(){
      var self = this
      self.is_auth  = localStorage.getItem('isAuth') || false

      if(self.is_auth == false)
        self.$router.push({name: "user_auth"})

      else{
        let username = localStorage.getItem("current_username")
        self.$router.push({name: "user", params:{ username: username }})
      }  
    },

    logIn: function(username){
      localStorage.setItem('current_username', username)
      localStorage.setItem('isAuth', true)
      this.updateAuth()
    },

    logOut: function(){
      localStorage.removeItem('isAuth')
      localStorage.removeItem('current_username')
      this.updateAuth()
    },

    init: function(){
      if(this.$route.name != "user"){
        let username = localStorage.getItem("current_username")
        this.$router.push({name: "user", params:{ username: username }})
      }
      
    },

    getInventory: function(){
      if(this.$route.name != "current_username"){
        this.$router.push({name: "inventory"})
      }
    },


    doTransaction: function(){
      
        let username = localStorage.getItem("current_username")
        this.$router.push({name: "user_transaction", params:{ username: username }})
    }
    
  },

  created: function(){
    this.$router.push({name: "root"})
    this.updateAuth()
  }
  

}
</script>









<style>

  body{
    margin: 0 0 0 0;
    background-color:#414141;
  }
  .header{
    margin: 0%;
    padding: 0;
    width: 100%;
    height: 10vh;
    min-height: 100px;
    background-color: #93BF47 ;
    color:#414141 ;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .logo {
    left:30px;
    background-color: transparent;
    height: 75px;
    width: 276px;
    position:relative;
  }
  .header nav {
    height: 100%;
    width: 45%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    
  }
  .header nav button{
    color: #000000;
    background: #93BF47;
    border: 1px solid #93BF47;
    border-radius: 5px;
    padding: 10px 20px;
    font-family: "Roboto-Bold", Helvetica, Arial, serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
  }
  .header nav button:hover{
    color: #414141;
    background: #E6B06B;
    border: 1px solid #E6B06B;
  }
  .main-component{
    height: 75vh;
    margin: 0%;
    padding: 0%;
    background: #414141 ;
  }
  .footer{
    position:absolute;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 15vh;
    min-height: 100px;
    background-color: #93BF47;
    color: #000000;
  }
  .footer h2{
    width: 100%;
    height: 100%;
    left:calc(50.6% - 30px);
    position:absolute;
    justify-content: center;
    align-items: center;
    font-family: "Roboto-Regular", Helvetica, Arial, serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
  }
  .mintic{
    position:absolute;
    bottom:15px;
    left:calc(39.16% - 50px);
    right:0;
    width:153px;
    height:70px;
  }
</style>


