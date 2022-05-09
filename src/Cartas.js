import Card from "./Card"
import image1 from "./assets/astro1.jpg"
import image2 from "./assets/lake2.jpeg"
import image3 from "./assets/wildlife3.jpg"
import image4 from "./assets/equipo4.jpeg"

const detalle = [
    {
        id: 1,
        title: "Astrofotografía",
        texto: "¿Alucinas con la vía láctea y las auroras boreales? Aquí encontrarás información necesaria para planificar tu salida nocturna, ¡perfecto para los amantes de las constelaciones y los cielos estrellados!",
        imagen: image1,
        enlace: "Más información" 
    },
    {
        id: 2,
        title: "Paisajes",
        texto: "¿Eres amante de los bosques, las montañas y los ríos? Si la fotografía panorámica es lo tuyo, aquí encontrarás la mejor información para poder lograr esa captura de las maravillas de la naturaleza. Desde aquí directo a instagram!",
        imagen: image2,
        enlace: "Más información"
    },
    {
        id: 3,
        title: "Vida silvestre",
        texto: "Que el único disparo realizado hacia un animal sea el de una cámara. Encuentra aquí la mejor información sobre equipamiento, zonas de avistamiento y de cómo retratar la vida silvestre con el menor impacto posible.",
        imagen: image3,
        enlace: "Más información"
    },
    {
        id: 4,
        title: "Equipamiento",
        texto: "¿Quieres partir con este maravilloso pasatiempo? ¿No sabes qué equipo escoger? ¡No te preocupes! Haz clic en el enlace y podrás acceder a una gran cantidad de recursos para poder elegir la mejor opción para tu bolsillo.",
        imagen: image4,
        enlace: "Ir al blog"
    }
]

let Cartas = () => {
    return <div className="container d-flex justify-content-center">
        <div className="row justify-content-center">
            {detalle.map((props) =>
                <div className="col-md-3" style={{width:"18rem"}} key={props.id}><Card
                    title={props.title}
                    texto={props.texto}
                    imagen={props.imagen}
                    enlace={props.enlace}/>
                </div>
            )}
        </div>
    </div>
}

export default Cartas

//<div className="col-md-3"><Card /></div>