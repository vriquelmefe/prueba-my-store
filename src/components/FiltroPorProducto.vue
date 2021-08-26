<template>
  <div class="container m-4">
    <form class="form-inline my-2 my-lg-0">
      <label class="mx-3">Ingrese el nombre del Articulo: </label>
        <input
          type="text"
          placeholder="Nombre del Producto"
          :value="$store.state.busquedaPorNombre"
          @input="$store.commit('SET_BUSQUEDA_NAME', $event.target.value)"
          class="form-control mr-sm-2"
        />
      </form>
    <div class="container my-4">
      <ul v-if="$store.getters.productosFiltradosPorNombre.lenght > 0"> 
        <li
          v-for="producto in $store.getters.productosFiltradosPorNombre"
          :key="producto.name">
          Nombre del producto: {{ producto.name }} / Precio: ${{ producto.price }} /
          Color: {{ producto.color}} / Descuento : {{ producto.discount }} %
        </li>
      </ul>
      <p v-else class="text-secondary">- Aún no ingresa búsqueda</p>


    </div>
  </div>
</template>
<script>
export default {
  name: 'FiltroPorProducto'
}
</script>