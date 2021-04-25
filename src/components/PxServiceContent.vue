<template>
  <section>
    <div class="title">
      <h1>Nuestros servicios</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui, alias
        mollitia, porro omnis neque iste laborum eum ipsum necessitatibus
        corporis nulla atque vero id rerum tempore ad voluptatibus. Minus, ex.
      </p>
    </div>

    <div class="services">
      <article class="service">
        <div class="icon">
          <img src="../assets/img/001.png" alt="" />
        </div>
        <h2>Diseño</h2>
        Diseñamos tus paginas web, desde el prototipo (usando Figma o AdobeXD)
        hasta maquetarla con las tecnologias HTML, CSS y JavaScript
      </article>

      <article class="service">
        <div class="icon">
          <img src="../assets/img/002.png" alt="" />
        </div>
        <h2>Desarrollo</h2>
        Creacion de sitios estaticos, sistemas completos o aplicaciones
        enfocados en la web. Ademas de aplicaciones de escritorio
      </article>

      <article class="service">
        <div class="icon">
          <img src="../assets/img/003.png" alt="" />
        </div>
        <h2>SEO</h2>
        <b>Search Engine Optimization</b> mejoramos el posicionamiento de tu
        sitio webpara que este entre los primeros lugares de los navegadores
      </article>

      <article class="service">
        <div class="icon">
          <img src="../assets/img/004.png" alt="" />
        </div>
        <h2>Marketing</h2>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis
        nemo assumenda quasi dolorum incidunt
      </article>

      <article class="service">
        <div class="icon">
          <img src="../assets/img/005.png" alt="" />
        </div>
        <h2>Aplicaciones moviles</h2>
        Desarrollo de aplicaciones moviles nativas (usando Kotlin y Java)
      </article>
      <article class="service">
        <div class="icon">
          <img src="../assets/img/006.png" alt="" />
        </div>
        <h2>Correccion de errores</h2>
        Si alguna de tus aplicaciones, sistemas o paginas web presentan
        problemas, nosotros nos encargamos de solucionar y darles mantenimiento
      </article>
    </div>
  </section>
</template>

<style scoped>
.services {
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  text-align: center;
}

.services .service {
  padding: 30px;
}

.services .service h2 {
  margin-top: 20px;
  font-size: 24px;
  font-weight: 500;
  color: var(--midnight-blue);
}

.services .service:hover {
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.services .service .icon img {
  max-width: 100px;
}

@media (max-width: 1068px) {
  section {
    padding: 100px 40px;
  }
  .services {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .services {
    grid-template-columns: 1fr;
  }

  .services .service {
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }
}
</style>
