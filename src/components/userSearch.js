export default function UserSearch() {

    // affichage
    return (
        <div className="container row d-flex flex-row border border-3 rounded-4 border-danger mt-4 ">
            <div className="col-md-8 col-12 mt-3 ">

                <div className=" form-floating mb-3 flex-nowrap shadow-sm">
                    <input type="text" class="form-control" placeholder="Search something" aria-label="search" />
                    <label for="floatingInput">Email address</label>
                </div>

                <div className=" row d-flex flex-row mb-3 px-0s justify-content-between px-0 ">
                    <div className="col-12 col-md-4 mb-2">
                        <select className="form-select shadow-sm " aria-label="Default select example">
                            <option selected>Date</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>

                    <div className="col-12 col-md-4 mb-2">
                        <select className="form-select shadow-sm " aria-label="Default select example">
                            <option selected>Type</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    
                    <div className="col-12 col-md-4 mb-2">
                        <select className="form-select shadow-sm" aria-label="Default select example">
                            <option selected>Lieu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>

                </div>

            </div>
            <div className="col-4">
                bouton rechercher
            </div>

        </div>
    )
}