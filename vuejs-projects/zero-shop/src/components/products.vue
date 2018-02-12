<template >

  <div id="products" class="container-fluid">
      
      <h1>Our products</h1>

      <div class="col-md-2 ">
          <search-bar></search-bar>
      </div>
      

      <div class=" col-md-offset-1 col-md-9" >

        <!-- displaying the products -->
        <div v-for="product in products" class="product row">

                <h3> {{ product.name }} </h3>
                <!-- image of the product-->
                <div class="col-md-3">
                        <img src="../assets/asus.jpg" height="" width="100%"/>
                </div>

                <div class="col-md-3" >
                    <div > Size <span> {{ product.size }} </span> </div>
                    <div > weight <span> {{ product.weight }} kg</span> </div>
                </div>

                <div class="col-md-3">
                <div > Processor <span> {{ product.processor }} </span> </div>
                <div > Ram <span> {{ product.ram }} gb </span></div>
                </div>

                <div class=" col-md-offset-1 col-md-2">
                    <div class="style"><span> {{ product.price }} $</span> </div>

                    <router-link v-bind:to="'/product/' + product._id">
                       <span> <button class="btn btn-default " > See more details </button> </span>
                    </router-link>
                </div>
        </div>

      </div>
         
  </div>

</template>

<script>

import searchBar from './reusable-components/search-bar'

export default {

 
  components:  {
        'search-bar': searchBar
  },

  data () {
    return {
        products: []
    }
  },

  created() {
        this.fetchProducts();
  },

  methods: {
    fetchProducts () {
              this.axios.get('http://localhost:4000/api/products').then((response) => {
                  this.products = response.data;
              });
      }
      
  }
  
}
</script>

<style>

#products {
    color: #222
}


#products h1 {
    color: #222;
    margin-bottom: 40px;
}

#products .product {
    margin-bottom: 2px;
    padding: 10px 0;
    border-bottom: 1px solid  lightgray;
}  

#products .product h3{
    color: #16a085;
}

#products .product > div {
    padding: 10px 15px;
}

#products .product > div > div:first-child{
    margin:  30px 0;
}

#products .product span {
    float: right;
}

#products .product .btn {
    background: #16a085;
    border-color: #16a085;
    color: white;
    margin-top: 10px;
}

#products .product .btn:hover {
    background: #1abc9c;
    border-color: #1abc9c;
}

#products .product .style {
    color: #16a085;
    font-size: 20px;
}

</style>
