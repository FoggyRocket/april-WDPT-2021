import axios from 'axios'


export const searchTrack = (text) =>{
    return (
        axios.get(`https://api.spotify.com/v1/search?q=${text}&type=track&market=MX`, 
        {
            headers:{
                Authorization:'Bearer BQAquBiDgYoiBEmC_ceSm4QkhDsuOADWEcXRblzJ3J8py8FNTdtamQnxHHJpuEW64h-FqTdtEL_FiS0aauakgSO5NdSRM7LjJNSvKw9OPRoUQang8diVqsyOiPeFmlCyavhZ-iPPmIUYW4h6cGwkRtTfnCh8EY_1JmQu'
            }
        })
    )
}