<template>
  <section class="home">
    <img class="home-img" src="../assets/img/home-img.jpg" />
    <div class="home-content">
      <h1>
        Te ayudamos a lograr <br />
        tus objetivos
      </h1>
      <p>
        Diseñando y creando aplicaciones web y moviles listas para trabajar y
        con lo necesario para funcionar desde el dia uno
      </p>
      <router-link class="home-content__btn-started" to="/contact"
        >¡Comienza ya!</router-link
      >
    </div>
  </section>
</template>

<script>
export default {
  setup() {},
};
</script>

<style scoped>
.home-img {
  height: 110%;
  position: absolute;
  bottom: 0;
  right: 0;
}

.home-content {
  max-width: 600px;
  position: relative;
  z-index: 10;
}

.home-content__btn-started {
  display: inline-block;
  margin: 20px 0;
  padding: 10px 30px;
  text-decoration: none;
  background: var(--red-pigment);
  color: var(--just-white);
  cursor: pointer;
  border: 0;
}

.home-content__btn-started:hover {
  transform: scale(0.98);
}

@media (max-width: 1068px) {
  .home-img {
    display: none;
  }

  section {
    padding: 100px 40px;
  }
}
</style>
