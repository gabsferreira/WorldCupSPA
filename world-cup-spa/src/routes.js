import Index from "./components/Index.vue";
import Cup from "./components/Cup.vue";

export const routes = [
    { path: '', component: Index },
    { path: '/Cup/:id', component: Cup }
]