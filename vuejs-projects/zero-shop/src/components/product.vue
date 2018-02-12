<template>
  <div id="product" class="container">

      <div class="row">
          <h2> {{ product.name }} </h2>
      </div>

      <div class="row" v-if="!modifyMode">
            <div > Product size <span> {{ product.size }}</span> </div>
            <div > Product weight <span> {{ product.weight }} kg </span> </div>
            <div > Product processor <span> {{ product.processor }} </span> </div>
            <div > Product ram <span> {{ product.ram }} gb</span> </div>
            <div > Product price <span> {{ product.price }} $</span> </div>
            <div > Quantity left <span> {{ product.qty }} </span> </div>
            
            <button class="btn btn-default col-xs-3"> Add to cart </button>
            <button class="btn btn-default col-xs-3" @click="dropProduct()"> remove the product </button>
            <button class="btn btn-default col-xs-3" @click="modifyMode = true"> modify the product </button>
      </div>

      <!-- for modifying the product -->
      <div class="row" v-else-if="modifyMode">

          <product-form  v-bind:product="product">  
                <div class="col-md-4" slot="btn"> 
                    <button class="btn btn-default col-xs-12" @click.prevent="exitModification()" > return to the product page</button>
                </div>
                
                <div class="col-md-4" slot="btn"> 
                    <button class="btn btn-default col-xs-12" @click.prevent="modifyProduct()" > Confirm modification</button>
                </div> 
          </product-form>

      </div>
          
  </div>
</template>

<script>

// imports
import productForm from "./reusable-components/product-form";

export default {

  components: {
        "product-form" : productForm
  },
    
  data (){
    return {
        id: this.$route.params.id,
        modifyMode: false,
        product: {}
    }
  },

  methods: {

      exitModification (){
            this.modifyMode = false;
      },

      modifyProduct (){

          this.axios.put('http://localhost:4000/api/product/' + this.id, this.product ).then((response) => {});
          this.exitModification();
      },

      dropProduct (){

           this.axios.delete('http://localhost:4000/api/product/' + this.id ).then((response) => {
               location.href = "/"; 
           });
           
      }
  },

  created (){

              // getting data about the product from api
              this.axios.get('http://localhost:4000/api/product/' + this.id ).then((response) => {
                  this.product = response.data;
              });
  }
  
}
</script>

<style>

#product  h2 {
    color: #1abc9c;
    margin: 50px 0;
}

#product > div > div {
    font-size: 20px;
    border-bottom: 1px solid gray;
    padding-bottom: 5px;
    margin-bottom: 20px;
}

#product > div > div > span {
    float: right;
    color: #1abc9c;
}

#product .btn {
    float: right;
    background: #1abc9c;
    border-color: #1abc9c;
    color: white;
    margin-left: 10px;
}

#product .btn:hover {
    float: right;
    background: #16a085;
    border-color: #16a085;
}
</style>
