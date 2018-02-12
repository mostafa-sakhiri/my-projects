<template>
  <div >
          <app-header></app-header>
          <router-view></router-view>
  </div>
</template>

<script>

import appHeader from './components/header'

export default {
  
  components: {
      'app-header': appHeader
  },

  data () {
    return {
     
    }
  }
  
}
</script>

<style>
@import url("https://netdna.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css");

</style>
