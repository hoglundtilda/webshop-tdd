<template>
  <div class="wrapper">
    <section class="heading">
      <i class="fas fa-arrow-left fa-2x" @click="back"></i>
      <CartButton class="cartIcon" />
    </section>
    <section class="shoeInfo">
      <div class="small_images">
        <img
          :src="require(`../assets/img/${shoe.images[0]}`)"
          alt
          class="smallImg"
          @click="switchImage(shoe.images[0])"
        />
        <img
          :src="require(`../assets/img/${shoe.images[1]}`)"
          alt
          class="smallImg"
          @click="switchImage(shoe.images[1])"
        />
        <img
          :src="require(`../assets/img/${shoe.images[2]}`)"
          alt
          class="smallImg"
          @click="switchImage(shoe.images[2])"
        />
      </div>
      <img :src="require(`../assets/img/${image}`)" alt class="bigImg" />

      <section class="product">
        <h1>{{ shoe.brand }} - {{ shoe.name }}</h1>
        <h3>
          {{ shoe.price }} kr
          <span class="moms">inkl moms</span>
        </h3>
        <h5>Färg: {{ shoe.color }}</h5>
        <select name="sizes" class="sizes" v-model="selectedOption" @change="checkInStock($event)">
          <option disabled hidden value class="options">VÄLJ STORLEK</option>
          <option
            :value="option"
            v-for="(option, index) in shoe.sizes"
            :key="index"
            class="options"
          >Storlek: {{ option.size }}, Antal i lager: {{ option.stock }}</option>
        </select>
        <button
          class="addToCart"
          @click="addToCart(shoeToCart)"
          :disabled="selectedOption.stock <= 0"
          :class="selectedOption.stock <= 0 || selectedOption.stock == 0 ? 'buttonDisabled': 'addToCart'"
        >LÄGG I VARUKORGEN</button>
        <p
          v-if="this.OutOfStockMessage"
          class="outOfStockMessage"
        >Ej i lager, försök en annan gång din påse</p>
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
            <p class="article_number">Artikelnummer: {{ shoe.productinfo.Artikelnummer }}</p>
          </div>
        </section>
      </section>
    </section>
    <Products />
    <Footer />
  </div>
</template>

<script>
import Products from "@/components/Products";
import Footer from "@/components/Footer.vue";
import CartButton from "@/components/CartButton.vue";
export default {
  name: "ShoeInfo",
  props: {
    products: Array,
  },
  components: {
    Footer,
    CartButton,
    Products,
  },
  data: () => {
    return {
      selectedOption: "",
      img: "",
      OutOfStockMessage: false,
    };
  },
  computed: {
    size() {
      return this.selectedOption.size;
    },
    stock() {
      return this.selectedOption.stock;
    },
    shoe() {
      const shoe = this.products.filter(
        (shoe) => shoe.productinfo.Artikelnummer == this.$route.params.shoe
      )[0];
      this.img = shoe.images[0];
      return shoe;
    },
    image() {
      if (this.img === "") {
        const shoe = this.products.filter(
          (shoe) => shoe.productinfo.Artikelnummer == this.$route.params.shoe
        )[0];
        return shoe.images[0];
      } else {
        return this.img;
      }
    },
    shoeToCart() {
      return { ...this.shoe, sizes: this.selectedOption.size, qty: 1 };
    },
  },

  methods: {
    back() {
      this.$router.back();
    },
    addToCart(shoe) {
      if (parseInt(this.selectedOption.stock) > 0) {
        this.$store.dispatch("addToCart", shoe);
      }
    },
    switchImage(image) {
      this.img = image;
    },
    checkInStock() {
      if (this.selectedOption.stock === "0") {
        this.OutOfStockMessage = true;
      } else {
        this.OutOfStockMessage = false;
      }
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/variables";
.heading {
  display: flex;
  justify-content: space-between;
  height: 2rem;
  margin-bottom: 5rem;
}

.fa-arrow-left,
.cartIcon {
  width: 2.5rem;
  height: 2.5rem;
  margin: 1em;
}
.cartIcon {
  color: black;
}
.shoeInfo {
  display: flex;
  justify-content: center;
  height: 90vh;
}
.small_images {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 80vh;
}
.smallImg {
  width: 10rem;
  height: 13rem;
  margin-right: 2rem;
  box-shadow: 3px 13px 17px 1px rgba(136, 136, 136, 0.75);
  border-radius: 5px;
}
.bigImg {
  height: 80vh;
  box-shadow: 3px 13px 17px 1px rgba(136, 136, 136, 0.75);
  border-radius: 5px;
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
  background-color: $dark;
  color: white;
  border: none;
  outline: none;
  cursor: pointer;
  transition: ease;
  transition-duration: 0.2s;
}
.addToCart:active {
  transform: scale(1.03);
}

.buttonDisabled {
  background-color: $red;
}

.outOfStockMessage {
  color: $red;
  margin: 2em 0.5em;
}
.goodToKnow {
  display: flex;
  width: 35rem;
  justify-content: space-between;
  margin-top: 2rem;
}
</style>
