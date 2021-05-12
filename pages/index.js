import Link from "next/link";
import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout title="Peluqueria | Simbiosis">
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
          <Link href="/contact">
            <button className="draw meet">Contacto</button>
          </Link>
          <Link href="/gallery">
            <button className="draw meet">Galeria</button>
          </Link>
        </div>
      </main>
    </Layout>
  );
}
