export default function UserSearch(props) {
    let selectorTypeOptions = props.typeCategories.map((elm, index) => {
        return <option value={elm} key={index}>{elm}</option>
    })
    // affichage
    return (
        <div className=" row d-flex flex-row border border-3 rounded-4 border-danger mt-4 ">
            <div className="col-md-10 col-12 mt-3 ">

                <div className=" form-floating mb-3 flex-nowrap shadow-sm">
                    <input type="text" className="form-control" placeholder="Cherchez un evenement" aria-label="search" />
                    <label for="floatingInput">Cherchez un evenement</label>
                </div>

                <div className=" row d-flex flex-row mb-3 px-0s justify-content-between px-0 ">

                    <div className="col-12 col-md-4 mb-2">
                        <input type="date" className="form-control" id="date" />
                    </div>


                    <div className="col-12 col-md-4 mb-2">
                        <select className="form-select shadow-sm " aria-label="Default select example" onChange={event=> props.handleUserTypeChoice(event.target.value)}>
                            <option selected>Type d'évènement</option>
                            {selectorTypeOptions}
                        </select>
                    </div>

                    <div className="col-12 col-md-4 mb-2">
                        <input type="text" className="form-control" placeholder="Lieu de l'évènement" aria-label="search" />
                        {/* <label for="floatingInput">Lieu de l'évènement</label> */}
                    </div>
                    {/* <div className="col-12 col-md-4 mb-2">
                        <select className="form-select shadow-sm" aria-label="Default select example">
                            <option selected>Lieu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div> */}
                </div>
            </div>

            <div className="col-12 col-md-2 d-md-flex align-items-center justify-content-center">

                <div className="d-grid gap-2">
                    <button className="btn bt-rsc shadow mb-2 mb-md-0 bold zoom-bt " type="submit">Rechercher
                        <i className="bi bi-search  ms-2 ms-md-0"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}