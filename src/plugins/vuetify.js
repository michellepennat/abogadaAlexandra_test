// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/lib/styles/main.sass";
import "vuetify/styles";
import * as components from "vuetify/lib/components";
import * as directives from "vuetify/lib/directives";

// Vuetify
import { createVuetify } from "vuetify";

export default createVuetify(
  // https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
  components,
  directives
);
