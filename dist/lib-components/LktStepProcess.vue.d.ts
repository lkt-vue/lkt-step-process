import { StepProcess } from "../types/StepProcess";
declare const slots: Readonly<{
    [name: string]: import("vue").Slot<any> | undefined;
}>;
declare const isLoading: import("vue").Ref<boolean, boolean>, config: import("vue").Ref<Record<string, any>, Record<string, any>>, prevButton: import("vue").Ref<null, null>, nextButton: import("vue").Ref<null, null>;
declare const displayHeader: import("vue").ComputedRef<string | boolean>;
declare const slotsSteps: import("vue").ComputedRef<string[]>;
declare const currentStep: import("vue").ComputedRef<any>, prevDisabled: import("vue").ComputedRef<boolean>, nextDisabled: import("vue").ComputedRef<boolean>, prevHidden: import("vue").ComputedRef<any>, nextHidden: import("vue").ComputedRef<any>, prevConfirm: import("vue").ComputedRef<any>, nextConfirm: import("vue").ComputedRef<any>, nextResource: import("vue").ComputedRef<any>, nextResourceData: import("vue").ComputedRef<any>, classes: import("vue").ComputedRef<string>;
declare const onNext: (data: any) => void, onPrev: (data: any) => void;
declare const __VLS_ctx: InstanceType<__VLS_PickNotAny<typeof __VLS_self, new () => {}>>;
declare var __VLS_1: {
    config: Record<string, any>;
    loading: boolean;
}, __VLS_10: {
    config: Record<string, any>;
}, __VLS_19: {
    config: Record<string, any>;
}, __VLS_22: string, __VLS_23: {
    config: Record<string, any>;
};
type __VLS_Slots = __VLS_PrettifyGlobal<__VLS_OmitStringIndex<typeof __VLS_ctx.$slots> & {
    [K in NonNullable<typeof __VLS_22>]?: (props: typeof __VLS_23) => any;
} & {
    'post-title'?: (props: typeof __VLS_1) => any;
} & {
    'button-prev'?: (props: typeof __VLS_10) => any;
} & {
    'button-next'?: (props: typeof __VLS_19) => any;
}>;
declare const __VLS_self: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    modelValue: {
        type: ObjectConstructor;
        required: false;
        default: () => StepProcess;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    nextText: {
        type: StringConstructor;
        default: string;
    };
    prevText: {
        type: StringConstructor;
        default: string;
    };
    nextValidator: {
        type: FunctionConstructor;
        required: false;
        default: () => boolean;
    };
    prevValidator: {
        type: FunctionConstructor;
        required: false;
        default: () => boolean;
    };
}>, {
    slots: typeof slots;
    isLoading: typeof isLoading;
    config: typeof config;
    prevButton: typeof prevButton;
    nextButton: typeof nextButton;
    displayHeader: typeof displayHeader;
    slotsSteps: typeof slotsSteps;
    currentStep: typeof currentStep;
    prevDisabled: typeof prevDisabled;
    nextDisabled: typeof nextDisabled;
    prevHidden: typeof prevHidden;
    nextHidden: typeof nextHidden;
    prevConfirm: typeof prevConfirm;
    nextConfirm: typeof nextConfirm;
    nextResource: typeof nextResource;
    nextResourceData: typeof nextResourceData;
    classes: typeof classes;
    onNext: typeof onNext;
    onPrev: typeof onPrev;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    finish: (...args: any[]) => void;
    next: (...args: any[]) => void;
    prev: (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: ObjectConstructor;
        required: false;
        default: () => StepProcess;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    nextText: {
        type: StringConstructor;
        default: string;
    };
    prevText: {
        type: StringConstructor;
        default: string;
    };
    nextValidator: {
        type: FunctionConstructor;
        required: false;
        default: () => boolean;
    };
    prevValidator: {
        type: FunctionConstructor;
        required: false;
        default: () => boolean;
    };
}>> & Readonly<{
    onFinish?: ((...args: any[]) => any) | undefined;
    onNext?: ((...args: any[]) => any) | undefined;
    onPrev?: ((...args: any[]) => any) | undefined;
}>, {
    title: string;
    modelValue: Record<string, any>;
    nextText: string;
    prevText: string;
    nextValidator: Function;
    prevValidator: Function;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare const __VLS_component: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    modelValue: {
        type: ObjectConstructor;
        required: false;
        default: () => StepProcess;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    nextText: {
        type: StringConstructor;
        default: string;
    };
    prevText: {
        type: StringConstructor;
        default: string;
    };
    nextValidator: {
        type: FunctionConstructor;
        required: false;
        default: () => boolean;
    };
    prevValidator: {
        type: FunctionConstructor;
        required: false;
        default: () => boolean;
    };
}>, {
    goNext: () => void;
    goPrev: () => void;
    startLoader: () => boolean;
    stopLoader: () => boolean;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    finish: (...args: any[]) => void;
    next: (...args: any[]) => void;
    prev: (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: ObjectConstructor;
        required: false;
        default: () => StepProcess;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    nextText: {
        type: StringConstructor;
        default: string;
    };
    prevText: {
        type: StringConstructor;
        default: string;
    };
    nextValidator: {
        type: FunctionConstructor;
        required: false;
        default: () => boolean;
    };
    prevValidator: {
        type: FunctionConstructor;
        required: false;
        default: () => boolean;
    };
}>> & Readonly<{
    onFinish?: ((...args: any[]) => any) | undefined;
    onNext?: ((...args: any[]) => any) | undefined;
    onPrev?: ((...args: any[]) => any) | undefined;
}>, {
    title: string;
    modelValue: Record<string, any>;
    nextText: string;
    prevText: string;
    nextValidator: Function;
    prevValidator: Function;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
