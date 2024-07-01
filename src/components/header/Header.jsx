import React from "react";
import "./style.scss";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function Header() {
  const { carts } = useSelector((state) => state.allCart);

  // .........This is the JSX return part............//
  return (
    <>
      <Navbar style={{ height: "60px", background: "#000", color: "#fff" }}>
        <Container>
          <NavLink to="/" className="text-decoration-none text-light mx-2">
            <h3 className="text-light">Ecommerce</h3>
          </NavLink>

          <NavLink to="/cart" className="text-decoration-none text-light mx-2">
            <div id="ex4">
              <span
                className="p1 fa-stack fa-2x has-badge"
                data-count={carts.length}
              >
                <FaShoppingCart />
              </span>
            </div>
          </NavLink>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
