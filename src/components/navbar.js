export function Navbar() {
    return (

        <nav className="navbar navbar-expand-lg bg-red">
            <div className="container-fluid  ">

                <img src="/icone1.jpg" alt="icon" width="80" height="70" className="mx-5 ms-0" />

                <a className="navbar-brand text-white" >Agenda culturel en Occitanie</a>


                <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>


                <div className="collapse navbar-collapse flex-row-reverse no-wrap" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active txt-yl" aria-current="page" href="#">Accueil</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link txt-yl" href="#">A Propos</a>
                        </li>
                    </ul>
                </div>
            </div>

        </nav>

    )
}