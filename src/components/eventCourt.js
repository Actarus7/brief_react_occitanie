import { useState } from "react"

export default function EventCourt(props) {
    //console.log(props.data);
    //let typeEvent = props.handleGetTypes
    //console.log(typeEvent)
    let indexElem = 8
    const [indexPage, setN] = useState(1)
    let cardEvent = props.data.filter((elem, index) => index >= 0 && index < indexPage * indexElem).map((elm, i) => {
        return <div className="card hover-shadow d-flex m-1 p-0 flex-fill border border-danger border-2 rounded-5" style={{ width: 18 + 'rem' }} key={i} onclick={() => props.setPage("details")}>
            <img src={`/img/${getImageType(elm.fields.type_de_manifestation)}.jpg`} className="card-img-top rounded-5" alt="..." />

            <div className="card-body">            
                <h6 className="card-title text-center">{elm.fields.type_de_manifestation}</h6><br/>
                <h5 className="card-title text-left">{elm.fields.nom_de_la_manifestation}</h5>
                <p className="card-text text-left text-justify">{elm.fields.descriptif_court}</p>
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
        else { image = 'autre' }
        return image
    }

    // affichage
    return (

        <div className='row border border-danger border-3 rounded-4 p-2 mb-4 mt-4'>
            <h5>Résultats :</h5>
            {cardEvent}
            <nav aria-label="Page navigation">
                <ul class="pagination justify-content-center mt-4">
                    <li class="page-item">
                        <a class="page-link bg-warning text-dark" href="#" aria-label="Previous">
                            <span aria-hidden="true">&lt;</span>
                        </a>
                    </li>
                    <li class="page-item"><a class="page-link page-link bg-warning text-dark" href="#">{indexPage}</a></li>
                    <li class="page-item"><a class="page-link page-link bg-warning text-dark" href="#">{indexPage + 1}</a></li>
                    <li class="page-item"><a class="page-link page-link bg-warning text-dark" href="#">{indexPage + 2}</a></li>
                    <li class="page-item">
                        <a class="page-link bg-warning text-dark" href="#" aria-label="Next">
                            <span aria-hidden="true">&gt;</span>
                        </a>
                    </li>
                    <li class="page-item">
                        <a class="page-link bg-warning text-dark" href="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>


    )
}


