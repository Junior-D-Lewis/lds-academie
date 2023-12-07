import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Form, FormControl, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { NavDropdown } from "react-bootstrap";
import { faFlag } from "@fortawesome/free-solid-svg-icons";

import "./style.css";
import logo from "../../assets/logo.png";

export default function index() {
  return (
    <div>
      <ul
        className="nav nav-pills nav-fill gap-2 p-1 small shadow-sm"
        id="pillNav1"
        role="tablist"
        style={
          {
            "--bs-nav-link-color": "var(--bs-black)",
            "--bs-nav-pills-link-active-color": "var(--bs-primary)",
            "--bs-nav-pills-link-active-bg": "var(--bs-white)",
          } as React.CSSProperties
        }
      >
        <li className="nav-item" role="presentation">
          <img
            src={logo}
            className="nav-link h-28 w-40"
            id="home-tab2"
            role="tab"
            aria-selected="true"
          />
          <ul>
            <li>batissez votre avenir,</li>
            <li>enrichissez votre présent</li>
          </ul>
        </li>
        <li className="nav-item" role="presentation">
          <Form
            className="nav-link"
            id="search-form"
            role="search"
            aria-selected="false"
          >
            <FormControl
              type="text"
              id="search-input"
              placeholder="Recherchers"
              className="mr-sm-2"
            />
          </Form>
        </li>
        <li className="nav-item" role="presentation">
          <a
            className="nav-link"
            href="#acontact"
            id="accueil"
            data-bs-toggle="tab"
            role="tab"
            aria-selected="false"
          >
            Nous contacter
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            className="nav-link"
            href="#client"
            id="accueil"
            data-bs-toggle="tab"
            role="tab"
            aria-selected="false"
          >
            Espace client
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <div
            className="nav-link"
            id="social-icons"
            role="tab"
            aria-selected="false"
          >
            <FontAwesomeIcon icon={faFacebook} className="social-icon" />
            <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
            <FontAwesomeIcon icon={faTwitter} className="social-icon" />
            <FontAwesomeIcon icon={faYoutube} className="social-icon" />
          </div>
        </li>
        <li className="nav-item" role="presentation">
          <NavDropdown title="LANGUES" id="nav-dropdown">
            <NavDropdown.Item href="#francais">Français</NavDropdown.Item>
            <NavDropdown.Item href="#anglais">Anglais</NavDropdown.Item>
          </NavDropdown>
        </li>
      </ul>
    </div>
  );
}
