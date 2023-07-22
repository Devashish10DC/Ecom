import React, { useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Footer from "../Footer";
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
  }
`;

const Home = () => {
  // react-redux section
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <>
      <div className="welcome-box">
              <header>
      <h1>The Generics</h1>
      <button class="latest-album">Get our Latest Album</button>
      <button class="play-btn">►</button>
    </header>
    
      <section id="tours" class="container">
      <h2>TOURS</h2>
      <div>
        <div class="tour-item">
          <span class="tour-date">JUL16</span>
          <span class="tour-place">DETROIT, MI</span>
          <span class="tour-spec-place">DTE ENERGY MUSIC THEATRE</span>
          <button class="buy-btn">BUY TICKETS</button>
        </div>
        <div class="tour-item">
          <span class="tour-date">JUL19</span>
          <span class="tour-place">TORONTO,ON</span>
          <span class="tour-spec-place">BUDWEISER STAGE</span>
          <button class="buy-btn">BUY TICKETS</button>
        </div>
        <div class="tour-item">
          <span class="tour-date">JUL 22</span>
          <span class="tour-place"> BRISTOW, VA</span>
          <span class="tour-spec-place">JIGGY LUBE LIVE</span>
          <button class="buy-btn">BUY TICKETS</button>
        </div>
        <div class="tour-item">
          <span class="tour-date">JUL 29</span>
          <span class="tour-place">PHOENIX, AZ</span>
          <span class="tour-spec-place"> AK-CHIN PAVILION</span>
          <button class="buy-btn">BUY TICKETS</button>
        </div>
        <div class="tour-item">
          <span class="tour-date">AUG 2</span>
          <span class="tour-place">LAS VEGAS, NV</span>
          <span class="tour-spec-place">T-MOBILE ARENA</span>
          <button class="buy-btn">BUY TICKETS</button>
        </div>
        <div class="tour-item">
          <span class="tour-date">AUG 7</span>
          <span class="tour-place">CONCORD, CA</span>
          <span class="tour-spec-place"> CONCORD PAVILION</span>
          <button class="buy-btn">BUY TICKETS</button>
        </div>
      </div>
    </section>
 
          </div>
          <Footer/>
         
    </>
  );
};

export default Home;
