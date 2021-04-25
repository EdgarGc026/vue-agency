<template>
  <section>
    <h1>Ups! 😅</h1>
    <p>
      La pagina que buscas no existe o se encuentra fuera del area de servicio
      🤡
    </p>
    <router-link to="/" class="home-content__btn-started"
      >Regresar al inicio 🏠</router-link
    >
  </section>
</template>

<style scoped>
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

@media (max-width: 1068px) {
  section {
    padding: 100px 40px;
  }
}
</style>
