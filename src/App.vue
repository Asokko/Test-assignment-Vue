<template>
   <v-app id="app">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list>
        <v-list-item v-for="item in items" :key="item.title" :to="item.link">
          <v-list-item-content>
            <v-list-item-title>{{item.title}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

     <v-main>
       <v-container fluid>
        <router-view />
        </v-container>
     </v-main>
  </v-app>
    
</template>
<script>
 export default {
   name: 'App',
   data() { 
     return{items:[
       {title:'Planets', link:'/planets'},
       {title:'Statistics', link:'/statistics'}
     ],
     drawer: null}
      }
  }
</script>

<style scoped>
  #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>