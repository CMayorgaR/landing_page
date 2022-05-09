let Card = (props) => {
    return (
        <div className = "card text-center bg-dark justify-center mb-10px">
            <img src={props.imagen} alt="" className= "card-img-top"/>
            <div className = "card-body">
                <h4 className= "card-title text-primary">{props.title}</h4>
                <p className= "card-text text-secondary text-light">{props.texto}</p>
                <a href="#!" className="btn btn-outline-primary">{props.enlace}</a>
            </div>
        </div>
    )
}


export default Card;