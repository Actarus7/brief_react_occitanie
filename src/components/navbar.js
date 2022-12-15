export function Navbar(props) {
    return (

        <nav class="navbar navbar-expand-lg bg-red">
            <div class="container-fluid  ">

                <img src="/icone1.jpg" alt="icon" width="80" height="70" className="mx-5 ms-0" />

                <a class="navbar-brand text-white" >Agenda culturel en Occitanie</a>


                <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>


                <div class="collapse navbar-collapse flex-row-reverse" id="navbarNav">
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