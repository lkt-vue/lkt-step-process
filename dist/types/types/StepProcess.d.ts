import { LktObject } from "lkt-ts-interfaces";
import { Step } from "./Step";
export type StepProcess = {
    step: number | string;
    steps: Step[];
    data: LktObject;
};
