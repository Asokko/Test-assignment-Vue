<template>
  <div>
      <v-row>
        <v-card class="mx-auto d-flex justify-start mb-6 pa-5" tile max-width="344" v-for="planet in allPlanets" :key="planet.name">
          <v-card-text>
            <div>{{planet.name}}</div>
          </v-card-text>
          <v-card-actions>
            <v-btn class="learn" text color="deep-purple accent-4">
                <router-link :to="{name: 'planets', params: {name: planet.name}}" class="title">learn more</router-link>
            </v-btn>
          </v-card-actions>
        </v-card>  
   </v-row>
    <v-btn class="learn" text color="deep-purple accent-4" @click="countAdd(),axiosPlanets(counter)">next</v-btn>
    <v-btn class="learn" text color="deep-purple accent-4" @click="countSub(),axiosPlanets(counter)">back</v-btn>
  </div>
</template>
<script>

import {mapGetters, mapActions} from 'vuex'

export default {
  name: 'App',
  data(){
    return{counter:1}
  },
  computed: mapGetters(["allPlanets"]),
  methods: {
    ...mapActions(["axiosPlanets"]),
    countAdd:function(){
      this.counter+=1
    },
    countSub:function(){
      if(this.counter>1){
        this.counter-=1
      }
    }
    },
  async mounted(){
    this.axiosPlanets()
  }
};
</script>

<style scoped>
  .planets {
    order: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 1rem;
  }
  .learn{
    margin:auto;
    width:100%;
  }
</style>