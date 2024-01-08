import {App} from "vue";
import {default as stepProcess} from "./lib-components/LktStepProcess.vue";

import "./../lkt-step-process.css";

const LktStepProcess = {
    install: (app: App, options = {}) => {
        app.component('lkt-step-process', stepProcess);
    },
};
export default LktStepProcess;