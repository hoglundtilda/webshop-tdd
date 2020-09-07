<template>
  <footer class="footer">
    <div class="social_media">
      <h5 class="socialmedia_title">Följ oss på sociala medier</h5>
      <div class="socialmedia_icons">
        <a href="https://www.twitter.com/" target="_" class="socialmedia_link">
          <img class="social_img" src="@/assets/img/socialmedia/socialtwitter.png" alt />
        </a>
        <a href="https://www.instagram.com" target="_" class="socialmedia_link">
          <img class="social_img" src="@/assets/img/socialmedia/socialinstagram.png" alt />
        </a>
        <a href="https://www.facebook.com/" target="_" class="socialmedia_link">
          <img class="social_img" src="@/assets/img/socialmedia/socialfacebook.png" alt />
        </a>
      </div>
    </div>
    <div class="information">
      <article class="contact">
        <h3 class="info_title">HJÄLP & KONTAKT</h3>
        <a href="#">
          <li>Vanliga frågor</li>
        </a>
        <a href="#">
          <li>Beställa</li>
        </a>
        <a href="#">
          <li>Betalning</li>
        </a>
        <a href="#">
          <li>Leveranstid</li>
        </a>
      </article>
      <article class="shoecircus">
        <h3 class="info_title">SHOECIRCUS</h3>
        <a href="#">
          <li>Vilka är vi?</li>
        </a>
        <a href="#">
          <li>Användarvillkor</li>
        </a>
        <a href="#">
          <li>Press</li>
        </a>
        <a href="#">
          <li>Vi söker medarbetare</li>
        </a>
      </article>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "@/assets/scss/variables";
.footer {
  display: grid;
  grid-template-columns: 40% 60%;
}

.social_media {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: $dark;
}

.information {
  color: $white;
  padding: 1rem 8rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: $light;
}

li {
  font-size: 0.7rem;
  margin: 0.5rem 0;
  list-style: none;
}

.info_title {
  margin-bottom: 10px;
  font-size: 1rem;
}

.socialmedia_icons {
  margin: 1rem 1rem 0 1rem;
}

.socialmedia_link {
  margin: 0 1rem;
}

.social_img {
  height: 1.5rem;
}

.socialmedia_title {
  color: $white;
  font-size: 1rem;
}

a {
  text-decoration: none;
  color: $white;
  background-color: transparent;
}
</style>
