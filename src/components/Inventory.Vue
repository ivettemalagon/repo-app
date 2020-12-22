<template>
    <div id="Inventory">
        <div class="container_inventory">
            <h2>¿Que desea hacer?<br/></h2>
            <button v-on:click="getSearch"> BUSCAR PRODUCTO </button>
            <button v-on:click="getModify"> MODIFICAR PRODUCTO </button>
       
        </div>
    </div>
</template>

<script>
    export default {
        name: "Inventory",
        data:function(){
            return {            }
        },
        methods: {
        getSearch: function(){
              this.$router.push({name: "buscar"})
      
        },
        getModify: function(){
              this.$router.push({name: "modificar"})
      
        }
        },
        created: function(){
        }
    }
</script>

<style>
    #Inventory{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    #Inventory h2{
        font-size: 50px;
        color: #ffffff;
        text-align: center;
        font-family: "Roboto-Bold", Helvetica, Arial, serif;
        font-size: 40px;
        font-style: normal;
        font-weight: 700;
    }
    #Inventory button{
        width: 100%;
        height: 40px;

        color: #242424;
        background: #E6B06B;
        border: 1px solid #E6B06B;

        border-radius: 5px;
        padding: 10px 25px;
        margin: 5px 0;
        font-weight: 700;
    }
    #Inventory button:hover{
        color: #414141;
        background: #93BF47;
        border: 1px solid #93BF47;
    }
</style>