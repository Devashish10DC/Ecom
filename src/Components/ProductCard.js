import { useContext } from "react";
import { Button, Card, Row, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CartContext } from "./Cart/CartContext";

function ProductCard(props) {
  const product = props.product;
  const cart = useContext(CartContext);
  const productQuantity = cart.getProductQuantity(product.id);
  console.log(cart.items);
  return (
    <div>
      <Card.Body>
        <h3><Link to="/productId">{product.title}</Link></h3>
        <div>
          <img src={product.imgUrl} alt={product.title} />
        </div>
        <div>${product.price}</div>
        {productQuantity > 0 ? (
          <>
            <div as={Row}>
              <Form.Label column="true" sm="6">
                In cart: {productQuantity}
              </Form.Label>
              <>
                <Button
                  onClick={() => cart.addOneToCart(product.id)}
                  className="mx-2"
                >
                  +
                </Button>
                <Button
                  onClick={() => cart.removeOneFromCart(product.id)}
                  className="mx-2"
                >
                  -
                </Button>
              </>
            </div>
            <Button
              variant="danger"
              onClick={() => cart.deleteFromCart(product.id)}
              className="my-2"
            >
              remove from cart
            </Button>
          </>
        ) : (
          <Button
            variant="primary"
            onClick={() => cart.addOneToCart(product.id)}
          >
            Add To Cart
          </Button>
        )}
      </Card.Body>
    </div>
  );
}

export default ProductCard;
