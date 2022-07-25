<template>
  <div class="container">
    <h1>
      <span> OMDb API</span><br />
      The Open <br />
      Movie Database
    </h1>
    <p>
      The OMDb API is a RESTful web service to obtain movie information, all
      content and images on the site are contributed and maintained by our
      users.
      <br />
      If you find this service useful, pleas e consider making a one-time
      donation or become a patron.
    </p>
  </div>
</template>

<style lang="scss" scoped>
@import "~/scss/main.scss";

.container {
  padding-top: 40px;
}

h1 {
  line-height: 1;
  font-family: "Oswald", sans-serif;
  font-size: 80px;
  text-transform: uppercase;
  span {
    color: $primary;
    text-transform: none;
  }
}
p {
  margin: 30px 0;
  color: $gray-600;
}
</style>