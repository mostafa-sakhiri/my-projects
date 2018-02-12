<template>
  <div id="search-bar" >

      <ul type="none">
          <li> Brand </li>
          <li v-for="brand in brands"> {{ brand }}</li>
      </ul>

      <ul type="none">
          <li> Processor </li>
          <li v-for="processor in processors"> {{ processor }} </li>
      </ul>

      
  </div>
</template>

<script>


export default {


  data () {
    return {

        brands: ["Asus","Toshiba","Macbook"],
        processors: ["intel core i7","intel core i5","intel core i3","intel core duo"]
     
    }
  }


  
}
</script>

<style>


#search-bar ul {
    padding: 0;
    color: white;
}


#search-bar > ul > li {
    padding: 5px 10px;
    margin-bottom: 1px;
    background: #222;
}

#search-bar > ul > li:first-child {
    background-color: #1abc9c;
}

</style>
