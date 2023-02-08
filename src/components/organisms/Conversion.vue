<template>
  <v-container class="pa-0">
    <h1>Conversión</h1>
    <v-form>
      <v-container>
        <v-row no-gutters="">
          <v-col class="d-flex" cols="12">
            <v-autocomplete
              v-model="inputs.source"
              :items="currencies"
              class="select"
              label="Origen"
              outlined
            ></v-autocomplete>
          </v-col>
          <v-col class="d-flex" cols="12">
            <v-autocomplete
              v-model="inputs.destination"
              :items="currencies"
              class="select"
              label="Destino"
              outlined
            ></v-autocomplete>
          </v-col>
          <v-col cols="12">
            <v-text-field
              class="input"
              v-model="inputs.amount"
              label="Monto"
              placeholder="1000"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
      <v-col cols="12" class="pb-3 pt-0 pl-0 pr-0 d-flex justify-center">
        <v-btn
          :disabled="!isValid"
          width="250px"
          height="56px"
          class="btn-primary"
          depressed
          elevation="2"
          @click="update"
          >Ingresar</v-btn
        >
      </v-col>
    </v-form>
    <div class="pa-4">
      <h2 class="mb-3">Equivale a:</h2>
      <p class="text-center">{{ converted() }}</p>
    </div>
  </v-container>
</template>
<script>
import { mapActions } from "vuex";

export default {
  name: "conversionComponent",
  data() {
    return {
      valid: true,
      inputs: {
        source: "",
        destination: "",
        amount: "",
      },
    };
  },
  mounted() {
    this.getCurrencies();
  },
  computed: {
    currencies() {
      return this.$store.state.currency.getCurrencies.success || [];
    },
    isValid() {
      console.log(this.inputs.source);
      return (
        this.inputs.source !== "" && this.inputs.destination !== "" && this.inputs.amount !== ""
      );
    },
  },
  methods: {
    ...mapActions("currency", ["getCurrencies", "convert"]),
    converted() {
      const convertResults = this.$store.state.currency.convert.success;
      console.log(convertResults);
      if (!convertResults) return "";
      const formatter = new Intl.NumberFormat("en", {
        style: "currency",
        currency: this.inputs.destination,
      });
      return formatter.format(convertResults || 0);
    },
    update() {
      this.convert({
        source: this.inputs.source,
        destination: this.inputs.destination,
        amount: this.inputs.amount,
      });
    },
  },
};
</script>
