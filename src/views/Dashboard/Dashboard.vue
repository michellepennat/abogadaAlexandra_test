<template>
  <v-card class="dashboard">
    <v-btn @click="logout"> Salir </v-btn>
    <v-tabs v-model="tab" centered dark icons-and-text>
      <v-tabs-slider></v-tabs-slider>
      <v-tab href="#tab-1">
        Conversión
        <v-icon>mdi-cash</v-icon>
      </v-tab>
      <v-tab href="#tab-2">
        Comparación
        <v-icon>mdi-cash-multiple</v-icon>
      </v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item value="tab-1">
        <v-card flat>
          <Conversion />
        </v-card>
      </v-tab-item>
      <v-tab-item value="tab-2">
        <v-card flat>
          <Comparison />
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>
<script>
import Conversion from "../../components/organisms/Conversion.vue";
import Comparison from "../../components/organisms/Comparison.vue";
import router from "../../router";

export default {
  name: "dashboarPage",
  data() {
    return {
      tab: null,
    };
  },
  components: { Comparison, Conversion },
  methods: {
    logout() {
      sessionStorage.removeItem("token");
      router.push("/login");
    },
  },
};
</script>
