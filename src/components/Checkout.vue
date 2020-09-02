<template>
  <section class="checkout">
    <div>
      <h3 class="total_title">Totalsumma:</h3>
      <p>4234:-</p>
    </div>
    <div>
      <p>Varukorg:</p>
      <p>4739:-</p>
    </div>
    <div>
      <p>Frakt:</p>
      <p>69:-</p>
    </div>
    <div class="divider"></div>
    <div>
      <p>Total (inkl moms):</p>
      <p>5019:-</p>
    </div>
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
  min-width: 400px;
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
  padding: 1rem 0rem;
  border: none;
  outline: none;
}

.total_title {
  font-weight: 900;
}

div {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
</style>
