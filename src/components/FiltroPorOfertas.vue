<template>
  <div class="container m-4">
    <form class="form-inline my-2 my-lg-0">
      <label class="mx-3">Ingrese la oferta: </label>
      <div class="col-sm-10">
        <input type="number" class="form-control" :value="$store.state.busquedaPorOferta"
          @input="$store.commit('SET_BUSQUEDA_OFFER', $event.target.value)">
      </div>
    </form>
    
    <ul>
      <li
        v-for="producto in $store.getters.productosFiltradosPorOferta"
        :key="producto.name"
      >
         Nombre del producto: {{ producto.name }} / Precio: ${{ producto.price }} /
        Color: {{ producto.color }}
      </li>
    </ul>
  </div>
</template>