<template>

<div class="row row-cols-1 row-cols-md-3 m-3" >
  <div class="col mb-4"  v-for="(producto, $index) in $store.state.productList" :key="$index">
    <div class="card h-100">
      <img src="@/assets/product.png" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">{{ producto.name }}</h5>
        <h6 class="card-subtitle mb-2 text-muted"> ${{ producto.price }}</h6>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
      <div class="card-footer">
          <button class="btn btn-secondary" @click="contador--">-</button> {{ contador }} <button class="btn btn-dark" @click="contador++"> + </button> <button type="button" @click="agregarProductoALaVenta(producto, $index)" class="btn btn-success">Vender</button>
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
