<template>
  <v-app>
    <v-main>
      <Login />
    </v-main>
  </v-app>
</template>

<script>
import Login from "./pages/Login/Login.vue";

export default {
  name: "App",

  components: {
    Login,
  },

  data: () => ({
    //
  }),
};
</script>
