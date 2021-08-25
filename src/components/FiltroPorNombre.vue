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
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
      </form>
    
    <ul>
      <li
        v-for="producto in $store.getters.productosFiltradosPorNombre"
        :key="producto.name"
      >
         Nombre del producto: {{ producto.name }} / Precio: ${{ producto.price }} /
        Color: {{ producto.color }}
      </li>
    </ul>
  </div>
</template>