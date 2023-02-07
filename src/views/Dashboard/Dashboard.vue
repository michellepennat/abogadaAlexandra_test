<template>
  <v-card class="dashboard">
    <v-tabs v-model="tab" centered dark icons-and-text>
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
      <v-btn @click="logout"> Salir </v-btn>
      <v-tab-item :key="1" value="tab-1">
        <v-card flat>
          <Conversion />
        </v-card>
      </v-tab-item>
      <v-tab-item key="2" value="tab-2">
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
      tab: "tab-1",
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
