<template>
  <div class="header">
    <Nav />
    <section class="hero">
      <div class="img_container">
        <img src="../assets/img/header.png" alt="shoes" />
      </div>
      <div class="call_to_action">
        <h1>Nya märken</h1>
        <span>Höst 2020</span>
        <button>Kollektion</button>
      </div>
    </section>
  </div>
</template>

<script>
import Nav from "./Nav";
export default {
  components: { Nav },
};
</script>