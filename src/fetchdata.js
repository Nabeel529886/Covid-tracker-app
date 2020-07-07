import axios from 'axios'
import world from './world.json'

let url = "https://covid-19-coronavirus-statistics.p.rapidapi.com/v1"

const urlDescription = {
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com",
        "x-rapidapi-key": "1f2b79fe9cmsha747d1fc9d3f4f2p1ffbbbjsn6ecd6133f5fa"
    }
}


export const fetchTotalData = async (name) => {
    let response = await axios.get(`${url}/total?country=${name}`, urlDescription)
    if (response.data.message !== "OK"){
        return {
            response: "No data available for this country",
            status: false
        }
    } 
    return {
        response,
        status: true
    }
}

export const fetchCountries = async () => {
    let response = world.layers
    return response
}

export const fetchStatsData = async (name) => {
    if (name === ""){
        return {data: {data: {covid19Stats: []}}}
    }
    let response = await axios.get(`${url}/stats?country=${name}`, urlDescription)
    return response
}

export const fetchCountryFlags = async (name) => {
    if (name === ""){
        return {data: [{flags: null}]}
    }
    let response = await axios.get(`https://restcountries.eu/rest/v2/name/${name}?fullText=true`)
    return response
}
