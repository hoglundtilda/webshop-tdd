<template>
  <section class="checkout">
    <h3>Totalsumma:</h3>
    <p>Varukorg:</p>
    <p>Frakt:</p>
    <div class="divider"></div>
    <p>Total (inkl moms):</p>
    <button class="checkout_button">VIDARE TILL BETALNING</button>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";
.checkout {
  padding: 1rem;
  height: auto;
  width: 300px;
  background-color: $white;
}

.divider {
  margin: 10px 0px;
  height: 2px;
  background-color: rgb(231, 231, 231);
  width: 100%;
}

.checkout_button {
  width: 100%;
  margin-top: 1rem;
  background-color: $dark;
  color: $white;
  padding: 0.3rem;
  border: none;
  outline: none;
}
</style>
