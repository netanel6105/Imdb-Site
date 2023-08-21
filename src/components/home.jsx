import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Footer from './footer'
import VodInput from './vodInput'
import VodLis from './vodLis'
import VodStrip from './vodStrip'

const Home = () => {

    const [ar,setAr] = useState([])


    useEffect(()=>{
        doApi('red');
    },[])

    const doApi = async(_SearchQ) =>{
        let url=`http://www.omdbapi.com/?s=${_SearchQ}&apikey=c253e9ac`

        let resp = await fetch(url);
        let data = await resp.json()
        console.log(data.Search);
        setAr(data.Search)
    }




    return (
        <React.Fragment>
            <VodStrip />
            <VodInput />
            < VodLis vod_ar={ar} />
            < Footer />
        </React.Fragment>

    )
}

export default Home