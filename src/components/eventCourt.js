export default function EventCourt(props) {

    const newData = props.data.filter((elem, index) => index < 4).map((elm, i) => {
        return <div className="card">
            <img src="..." className="card-img-top" alt="..." />

            <div className="card-body">
                <h6 className="card-type">Théâtre</h6>
                <h5 className="card-title">Château de Biron</h5>
                <p className="card-text">Venez visiter notre somptueux château mes ptits DEV</p>
                {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
            </div>
        </div>
    })

    const newData2 = props.data.filter((elem, index) => (index > 3 && index < 8)).map((elm, i) => {
        return <div className="card">
            <img src="..." className="card-img-top" alt="..." />

            <div className="card-body">
                <h6 className="card-type">Cinéma</h6>
                <h5 className="card-title">Avatar 2</h5>
                <p className="card-text">Venez visiter notre somptueux château mes ptits DEV</p>
                {/* <a href="#" class="btn btn-primary">Go somewhere</a > */}
            </div>
        </div>
    })
    console.log(newData);


    // affichage
    return (
        <div>
            <h2>Résultats</h2>
            <div className="container">
                <div className="container d-flex flex-row mb-5">
                    {newData}
                </div>
                <div className="container d-flex flex-row mb-5">
                    {newData2}
                </div>
            </div>
        </div>
    )
}