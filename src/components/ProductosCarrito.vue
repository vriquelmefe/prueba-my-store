<template>
  <div class="container border">
    <ul>
      <li v-for="(producto,index) in $store.state.carritoDeCompras" :key="index" class="m-3">{{ producto.name }} -  ${{ producto.price }}
        <button type="button" @click="borrar(producto, index)" class="btn btn-secondary">Eliminar</button>
      </li>
    </ul>

    <div class="card-footer bg-transparent border-success"> TOTAL : ${{ $store.state.totalVentas }} </div>
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
     borrar(producto, index) {
       alert('borrar')
      this.$emit("borrarProducto", {producto, index})
    },

  }
}
</script>