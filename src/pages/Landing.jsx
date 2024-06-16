import React from "react";
import Gif from "../img/chatgif.gif";
import { Link } from "react-router-dom";
import Search from "../img/search-engine.png";
import Res from "../img/responsive-design.png";
import Cyber from "../img/cyber-security.png";
import Speak from "../img/speak.png";
function Landing() {
  return (
    <div className="landing">
      <nav class="navbars">
        <div class="navdiv">
          <div class="LOGo">
            <p className="texts">Rose-Chat</p>
          </div>
          <ul>
            <li className="texts">HOME</li>
            <li className="texts">FEATURES</li>
            <li className="texts">USAGE</li>
            <li className="texts">CONTACT</li>
            <li>
              <Link to="/login" className="texts">
                LOGIN
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Rose to gif */}
      <h1 className="tiles">Rose-chat Applications</h1>
      <h5 className="stay">Stay-Connected...</h5>
      <img src={Gif} alt="" className="pos" />
      {/* Gif */}
      <hr />
      <br />
      <br />
      {/* features */}
      <div>
        <header class="header">
          <h1 class="header_title">FEATURES</h1>
          <p class="header_subtitle">HIGHLIGHTS</p>
          <p class="header_description">
            "Chat Anytime, Anywhere - Stay Connected!"
          </p>
        </header>

        <main class="card_grid">
          <section class="card cyan">
            <h2 class="card_title">Search</h2>
            <p class="card_content">
              Monitors activity to identify project roadblocks
            </p>
            <img class="card_img" src={Search} alt="" />
          </section>

          <section class="card red">
            <h2 class="card_title">Responsiveness</h2>
            <p class="card_content">
              Instantaneous responsiveness ensures seamless interaction and
              engagement within the chat application
            </p>
            <img class="card_img" src={Res} alt="" />
          </section>

          <section class="card blue">
            <h2 class="card_title">Security</h2>
            <p class="card_content">
              The chat app keeps your messages safe from prying eyes with strong
              security
            </p>
            <img class="card_img" src={Cyber} alt="" />
          </section>

          <section class="card orange">
            <h2 class="card_title">Seamless Communication</h2>
            <p class="card_content">
              The messaging feature of the chat application allows users to
              exchange text, images, and emojis❤
            </p>
            <img class="card_img" src={Speak} alt="" />
          </section>
        </main>
      </div>
      {/* Freatures */}
      <br />
      <hr />

      <br />
      <br />
      <h1 class="header_title">INSTRUCTIONS</h1>
      <br />
      <ul class="process">
        <li class="process__item">
          <span class="process__number">1</span>
          <span class="process__title">Create an Account</span>
          <span class="process__subtitle">
            Create your account by entering your username, email address, and
            password.
          </span>
        </li>

        <li class="process__item">
          <span class="process__number">2</span>
          <span class="process__title">Login</span>
          <span class="process__subtitle">
            To log in, please provide your username/email and password.
          </span>
        </li>

        <li class="process__item">
          <span class="process__number">3</span>
          <span class="process__title">Start Converstaion</span>
          <span class="process__subtitle">
            Initiate conversations by searching for your friends' names and
            sending messages through the chat interface.
          </span>
        </li>
      </ul>

      <br />
      <br />
      <br />

      {/* Footer */}
      <footer>
        <div class="footer">
          <div class="row">
            <ul>
              <li>
                <p>Contact</p>
              </li>
              <li>
                <p>Our Services</p>
              </li>
              <li>
                <p>Privacy Policy</p>
              </li>
              <li>
                <p>Terms & Conditions</p>
              </li>
              <li>
                <p>Career</p>
              </li>
            </ul>
          </div>

          <div class="row">
            Rose-Chat Copyright © 2024 - All rights reserved || Designed By:
            Mahesh and RoseMary
          </div>
        </div>
      </footer>
      {/*  */}
    </div>
  );
}

export default Landing;
