import { useState } from 'react';
import { Layout,Row,Col } from 'antd';
import {SearchInput, TrackDetail, TrackList} from '@components';
import {searchTrack} from '@services/api-spoti';

const {Content}= Layout
function Home(){
    const [results,setResults] = useState([])
    const [song,setSong] = useState({})
    //async && await
   /*
    async function nombre(){

    }*/
    const onSearch = async (value) =>{
      try{
        /// await searchTrack(value)
        //es regressar toda la respuesta del backend
        //const response = await searchTrack(value)
        // ess destructurarlo y obtener la llave(S) que nos importen
        const {data} = await searchTrack(value)
        setResults(data.tracks.items)
        console.log("la respusta",data)
      }catch(error){
        console.log("el error",error)

      }
    }

    const onPlaySong =(song) => setSong(song)

   return( 
   
    <Layout
        className="site-layout"
        style={{ padding: '0 24px 24px' }}>

        <Content
            className="site-layout-background"
            style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
            backgroundColor:'#fff'
            }}>

            <SearchInput
                onSearch={onSearch}
            />

            <Row>
                <Col span={12}>
                    <TrackList 
                    results={results}
                    onPlaySong={onPlaySong}

                    />
                </Col>
                <Col span={12}>
                    {   
                    //["name","album","artist"]
                        Object.keys(song).length ?
                        <TrackDetail {...song}/>
                        : ""
                    }
                </Col>
               
            </Row>

            </Content>
        </Layout>
    )


}

export default Home;