import { StepProcess } from "../types/StepProcess";
declare const _default: {
    new (...args: any[]): import("vue").CreateComponentPublicInstance<Readonly<import("vue").ExtractPropTypes<{
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
        goNext: () => void;
        goPrev: () => void;
        startLoader: () => true;
        stopLoader: () => false;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("finish" | "next" | "prev")[], import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
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
    }, true, {}, {}, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
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
        goNext: () => void;
        goPrev: () => void;
        startLoader: () => true;
        stopLoader: () => false;
    }, {}, {}, {}, {
        title: string;
        modelValue: Record<string, any>;
        nextText: string;
        prevText: string;
        nextValidator: Function;
        prevValidator: Function;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
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
    goNext: () => void;
    goPrev: () => void;
    startLoader: () => true;
    stopLoader: () => false;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("finish" | "next" | "prev")[], "finish" | "next" | "prev", {
    title: string;
    modelValue: Record<string, any>;
    nextText: string;
    prevText: string;
    nextValidator: Function;
    prevValidator: Function;
}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: Record<string, {
        config: Record<string, any>;
    }> & {
        'post-title': (_: {
            config: Record<string, any>;
            loading: boolean;
        }) => any;
        'button-prev': (_: {
            config: Record<string, any>;
        }) => any;
        'button-next': (_: {
            config: Record<string, any>;
        }) => any;
    };
});
export default _default;
