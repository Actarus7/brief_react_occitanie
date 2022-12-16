import { useState } from "react"

export default function EventCourt(props) {
    // console.log(props.data);
    let indexElem = 8
    const [indexPage, setN] = useState(2)

    let cardEvent = props.data.filter((elem, index) => index > 7 && index < indexPage * indexElem).map((elm, i) => {

        return <div className="card d-flex m-1 p-1 flex-fill border border-danger border-2 rounded-5" style={{ width: 18 + 'rem' }} key={i} onclick={() => props.setPage("details")}>
            <img src="..." className="card-img-top" alt="..." />

            <div className="card-body">
                <h6 className="card-title text-center">{elm.fields.type_de_manifestation}</h6>
                <h5 className="card-title text-left">{elm.fields.nom_de_la_manifestation}</h5>
                <p className="card-text text-left text-justify">{elm.fields.descriptif_court}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    })

    // affichage
    return (
        <div>
            <div className="container m-4">

                <h5>Résultats :</h5>

                <div className='row g-2 border border-danger border-3 rounded-5 p-2'>

                    <div className="col-4.col-sm-6">

                    </div>

                    {cardEvent}


                    <nav aria-label="Page navigation">
                        <ul class="pagination justify-content-center">
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
            </div>
        </div>
    )
}


