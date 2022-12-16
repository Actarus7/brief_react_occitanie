import { useState } from "react"

export default function EventCourt(props) {
    //console.log(props.data);
    //let typeEvent = props.handleGetTypes
    //console.log(typeEvent)
    let indexElem = 8
    const [indexPage, setN] = useState(2)
    let cardEvent = props.data.filter((elem, index) => index > 7 && index < indexPage * indexElem).map((elm, i) => {
        return <div className="card" style={{ width: 18 + 'rem' }} key={i} onclick={() => props.setPage("details")}>
            <img src={`/img/${getImageType(elm.fields.type_de_manifestation)}.jpg`} className="card-img-top" alt="..." />

            <div className="card-body">
                <h6 className="card-title">{elm.fields.type_de_manifestation}</h6>
                <h5 className="card-title">{elm.fields.nom_de_la_manifestation}</h5>
                <p className="card-text">{elm.fields.descriptif_court}</p>
                {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
            </div>
        </div>
    })

    function getImageType(type) {
        let image = ""
        if (type.includes('Culturelle')) { image = 'culturel' }
        else if (type.includes('Musique')) { image = 'musique' }
        else if (type.includes('Manifestation commerciale')) { image = 'insolite' }
        else if (type.includes('Danse')) { image = 'danse' }
        else if (type.includes('Traditions et folklore')) { image = 'culturel' }
        else if (type.includes('Insolite')) { image = 'insolite' }
        else if (type.includes('Sports')) { image = 'sport' }
        else if (type.includes('Son et lumière')) { image = 'culturel' }
        else {image = 'autre'}
        return image
    }

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


