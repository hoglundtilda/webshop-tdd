<template>
  <div class="wrapper">
    <section class="heading">
      <i class="fas fa-arrow-left fa-3x" @click="back"></i>
      <img src="@/assets/img/carticon_dark.png" alt="" class="cartIcon" />
    </section>
  </div>
</template>

<script>
export default {
  name: "ShoeInfo",

  methods: {
    back() {
      this.$router.push("/");
    },
  },
};
</script>

<style>
.heading {
  display: flex;
  justify-content: space-between;
  margin: 1rem 2rem;
}
.cartIcon,
.fa-arrow-left {
  width: 2.5rem;
  height: 2.5rem;
}
</style>
