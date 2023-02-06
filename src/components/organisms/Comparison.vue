<template>
  <v-container class="pa-0">
    <h1>Comparación</h1>
    <v-form>
      <v-container>
        <v-row no-gutters>
          <v-row no-gutters justify="space-between">
            <v-col cols="4">
              <v-select
                class="select"
                :items="items"
                label="Moneda"
                outlined
              ></v-select>
            </v-col>
            <v-col cols="7">
              <v-text-field
                class="input"
                label="Monto"
                placeholder="1000"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row no-gutters>
            <v-col cols="12">
              <h2 class="text-start mb-3">Moneda 1</h2>
              <v-select
                class="select"
                :items="items"
                label="Moneda 1"
                outlined
              ></v-select>
              <p>Equivale a: <span>1000</span></p>
            </v-col>
            <v-col cols="12">
              <h2 class="text-start my-3">Moneda 2</h2>
              <v-select
                class="select"
                :items="items"
                label="Moneda 2"
                outlined
              ></v-select>
              <p>Equivale a: <span>1000</span></p>
            </v-col>
            <v-col cols="12">
              <h2 class="text-start my-3">Moneda 3</h2>
              <v-select
                class="select"
                :items="items"
                label="Moneda 3"
                outlined
              ></v-select>
              <p>Equivale a: <span>1000</span></p>
            </v-col>
            <v-col cols="12">
              <h2 class="text-start my-3">Moneda 4</h2>
              <v-select
                class="select"
                :items="items"
                label="Moneda 4"
                outlined
              ></v-select>
              <p>Equivale a: <span>1000</span></p>
            </v-col>
            <v-col cols="12">
              <h2 class="text-start my-3">Moneda 5</h2>
              <v-select
                class="select"
                :items="items"
                label="Moneda 5"
                outlined
              ></v-select>
              <p>Equivale a: <span>1000</span></p>
            </v-col>
          </v-row>
        </v-row>
      </v-container>
    </v-form>
  </v-container>
</template>
  <script>
export default {
  name: "comparisonComponent",
  data() {
    return {};
  },
};
</script>
  