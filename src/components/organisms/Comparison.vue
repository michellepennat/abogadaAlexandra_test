<template>
  <v-container class="pa-0">
    <h1>Comparación</h1>
    <v-form ref="form" v-model="convert" lazy-validation>
      <v-container>
        <v-col cols="12" class="px-0">
          <v-text-field
            v-model="amount"
            class="input"
            label="Monto"
            suffix="USD"
            placeholder="1000"
          ></v-text-field>
        </v-col>
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
        <v-row no-gutters align="center">
          <v-col cols="6">
            <h2 class="text-start mb-3">Moneda 1</h2>
            <v-autocomplete
              v-model="currencyOne"
              :items="currencies"
              class="select"
              label="Moneda 1"
              outlined
            ></v-autocomplete>
          </v-col>
          <v-col cols="6">
            <p class="text-end">Equivale a:</p>
            <p class="text-end">{{ getActualValue(currencyOne) }}</p>
          </v-col>
        </v-row>
        <v-row no-gutters align="center">
          <v-col cols="6">
            <h2 class="text-start my-3">Moneda 2</h2>
            <v-autocomplete
              v-model="currencyTwo"
              :items="currencies"
              item-text="title"
              item-value="value"
              class="select"
              label="Moneda 2"
              outlined
            ></v-autocomplete>
          </v-col>
          <v-col cols="6">
            <p class="text-end">Equivale a:</p>
            <p class="text-end">{{ getActualValue(currencyTwo) }}</p>
          </v-col>
        </v-row>
        <v-row no-gutters align="center">
          <v-col cols="6">
            <h2 class="text-start my-3">Moneda 3</h2>
            <v-autocomplete
              v-model="currencyThree"
              :items="currencies"
              class="select"
              label="Moneda 3"
              outlined
            ></v-autocomplete>
          </v-col>
          <v-col cols="6">
            <p class="text-end">Equivale a:</p>
            <p class="text-end">{{ getActualValue(currencyThree) }}</p>
          </v-col>
        </v-row>
        <v-row no-gutters align="center">
          <v-col cols="6">
            <h2 class="text-start my-3">Moneda 4</h2>
            <v-autocomplete
              v-model="currencyFour"
              :items="currencies"
              class="select"
              label="Moneda 4"
              outlined
            ></v-autocomplete>
          </v-col>
          <v-col cols="6">
            <p class="text-end">Equivale a:</p>
            <p class="text-end">{{ getActualValue(currencyFour) }}</p>
          </v-col>
        </v-row>
        <v-row no-gutters align="center">
          <v-col cols="6">
            <h2 class="text-start my-3">Moneda 5</h2>
            <v-autocomplete
              v-model="currencyFive"
              :items="currencies"
              class="select"
              label="Moneda 5"
              outlined
            ></v-autocomplete>
          </v-col>
          <v-col cols="6">
            <p class="text-end">Equivale a:</p>
            <p class="text-end">{{ getActualValue(currencyFive) }}</p>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </v-container>
</template>
<script>
import { mapActions } from "vuex";

export default {
  name: "comparisonComponent",
  data() {
    return {
      valid: true,
      currencyOne: "",
      currencyTwo: "",
      currencyThree: "",
      currencyFour: "",
      currencyFive: "",
      amount: "",
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
      const allCurrencies = [
        this.currencyOne,
        this.currencyTwo,
        this.currencyThree,
        this.currencyFour,
        this.currencyFive,
      ].filter((item) => item !== "");
      return allCurrencies.length > 1 && this.amount !== "";
    },
  },
  methods: {
    ...mapActions("currency", ["getCurrencies", "compare"]),
    getActualValue(currencyName) {
      const compareResults = this.$store.state.currency.compare.success;
      if (currencyName === "") return 0;
      const formatter = new Intl.NumberFormat("en", {
        style: "currency",
        currency: currencyName,
      });
      const value = compareResults?.find((currency) => currency.currency === currencyName)?.value;
      return formatter.format(value || 0);
    },
    update() {
      const allCurrencies = [
        this.currencyOne,
        this.currencyTwo,
        this.currencyThree,
        this.currencyFour,
        this.currencyFive,
      ].filter((item) => item !== "");
      if (allCurrencies.length > 0 && this.amount !== "") {
        this.compare({
          amount: this.amount,
          currencies: allCurrencies,
        });
      }
    },
  },
};
</script>
