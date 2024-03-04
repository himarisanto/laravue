require("./bootstrap");

window.Vue = require("vue").default;

files
.keys()
.map((key) =>
    Vue.component(key.split("/").pop().split(".")[0], files(key).default)
);

Vue.component(
    "example-component",
    require("./components/ExampleComponent.vue").default
);

Vue.component(
    "data-component",
    require("./components/Datacomponent.vue").default
);

Vue.component(
    "create-component",
    require("./components/CreateComponent.vue").default
);
Vue.component(
    "edit-component",
    require("./components/Editcomponent.vue").default
);

const app = new Vue({
    el: "#app",
});
