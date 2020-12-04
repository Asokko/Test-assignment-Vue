<template>
  <div>
    <v-list>
        <v-list-item>
          <v-list-item-content>
           <v-btn class="learn" text color="deep-purple accent-4">
             <router-link :to="{name: 'statistics', params: {name:'people'}}" class="title">people</router-link>
           </v-btn>
            <v-btn class="learn" text color="deep-purple accent-4">
             <router-link :to="{name: 'statistics', params: {name:'planets'}}" class="title">planets</router-link>
           </v-btn>
           <v-btn class="learn" text color="deep-purple accent-4">
             <router-link :to="{name: 'statistics', params: {name:'films'}}" class="title">films</router-link>
           </v-btn>
           <v-btn class="learn" text color="deep-purple accent-4">
             <router-link :to="{name: 'statistics', params: {name:'species'}}" class="title">species</router-link>
           </v-btn>
           <v-btn class="learn" text color="deep-purple accent-4">
             <router-link :to="{name: 'statistics', params: {name:'vehicles'}}" class="title">vehicles</router-link>
           </v-btn>
           <v-btn class="learn" text color="deep-purple accent-4">
             <router-link :to="{name: 'statistics', params: {name:'starships'}}" class="title">starships</router-link>
           </v-btn>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      
    </div>
</template>
   
<script>
import {mapGetters, mapActions} from 'vuex'
/**/
export default {
  name: 'App',
}
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