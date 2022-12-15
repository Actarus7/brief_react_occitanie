
export default function EventCourt(props) {

    const newData = props.data.filter((elem, index) => index < 8).map((elm, i) => {
        return <div className="card d-flex m-1 p-1 flex-fill border border-danger border-2 rounded-5" style={{ width: 18 + 'rem' }}>
            <img src="..." className="card-img-top" alt="..." />

            <div className="card-body">
                <h6 className="card-title text-center">Théâtre</h6>
                <h5 className="card-title text-left">Château de Biron</h5>
                <p className="card-text text-left text-justify">Venez visiter notre somptueux château mes ptits DEV</p>
                {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
            </div>
        </div>
    })

    console.log(newData);


    // affichage
    return (
        <div>
            <div className="container">

                <h5>Résultats :</h5>

                <div className='row g-2 border border-danger border-3 rounded-5 p-2'>

                    <div className="col-4.col-sm-6">

                    </div>

                    {newData}


                    <nav aria-label="Page navigation">
                        <ul class="pagination justify-content-center">
                            <li class="page-item">
                                <a class="page-link bg-warning text-dark" href="#" aria-label="Previous">
                                    <span aria-hidden="true">&lt;</span>
                                </a>
                            </li>
                            <li class="page-item"><a class="page-link bg-warning text-dark" href="#">1</a></li>
                            <li class="page-item"><a class="page-link bg-warning text-dark" href="#">2</a></li>
                            <li class="page-item"><a class="page-link bg-warning text-dark" href="#">3</a></li>
                            <li class="page-item"><a class="page-link bg-warning text-dark" href="#">4</a></li>
                            <li class="page-item"><a class="page-link bg-warning text-dark" href="#">...</a></li>
                            <li class="page-item"><a class="page-link bg-warning text-dark" href="#">8</a></li>
                            <li class="page-item"><a class="page-link bg-warning text-dark" href="#">9</a></li>
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


