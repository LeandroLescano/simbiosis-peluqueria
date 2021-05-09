import React from "react";
import Head from "next/head";

function Meta() {
  return (
    <Head>
      <title>Peluqueria | Simbiosis</title>
      <meta
        name="description"
        content="Simbois Peluqueria, 20 años de experiencia más la utilizacion de productos de la mejor calidad mundial nos transforman en unos de los centros de estetica mas importantes de la zona."
      />
      <link rel="icon" href="/favicon.ico" />
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-wEmeIV1mKuiNpC+IOBjI7aAzPcEZeedi5yW5f2yOq55WWLwNGmvvx4Um1vskeMj0"
        crossorigin="anonymous"
      ></link>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-p34f1UUtsS3wqzfto5wAAmdvj+osOnFyQFpp4Ua3gs/ZVWx6oOypYoCJhGGScy+8"
        crossorigin="anonymous"
      ></script>
      <link rel="stylesheet" href="jquery.justified.images.css"></link>
      <script src="jquery.justified.images.js"></script>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    </Head>
  );
}

export default Meta;
