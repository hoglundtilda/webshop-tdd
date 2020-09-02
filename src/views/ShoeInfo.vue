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
          <option value="" hidden>VÄLJ STORLEK</option>
          <option
            :value="option.size"
            v-for="(option, index) in shoe.sizes"
            :key="index"
            class="options"
            >Storlek: {{ option.size }}, Antal i lager: {{ option.stock }}
          </option>
        </select>
        <button class="addToCart">LÄGG I VARUKORGEN</button>
        <section class="goodToKnow">
          <div class="material">
            <h4>Material & skötsel</h4>
            <p>Yttermaterial: {{ shoe.material.Yttermaterial }}</p>
            <p>Foder: {{ shoe.material.Foder }}</p>
            <p>Innersula: {{ shoe.material.Innersula }}</p>
            <p>Sula: {{ shoe.material.Sula }}</p>
            <p>Fodertjocklek: {{ shoe.material.Fodertjocklek }}</p>
          </div>
          <div class="productInformation">
            <h4>Produktinformation</h4>
            <p>Tå: {{ shoe.productinfo.Tå }}</p>
            <p>Klack/Sula: {{ shoe.productinfo.Klack }}</p>
            <p>Förslutning: {{ shoe.productinfo.Förslutning }}</p>
            <p>Mönster: {{ shoe.productinfo.Mönster }}</p>
            <p>Artikelnummer: {{ shoe.productinfo.Artikelnummer }}</p>
          </div>
        </section>
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
      this.$router.go(-1);
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
  text-align-last: center;
  cursor: pointer;
}

.addToCart {
  width: 13rem;
  height: 3rem;
  font-size: 1rem;
  margin-left: 2rem;
  background-color: #152222;
  color: white;
  border: none;
  outline: none;
  cursor: pointer;
  transition: ease;
  transition-duration: 0.2s;
}
.addToCart:active {
  transform: scale(1.02);
}
.goodToKnow {
  display: flex;
  width: 35rem;
  justify-content: space-between;
  margin-top: 5rem;
}
</style>
