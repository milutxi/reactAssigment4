export default ({actor, name, house, image}) => {
    //console.log(character)
    return <div>
    
        <div className="containerCharacter">
            <div className="left">
                <img src={image}></img>
            </div>
            <div className="middle">
                <h1 className="actor">{actor}</h1>
                <h2 className="name">{name} &bull; {house}</h2>
                
            </div>
            <div className="right">
                <h3 className="heart">&#9825;</h3>
            </div>       
        </div>
        
    </div>
}