import './Cards.css';

function Cards({ imagedata }) {
    let getimagedata = imagedata.map(getdata => {
        return (getdata)
    })
    console.log(getimagedata.imageUrl)
    return (
        <>
            <div className="card">
                <img className="card-img-top" src={getimagedata.imageUrl} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                </div>
            </div>
        </>
    )
}
export default Cards;