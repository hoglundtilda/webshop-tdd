<template>
  <div class="header">
    <Nav class="navbar" />
    <section class="hero">
      <div class="img_container">
        <img src="../assets/img/header.png" alt="shoes" />
      </div>
      <section class="call_to_action">
        <div>
          <h1>Nya märken</h1>
          <span>Höst 2020</span>
          <button>Kollektion</button>
        </div>
      </section>
    </section>
  </div>
</template>

<script>
import Nav from "./Nav";
export default {
  components: { Nav },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";

.navbar {
  position: absolute;
  z-index: 1;
}

.header {
  .hero {
    display: flex;
    background: $dark;

    .img_container {
      width: 50%;
      img {
        width: 100%;
        height: 100%;
      }
    }

    .call_to_action {
      width: 50%;
      text-align: right;
      margin-top: 3em;
      div {
        display: flex;
        flex-direction: column;
        padding: 7em 0em 5em 10em;
        align-items: flex-end;
        margin-right: 5em;

        h1 {
          max-width: 5em;
          font-size: 7em;
          color: $white;
          text-transform: capitalize;
          line-height: 1.4;
          font-weight: 400;
        }

        span {
          color: $color;
          font-size: 1.6em;
        }

        button {
          text-transform: uppercase;
          border: 1px solid $white;
          background: none;
          color: $white;
          padding: 1.2em;
          margin: 5em 0;
          font-size: 1em;
          min-width: 20em;
          letter-spacing: 5px;
        }
      }
    }
  }
}
</style>
