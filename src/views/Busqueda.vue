<template>
  <div>
    <FiltroPorNombre />
    <FiltroPorCategoria />
    <FiltroPorColor />
    <FiltroPorOfertas />
  </div>
</template>

<script>
import FiltroPorNombre from '@/components/FiltroPorNombre.vue'
import FiltroPorCategoria from '@/components/FiltroPorCategoria.vue'
import FiltroPorColor from '@/components/FiltroPorColor.vue'
import FiltroPorOfertas from '@/components/FiltroPorOfertas.vue'


export default {
  name: "Busqueda",
  components: {
    FiltroPorNombre,
    FiltroPorCategoria,
    FiltroPorColor,
    FiltroPorOfertas
  }
}
</script>