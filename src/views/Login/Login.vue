<template>
  <v-container class="login">
    <img :src="require('../../assets/illustration-hero.jpg')" />
    <h1>Iniciar sesión</h1>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-container>
        <v-row no-gutters>
          <v-col cols="12">
            <v-text-field
              type="email"
              v-model="email"
              class="input"
              label="Correo"
              placeholder="user@example.com"
              :rules="emailRules"
              required
            />
          </v-col>
          <v-col cols="12">
            <v-btn
              :disabled="!valid"
              width="100%"
              height="56px"
              class="btn-primary"
              depressed
              elevation="2"
              @click="validate"
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
    return {
      valid: true,
      email: "",
      emailRules: [
        (v) => !!v || "",
        (v) =>
          /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()\\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            v
          ) || "Correo incorrecto",
      ],
    };
  },
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.$store.dispatch("login/login", { email: this.email });
      }
    },
  },
};
</script>
