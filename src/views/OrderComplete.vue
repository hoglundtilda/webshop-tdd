<template>
  <h1>DU HAR PRÖJJSAT!</h1>
</template>

<script>
import { mapState } from "vuex";

export default {
  created() {
    this.$store.commit("resetSendingOrder", true);
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(["sendingOrder"]),
  },
};
</script>

<style lang="scss" scoped>
</style>