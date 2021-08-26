<template>

<div class="row row-cols-1 row-cols-md-3 m-3" >
  <div class="col mb-4"  v-for="(producto, $index) in $store.state.productList" :key="$index">
    <div class="card h-100">
      <img src="@/assets/product.png" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">{{ producto.name }}</h5>
        <h6 class="card-subtitle mb-2 text-muted"> ${{ producto.price }}</h6>
        <p v-if="producto.offer" class="card-text">{{ producto.offer ? ` Descuento ${ producto.discount } %` : '' }}</p>
        <p v-else> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, praesentium magnam eaque odit, Quas.</p>
      </div>
      <div class="ml-auto">
          <button type="button" @click="agregarProductoALaVenta(producto, $index)" class="btn btn-success m-2">Vender</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data: () => ({
    contador: 0
  }),
   methods:{
    agregarProductoALaVenta(producto, index) {
      this.$store.dispatch("agregarProductosAlCarritoDeCompras", {producto, index});
    },
  },
};
</script>

<style></style>
