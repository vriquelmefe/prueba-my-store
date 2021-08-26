import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    newProduct: {},
    busquedaPorNombre: '',
    carritoDeCompras: [],
    totalVentas : 0,
    productList: [
      { name: "Casa", id: 1 ,price: 1050, category:  'hogar', color:  'green', offer: false, discount: 20 },
      { name: "Bote", id: 2 , price: 1000 , category: 'deporte' , color: 'black' , offer: true, discount: 50},
      { name: "Avión",id: 3 ,  price: 2400, category: 'deporte' , color:  'red' , offer: false, discount: 50},
      { name: "Motocicleta",id: 4 ,  price: 350990, category: 'deporte', color:  'yellow', offer: true, discount: 50 },
      { name: "Computadora", id: 5, price: 2000 , category: 'aprendizaje' , color: 'yellow', offer: true, discount: 60},
      { name: "Silla",id: 6 , price: 34990, category:'hogar', color: 'yellow' , offer: false, discount: 50},
      { name: "Espejo",id: 7 , price: 2500 , category:'hogar', color: 'black' , offer: true, discount: 50},
      { name: "Mesa",id: 8 , price: 10500, category: 'hogar' , color: 'green'  , offer: true, discount: 40},
      { name: "Café", id: 9 , price: 100 , category: 'hogar' , color:  'red', offer: true, discount: 50},
      { name: "Espejo", id: 10 , price: 100 , category:'hogar', color: 'black' , offer: false, discount: 50},
      { name: "Bicicleta", id: 11 , price: 250990, category: 'deporte' , color:  'yellow' , offer: true, discount: 50},
      { name: "Gato", id: 12 , price: 26990, category:  'mascotas', color:   'red', offer: true, discount: 10},
      { name: "Parlante", id: 13 , price: 234990, category:'juegos', color: 'green'  , offer: false, discount: 50},
      { name: "Espejo", id: 14 , price: 45990 , category:'hogar', color: 'black', offer: true, discount: 50 },
      { name: "Plancha", id: 15 , price: 10990, category: 'hogar' , color:   'red', offer: true, discount: 50},
      { name: "Libro", id: 16 , price: 54990, category: 'aprendizaje' , color:  'green', offer: false, discount: 70},
    ],
  },
  getters: {
    productosFiltradosPorNombre(state) {
      return state.productList.filter(
        (producto) => producto.name === state.busquedaPorNombre
      );
    },
    // productosFiltrados(state) {
      
    //   return state.productList
    //   .map((producto) => Object.values(producto).join("  -  "))
    //   .filter((item) => item.includes(state.busquedaProducto))
    // },
    valorTotalVenta(state){
      return state.carritoDeCompras.reduce((accumulator, producto) => {
        accumulator = accumulator + (producto.price - (producto.price * producto.discount) / 100) * producto.cantidad
        return accumulator
      }, 0 )
    },
  },
  mutations: {
    SET_BUSQUEDA_NAME(state, value) {
      state.busquedaPorNombre = value;
    },
    ADD_PRODUCT(state, newProduct) {
      state.productList.push(newProduct);
    },
    SET_BUSQUEDA(state, value) {
      state.busquedaPorNombre = value;
    },
    ADD_CANTIDAD_LISTA(state, productIndex) {
      state.carritoDeCompras[productIndex].cantidad++ ;
    },
    ADD_VENTAS(state, producto) {
      state.carritoDeCompras.push(producto);
    },
    REMOVE_CANTIDAD_CARRITO(state, productIndex){
      state.carritoDeCompras[productIndex].cantidad--;
    },
    REMOVE_ITEM_CARRITO(state, index){
      state.carritoDeCompras.splice(index, 1)
    }
  },
  actions: {
    agregarProductosAlCarritoDeCompras({ state, commit }, { producto }) {
      const productoEncarritoDecompras = state.carritoDeCompras.findIndex(
        (productoCarrito) =>{ 
        return productoCarrito.id === producto.id && productoCarrito.category === producto.category ? producto : undefined
        }
      )
      setTimeout(() => {
        if(productoEncarritoDecompras >= 0) {
          commit("ADD_CANTIDAD_LISTA", productoEncarritoDecompras);
        }else{
          setTimeout(() => {
            commit("ADD_VENTAS", { ...producto, cantidad: 1 });
            alert(`${ producto.name} - Producto agregado con exito!`);
  
          },500)
        }
        
      },1000)
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
    descontarProductoCarrito({ state,commit }, index){
      setTimeout(() =>{
        if(state.carritoDeCompras[index].cantidad >= 2){
          commit('REMOVE_CANTIDAD_CARRITO', index)
        }else {
          commit('REMOVE_ITEM_CARRITO', index)
        }
      },1000 )
    },
    sumarProductoCarrito( { commit }, index){
      setTimeout(() =>{
        commit('ADD_CANTIDAD_LISTA', index)
      },1000)
    },
 
  },
  modules: {},
});
