<template>
    <form class="container m-4" @submit.prevent="nuevoProducto">
      <div class="form-group row">
        <label for="colFormLabel" class="col-sm-2 col-form-label">Nombre Producto</label>
        <div class="col-sm-10">
          <input type="text" v-model="nuevoProductoAgregar.name" required class="form-control">
        </div>
      </div>
      <div class="form-group row">
        <label for="colFormLabel" class="col-sm-2 col-form-label">Precio del producto</label>
        <div class="col-sm-10">
          <input  class="form-control" type="number" v-model.number="nuevoProductoAgregar.price" required>
        </div>
      </div>
      <div class="form-group row">
        <label>Categoría</label>
        <select class="form-control" v-model="nuevoProductoAgregar.caterogy" required>
          <option value="mascotas">Mascota</option>
          <option value="hogar">Hogar</option>
          <option value="deporte">Deporte</option>
          <option value="aprendizaje">Aprendizaje</option>
        </select>
      </div>
      <div class="form-group row">
        <label >Color</label>
        <input type="color" v-model="nuevoProductoAgregar.color" required>
      </div>
      <div class="form-group row">
          <label for="colFormLabel" class="col-sm-2 col-form-label">Oferta</label>
          <div class="col-sm-10">
            <input type="checkbox" v-model="nuevoProductoAgregar.offer" required>
            <input type="number" class="form-control"  v-model="nuevoProductoAgregar.discount" v-if="nuevoProductoAgregar.offer">
          </div>
      </div>

    <button type="submit" class="btn btn-success">Guardar</button>
    </form>
</template>

<script>
export default {
  name: "NewProduct",
  data: () => ({
    nuevoProductoAgregar: {
      name: '',
      price: null,
      caterogy: '',
      color: '',
      offer: false,
      discount: null
    }
  }),
  methods: {
    nuevoProducto() {
      this.$store.dispatch("agregarProductos", this.nuevoProductoAgregar)
    },
  },
};
</script>

<style></style>
