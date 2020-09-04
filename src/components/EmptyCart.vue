<template>
  <section class="empty_cart">
    <h1>Åh jag glömde lägga skorna i varukorgen...</h1>
    <img src="../assets/img/emptycartimg.png" alt />
    <button @click="toCollection">Hämta skorna</button>
  </section>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    toCollection() {
      this.$router.push("/");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";
.empty_cart {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  background-color: rgba(180, 180, 180, 0.842);
  width: auto;
  height: auto;
}

img {
  height: 50%;
  margin-bottom: 3rem;
}

h1 {
  color: $dark;
  font-size: 2rem;
  margin-top: 7rem;
  margin-bottom: 3rem;
}

button {
  width: 13rem;
  height: 3rem;
  font-size: 1rem;
  margin-left: 2rem;
  background-color: $dark;
  color: white;
  border: none;
  outline: none;
  cursor: pointer;
  transition: ease;
  transition-duration: 0.2s;
}

button:active {
  transform: scale(1.03);
}
</style>>
