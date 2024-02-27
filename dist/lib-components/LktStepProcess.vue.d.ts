import { StepProcess } from "../types/StepProcess";
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
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
}, {
    goNext: () => void;
    goPrev: () => void;
    startLoader: () => boolean;
    stopLoader: () => boolean;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
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
}>> & {
    onNext?: ((...args: any[]) => any) | undefined;
    onFinish?: ((...args: any[]) => any) | undefined;
    onPrev?: ((...args: any[]) => any) | undefined;
}, {
    title: string;
    modelValue: Record<string, any>;
    nextText: string;
    prevText: string;
    nextValidator: Function;
    prevValidator: Function;
}, {}>, Partial<Record<string, (_: {
    config: Record<string, any>;
}) => any>> & {
    "post-title"?(_: {
        config: Record<string, any>;
        loading: boolean;
    }): any;
    "button-prev"?(_: {
        config: Record<string, any>;
    }): any;
    "button-next"?(_: {
        config: Record<string, any>;
    }): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
