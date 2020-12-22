<template>
    <div id="User">
        <h2>¡Bienvenido(a) de nuevo <br/> <span> {{username}}</span>!</h2>
        
    </div>
</template>



<script>
    export default {
        name: "User",
        data:function(){
            return {
                username: "none"
            }
        },

        created: function(){
            this.username = this.$route.params.username
        }
    }
</script>

<style>
    #User{
        width: 100%;
        height: 100%;

        display: flex;
        position:relative;
        justify-content: space-around;  
        align-items: center;
    }

    #User h2{
        color: #E5E7E9;
        text-align: center;
        font-family: "Roboto-Bold", Helvetica, Arial, serif;
        font-size: 50px;
        font-style: normal;
        font-weight: 700;
        justify-content: center;
        align-items: center;
    }

    #User span{
        color: #E6B06B;
        font-size: 55px;
        font-style: normal;
        font-weight: 700;
        justify-content: center;
        align-items: center;
    }
</style>