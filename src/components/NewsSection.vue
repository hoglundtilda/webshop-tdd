<template>
  <section class="news_section">
    <article class="newssection_info_1"></article>
    <article class="newssection_info_2"></article>
    <article class="newssection_info_3"></article>
    <article class="newssection_info_4"></article>
  </section>
</template>
<script>
export default {};
</script>

<style lang="scss">
.news_section {
  height: 400px;
  display: grid;
  grid-template-columns: 20% 20% 20% 40%;
}

.newssection_info_1 {
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center;
  background-image: url("../assets/img/newssection/shoehand.png");
}

.newssection_info_2 {
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center;
  background-image: url("../assets/img/newssection/autmnready.png");
}

.newssection_info_3 {
  height: 100%;
  width: 100%;
  background-size: contain;
  background-position: center;
  background-image: url("../assets/img/newssection/whoweare.png");
}

.newssection_info_4 {
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center;
  background-image: url("../assets/img/newssection/shoeforeveryone.png");
}
</style>
