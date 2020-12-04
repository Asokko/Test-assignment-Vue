import axios from 'axios'

export default{
    actions:{
        async axiosRoot(ctx,name,index=1){
            const res = await axios.get('https://swapi.dev/api/'+name+'/?page='+index).then(response=>response.data.results)
            console.log(res)

            ctx.commit('uploadRootStatistics',res)
        },  
        async axiosPeople(ctx,index=1){
            const res = await axios.get('https://swapi.dev/api/people/?page='+index).then(response=>response.data.results)
            console.log(index)
            ctx.commit('uploadRootStatistics',res)
        }, 
        async axiosPlanet(ctx,index=1){
            const res = await axios.get('https://swapi.dev/api/planets/?page='+index).then(response=>response.data.results)
            console.log(index)
            ctx.commit('uploadRootStatistics',res)
        },
        async axiosFilm(ctx,index=1){
            const res = await axios.get('https://swapi.dev/api/films/?page='+index).then(response=>response.data.results)
            console.log(index)
            ctx.commit('uploadRootStatistics',res)
        },
        async axiosSpecies(ctx,index=1){
            const res = await axios.get('https://swapi.dev/api/species/?page='+index).then(response=>response.data.results)
            console.log(index)
            ctx.commit('uploadRootStatistics',res)
        },
        async axiosVehicle(ctx,index=1){
            const res = await axios.get('https://swapi.dev/api/vehicles/?page='+index).then(response=>response.data.results)
            console.log(index)
            ctx.commit('uploadRootStatistics',res)
        },
        async axiosStarships(ctx,index=1){
            const res = await axios.get('https://swapi.dev/api/starships/?page='+index).then(response=>response.data.results)
            console.log(index)
            ctx.commit('uploadRootStatistics',res)
        },
    },
    mutations:{
        uploadRootStatistics(state,res){
            state.rootStatistics=res
        },
    },
    state:{
        rootStatistics:[]
    },
    getters:{
        allStats(state){
            return state.rootStatistics
        }
    }
}