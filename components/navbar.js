import React from 'react'
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
    return (
        <>
        <div className="d-lg-none position-absolute menu-button"><a className="btn" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
        <FontAwesomeIcon icon={faBars}/>
        </a></div>
        <div className="navbar-buttons d-none d-lg-block position-absolute">
          <Link href="/">
            <button className="draw meet">Nosotros</button>
          </Link>
            <button className="draw meet">Servicios</button>
          <Link href="/contact">
            <button className="draw meet">Contacto</button>
          </Link>
          <Link href="/gallery">
            <button className="draw meet">Galeria</button>
          </Link>
        </div>
        <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
            <div className="offcanvas-header">
                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body d-flex justify-content-center flex-column">
            <Link href="/">
                <button className="draw meet">Nosotros</button>
            </Link>
                <button className="draw meet">Servicios</button>
            <Link href="/contact">
                <button className="draw meet">Contacto</button>
            </Link>
            <Link href="/gallery">
                <button className="draw meet">Galeria</button>
            </Link>
            </div>
        </div>
        </>
    )
}

export default Navbar
