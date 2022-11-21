import "./Addcart.css";

function AddCard(values) {

  return (
    <div className="container">
    <div className="row cartdiv">
    <div className="col-3">
    <img src="https://i.dummyjson.com/data/products/28/thumbnail.jpg"></img>
    
    </div>
     <div className="col-3 productdesc">
    <h4>TP-link N300 WiFi Wireless Router</h4>
    <p>TL-WR845N | 300Mbps Wi-Fi Speed | Three 5dBi high gain Antennas | IPv6 Compatible | AP/RE/WISP Mode | Parental Control | Guest Network</p>
    <p className="price">&#8377; 619</p>
     </div>

     <div className="col-3">
    <div className="quantity">
      <h4>Quantity</h4>
     <select className="form-select" aria-label="Default select example">
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="4">4</option>
  <option value="5">5</option>
  <option value="6">6</option>
  <option value="7">7</option>
  <option value="8">8</option>
  <option value="9">9</option>
</select>
    </div>
     </div>
     <div className="col-3">
    
    </div>
     </div>
     </div>
  );
}

export default AddCard;