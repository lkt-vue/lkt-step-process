import { LktObject } from "lkt-vue-kernel";
import { Step } from "./Step";
export type StepProcess = {
    step: number | string;
    steps: Step[];
    data: LktObject;
};
