<template>
  <v-container class="login">
    <img :src="require('../../assets/illustration-hero.jpg')" />
    <h1>Iniciar sesión</h1>
    <v-form>
      <v-container>
        <v-row>
          <v-col cols="12">
            <v-text-field
              label="Usuario"
              placeholder="user@example.com"
            ></v-text-field>
          </v-col>

          <v-col cols="12">
            <v-text-field
              label="Contraseña"
              placeholder="**********"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-btn
              width="100%"
              height="56px"
              class="btn-primary"
              depressed
              elevation="2"
              >Ingresar</v-btn
            >
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </v-container>
</template>

<script>
export default {
  name: "loginPage",
  data() {
    return {};
  },
};
</script>
