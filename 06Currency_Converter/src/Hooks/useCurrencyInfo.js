import { useEffect, useState } from "react"

function useCurrencyInfo (currency){
    const api = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    const [data , setData] = useState({})
    useEffect(()=> {
        fetch(api)
        .then( (res) => JSON.parse(res))
        .then( (res) => setData(res[currency]))
        console.log(data)
    } , [currency])
    return data
}

export default useCurrencyInfo