<template>
    <div id="Search" class="search_product">
        <div class="container_search_product">
            <h2> Buscar Producto</h2>

            <form v-on:submit.prevent="processBuscar" >
                <input type="tetx" v-model="nombre_producto" placeholder="Nombre del producto">
                <br>
                <button type="submit">Buscar</button>
            </form>
        </div>
        <div class="container_data">
            <h2>INFORMACIÓN DEL PRODUCTO</h2>
            <h3>Nombre: {{nombre_producto}}<br/>
                Cantidad: {{cantidad}} <br/>
                Precio de compra: {{precio_compra}} <br/>
                Precio al publico: {{pvp}} <br/>
                Fecha de vencimiento: {{fecha_vencimiento}}
            </h3>
        </div>
    </div>
</template>

<script>

import axios from 'axios';
export default {
    name: "Search",
    data: function(){
        return{
            nombre_producto: "",
            cantidad: 0,
            precio_compra: 0,
            pvp: 0,
            fecha_vencimiento: "",
        }
    },

    methods:{
        processBuscar: function(){
            var self = this
            let busca_nombre = {
                nombre_producto: this.nombre_producto
            }
            axios.get("http://127.0.0.1:8000/inventory/product/" + this.nombre_producto).then((result) => {
                self.nombre_producto = result.data.nombre_producto,
                self.cantidad = result.data.cantidad,
                self.precio_compra = result.data.precio_compra,
                self.pvp = result.data.pvp,
                self.fecha_vencimiento = result.data.fecha_vencimiento
            })
             .catch((error) => {
                    if (error.response.status == "404")
                        alert("ERROR 404: Producto no encontrado.");
                });
        }
    },
}
</script>

<style>

    .search_product{
        margin: 0;
        padding: 0%;
        height: 100%;
        width: 100%;
    
        display: flex;
        left:calc(20.6% - 30px);
        position:relative;
        justify-content: left;
        align-items: center;

    }

    .container_search_product {
        width: 30%;
        height: 60%;
        
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .search_product h2{
        color: #E5E7E9;
        font-family: "Roboto-Bold", Helvetica, Arial, serif;
        font-size: 30px;
        font-style: normal;
        font-weight: 700;
    }

    .search_product form{
        width: 80%;
        
    }

    .search_product input{
        height: 40px;
        width: 100%;
        
        box-sizing: border-box;
        padding: 10px 20px;
        margin: 5px 0;

        border: 1px solid #E5E7E9;
        
    }

    .search_product button{
        width: 100%;
        height: 40px;

        color: #283747;
        background: #E6B06B;
        border: 1px solid #E6B06B;

        border-radius: 5px;
        padding: 10px 25px;
        margin: 5px 0;

    }

    .search_product button:hover{
        color: #414141;
        background: #93BF47;
        border: 1px solid #93BF47;
    }

    .container_data{
        margin: 0;
        padding: 0%;
        height: 50%;
        width: 30%;
    
        display: flex;
        left:calc(20.6% - 30px);
        position:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        background: #686868;
        border: 1px solid #686868;
        border-radius: 10px;
    }
    
    .container_data h2{
        color: #E5E7E9;
        font-family: "Roboto-Bold", Helvetica, Arial, serif;
        font-size: 20px;
        font-style: normal;
        font-weight: 700;
        justify-content: center;
    }
    .container_data h3{
        color: #E5E7E9;
        font-family: "Roboto-Bold", Helvetica, Arial, serif;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        justify-content: left;
    }

</style>

