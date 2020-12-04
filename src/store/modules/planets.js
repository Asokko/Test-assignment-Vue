import axios from 'axios'
export default{
    actions:{   
        async axiosPlanets(ctx,index=1){
            const planets = await axios.get('https://swapi.dev/api/planets/?page='+index)
            .then(response=>response.data.results)
            console.log(planets)
            ctx.commit('updatePlanets',planets)
        }, 
        /*async axiosResidents(ctx,index){
            const residents = await axios.get('http://swapi.dev/api/people/'+index)
            .then(response=>response.data.name)
            
            ctx.commit('updateResidents',residents)
        },  */      
    },
    mutations:{
        updatePlanets(state, planets){
            state.planets=planets
        },  
        /*updateResidents(state, residents){
            state.residents.unshift(residents)
            console.log(state.residents)
        },*/
    },
    state:{
        planets:[],
       // residents:[]
    },
    getters:{
        allPlanets(state){
            return state.planets
        },
       /* allResidents(state){
            
            return state.residents
        },*/
    }
    
}