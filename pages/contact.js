import React, {useState} from "react";
import Layout from "../components/layout";

function Contact() {
  const [toSend, setToSend] = useState({
    from_name: "",
    to_name: "",
    message: "",
    reply_to: "",
  });

  const onSubmit = (e) => {
    var toastEl = document.getElementById("successToast");
    var toastElError = document.getElementById("dangerToast");
    var toast = new bootstrap.Toast(toastEl);
    var toastError = new bootstrap.Toast(toastElError);
    e.preventDefault();
    // send(
    //   "SERVICE_ID",
    //   "TEMPLATE_ID",
    //   toSend,
    //   "USER_ID"
    // )
    //   .then((response) => {
    //     console.log("SUCCESS!", response.status, response.text);
    //   })
    //   .catch((err) => {
    //     console.log("FAILED...", err);
    //   });
    if (Math.random() < 0.5) {
      toast.show();
    } else {
      toastError.show();
    }
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <Layout title="Contacto | Simbiosis">
      <main>
        <h1>Contacto</h1>
        <div className="contact-container m-auto mb-4">
          <form onSubmit={onSubmit}>
            <div className="mb-3">
              <label htmlFor="inputNombre" className="form-label text-white">
                Nombre
              </label>
              <input
                id="inputNombre"
                type="text"
                name="from_name"
                className="form-control"
                value={toSend.from_name}
                onChange={handleChange}
                placeholder="Ingresa tu nombre..."
              />
            </div>
            <div className="mb-3">
              <label htmlFor="inputEmail" className="form-label text-white">
                Email
              </label>
              <input
                id="inputEmail"
                name="reply_to"
                type="email"
                className="form-control"
                value={toSend.reply_to}
                onChange={handleChange}
                placeholder="Ingresa tu email..."
              />
            </div>
            <div className="mb-3">
              <label htmlFor="inputMessage" className="form-label text-white">
                Mensaje
              </label>
              <textarea
                id="inputMessage"
                type="text"
                name="message"
                className="form-control"
                value={toSend.message}
                onChange={handleChange}
                placeholder="Ingresa tu mensaje..."
                maxLength="300"
              />
            </div>
            <div>
              <button className="btn btn-send">Enviar</button>
            </div>
          </form>
        </div>
        <div className="map-responsive">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.4743555540445!2d-58.56921098519381!3d-34.64272146706904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc7ef99ae402f%3A0x3ec754ef4170dda4!2sSimbiosis%20Peluquer%C3%ADa!5e0!3m2!1ses-419!2sar!4v1622554237775!5m2!1ses-419!2sar" width="768" height="300" loading="lazy" allowFullScreen></iframe>
        </div>
        </main>
         
        <div className="position-fixed bottom-0 end-0 p-3">
        <div
          className="toast align-items-center text-white bg-success"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
          id="successToast"
        >
          <div className="d-flex">
            <div className="toast-body">Mensaje envíado exitosamente!</div>
            <button
              type="button"
              className="btn-close btn-close-white me-2 m-auto"
              data-bs-dismiss="toast"
              aria-label="Close"
            ></button>
          </div>
        </div>
      </div>
        <div className="position-fixed bottom-0 end-0 p-3">
        <div
          className="toast align-items-center text-white bg-danger"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
          id="dangerToast"
        >
          <div className="d-flex">
            <div className="toast-body">
              Ha ocurrido un error al enviar el mensaje.
            </div>
            <button
              type="button"
              className="btn-close btn-close-white me-2 m-auto"
              data-bs-dismiss="toast"
              aria-label="Close"
            ></button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Contact;
