<template>

        <form id="product-form" class="row" >
                <div class="col-md-4"> <input class="form-control" type="text"   v-model="product.name" placeholder="name" required/></div>
                <div class="col-md-4"> <input class="form-control" type="number" v-model="product.size" placeholder="size" required/></div>
                <div class="col-md-4"> <input class="form-control" type="number" v-model="product.weight" placeholder="weight" required/></div>

                <div class="col-md-4">
                     <select class="form-control" v-model="product.processor" required>
                            <option v-for="processor in processors" > {{ processor }} </option>
                     </select>
                </div>

                <div class="col-md-4"> <input class="form-control" type="number" v-model="product.ram" placeholder="ram" required/></div>
                <div class="col-md-4"> <input class="form-control" type="number" v-model="product.price" placeholder="price" required/></div>
                <div class="col-md-4"> <input class="form-control" type="number" v-model="product.qty" placeholder="quantity" required/></div>

               
                <slot name="btn"></slot>
        </form>

</template>

<script>


export default {

  props: ["product"],

  data () {
    return {

        processors: ["Intel core duo" , "Intel core i3" , "Intel core i5" , "Intel core i7"]
    }
  }
  
}
</script>

<style>

#product-form > h1 {
    color: #222;
    margin: 30px 0;
}

#product-form > div {
    margin-top: 10px;
}

#product-form .btn {
    margin-bottom: 10px;
    background: #1abc9c;
    border-color: #1abc9c;
    color: white;
}

#product-form .btn:hover {
    background: #16a085;
    border-color: #16a085;
}


</style>
