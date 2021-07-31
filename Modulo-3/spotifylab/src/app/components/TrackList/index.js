import { List, Avatar } from 'antd';



const TrackList = ({results=[],onPlaySong=()=>{}}) => (

    <List
        style={{
            maxHeight:'80vh',
            overflow:'auto'
        }}
        itemLayout="horizontal"
        dataSource={results}
        renderItem={
            track=> (
                <List.Item
                    onClick={()=>onPlaySong(track)}
                >
                    <List.Item.Meta 
                       
                        title={track.name}
                        description={`Artist:${track.artists? track.artists[0].name : "Unknown "} - Duration:${track.duration_ms}`}
                    
                    />
                </List.Item>
            )
        }
    />

)

export default TrackList