<template>
  <main>
    <px-header />
    <router-view />
  </main>
</template>

<script>
import PxHeader from "@/components/PxHeader";

export default {
  name: "App",
  components: { PxHeader },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700,800,900&display=swap");

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:root {
  --red-pigment: #f60f20;
  --rich-black: #111111;
  --midnight-blue: #1b206e;
  --just-white: #ffffff;
  --cultured: #f9f9f9;
  --emerald: #2ecc71;
  --orange-soda: #e75c3c;
}

html,
body {
  font-family: "Poppins", sans-serif;
  color: var(--rich-black);
}

h1 {
  font-size: 30px;
  font-weight: 500;
}

p {
  margin: 20px 0px 10px;
  font-size: 1.1rem;
}

section {
  height: 100vh;
  margin-top: 60px;
  padding: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

section.home {
  flex-direction: row;
  margin-top: 0;
}
</style>
