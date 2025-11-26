import { ButtonNavProps } from '../config/ButtonNavProps';
declare var __VLS_7: {
    currentStep: string;
    currentStepIndex: number;
    amountOfSteps: number;
};
type __VLS_Slots = {} & {
    'nav-info'?: (props: typeof __VLS_7) => any;
};
declare const __VLS_component: import("vue").DefineComponent<ButtonNavProps, {
    goNext: () => void;
    goPrev: () => void;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    next: (...args: any[]) => void;
    prev: (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<ButtonNavProps> & Readonly<{
    onNext?: ((...args: any[]) => any) | undefined;
    onPrev?: ((...args: any[]) => any) | undefined;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
