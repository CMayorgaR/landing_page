let Jumbotron = () => {
    return <div>
        <div className="jumbotron mx-4 p-3 mb-2 bg-dark text-white bg-opacity-75">
            <div className="d-flex flex-column text-start ">
                <h2 className="fw-bolder fst-italic">¡Bienvenido!</h2>
                <p className="fs-3 font-monospace">Aquí podrás encontrar contenido interesante sobre uno de mis mayores pasatiempos: la fotografía. 
                ¿A quién no le capturar una hermosa puesta de sol, una montaña nevada o el centro galáctico? ¿O quizás retratos y ciudades?
                No importa cual sea el contenido, una cosa es segura: a todos nos gusta compartir una buena foto. 
                ¡Haz clic en el contenido que más te llame la atención!</p>
                <p><a href="" target="_blank" className="btn btn-primary">Ir a mi galería</a></p>
            </div>
        </div>
    </div>
} 

export default Jumbotron;