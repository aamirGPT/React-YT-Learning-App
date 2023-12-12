import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
    return (
        <div>
            <nav
                className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
            >
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        ReactLearning
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse NavCss"
                        id="navbarNavAltMarkup"
                    >
                        <div className="navbar-nav">
                            <Link
                                className="nav-link active"
                                aria-current="page"
                                to="/"
                            >
                                Home
                            </Link>
                            <Link className="nav-link" to="/AboutUs">
                                About
                            </Link>
                        </div>
                        <div className="form-check form-switch switchCss">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                role="switch"
                                id="flexSwitchCheckDefault"
                                onClick={props.toggleMode}
                            />
                            <label
                                className={`form-check-label text-${
                                    props.mode === "light" ? "dark" : "light"
                                }`}
                                htmlFor="flexSwitchCheckDefault"
                            >{`Enable ${
                                props.mode === "light" ? "dark" : "light"
                            } Mode`}</label>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}
