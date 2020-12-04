<template>
<div>
    <v-row>
        <div v-if="this.$route.params.name=='people'">
            <v-card class="mx-auto flex  justify-start mb-6 pa-5 contentStats" tile max-width="344" v-for="stats in allStats" :key="stats.name">
                <v-card-title>name:{{stats.name}}</v-card-title>
                <v-card-text>height:{{stats.height}}</v-card-text>
                <v-card-text>mass:{{stats.mass}}</v-card-text>
                <v-card-text>hair_color:{{stats.hair_color}}</v-card-text>
                <v-card-text>skin_color:{{stats.skin_color}}</v-card-text>
                <v-card-text>eye_color:{{stats.eye_color}}</v-card-text>
                <v-card-text>birth_year:{{stats.birth_year}}</v-card-text>
                <v-card-text>gender:{{stats.gender}}</v-card-text>
                <v-card-text>created:{{stats.created}}</v-card-text>
                <v-card-text>edited:{{stats.edited}}</v-card-text>
        </v-card>  
        <v-btn class="learn" text color="deep-purple accent-4" @click="countSub(),axiosPeople(counter)">back</v-btn>
        <v-btn class="learn" text color="deep-purple accent-4" @click="countAdd(),axiosPeople(counter)">next</v-btn>
      
       
        </div >
        <div v-if="this.$route.params.name=='planets'">
            <v-card class="mx-auto align-content-center justify-start mb-6 pa-5" tile v-for="stats in allStats" :key="stats.name">
                <v-card-title>{{stats.name}}</v-card-title>
                <v-card-text>{{stats.rotation_period}}</v-card-text>
                <v-card-text>{{stats.diametr}}</v-card-text>
                <v-card-text>{{stats.climate}}</v-card-text>
                <v-card-text>{{stats.gravity}}</v-card-text>
                <v-card-text>{{stats.terrain}}</v-card-text>
                <v-card-text>{{stats.surface_water}}</v-card-text>
                <v-card-text>{{stats.population}}</v-card-text>
                <v-card-text>{{stats.created}}</v-card-text>
                <v-card-text>{{stats.edited}}</v-card-text>
        </v-card> 
        <v-btn class="learn" text color="deep-purple accent-4" @click="countSub(),axiosPlanet(counter)">back</v-btn>
        <v-btn class="learn" text color="deep-purple accent-4" @click="countAdd(),axiosPlanet(counter)">next</v-btn> 
        </div >
        <div v-if="this.$route.params.name=='films'">
            <v-card class="mx-auto align-content-center justify-start mb-6 pa-5" tile v-for="stats in allStats" :key="stats.name">
                <v-card-title>title{{stats.title}}</v-card-title>
                <v-card-text>episode id{{stats.episode_id}}</v-card-text>
                <v-card-text>opening_crawl{{stats.opening_crawl}}</v-card-text>
                <v-card-text>director{{stats.director}}</v-card-text>
                <v-card-text>producer{{stats.producer}}</v-card-text>
                <v-card-text>release date{{stats.release_date}}</v-card-text>
                <v-card-text>created{{stats.created}}</v-card-text>
                <v-card-text>edited{{stats.edited}}</v-card-text>
        </v-card> 
        <v-btn class="learn" text color="deep-purple accent-4" @click="countSub(),axiosFilm(counter)">back</v-btn>
        <v-btn class="learn" text color="deep-purple accent-4" @click="countAdd(),axiosFilm(counter)">next</v-btn> 
        </div >
        <div v-if="this.$route.params.name=='species'">
            <v-card class="mx-auto align-content-center justify-start mb-6 pa-5" tile v-for="stats in allStats" :key="stats.name">
                <v-card-title>{{stats.name}}</v-card-title>
                <v-card-text>classification{{stats.classification}}</v-card-text>
                <v-card-text>designation{{stats.designation}}</v-card-text>
                <v-card-text>average heigh{{stats.average_heigh}}</v-card-text>
                <v-card-text>skin colors{{stats.skin_colors}}</v-card-text>
                <v-card-text>hair colors{{stats.hair_colors}}</v-card-text>
                <v-card-text>eye_colors{{stats.eye_colors}}</v-card-text>
                <v-card-text>average lifespan{{stats.average_lifespan}}</v-card-text>
                <v-card-text>homeworld{{stats.homeworld}}</v-card-text>
                <v-card-text>language{{stats.language}}</v-card-text>
                <v-card-text>created{{stats.created}}</v-card-text>
                <v-card-text>edited{{stats.edited}}</v-card-text>
        </v-card> 
        <v-btn class="learn" text color="deep-purple accent-4" @click="countSub(),axiosSpecies(counter)">back</v-btn>
        <v-btn class="learn" text color="deep-purple accent-4" @click="countAdd(),axiosSpecies(counter)">next</v-btn> 
        </div >
        <div v-if="this.$route.params.name=='vehicles'">
            <v-card class="mx-auto align-content-center justify-start mb-6 pa-5" tile v-for="stats in allStats" :key="stats.name">
                <v-card-title>name{{stats.name}}</v-card-title>
                <v-card-text>model{{stats.model}}</v-card-text>
                <v-card-text>manufacturer{{stats.manufacturer}}</v-card-text>
                <v-card-text>cost in credits{{stats.cost_in_credits}}</v-card-text>
                <v-card-text>length{{stats.length}}</v-card-text>
                <v-card-text>max atmosphering speed{{stats.max_atmosphering_speed}}</v-card-text>
                <v-card-text>crew{{stats.crew}}</v-card-text>
                <v-card-text>passengers{{stats.passengers}}</v-card-text>
                <v-card-text>cargo capacity{{stats.cargo_capacity}}</v-card-text>
                <v-card-text>consumables{{stats.consumables}}</v-card-text>
                <v-card-text>vehicle class{{stats.vehicle_class}}</v-card-text>
                <v-card-text>created{{stats.created}}</v-card-text>
                <v-card-text>edited{{stats.edited}}</v-card-text>
        </v-card> 
        <v-btn class="learn" text color="deep-purple accent-4" @click="countSub(),axiosVehicle(counter)">back</v-btn>
        <v-btn class="learn" text color="deep-purple accent-4" @click="countAdd(),axiosVehicle(counter)">next</v-btn> 
        </div >
        <div v-if="this.$route.params.name=='starships'">
            <v-card class="mx-auto align-content-center justify-start mb-6 pa-5" tile v-for="stats in allStats" :key="stats.name">
                <v-card-title>name{{stats.name}}</v-card-title>
                <v-card-text>model{{stats.model}}</v-card-text>
                <v-card-text>manufacturer{{stats.manufacturer}}</v-card-text>
                <v-card-text>cost in credits{{stats.cost_in_credits}}</v-card-text>
                <v-card-text>length{{stats.length}}</v-card-text>
                <v-card-text>max atmosphering speed{{stats.max_atmosphering_speed}}</v-card-text>
                <v-card-text>crew{{stats.crew}}</v-card-text>
                <v-card-text>passengers{{stats.passengers}}</v-card-text>
                <v-card-text>cargo capacity{{stats.cargo_capacity}}</v-card-text>
                <v-card-text>consumables{{stats.consumables}}</v-card-text>
                <v-card-text>hyperdrive rating{{stats.vehicle_class}}</v-card-text>
                <v-card-text>MGLT{{stats.MGLT}}</v-card-text>
                <v-card-text>starship class{{stats.starship_class}}</v-card-text>
                <v-card-text>created{{stats.created}}</v-card-text>
                <v-card-text>edited{{stats.edited}}</v-card-text>
        </v-card> 
        <v-btn class="learn" text color="deep-purple accent-4" @click="countSub(),axiosStarships(counter)">back</v-btn>
        <v-btn class="learn" text color="deep-purple accent-4" @click="countAdd(),axiosStarships(counter)">next</v-btn> 
        </div >
        
         
        
   </v-row>
</div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'
export default {
  name: 'App',
  data(){
    return{
        counter:1,
        people:"people"
    }
  },
  computed:{      
        ...mapGetters(["allStats"]),
       },
    methods: {
        ...mapActions(["axiosRoot","axiosPeople","axiosPlanet","axiosFilm,axiosSpecies,axiosVehicle,axiosStarships"]),
        countAdd:function(){
            console.log("+1")
        this.counter+=1
        },
        countSub:function(){
        if(this.counter>1){
            console.log("-1")
            this.counter-=1
        }
        }
    },
        async mounted(){
            let name=this.$route.params.name
            this.axiosRoot(name)
        }
}
</script>
<style lang="scss" scoped>
    .contentStats{
        align-content: flex-start;
    }
</style>

