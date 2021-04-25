<template>
  <section>
    <div class="title">
      <h1>¡Contactanos!</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui, alias
        mollitia, porro omnis neque iste laborum eum ipsum necessitatibus
        corporis nulla atque vero id rerum tempore ad voluptatibus. Minus, ex.
      </p>
    </div>
    <div class="contact">
      <div class="contact-form">
        <form action="" id="form">
          <div class="row">
            <div class="input50">
              <input type="text" id="name" placeholder="Nombre(s)" />
              <i class="fas fa-check-circle"></i>
              <i class="fas fa-exclamation-circle"></i>
              <small>Mensajes de error</small>
            </div>

            <div class="input50">
              <input type="text" id="lastname" placeholder="Apellido(s)" />
              <i class="fas fa-check-circle"></i>
              <i class="fas fa-exclamation-circle"></i>
              <small>Mensajes de error</small>
            </div>
          </div>

          <div class="row">
            <div class="input50">
              <input type="email" id="email" placeholder="Correo electronico" />
              <i class="fas fa-check-circle"></i>
              <i class="fas fa-exclamation-circle"></i>
              <small>Mensajes de error</small>
            </div>

            <div class="input50">
              <input type="text" id="subject" placeholder="Asunto" />
              <i class="fas fa-check-circle"></i>
              <i class="fas fa-exclamation-circle"></i>
              <small>Mensajes de error</small>
            </div>
          </div>
          <div class="row">
            <div class="input100">
              <textarea id="message" placeholder="Mensaje"></textarea>
              <i class="fas fa-check-circle"></i>
              <i class="fas fa-exclamation-circle"></i>
              <small>Mensajes de error</small>
            </div>
          </div>

          <div class="row">
            <div class="input100">
              <input type="submit" value="¡Enviar!" />
            </div>
          </div>
        </form>
      </div>

      <div class="contact-info">
        <div class="info-box">
          <img src="../assets/img/address.png" class="contact-icon" alt="" />
          <div class="details">
            <h4>Direccion</h4>
            <p>28 Neon Tower, New York City, USA</p>
          </div>
        </div>
        <div class="info-box">
          <img src="../assets/img/email.png" class="contact-icon" alt="" />
          <div class="details">
            <h4>Email</h4>
            <a href="#">Edgar@mail.com</a>
          </div>
        </div>
        <div class="info-box">
          <img src="../assets/img/call.png" class="contact-icon" alt="" />
          <div class="details">
            <h4>Numero de telefono</h4>
            <a href="#">+34 237 213 1382</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact {
  width: 100%;
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;
}

.contact-form {
  width: calc(100% - 400px);
  padding: 60px 40px 20px;
  position: relative;
  background: var(--cultured);
}

.contact-form form {
  width: 100%;
}

.contact-form .row {
  width: 100%;
  display: flex;
}

.contact-form .input50 {
  width: 50%;
  margin: 0 10px;
}

.contact-form .input100 {
  width: 100%;
  margin: 0 10px;
}

.contact-form .row input,
.contact-form .row textarea {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  position: relative;
  font-size: 16px;
  font-weight: 300;
  border: 1px solid rgba(0, 0, 0, 0.2);
  outline: none;
  resize: none;
  color: var(--rich-black);
  background: transparent;
}

.contact-form .row textarea {
  height: 150px;
}

.contact-form .row input[type="submit"] {
  margin: 0;
  background: var(--midnight-blue);
  color: var(--just-white);
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 600;
  border: 0;
  cursor: pointer;
}

.contact-form .row input[type="submit"]:hover {
  transform: scale(0.98);
}

.contact-info {
  width: 350px;
  background: var(--cultured);
  padding: 60px 40px 20px;
}

.contact-info .info-box {
  margin-bottom: 40px;
  display: flex;
  align-items: flex-start;
}

.contact-info .info-box .contact-icon {
  width: 20px;
  margin-right: 30px;
}

.contact-info .info-box .details h4 {
  color: var(--midnight-blue);
}

.contact-info .info-box .details p .contact-info .info-box .details a {
  color: var(--rich-black);
}

/* Estilos de la validacion del formulario */
.contact-form .input50.success input {
  border-color: var(--emerald);
}

.contact-form .input50.error input {
  border-color: var(--orange-soda);
}

.input50.success i.fa-check-circle,
.input100.success i.fa-check-circle {
  visibility: visible;
  color: var(--emerald);
}

.input50.error i.fa-exclamation-circle,
.input100.error i.fa-exclamation-circle {
  visibility: visible;
  color: var(--orange-soda);
}

.input50 i,
.input100 i {
  visibility: hidden;
}

.input50 small,
.input100 small {
  visibility: hidden;
}

.input50.error small,
.input100.error small {
  visibility: visible;
  color: var(--orange-soda);
}

@media (max-width: 1068px) {
  section {
    padding: 100px 40px;
  }

  .contact {
    flex-direction: column;
  }

  .contact-form {
    width: 100%;
    padding: 30px 30px 20px;
  }

  .contact-form .row {
    flex-direction: column;
  }

  .contact-form .input50,
  .contact-form .input100 {
    width: 100%;
    margin: 0;
  }

  .contact-info {
    width: 100%;
    margin-top: 20px;
    padding: 30px 30px 20px;
  }
}
</style>
