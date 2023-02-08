<template>
  <v-card class="dashboard">
    <v-tabs v-model="tab" centered dark icons-and-text>
      <v-tab :key="1">
        Conversión
        <v-icon>mdi-cash</v-icon>
      </v-tab>
      <v-tab :key="2">
        Comparación
        <v-icon>mdi-cash-multiple</v-icon>
      </v-tab>
      <v-tab>
        <v-btn @click="logout"> Salir </v-btn>
      </v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item :key="0">
        <v-card v-show="tab === 0" flat>
          <Conversion />
        </v-card>
        <v-card v-show="tab === 1" flat>
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
      localStorage.removeItem("token");
      router.push("/login");
    },
  },
};
</script>
