<template>
  <v-container class="pa-0">
    <h1>Conversión</h1>
    <v-form>
      <v-container>
        <v-row no-gutters="">
          <v-col class="d-flex" cols="12">
            <v-select class="select" :items="items" label="Origen" outlined></v-select>
          </v-col>
          <v-col class="d-flex" cols="12">
            <v-select class="select" :items="items" label="Destino" outlined></v-select>
          </v-col>
          <v-col cols="12">
            <v-text-field
              class="input"
              label="Monto"
              placeholder="1000"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
    <div class="px-4">
      <h2 class="mb-3">Equivale a:</h2>
      <p class="text-center">1000</p>
    </div>
  </v-container>
</template>
    <script>
export default {
  name: "conversionComponent",
  data() {
    return {};
  },
};
</script>