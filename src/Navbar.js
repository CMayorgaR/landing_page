let Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">El álbum de Camo</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-flex flex-row-reverse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Instagram</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Twitter</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Contáctame!</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default Navbar; 