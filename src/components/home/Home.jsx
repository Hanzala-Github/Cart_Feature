import React, { useState } from "react";
import "./style.scss";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { CardData } from "..";
import { addToCart } from "../../store/features/cartSlice";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

function Home() {
  // This is the variables and functions return part.........
  const dispatch = useDispatch();

  //call add To Cart
  const send = (e) => {
    dispatch(addToCart(e));
    toast.success("Item add to cart")
  };

  const [cartData, setcartData] = useState(CardData);
  console.log(cartData);

  // ........This is the JSX return part................//
  return (
    <section className="iteam_section mt-4 container">
      <h2 className="px-4" style={{ fontWeight: 400 }}>
        Restaurants in Ahmedabad Open now
      </h2>
      <div className="row mt-2 d-flex justify-content-around align-items-center">
        {cartData.map((card, index) => (
          <Card
            key={card.id}
            style={{ width: "22rem", border: "none" }}
            className="hove mb-4"
          >
            <Card.Img variant="top" className="cd" src={card.imgdata} />

            <div className="card_body">
              <div className="upper_data d-flex justify-content-between align-items-center">
                <h4 className="mt-2">{card.dish}</h4>
                <span>&nbsp;{card.rating}</span>
              </div>

              <div className="lower_data d-flex justify-content-between ">
                <h5>{card.address}</h5>
                <span>₹ {card.price}</span>
              </div>
              <div className="extra"></div>

              <div className="last_data d-flex justify-content-between align-items-center">
                <img src={card.arrimg} className="limg" alt="" />
                <Button
                  style={{
                    width: "150px",
                    background: "#ff3054db",
                    border: "none",
                  }}
                  variant="outline-light"
                  className="mt-2 mb-2"
                  onClick={() => send(card)}
                >
                  Add TO Cart
                </Button>
                <img src={card.delimg} className="laimg" alt="" />
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default Home;
