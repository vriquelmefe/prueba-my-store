<template>
  <div class="container m-4">
    <form class="form-inline my-2 my-lg-0">
      <label class="mx-3">Ingrese el Color:  </label>
      <select class="form-control" @select="$store.commit('SET_BUSQUEDA_COLOR', $event.target.value)" :value="$store.state.busquedaPorColor">
          <option value="green">Verde</option>
          <option value="black">Negro</option>
          <option value="red">Rojo</option>
          <option value="yellow">Amarillo</option>
        </select>
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
      </form>
    
    <ul>
      <li
        v-for="producto in $store.getters.productosFiltradosPorColor"
        :key="producto.name"
      >
         Nombre del producto: {{ producto.name }} / Precio: ${{ producto.price }} /
        Color: {{ producto.color }}
      </li>
    </ul>
  </div>
</template>