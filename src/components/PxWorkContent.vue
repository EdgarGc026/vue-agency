<template>
  <section>
    <div class="title">
      <h1>Algunos de nuestros trabajos</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui, alias
        mollitia, porro omnis neque iste laborum eum ipsum necessitatibus
        corporis nulla atque vero id rerum tempore ad voluptatibus. Minus, ex.
      </p>
    </div>

    <div class="portfolio">
      <div class="item">
        <img src="../assets/img/portfolio-item1.jpg" alt="" />
        <div class="action">
          <a href="#">Launch</a>
        </div>
      </div>

      <div class="item">
        <img src="../assets/img/portfolio-item2.jpg" alt="" />
        <div class="action">
          <a href="#">Launch</a>
        </div>
      </div>

      <div class="item">
        <img src="../assets/img/portfolio-item3.jpg" alt="" />
        <div class="action">
          <a href="#">Launch</a>
        </div>
      </div>

      <div class="item">
        <img src="../assets/img/portfolio-item4.jpg" alt="" />
        <div class="action">
          <a href="#">Launch</a>
        </div>
      </div>

      <div class="item">
        <img src="../assets/img/portfolio-item5.jpg" alt="" />
        <div class="action">
          <a href="#">Launch</a>
        </div>
      </div>

      <div class="item">
        <img src="../assets/img/portfolio-item6.jpg" alt="" />
        <div class="action">
          <a href="#">Launch</a>
        </div>
      </div>

      <div class="item">
        <img src="../assets/img/portfolio-item7.jpg" alt="" />
        <div class="action">
          <a href="#">Launch</a>
        </div>
      </div>

      <div class="item">
        <img src="../assets/img/portfolio-item8.jpg" alt="" />
        <div class="action">
          <a href="#">Launch</a>
        </div>
      </div>

      <div class="item">
        <img src="../assets/img/portfolio-item9.jpg" alt="" />
        <div class="action">
          <a href="#">Launch</a>
        </div>
      </div>

      <div class="item">
        <img src="../assets/img/portfolio-item10.jpg" alt="" />
        <div class="action">
          <a href="#">Launch</a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.portfolio {
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  justify-content: center;
}

.portfolio .item {
  width: 300px;
  height: 300px;
  margin: 5px;
  position: relative;
}

.portfolio .item img {
  width: 100%;
  height: 100%;
}

.portfolio .item .action {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.8);
  opacity: 0;
  transition: 0.5s;
}

.portfolio .item:hover .action {
  opacity: 1;
}

.portfolio .item .action a {
  display: inline-block;
  color: var(--just-white);
  text-decoration: none;
  border: 1px solid var(--just-white);
  padding: 5px 15px;
}

@media (max-width: 1068px) {
  section {
    padding: 100px 40px;
  }
}
</style>
