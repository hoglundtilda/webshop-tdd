<template>
  <div class="wrapper">
    <section class="dropdown">
      <select name="" id="" class="size">
        <option value="Size">Size</option>
        <option value="35">35</option>
        <option value="36">36</option>
        <option value="37">37</option>
        <option value="38">38</option>
        <option value="39">39</option>
        <option value="40">40</option>
        <option value="41">41</option>
        <option value="42">42</option>
        <option value="43">43</option>
        <option value="44">44</option>
        <option value="45">45</option>
      </select>
      <select name="" id="" class="name">
        <option value="Price">Price</option>
        <option value="300-499">300-499</option>
        <option value="500-699">500-699</option>
        <option value="700-899">700-899</option>
        <option value="900-1099">900-1099</option>
        <option value="1100-1299">1100-1299</option>
        <option value="1300-1499">1300-1499</option>
        <option value="5000">1500+</option>
      </select>
    </section>
    <div class="searchfieled">
      <input type="text" class="input" /><i class="fas fa-search"></i>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";
body {
  font-family: $font;
}
.wrapper {
  display: flex;
  justify-content: space-around;
  border-bottom: 2px solid rgb(230, 228, 228);
  height: 3em;
  margin: 1rem 0rem;
}

.size {
  margin: 0 1rem;
}
.size,
.name {
  width: 6rem;
}
.searchfieled {
  position: relative;
}
.input {
  outline: none;
  border: none;
  border-bottom: 1px solid grey;
}
.fa-search {
  position: absolute;
  right: 0.1rem;
  bottom: 1.7rem;
}
</style>
