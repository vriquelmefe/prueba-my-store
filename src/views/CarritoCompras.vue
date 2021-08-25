<template>
  <div>
      <h1>Productos</h1>
     <ProductosCarrito />
  </div>
</template>
<script>

import ProductosCarrito from '@/components/ProductosCarrito.vue'

export default {
  name: "CarritoCompras",
  components: {
    ProductosCarrito
  },
}
</script>