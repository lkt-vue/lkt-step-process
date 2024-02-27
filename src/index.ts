import {App, Plugin} from "vue";
import {default as stepProcess} from "./lib-components/LktStepProcess.vue";

import "./../lkt-step-process.css";

const LktStepProcess: Plugin = {
    install: (app: App, options = {}) => {
        app.component('lkt-step-process', stepProcess);
    },
};
export default LktStepProcess;