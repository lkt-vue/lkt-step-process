import {LktObject} from "lkt-vue-kernel";

export type Step = {
    name: string
    readResource?: string
    nextResource?: string
    nextResourceData?: LktObject
    nextConfirm?: string
    prevConfirm?: string
    nextValidator?: Function | boolean
    prevValidator?: Function | boolean
    nextHidden?: boolean
    prevHidden?: boolean
}