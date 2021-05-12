import React from 'react'
import MediaContainer from "../components/media-container";

function Footer() {
    return (
        <footer>
        <div className="row">
          <div className="col col-md-3 fs-5 border-end">
            <b>Dirección</b>
            <br /> Necochea 181, Ramos Mejia <p>Tel: 4656-6900</p>
          </div>
          <div className="col col-md-3 fs-5 border-end">
            <b>Horario</b> <br /> Martes a Sabados de <br />
            10:00hs a 18:30hs
          </div>
          <div className="col col-md-6 fs-5 border-top-sm">
            <b>Novedades</b> <br /> Mantenete al tanto de las nuevas tendencias
            a nivel mundial siguiendonos en las redes sociales.
            <div className="d-flex justify-content-end p-2 float-end">
              <MediaContainer icon="facebook" />
              <MediaContainer icon="twitter" />
              <MediaContainer icon="instagram" />
            </div>
          </div>
        </div>
      </footer>
    )
}

export default Footer
