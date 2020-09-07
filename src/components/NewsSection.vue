<template>
  <section class="news_section">
    <article class="newssection_info_1">
      <p>Spana in kommande mode</p>
    </article>
    <article class="newssection_info_2">
      <p>Rätt skor på fötterna i höst</p>
    </article>
    <article class="newssection_info_3">
      <p class="whoweare">Varför oss?</p>
      <p class="whoweare_info">
        Vi ser till att du är både snygg och torr om fötterna. Dessutom till ett
        bra pris
      </p>
    </article>
    <article class="newssection_info_4">
      <p>Hos oss finns det skor för alla</p>
    </article>
  </section>
</template>
<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";

.news_section {
  min-height: 50vh;
  display: grid;
  grid-template-columns: 20% 20% 20% 40%;
}

.newssection_info_1 {
  color: $color;
  cursor: pointer;
  animation-name: pop;
  transform: perspective(1px) translateZ(0);
  animation-iteration-count: 1;
  animation-duration: 0.3s;
  font-weight: 900;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottm;
  background-image: url("../assets/img/newssection/shoehand.png");
}

.newssection_info_2 {
  display: flex;
  font-weight: 900;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom;
  background-image: url("../assets/img/newssection/autmnready.png");
}

.newssection_info_3 {
  display: flex;
  font-weight: 900;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  background-image: url("../assets/img/newssection/whoweare.png");
}

.newssection_info_4 {
  display: flex;
  font-weight: 900;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url("../assets/img/newssection/shoeforeveryone.png");
}

p {
  display: inline;
  font-size: 0.8rem;
  text-align: center;
  background-color: $dark;
  padding: 0.5rem 2rem;
  color: $white;
}

p:hover {
  color: $color;
  cursor: pointer;
  animation-name: pop;
  transform: perspective(1px) translateZ(0);
  animation-iteration-count: 1;
  animation-duration: 0.3s;
}

.whoweare {
  color: $dark;
  background-color: transparent;
  font-size: 2rem;
  margin-top: 1rem;
  font-weight: 900;
}

.whoweare:hover {
  color: $white;
  cursor: pointer;
  animation-name: pop;
  transform: perspective(1px) translateZ(0);
  animation-iteration-count: 1;
  animation-duration: 0.3s;
}

.whoweare_info {
  color: $dark;
  background-color: transparent;
  margin-bottom: 3rem;
  font-size: 1.2rem;
}

.whoweare_info:hover {
  color: $white;
  cursor: pointer;
  animation-name: pop;
  transform: perspective(1px) translateZ(0);
  animation-iteration-count: 1;
  animation-duration: 0.3s;
}
</style>
