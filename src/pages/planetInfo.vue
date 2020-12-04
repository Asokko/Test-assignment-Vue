<template>
  <div >
    <div class="product-item">
          <div class="product-title">{{planet.name}}</div>
          <div class="product-title">{{planet.rotation_period}}</div>
          <div class="product-title">{{planet.orbital_period}}</div>
          <div class="product-title">{{planet.diameter}}</div>
          <div class="product-title">{{planet.climate}}</div>
          <div class="product-title">{{planet.gravity}}</div>
          <div class="product-title">{{planet.terrain}}</div>
          <div class="product-title">{{planet.surface_water}}</div>
          <div class="product-title">{{planet.population}}</div>
          <div class="product-title">{{planet.created}}</div>
          <div class="product-title">{{planet.edited}}</div>
          <div class="product-title">{{planet.url}}</div>
      </div>
  </div>
</template>
<script>
import {mapActions, mapGetters} from 'vuex'
/*<div class="product-title" v-for="resident in planet.residents" :key="resident" v-bind="axiosResidents(resident.replace('http://swapi.dev/api/people/',''),)">   
                {{resident}}
        */
export default {
  name: 'App',
  computed:{      
        ...mapGetters(["allPlanets","allResidents"]),
        planet(){
        let name=this.$route.params.name
        return this.allPlanets.find((p) => p.name === name) || {name:name}
        }
      },
  methods:{
      ...mapActions(["axiosResidents"]),
  },
 
    
  
};
 
</script>

<style scoped>
  

</style>