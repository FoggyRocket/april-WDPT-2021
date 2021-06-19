


const Card  = ({name,image,description})=>(
    <div className="uk-width-1-3">

        <div className="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin " uk-grid>
            <div className="uk-card-media-left uk-cover-container">
                <img src={image} alt="" uk-cover={true}/>
                <canvas width="600" height="400"></canvas>
            </div>
            <div>
                <div className="uk-card-body">
                    <h3 className="uk-card-title">{name}</h3>
                    <p>{description}</p>
                </div>
            </div>
        </div>

    </div>

)

export default Card;