import { useEffect, useState } from "react";
//import ProductCard from "../../components/Home/ProductCard/ProductCard";
import Addcart from "../../components/Cartpage/Addcart";
import Footer from "../../components/Shared/Footer/Footer";
import Header from "../../components/Shared/Header/Header";

function Cartpage() {
  const [carts, setCart] = useState([]);
  useEffect(() => {
    fetch("Cart.json")
      // calling json function.
      .then((res) => res.json())
      // listening for json function to return.
      .then((res) => {
        setCart(res);
      });
    }, []);
  return (
    <div>
      <Header />
      
        
    <h2 className="heading">Add to cart Details</h2>

      <div>
      <div className="row">
          {carts.map((Cart, i) => (
            <div className="col-12">
              <Addcart item={Cart} index={i} />
              <h1 id="header1"></h1>
            </div>
          ))}
        </div>
      <Addcart />
      </div>
    
      <Footer />
    </div>
  );
}

export default Cartpage;