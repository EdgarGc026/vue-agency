<template>
  <header>
    <div class="logo"><router-link to="/">Creative Agency</router-link></div>

    <div class="toggle" @click="toggleMenu" :class="{ active: isActive }">
      <div class="toggle-burger"></div>
    </div>
    <nav class="navigation" @click="toggleMenu" :class="{ active: isActive }">
      <ul>
        <li><router-link to="/">Inicio</router-link></li>
        <li><router-link to="/services">Servicios</router-link></li>
        <li><router-link to="/works">Trabajos</router-link></li>
        <li><router-link to="/contact">Contacto</router-link></li>
      </ul>
      <div class="social-bar">
        <ul>
          <li>
            <a href="https://www.facebook.com">
              <img src="~@/assets/img/facebook.png" alt="facebook-logo" />
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com">
              <img src="~@/assets/img/twitter.png" alt="twitter-logo" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com">
              <img src="~@/assets/img/instagram.png" alt="instagram-logo" />
            </a>
          </li>
        </ul>
        <a href="#" class="email-icon">
          <img src="~@/assets/img/email.png" alt="email-icon" />
        </a>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
    };
  },

  methods: {
    toggleMenu() {
      this.isActive = !this.isActive;
    },
  },
};
</script>

<style scoped>
.logo {
  position: absolute;
  top: 30px;
  left: 100px;
  font-size: 2rem;
  font-weight: 700;
  z-index: 20;
  cursor: pointer;
}

.logo a {
  text-decoration: none;
  color: var(--rich-black);
}

.toggle {
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 20;
  border: 3px solid var(--red-pigment);
  cursor: pointer;
  transition: all 0.5s ease-in-out;
}

.toggle-burger {
  width: 30px;
  height: 6px;
  border-radius: 3px;
  background: var(--red-pigment);
  box-shadow: 0 2px 4px rgba(255, 101, 47, 0.2);
  transition: all 0.5s ease-in-out;
}

.toggle-burger::before,
.toggle-burger::after {
  content: "";
  position: absolute;
  width: 30px;
  height: 6px;
  border-radius: 3px;
  background: var(--red-pigment);
  box-shadow: 0 2px 4px rgba(255, 101, 47, 0.2);
  transition: all 0.5s ease-in-out;
}

.toggle-burger::before {
  transform: translateY(-12px);
}

.toggle-burger::after {
  transform: translateY(12px);
}
/* Animation */
.toggle.active .toggle-burger {
  transform: translateX(-22px);
  background: transparent;
  box-shadow: none;
}

.toggle.active .toggle-burger::before {
  transform: rotate(45deg) translate(15px, -15px);
}

.toggle.active .toggle-burger::after {
  transform: rotate(-45deg) translate(15px, 15px);
}

.navigation {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 100%;
  background: var(--just-white);
  z-index: 15;
  transition: all 0.5s ease-in-out;
}

.navigation.active {
  left: 0;
  transition: all 0.5s ease-in-out;
}

.navigation ul {
  position: relative;
}

.navigation ul li {
  position: relative;
  list-style: none;
  text-align: center;
}

.navigation .social-bar {
  width: 60px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
}

.navigation .social-bar a {
  display: inline-block;
  /* transform: scale(0.5); */
}

.navigation .email-icon {
  position: absolute;
  bottom: 20px;
  /* transform: scale(0.5); */
}

.navigation ul li a {
  font-size: 2.2rem;
  color: var(--rich-black);
  font-weight: 300;
  text-decoration: none;
}

.navigation ul li a:hover {
  color: var(--red-pigment);
}

@media (max-width: 1068px) {
  .toggle {
    width: 45px;
    height: 45px;
  }

  .home-img {
    display: none;
  }

  .logo {
    top: 10px;
    left: 40px;
    font-size: 1.5rem;
  }

  .navigation ul li a {
    font-size: 2rem;
  }
}

@media (max-width: 768px) {
  .navigation .social-bar a {
    transform: scale(0.5);
  }

  .navigation .email-icon {
    transform: scale(0.5);
  }
}
</style>
