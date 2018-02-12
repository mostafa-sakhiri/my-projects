import products from '../components/products.vue'
import product from '../components/product.vue'
import addProduct from '../components/addProduct.vue'

export default [
  { path: '/', component: products },
  { path: '/add', component: addProduct },
  { path: '/product/:id' , component: product }
]
