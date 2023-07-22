import React from "react";
import styled from "styled-components";
import { NavLink, Outlet, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "./ReduxToolkit/Slices/AuthSlice";
import { Button, Modal } from "react-bootstrap";
import { useContext } from "react";
import { CartContext } from "./Cart/CartContext";
import { useState } from "react";
import CartProduct from "./Cart/CartProduct";
import Notifaction from "./Notifaction";


//styled component
const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  padding: 1rem;
  background: black;
  color: white;
  .inner-div {
    width: 100%;

    h3 a {
      text-decoration: none;
      color: white;
      cursor: pointer;
    }
    .navlink {
      width: 50%;
      margin: 0 0.3rem;
      a {
        text-decoration: none;
        color: white;
        margin: 0 0.5rem;
        font-size: 1.1rem;
      }
    }
    a.active {
      color: red;
    }
  }
`;

function Header() {
  const cart = useContext(CartContext);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const productsCount = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

  //react-redux function  over here
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <>
      <Notifaction />
      <Wrapper>
        <div className="w-100 inner-div d-flex justify-content-evenly align-items-center">
          <h3 className="m-0">
            <Link to={"/"}>Ecommerce</Link>
          </h3>
          <div className="d-flex justify-content-evenly align-items-center navlink">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

            {!isLoggedIn && <NavLink to={"/login"}>Login</NavLink>}
            {isLoggedIn && (
              <Link onClick={logoutHandler} to="/login">
                Logout
              </Link>
            )}
          </div>
          
        </div>
        <div className="w-100 inner-div d-flex justify-content-evenly align-items-center">
          <div className="d-flex justify-content-evenly align-items-center navlink">
            {isLoggedIn && <NavLink to={"/home"}>Home</NavLink>}
            {isLoggedIn && <NavLink to={"/"}>Store</NavLink>}
            {isLoggedIn && <NavLink to={"/about"}>About</NavLink>}
            {isLoggedIn && <NavLink to={"/contact"}>Contact</NavLink>}
          </div>
          {isLoggedIn && (
              <Button
              onClick={handleShow}
              style={{ width: "3rem", height: "3rem", position: "relative" }}
              variant="outline-primary"
              className="rounded-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                fill="currentColor"
              >
                <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
              </svg>

              <div
                className="rounded-circle bg-danger d-flex justify-content-center align -items-center"
                style={{
                  color: "white",
                  width: "1.5rem",
                  height: "1.5rem",
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  transform: "translate(25%, 25%)"
                }}
              >
                {productsCount}
              </div>
            </Button>
          )}
        </div>
        <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title align="center">Shopping cart</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                {productsCount > 0 ? (
                  <>
                    <p>Items in your cart:</p>
                    {cart.items.map((currentProduct, idx) => (
                      <CartProduct
                        key={idx}
                        id={currentProduct.id}
                        price={currentProduct.price}
                        quantity={currentProduct.quantity}
                      ></CartProduct>
                    ))}
                    <h1>Total: {cart.getTotalCost().toFixed(2)}</h1>
                  </>
                ) : (
                  <span>There is no item in your cart!</span>
                )}
              </Modal.Body>
            </Modal>
      </Wrapper>
      <Outlet />
    </>
  );
}

export default Header;
