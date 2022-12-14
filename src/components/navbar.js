export function Accueil() {
    return (

        <nav class="navbar navbar-expand-lg bg-red">
            <div class="container-fluid d-flex ">
                <div className="">
                    <img src="/icone1.jpg" alt="icon" width="70" height="60" />
                </div>
                <div>
                    <a class="navbar-brand">Agenda culturel en Occitanie</a>
                </div>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div className="text-end">
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Accueil</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">A Propos</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>







    )
}