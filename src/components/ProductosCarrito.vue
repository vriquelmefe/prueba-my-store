<template>
  <div class="container border">
    <ul>
      <li v-for="(producto,index) in $store.state.carritoDeCompras" :key="index" class="m-3">{{ producto.name }} -  ${{ producto.price }} <span class="text-danger">  {{ producto.offer ?  ` -  Descuento ${ producto.discount } %` : '' }} </span>
        <button class="btn btn-secondary" @click="$store.dispatch('descontarProductoCarrito', index)">-</button> 
        {{ producto.cantidad }} 
        <button class="btn btn-dark" @click="$store.dispatch('sumarProductoCarrito', index)"> + </button> 

        <button type="button" @click="borrar(producto, index)" class="btn btn-secondary mx-3">Eliminar</button>
      </li>
    </ul>

    <div class="card-footer bg-transparent border-success"> 
      <p v-if="$store.state.carritoDeCompras.length"> TOTAL : ${{ $store.getters['valorTotalVenta'] }} </p>
      <p v-else> Sin Producto añadidos</p>
    </div>
    <button type="button" @click="Pagar()" class="btn btn-danger mb-4">Pagar</button>
  </div>
</template>
<script>
export default {
  name: 'ProductosCarrito',
  components: {},
  methods:{
    Pagar(){
      alert('Compra exitosa')
    },
     borrar(index) {
       alert('borrar')
      this.$store.state.carritoDeCompras.splice(index, 1)
    }
  }
}
</script>