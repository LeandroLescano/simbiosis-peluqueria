import Link from "next/link";
import MediaContainer from "./components/media-container";

export default function Home() {
  return (
    <div className="container">
      <main>
        <h2 className="m-0">Desde 2004</h2>
        <h1 className="title">Simbiosis</h1>
        <h2 className="mb-4">peluquería y estética</h2>

        <p className="fs-4 text-center w-75">
          <span className="highlight">Simbiosis</span> es un centro de estética
          unisex supervisado por sus dueños y atendido por estilistas
          profesionales que utilizan los mejores productos del mercado
          internacional para el cuidado de tu belleza integral. Acercate o
          encontranos en nuestras redes sociales para conocer las novedades que
          nuestro equipo tiene para ofrecerte. Te esperamos!
        </p>

        <div className="button-sections d-none d-md-block">
          <button className="draw meet">Servicios</button>
          <button className="draw meet">Contacto</button>
          <Link href="/gallery">
            <button className="draw meet">Galeria</button>
          </Link>
        </div>
      </main>

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
    </div>
  );
}
