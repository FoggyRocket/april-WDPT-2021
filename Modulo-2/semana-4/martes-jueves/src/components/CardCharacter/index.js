
// const nombre =({param}) =>()
const CardCharacter = ({image, name, species, location, status,origin ,...rest }) =>(
    <div className="uk-card uk-card-default uk-width-1-2@m">
        <div className="uk-card-header">
            <div className="uk-grid-small uk-flex-middle" uk-grid>
                <div className="uk-width-auto">
                    <img className="uk-border-circle" width="40" height="40" src={image} />
                </div>
                <div className="uk-width-expand">
                    <h3 className="uk-card-title uk-margin-remove-bottom">{name}</h3>
                                                                    {/* {`${..} - ${..}`}  */}
                    <p className="uk-text-meta uk-margin-remove-top">{status} - {species}</p> 
                </div>
            </div>
        </div>
        <div className="uk-card-body"> 
            <p>Last known location: {location.name}</p>
            <p>Last known location: {origin.name}</p>
        </div>
        <div className="uk-card-footer">
            <a href="#" className="uk-button uk-button-text">Read more</a>
        </div>
    </div>
)

export default CardCharacter