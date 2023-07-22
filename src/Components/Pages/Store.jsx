import { Col, Row } from "react-bootstrap";
import Footer from "../Footer";
import ProductCard from "../ProductCard";
import { productArray } from "../productStore";
import styled from "styled-components";
import { useSelector } from "react-redux";
const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  .welcome-box {
    margin: 3rem 0;
    padding-bottom: 0.9rem;
    border-bottom: 0.5px solid black;
  }
`;

function Store() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <Wrapper>
      {isLoggedIn && (
        <div>
          <div id="music" className="container">
            <header>
              <h1>The Generics</h1>
            </header>
            <h2 className="text-center">Music</h2>
            <Row xs={1} md={2} className="g-4">
              {productArray.map((product, idx) => (
                <Col align="center" key={idx}>
                  <ProductCard product={product} />
                </Col>
              ))}
            </Row>
          </div>
          <Footer />
        </div>
      )}
      {!isLoggedIn && (
        <div className="alert alert-danger display-6 my-4">
          login required to access the store
        </div>
      )}
    </Wrapper>
  );
}

export default Store;
