<template>
  <div class="order_sending">
    <div class="loader"></div>
    <h3 class="order_text">Skickar din beställning...</h3>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";

.order_text {
  color: $color;

  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.loader {
  animation: spin 1s infinite linear;
  border: solid 2vmin transparent;
  border-radius: 50%;
  border-right-color: $spinner1;
  border-top-color: $spinner1;
  box-sizing: border-box;
  height: 20vmin;
  left: calc(50% - 10vmin);
  position: fixed;
  top: calc(50% - 10vmin);
  width: 20vmin;
  z-index: 1;
  &:before {
    animation: spin 2s infinite linear;
    border: solid 2vmin transparent;
    border-radius: 50%;
    border-right-color: $color;
    border-top-color: $color;
    box-sizing: border-box;
    content: "";
    height: 16vmin;
    left: 0;
    position: absolute;
    top: 0;
    width: 16vmin;
  }
  &:after {
    animation: spin 3s infinite linear;
    border: solid 2vmin transparent;
    border-radius: 50%;
    border-right-color: $spinner2;
    border-top-color: $spinner2;
    box-sizing: border-box;
    content: "";
    height: 12vmin;
    left: 2vmin;
    position: absolute;
    top: 2vmin;
    width: 12vmin;
  }
}

@keyframes spin {
  100% {
    transform: rotate(360deg);
  }
}
</style>