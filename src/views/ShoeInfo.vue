<template>
  <div class="wrapper">
    <section class="heading">
      <i class="fas fa-arrow-left fa-3x" @click="back"></i>
    </section>
    <section class="shoeInfo">
      <div class="small_images">
        <img
          :src="require(`../assets/img/${shoe.images[0]}`)"
          alt
          class="smallImg"
        />
        <img
          :src="require(`../assets/img/${shoe.images[1]}`)"
          alt
          class="smallImg"
        />
        <img
          :src="require(`../assets/img/${shoe.images[2]}`)"
          alt
          class="smallImg"
        />
      </div>
      <img
        :src="require(`../assets/img/${shoe.images[0]}`)"
        alt
        class="bigImg"
      />
      <section class="product">
        <h1>{{ shoe.brand }} - {{ shoe.name }}</h1>
        <h3>{{ shoe.price }} kr <span class="moms">inkl moms</span></h3>
        <h5>Färg: {{ shoe.color }}</h5>
        <select name="sizes" id="" class="sizes">
          <option value="" hidden>Välj storlek</option>
          <option
            :value="option.size"
            v-for="(option, index) in shoe.sizes"
            :key="index"
            class="options"
            >Storlek: {{ option.size }}, Antal i lager: {{ option.stock }}
          </option>
        </select>
        <button class="addToCart">Lägg i varukorgen</button>
      </section>
    </section>
  </div>
</template>

<script>
export default {
  name: "ShoeInfo",
  props: {
    products: Array,
  },
  computed: {
    shoe() {
      return this.products.filter(
        (shoe) => shoe.id == this.$route.params.shoe
      )[0];
    },
  },

  methods: {
    back() {
      this.$router.push("/");
    },
  },
};
</script>

<style>
.fa-arrow-left {
  width: 2.5rem;
  height: 2.5rem;
  margin: 1rem 2rem;
}
.shoeInfo {
  display: flex;
  justify-content: center;
}
.small_images {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.smallImg {
  width: 10rem;
  height: 13rem;
  margin-right: 2rem;
}
.bigImg {
  height: 80vh;
}

.moms {
  font-size: 0.6rem;
  color: grey;
}

.product {
  margin-left: 2rem;
}

.product h1,
h3 {
  font-size: 2rem;
  margin-bottom: 3rem;
}
.product h5 {
  margin-bottom: 2rem;
}

.sizes {
  height: 3rem;
  font-size: 1rem;
  width: 13rem;
}
.options {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
