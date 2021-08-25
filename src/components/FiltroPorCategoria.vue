<template>
  <div class="container m-4">
    <form class="form-inline my-2 my-lg-0">
      <label class="mx-3">Ingrese la Categoría: </label>
         <select class="form-control" :value="$store.state.busquedaPorCategoria" @v-model="$store.commit('SET_BUSQUEDA_CATEGORY', $event.target.value)">
          <option value="mascotas">Mascota</option>
          <option value="hogar">Hogar</option>
          <option value="deporte">Deporte</option>
          <option value="aprendizaje">Aprendizaje</option>
        </select>
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
      </form>
    
    <ul>
      <li
        v-for="producto in $store.getters.productosFiltradosPorCategoria"
        :key="producto.name"
      >
         Nombre del producto: {{ producto.name }} / Precio: ${{ producto.price }} /
        Color: {{ producto.color }}
      </li>
    </ul>
   
  </div>
</template>