<template>
  <div id="app">
    <div id="nav">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#"><img src="./assets/logo.jpg" alt="" width="40px"></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item mx-3">
              <router-link to="/">Inicio</router-link>
            </li>
            <li class="nav-item mx-3">
              <router-link to="/products">Productos</router-link>
            </li>
            <li class="nav-item mx-3">
              <router-link to="/newproduct">Nuevo Producto</router-link>
            </li>
            <li class="nav-item mx-3">
              <router-link to="/busqueda">Busqueda</router-link>
            </li>
            <li class="nav-item mx-3">
              <router-link to="/carritocompras">Bolsa de Compra <i class="fas fa-shopping-cart fa-2x">{{ $store.state.carritoDeCompras.length}} </i></router-link>
            </li>
          </ul>
          
        </div>
      </nav>

<!-- 
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item mx-3">
              
            </li>
            <li class="nav-item mx-3">
              
            </li>
            <li class="nav-item mx-3">
              
            </li>
            <form class="form-inline my-2 my-lg-0">
              <input  class="form-control mr-sm-2" type="search"  aria-label="Search">
              <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form> 
          </ul>
        </div>
      </nav>       -->
    </div>
    <router-view />
  </div>
</template>
<style scoped>
li  i{
  vertical-align: middle;
}
a{
  color: white;
  font-weight: bold;
}
a:hover{
  color: chocolate;
  text-decoration: none;
  font-size: 19px;
}
</style>
