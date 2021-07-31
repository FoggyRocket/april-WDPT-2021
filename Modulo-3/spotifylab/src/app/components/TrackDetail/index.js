import { Card } from 'antd';

const { Meta } = Card;


function TrackDetail({album,name,duration_ms,popularity,artists,preview_url}){
    return(

        <Card
            hoverable
            style={{width:340}}
            cover={<img alt="Album Artist" src={album? album.images[2].url : ""}/>}
           
        >
            <Meta title={name} />
            <Meta 
                description={`Duration: ${duration_ms} - Popularity: ${popularity}`}
            />
            <Meta 
                description={`Album: ${album? album.name : 'N/A'} - Artist: ${artists? artists[0].name : 'Unknown'}`}
            />
            <audio src={preview_url} controls></audio>
        </Card>
    )
}

export default TrackDetail