import { useState } from "react"

export default function EventCourt(props) {
    console.log(props.data);
    let indexElem = 8
    const [indexPage, setN] = useState(1)

    let cardEvent = props.data.filter((elem, index) => index < indexPage * indexElem).map((elm, i) => {
        return <div className="card" style={{ width: 18 + 'rem' }} key={i} onclick={() => props.setPage("details")}>
            <img src="..." className="card-img-top" alt="..." />

            <div className="card-body">
                <h6 className="card-title">{props.data[i].fields.categorie_de_la_manifestation}</h6>
                <h5 className="card-title">{props.data[i].fields.nom_de_la_manifestation}</h5>
                <p className="card-text">{props.data[i].fields.descriptif_court}</p>
                {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
            </div>
        </div>
    })

    // affichage
    return (
        <div>
            <h2>Résultats</h2>
            <div className="container">
                <div className="container d-flex flex-row mb-5">
                    {cardEvent}
                </div>
                <nav aria-label="Page navigation example">
                    <ul class="pagination">
                        <li class="page-item">
                            <a class="page-link" href="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                            </a>
                        </li>
                        <li class="page-item"><a class="page-link" href="#">{indexPage}</a></li>
                        <li class="page-item"><a class="page-link" href="#">{indexPage + 1}</a></li>
                        <li class="page-item"><a class="page-link" href="#">{indexPage + 2}</a></li>
                        <li class="page-item">
                            <a class="page-link" href="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}


