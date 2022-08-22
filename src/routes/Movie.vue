<template>
  <div class="container">
    <div class="skeletons">
      <div class="skeleton poster">
        <div class="specs">
          <div class="skeleton title"></div>
          <div class="skeleton spec"></div>
          <div class="skeleton plot"></div>
          <div class="skeleton etc"></div>
          <div class="skeleton etc"></div>
          <div class="skeleton etc"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    console.log(this.$route);
    this.$store.dispatch('movie/searchMovieWithId', {
      id: this.$route.params.id
    })
  },
}
</script>

<style lang="scss" scoped>
@import "~/scss/main";

.container {
  padding-top: 40px;
}
.skeletons {
  display: flex;
  .poster {
    width: 500px;
    height: 500px * 3/2;
    margin-right: 70px;
  }
  .specs {

  }
  .skeleton{
    border-radius: 10px;
    background-color: $gray-200;
    &.title {
      width: 80%;
      height: 70px;
    }
    &.spec {
      width: 60%;
      height: 30px;
    }
    &.plot {
      width: 100%;
      height: 250px;
    }
    &.etc {
      width: 50%;
      height: 50px;
    }
  }
}
</style>