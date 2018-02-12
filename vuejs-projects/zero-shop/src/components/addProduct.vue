<template>

  <div id="add-product" class="container">
      
        <h1> Add a product </h1>

        <product-form  v-bind:product="product">  
            <div class="col-md-4" slot="btn"> 
                <button type="reset" class="btn btn-default col-xs-12" > Reset the form </button>
            </div> 
            <div class="col-md-4" slot="btn"> 
                <button class="btn btn-default col-xs-12" @click.prevent="addProduct()" > Add the product</button>
            </div>
            
        </product-form>

        <div class="col-md-12" v-if="submitted"> The product is added successfuly </div>
        
  </div>
</template>

<script>
import productForm from './reusable-components/product-form'

export default {

  components: {
        'product-form' : productForm
  },

  data () {
    return {
        product: {
            name: '',
            size: '',
            weight: '',
            processor: '',
            ram: '',
            price: '',
            qty: ''
        },

        submitted: false
    }
  },

  methods: {
      
      addProduct (){
            this.axios.post('http://localhost:4000/api/product/add' , this.product).then((response) => {
                  this.submitted = true;
              });
      }
  }
  
}
</script>

<style>

#add-product > div {
    text-align: center;
    padding: 10px;
    margin-top: 10px;
    border-radius: 5px;
    background: #34495e;
    color: white;
}

</style>
