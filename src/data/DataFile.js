export const fetchCoinData=async(count)=>{
    const response= await fetch(`https://coinranking1.p.rapidapi.com/coins?limit=${count}`,{
      method:'GET',
      params: {
        referenceCurrencyUuid: 'yhjMzLPhuIDl',
        timePeriod: '24h',
        tiers: '1',
        orderBy: 'marketCap',
        orderDirection: 'desc',
        limit: '50',
        offset: '0'
      },
      headers: {
        'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
        'x-rapidapi-key': '3ec1e98b70mshc5af36a92a38b50p1d6625jsn541231dac3cc'
      }
    })
    const data=await response.json()
    return data
  }
  
  
  export const fetchCoinNews=async(count)=>{
    const response= await fetch(`https://bing-news-search1.p.rapidapi.com/news/search?q=cryptocurrency&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`,{
      method:'GET',
      params: {safeSearch: 'Off', textFormat: 'Raw'},
      headers: {
        'x-bingapis-sdk': 'true',
        'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
        'x-rapidapi-key': '3ec1e98b70mshc5af36a92a38b50p1d6625jsn541231dac3cc'
      }
    })
    const data=await response.json()
    return data
  }

  export const fetchCoinDetail=async(coinid)=>{
    const response= await fetch(`https://coinranking1.p.rapidapi.com/coin/${coinid}`,{
      method:'GET',
      params: {referenceCurrencyUuid: 'yhjMzLPhuIDl', timePeriod: '24h'},
      headers: {
        'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
        'x-rapidapi-key': '3ec1e98b70mshc5af36a92a38b50p1d6625jsn541231dac3cc'
      }
    })
    const data=await response.json()
    return data
  }

  export const fetchCoinDetailChart=async({coinid,timePeriod})=>{
    const response= await fetch(`https://coinranking1.p.rapidapi.com/coin/${coinid}/history`,{
      method:'GET',
      params: {referenceCurrencyUuid: 'yhjMzLPhuIDl', timePeriod},
      headers: {
        'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
        'x-rapidapi-key': '3ec1e98b70mshc5af36a92a38b50p1d6625jsn541231dac3cc'
      }
    })
    const data=await response.json()
    return data
  }
  
  
