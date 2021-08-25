import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    newProduct: {},
    busquedaPorNombre: '',
    busquedaPorOferta: false,
    busquedaPorColor: null,
    busquedaPorCategoría: null,
    carritoDeCompras: [],
    totalVentas : 0,
    productList: [
      { name: "Casa", id: 1 ,price: 100.0, category:  'hogar', color:  'green', stock: 50 },
      { name: "Bote", id: 2 , price: 100.0 , category: 'deporte' , color: 'black' , stock: 50},
      { name: "Avión",id: 3 ,  price: 100.0, category: 'deporte' , color:  'red' , stock: 50},
      { name: "Motocicleta",id: 4 ,  price: 100.0, category: 'deporte', color:  'yellow', stock: 50 },
      { name: "Computadora", id: 5, price: 100.0 , category: 'aprendizaje' , color: 'yellow', stock: 50},
      { name: "Silla",id: 6 , price: 100.0 , category:'hogar', color: 'yellow' , stock: 50},
      { name: "Espejo",id: 7 , price: 100.0 , category:'hogar', color: 'black' , stock: 50},
      { name: "Mesa",id: 8 , price: 100.0, category: 'hogar' , color: 'green'  , stock: 50},
      { name: "Café", id: 9 , price: 100.0 , category: 'hogar' , color:  'red', stock: 50},
      { name: "Espejo", id: 10 , price: 100.0 , category:'hogar', color: 'black' , stock: 50},
      { name: "Bicicleta", id: 11 , price: 100.0, category: 'deporte' , color:  'yellow' , stock: 50},
      { name: "Gato", id: 12 , price: 100.0, category:  'mascotas', color:   'red', stock: 50},
      { name: "Parlante", id: 13 , price: 100.0, category:'juegos', color: 'green'  , stock: 50},
      { name: "Espejo", id: 14 , price: 100.0 , category:'hogar', color: 'black', stock: 50 },
      { name: "Plancha", id: 15 , price: 100.0, category: 'hogar' , color:   'red', stock: 50},
      { name: "Libro", id: 16 , price: 100.0, category: 'aprendizaje' , color:  'green', stock: 50},
    ],
  },
  getters: {
    productosFiltradosPorNombre(state) {
      return state.productList.filter(
        (producto) => producto.name === state.busquedaPorNombre
      );
    },
    productosFiltradosPorCategoria(state) {
      return state.productList.filter(
        (producto) => producto.category === state.busquedaPorCategoria
      );
    },
    productosFiltradosPorColor(state) {
      return state.productList.filter(
        (producto) => producto.color === state.busquedaPorColor
      );
    },
    productosFiltradosPorOferta(state) {
      return state.productList.filter(
        (producto) => producto.offer === state.busquedaPorOferta
      );
    },
    productosConStock: (state) => {
      return state.productList.filter((producto) =>  producto.stock > 0).length;
    },
  },
  mutations: {
    ADD_PRODUCT(state, newProduct) {
      state.productList.push(newProduct);
    },
    SET_BUSQUEDA_NAME(state, value) {
      state.busquedaPorNombre = value;
    },
    SET_BUSQUEDA_COLOR(state, value) {
      state.busquedaPorColor = value;
    },
    SET_BUSQUEDA_CATEGORY(state, value) {
      state.busquedaPorCategoria = value;
    },
    SET_BUSQUEDA_OFFER(state, value) {
      state.busquedaPorOferta = value;
    },
    ADD_STOCK_TO_SHOPPINGLIST(state, productIndex) {
      state.carritoDeCompras[productIndex].stock += 1;
    },
    SUBSTRACT_STOCK(state,productIndex) {
      state.productList[productIndex].stock -= 1;
    },
    ADD_VENTAS(state, producto) {
      state.carritoDeCompras.push(producto);
    },
    SET_TOTAL_VENTA(state, producto) {
      state.totalVentas += producto.price;
    },
    REMOVE_PRODUCTO_CARRITO(state, productIndex){
      state.carritoDeCompras[productIndex] = -1;
    },
    // SET_CONTADOR(state){
    //   state.contador += 1;
    // },
  },
  actions: {
    agregarProductosAlCarritoDeCompras({ state, commit }, { producto }) {
      const productoEncarritoDecompras = state.carritoDeCompras.findIndex(
        (productoCarrito) => productoCarrito.id === producto.id
      )
      setTimeout(() => {
        if(productoEncarritoDecompras !== -1) {
          commit("ADD_STOCK_TO_SHOPPINGLIST", productoEncarritoDecompras);
          commit("SUBSTRACT_STOCK", producto.id);
        }else{
          commit("SUBSTRACT_STOCK", producto.id)
        }
        setTimeout(() => {
          commit("ADD_VENTAS", { ...producto, stock: state.contador });
          commit("SET_TOTAL_VENTA", producto)  
          alert(`${ producto.name} - Venta procesada con exito`);

        },1000)
        
      },1500)
    },
    async agregarProductos(context, newProduct) {
      return new Promise((resolve) => {
        setTimeout(() => {
          context.commit('ADD_PRODUCT', { ...newProduct })
          alert('Producto agregado con exito')
          resolve()
        },2000)
      })
    },
    borrarProducto({state, commit}, producto){
      const eliminandoProductoDelCarrito = state.carritoDeCompras.findIndex((productoABorrar) => productoABorrar.id === producto.id)
      if(eliminandoProductoDelCarrito !== -1) {
        commit("REMOVE_PRODUCTO_CARRITO", eliminandoProductoDelCarrito)
      }

    }
  },
  modules: {},
});
