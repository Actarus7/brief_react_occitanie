export function Navbar(props) {
    return (

        <nav className="navbar navbar-expand-lg bg-red">
            <div className="container-fluid  ">

                <img src="/icone1.jpg" alt="icon" width="110" height="70" className="mx-5 ms-0" />

                <span className="navbar-brand text-white" >Agenda culturel</span>


                <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>


                <div class="collapse navbar-collapse flex-row-reverse no-wrap" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active txt-yl" aria-current="page" href="#" onClick={() => props.setPage('accueil')}>Accueil</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link txt-yl" href="#" onClick={() => props.setPage('a propos')}>A Propos</a>
                        </li>
                    </ul>
                </div>
            </div>

        </nav>

    )
}