import { ButtonConfig, ClickEventArgs, ItemCrudButtonNavPosition, ItemCrudButtonNavVisibility, StepProcessConfig, StepProcessStepConfig } from 'lkt-vue-kernel';
declare var __VLS_10: {
    currentStep: any;
    currentStepIndex: any;
    amountOfSteps: number;
}, __VLS_13: string, __VLS_14: {
    config: {
        key: string;
        nextButton?: false | {
            type?: import("lkt-vue-kernel").ButtonType | undefined;
            name?: string | undefined;
            value?: string | undefined;
            disabled?: import("lkt-vue-kernel").ValidIsDisabledValue;
            openTooltip?: boolean | undefined;
            loading?: boolean | undefined;
            class?: string | undefined;
            containerClass?: string | undefined;
            wrapContent?: boolean | undefined;
            text?: import("lkt-vue-kernel").ValidTextValue;
            icon?: string | {
                icon?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                iconText?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                text?: import("lkt-vue-kernel").ValidTextValue;
                class?: import("lkt-vue-kernel").ValidTextValue;
                type?: import("lkt-vue-kernel").IconType | undefined;
                dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                position?: import("lkt-vue-kernel").IconPosition | undefined;
                events?: {
                    click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                } | undefined;
            } | undefined;
            iconEnd?: string | {
                icon?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                iconText?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                text?: import("lkt-vue-kernel").ValidTextValue;
                class?: import("lkt-vue-kernel").ValidTextValue;
                type?: import("lkt-vue-kernel").IconType | undefined;
                dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                position?: import("lkt-vue-kernel").IconPosition | undefined;
                events?: {
                    click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                } | undefined;
            } | undefined;
            img?: string | undefined;
            checked?: boolean | undefined;
            textOn?: import("lkt-vue-kernel").ValidTextValue;
            textOff?: import("lkt-vue-kernel").ValidTextValue;
            iconOn?: import("lkt-vue-kernel").ValidTextValue | {
                icon?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                iconText?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                text?: import("lkt-vue-kernel").ValidTextValue;
                class?: import("lkt-vue-kernel").ValidTextValue;
                type?: import("lkt-vue-kernel").IconType | undefined;
                dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                position?: import("lkt-vue-kernel").IconPosition | undefined;
                events?: {
                    click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                } | undefined;
            };
            iconOff?: import("lkt-vue-kernel").ValidTextValue | {
                icon?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                iconText?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                text?: import("lkt-vue-kernel").ValidTextValue;
                class?: import("lkt-vue-kernel").ValidTextValue;
                type?: import("lkt-vue-kernel").IconType | undefined;
                dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                position?: import("lkt-vue-kernel").IconPosition | undefined;
                events?: {
                    click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                } | undefined;
            };
            iconEndOn?: import("lkt-vue-kernel").ValidTextValue | {
                icon?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                iconText?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                text?: import("lkt-vue-kernel").ValidTextValue;
                class?: import("lkt-vue-kernel").ValidTextValue;
                type?: import("lkt-vue-kernel").IconType | undefined;
                dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                position?: import("lkt-vue-kernel").IconPosition | undefined;
                events?: {
                    click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                } | undefined;
            };
            iconEndOff?: import("lkt-vue-kernel").ValidTextValue | {
                icon?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                iconText?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                text?: import("lkt-vue-kernel").ValidTextValue;
                class?: import("lkt-vue-kernel").ValidTextValue;
                type?: import("lkt-vue-kernel").IconType | undefined;
                dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                position?: import("lkt-vue-kernel").IconPosition | undefined;
                events?: {
                    click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                } | undefined;
            };
            dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
            anchor?: {
                type?: import("lkt-vue-kernel").AnchorType | undefined;
                to?: string | ((data: import("lkt-vue-kernel").LktObject) => import("lkt-vue-kernel").RouteConfig | string) | {
                    path?: string | undefined;
                    name?: string | undefined;
                    hash?: string | undefined;
                    params?: import("lkt-vue-kernel").LktObject | undefined;
                    query?: import("lkt-vue-kernel").LktObject | undefined;
                    replace?: boolean | undefined;
                } | undefined;
                class?: string | undefined;
                isActive?: boolean | undefined;
                downloadFileName?: string | undefined;
                disabled?: boolean | undefined;
                confirmModal?: import("lkt-vue-kernel").ValidModalName;
                confirmModalKey?: import("lkt-vue-kernel").ValidModalKey;
                confirmData?: {
                    [x: string]: any;
                    [x: number]: any;
                    modalName?: import("lkt-vue-kernel").ValidModalName;
                    modalKey?: import("lkt-vue-kernel").ValidModalKey;
                    zIndex?: number | undefined;
                    type?: import("lkt-vue-kernel").ModalType | undefined;
                    size?: string | undefined;
                    preTitle?: string | undefined;
                    preTitleIcon?: string | undefined;
                    title?: string | undefined;
                    closeIcon?: string | undefined;
                    closeConfirm?: import("lkt-vue-kernel").ValidModalName;
                    closeConfirmKey?: import("lkt-vue-kernel").ValidModalKey;
                    showClose?: boolean | undefined;
                    disabledClose?: boolean | undefined;
                    disabledVeilClick?: boolean | undefined;
                    hiddenFooter?: boolean | undefined;
                    beforeClose?: import("lkt-vue-kernel").ValidBeforeCloseModal;
                    item?: import("lkt-vue-kernel").LktObject | undefined;
                    confirmButton?: {
                        type?: import("lkt-vue-kernel").ButtonType | undefined;
                        name?: string | undefined;
                        value?: string | undefined;
                        disabled?: import("lkt-vue-kernel").ValidIsDisabledValue;
                        openTooltip?: boolean | undefined;
                        loading?: boolean | undefined;
                        class?: string | undefined;
                        containerClass?: string | undefined;
                        wrapContent?: boolean | undefined;
                        text?: import("lkt-vue-kernel").ValidTextValue;
                        icon?: string | {
                            icon?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                            iconText?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                            text?: import("lkt-vue-kernel").ValidTextValue;
                            class?: import("lkt-vue-kernel").ValidTextValue;
                            type?: import("lkt-vue-kernel").IconType | undefined;
                            dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                            position?: import("lkt-vue-kernel").IconPosition | undefined;
                            events?: {
                                click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                            } | undefined;
                        } | undefined;
                        iconEnd?: string | {
                            icon?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                            iconText?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                            text?: import("lkt-vue-kernel").ValidTextValue;
                            class?: import("lkt-vue-kernel").ValidTextValue;
                            type?: import("lkt-vue-kernel").IconType | undefined;
                            dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                            position?: import("lkt-vue-kernel").IconPosition | undefined;
                            events?: {
                                click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                            } | undefined;
                        } | undefined;
                        img?: string | undefined;
                        checked?: boolean | undefined;
                        textOn?: import("lkt-vue-kernel").ValidTextValue;
                        textOff?: import("lkt-vue-kernel").ValidTextValue;
                        iconOn?: import("lkt-vue-kernel").ValidTextValue | {
                            icon?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                            iconText?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                            text?: import("lkt-vue-kernel").ValidTextValue;
                            class?: import("lkt-vue-kernel").ValidTextValue;
                            type?: import("lkt-vue-kernel").IconType | undefined;
                            dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                            position?: import("lkt-vue-kernel").IconPosition | undefined;
                            events?: {
                                click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                            } | undefined;
                        };
                        iconOff?: import("lkt-vue-kernel").ValidTextValue | {
                            icon?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                            iconText?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                            text?: import("lkt-vue-kernel").ValidTextValue;
                            class?: import("lkt-vue-kernel").ValidTextValue;
                            type?: import("lkt-vue-kernel").IconType | undefined;
                            dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                            position?: import("lkt-vue-kernel").IconPosition | undefined;
                            events?: {
                                click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                            } | undefined;
                        };
                        iconEndOn?: import("lkt-vue-kernel").ValidTextValue | {
                            icon?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                            iconText?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                            text?: import("lkt-vue-kernel").ValidTextValue;
                            class?: import("lkt-vue-kernel").ValidTextValue;
                            type?: import("lkt-vue-kernel").IconType | undefined;
                            dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                            position?: import("lkt-vue-kernel").IconPosition | undefined;
                            events?: {
                                click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                            } | undefined;
                        };
                        iconEndOff?: import("lkt-vue-kernel").ValidTextValue | {
                            icon?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                            iconText?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                            text?: import("lkt-vue-kernel").ValidTextValue;
                            class?: import("lkt-vue-kernel").ValidTextValue;
                            type?: import("lkt-vue-kernel").IconType | undefined;
                            dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                            position?: import("lkt-vue-kernel").IconPosition | undefined;
                            events?: {
                                click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                            } | undefined;
                        };
                        dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                        anchor?: /*elided*/ any | undefined;
                        resource?: string | undefined;
                        resourceData?: import("lkt-vue-kernel").LktObject | undefined;
                        modal?: import("lkt-vue-kernel").ValidModalName;
                        modalKey?: import("lkt-vue-kernel").ValidModalKey;
                        modalData?: Function | {
                            [x: string]: any;
                            [x: number]: any;
                            modalName?: import("lkt-vue-kernel").ValidModalName;
                            modalKey?: import("lkt-vue-kernel").ValidModalKey;
                            zIndex?: number | undefined;
                            type?: import("lkt-vue-kernel").ModalType | undefined;
                            size?: string | undefined;
                            preTitle?: string | undefined;
                            preTitleIcon?: string | undefined;
                            title?: string | undefined;
                            closeIcon?: string | undefined;
                            closeConfirm?: import("lkt-vue-kernel").ValidModalName;
                            closeConfirmKey?: import("lkt-vue-kernel").ValidModalKey;
                            showClose?: boolean | undefined;
                            disabledClose?: boolean | undefined;
                            disabledVeilClick?: boolean | undefined;
                            hiddenFooter?: boolean | undefined;
                            beforeClose?: import("lkt-vue-kernel").ValidBeforeCloseModal;
                            item?: import("lkt-vue-kernel").LktObject | undefined;
                            confirmButton?: /*elided*/ any | undefined;
                            cancelButton?: /*elided*/ any | undefined;
                            headerActionsButton?: /*elided*/ any | undefined;
                        } | undefined;
                        confirmModal?: import("lkt-vue-kernel").ValidModalName;
                        confirmModalKey?: import("lkt-vue-kernel").ValidModalKey;
                        confirmData?: {
                            [x: string]: any;
                            [x: number]: any;
                            modalName?: import("lkt-vue-kernel").ValidModalName;
                            modalKey?: import("lkt-vue-kernel").ValidModalKey;
                            zIndex?: number | undefined;
                            type?: import("lkt-vue-kernel").ModalType | undefined;
                            size?: string | undefined;
                            preTitle?: string | undefined;
                            preTitleIcon?: string | undefined;
                            title?: string | undefined;
                            closeIcon?: string | undefined;
                            closeConfirm?: import("lkt-vue-kernel").ValidModalName;
                            closeConfirmKey?: import("lkt-vue-kernel").ValidModalKey;
                            showClose?: boolean | undefined;
                            disabledClose?: boolean | undefined;
                            disabledVeilClick?: boolean | undefined;
                            hiddenFooter?: boolean | undefined;
                            beforeClose?: import("lkt-vue-kernel").ValidBeforeCloseModal;
                            item?: import("lkt-vue-kernel").LktObject | undefined;
                            confirmButton?: /*elided*/ any | undefined;
                            cancelButton?: /*elided*/ any | undefined;
                            headerActionsButton?: /*elided*/ any | undefined;
                        } | undefined;
                        modalCallbacks?: {
                            modalName: import("lkt-vue-kernel").ValidModalName;
                            modalKey?: import("lkt-vue-kernel").ValidModalKey;
                            action: import("lkt-vue-kernel").ModalCallbackAction;
                            method?: string | undefined;
                            args?: import("lkt-vue-kernel").LktObject | undefined;
                        }[] | undefined;
                        tooltip?: {
                            modelValue?: boolean | undefined;
                            alwaysOpen?: boolean | undefined;
                            class?: string | undefined;
                            contentClass?: string | undefined;
                            text?: string | undefined;
                            icon?: string | undefined;
                            iconAtEnd?: boolean | undefined;
                            engine?: import("lkt-vue-kernel").TooltipPositionEngine | undefined;
                            referrerMargin?: number | string | undefined;
                            windowMargin?: number | string | undefined;
                            referrerWidth?: boolean | undefined;
                            referrer?: HTMLElement | undefined;
                            locationY?: import("lkt-vue-kernel").TooltipLocationY | undefined;
                            locationX?: import("lkt-vue-kernel").TooltipLocationX | undefined;
                            showOnReferrerHover?: boolean | undefined;
                            showOnReferrerHoverDelay?: number | undefined;
                            hideOnReferrerLeave?: boolean | undefined;
                            hideOnReferrerLeaveDelay?: number | undefined;
                            compensationX?: number | undefined;
                            compensationY?: number | undefined;
                            compensateGlobalContainers?: boolean | undefined;
                            remoteControl?: boolean | undefined;
                        } | undefined;
                        splitIcon?: string | undefined;
                        showTooltipOnHover?: boolean | undefined;
                        showTooltipOnHoverDelay?: number | undefined;
                        hideTooltipOnLeave?: boolean | undefined;
                        splitClass?: string | undefined;
                        splitButtons?: /*elided*/ any[] | undefined;
                        tabindex?: import("lkt-vue-kernel").ValidTabIndex;
                        prop?: import("lkt-vue-kernel").LktObject | undefined;
                        clickRef?: (Element | import("vue").VueElement) | undefined;
                        events?: {
                            click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                            httpStart?: Function | undefined;
                            httpEnd?: ((data: ClickEventArgs) => void | undefined) | undefined;
                        } | undefined;
                    } | undefined;
                    cancelButton?: {
                        type?: import("lkt-vue-kernel").ButtonType | undefined;
                        name?: string | undefined;
                        value?: string | undefined;
                        disabled?: import("lkt-vue-kernel").ValidIsDisabledValue;
                        openTooltip?: boolean | undefined;
                        loading?: boolean | undefined;
                        class?: string | undefined;
                        containerClass?: string | undefined;
                        wrapContent?: boolean | undefined;
                        text?: import("lkt-vue-kernel").ValidTextValue;
                        icon?: string | {
                            icon?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                            iconText?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                            text?: import("lkt-vue-kernel").ValidTextValue;
                            class?: import("lkt-vue-kernel").ValidTextValue;
                            type?: import("lkt-vue-kernel").IconType | undefined;
                            dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                            position?: import("lkt-vue-kernel").IconPosition | undefined;
                            events?: {
                                click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                            } | undefined;
                        } | undefined;
                        iconEnd?: string | {
                            icon?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                            iconText?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                            text?: import("lkt-vue-kernel").ValidTextValue;
                            class?: import("lkt-vue-kernel").ValidTextValue;
                            type?: import("lkt-vue-kernel").IconType | undefined;
                            dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                            position?: import("lkt-vue-kernel").IconPosition | undefined;
                            events?: {
                                click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                            } | undefined;
                        } | undefined;
                        img?: string | undefined;
                        checked?: boolean | undefined;
                        textOn?: import("lkt-vue-kernel").ValidTextValue;
                        textOff?: import("lkt-vue-kernel").ValidTextValue;
                        iconOn?: import("lkt-vue-kernel").ValidTextValue | {
                            icon?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                            iconText?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                            text?: import("lkt-vue-kernel").ValidTextValue;
                            class?: import("lkt-vue-kernel").ValidTextValue;
                            type?: import("lkt-vue-kernel").IconType | undefined;
                            dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                            position?: import("lkt-vue-kernel").IconPosition | undefined;
                            events?: {
                                click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                            } | undefined;
                        };
                        iconOff?: import("lkt-vue-kernel").ValidTextValue | {
                            icon?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                            iconText?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                            text?: import("lkt-vue-kernel").ValidTextValue;
                            class?: import("lkt-vue-kernel").ValidTextValue;
                            type?: import("lkt-vue-kernel").IconType | undefined;
                            dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                            position?: import("lkt-vue-kernel").IconPosition | undefined;
                            events?: {
                                click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                            } | undefined;
                        };
                        iconEndOn?: import("lkt-vue-kernel").ValidTextValue | {
                            icon?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                            iconText?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                            text?: import("lkt-vue-kernel").ValidTextValue;
                            class?: import("lkt-vue-kernel").ValidTextValue;
                            type?: import("lkt-vue-kernel").IconType | undefined;
                            dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                            position?: import("lkt-vue-kernel").IconPosition | undefined;
                            events?: {
                                click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                            } | undefined;
                        };
                        iconEndOff?: import("lkt-vue-kernel").ValidTextValue | {
                            icon?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                            iconText?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                            text?: import("lkt-vue-kernel").ValidTextValue;
                            class?: import("lkt-vue-kernel").ValidTextValue;
                            type?: import("lkt-vue-kernel").IconType | undefined;
                            dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                            position?: import("lkt-vue-kernel").IconPosition | undefined;
                            events?: {
                                click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                            } | undefined;
                        };
                        dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                        anchor?: /*elided*/ any | undefined;
                        resource?: string | undefined;
                        resourceData?: import("lkt-vue-kernel").LktObject | undefined;
                        modal?: import("lkt-vue-kernel").ValidModalName;
                        modalKey?: import("lkt-vue-kernel").ValidModalKey;
                        modalData?: Function | {
                            [x: string]: any;
                            [x: number]: any;
                            modalName?: import("lkt-vue-kernel").ValidModalName;
                            modalKey?: import("lkt-vue-kernel").ValidModalKey;
                            zIndex?: number | undefined;
                            type?: import("lkt-vue-kernel").ModalType | undefined;
                            size?: string | undefined;
                            preTitle?: string | undefined;
                            preTitleIcon?: string | undefined;
                            title?: string | undefined;
                            closeIcon?: string | undefined;
                            closeConfirm?: import("lkt-vue-kernel").ValidModalName;
                            closeConfirmKey?: import("lkt-vue-kernel").ValidModalKey;
                            showClose?: boolean | undefined;
                            disabledClose?: boolean | undefined;
                            disabledVeilClick?: boolean | undefined;
                            hiddenFooter?: boolean | undefined;
                            beforeClose?: import("lkt-vue-kernel").ValidBeforeCloseModal;
                            item?: import("lkt-vue-kernel").LktObject | undefined;
                            confirmButton?: /*elided*/ any | undefined;
                            cancelButton?: /*elided*/ any | undefined;
                            headerActionsButton?: /*elided*/ any | undefined;
                        } | undefined;
                        confirmModal?: import("lkt-vue-kernel").ValidModalName;
                        confirmModalKey?: import("lkt-vue-kernel").ValidModalKey;
                        confirmData?: {
                            [x: string]: any;
                            [x: number]: any;
                            modalName?: import("lkt-vue-kernel").ValidModalName;
                            modalKey?: import("lkt-vue-kernel").ValidModalKey;
                            zIndex?: number | undefined;
                            type?: import("lkt-vue-kernel").ModalType | undefined;
                            size?: string | undefined;
                            preTitle?: string | undefined;
                            preTitleIcon?: string | undefined;
                            title?: string | undefined;
                            closeIcon?: string | undefined;
                            closeConfirm?: import("lkt-vue-kernel").ValidModalName;
                            closeConfirmKey?: import("lkt-vue-kernel").ValidModalKey;
                            showClose?: boolean | undefined;
                            disabledClose?: boolean | undefined;
                            disabledVeilClick?: boolean | undefined;
                            hiddenFooter?: boolean | undefined;
                            beforeClose?: import("lkt-vue-kernel").ValidBeforeCloseModal;
                            item?: import("lkt-vue-kernel").LktObject | undefined;
                            confirmButton?: /*elided*/ any | undefined;
                            cancelButton?: /*elided*/ any | undefined;
                            headerActionsButton?: /*elided*/ any | undefined;
                        } | undefined;
                        modalCallbacks?: {
                            modalName: import("lkt-vue-kernel").ValidModalName;
                            modalKey?: import("lkt-vue-kernel").ValidModalKey;
                            action: import("lkt-vue-kernel").ModalCallbackAction;
                            method?: string | undefined;
                            args?: import("lkt-vue-kernel").LktObject | undefined;
                        }[] | undefined;
                        tooltip?: {
                            modelValue?: boolean | undefined;
                            alwaysOpen?: boolean | undefined;
                            class?: string | undefined;
                            contentClass?: string | undefined;
                            text?: string | undefined;
                            icon?: string | undefined;
                            iconAtEnd?: boolean | undefined;
                            engine?: import("lkt-vue-kernel").TooltipPositionEngine | undefined;
                            referrerMargin?: number | string | undefined;
                            windowMargin?: number | string | undefined;
                            referrerWidth?: boolean | undefined;
                            referrer?: HTMLElement | undefined;
                            locationY?: import("lkt-vue-kernel").TooltipLocationY | undefined;
                            locationX?: import("lkt-vue-kernel").TooltipLocationX | undefined;
                            showOnReferrerHover?: boolean | undefined;
                            showOnReferrerHoverDelay?: number | undefined;
                            hideOnReferrerLeave?: boolean | undefined;
                            hideOnReferrerLeaveDelay?: number | undefined;
                            compensationX?: number | undefined;
                            compensationY?: number | undefined;
                            compensateGlobalContainers?: boolean | undefined;
                            remoteControl?: boolean | undefined;
                        } | undefined;
                        splitIcon?: string | undefined;
                        showTooltipOnHover?: boolean | undefined;
                        showTooltipOnHoverDelay?: number | undefined;
                        hideTooltipOnLeave?: boolean | undefined;
                        splitClass?: string | undefined;
                        splitButtons?: /*elided*/ any[] | undefined;
                        tabindex?: import("lkt-vue-kernel").ValidTabIndex;
                        prop?: import("lkt-vue-kernel").LktObject | undefined;
                        clickRef?: (Element | import("vue").VueElement) | undefined;
                        events?: {
                            click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                            httpStart?: Function | undefined;
                            httpEnd?: ((data: ClickEventArgs) => void | undefined) | undefined;
                        } | undefined;
                    } | undefined;
                    headerActionsButton?: {
                        type?: import("lkt-vue-kernel").ButtonType | undefined;
                        name?: string | undefined;
                        value?: string | undefined;
                        disabled?: import("lkt-vue-kernel").ValidIsDisabledValue;
                        openTooltip?: boolean | undefined;
                        loading?: boolean | undefined;
                        class?: string | undefined;
                        containerClass?: string | undefined;
                        wrapContent?: boolean | undefined;
                        text?: import("lkt-vue-kernel").ValidTextValue;
                        icon?: string | {
                            icon?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                            iconText?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                            text?: import("lkt-vue-kernel").ValidTextValue;
                            class?: import("lkt-vue-kernel").ValidTextValue;
                            type?: import("lkt-vue-kernel").IconType | undefined;
                            dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                            position?: import("lkt-vue-kernel").IconPosition | undefined;
                            events?: {
                                click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                            } | undefined;
                        } | undefined;
                        iconEnd?: string | {
                            icon?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                            iconText?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                            text?: import("lkt-vue-kernel").ValidTextValue;
                            class?: import("lkt-vue-kernel").ValidTextValue;
                            type?: import("lkt-vue-kernel").IconType | undefined;
                            dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                            position?: import("lkt-vue-kernel").IconPosition | undefined;
                            events?: {
                                click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                            } | undefined;
                        } | undefined;
                        img?: string | undefined;
                        checked?: boolean | undefined;
                        textOn?: import("lkt-vue-kernel").ValidTextValue;
                        textOff?: import("lkt-vue-kernel").ValidTextValue;
                        iconOn?: import("lkt-vue-kernel").ValidTextValue | {
                            icon?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                            iconText?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                            text?: import("lkt-vue-kernel").ValidTextValue;
                            class?: import("lkt-vue-kernel").ValidTextValue;
                            type?: import("lkt-vue-kernel").IconType | undefined;
                            dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                            position?: import("lkt-vue-kernel").IconPosition | undefined;
                            events?: {
                                click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                            } | undefined;
                        };
                        iconOff?: import("lkt-vue-kernel").ValidTextValue | {
                            icon?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                            iconText?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                            text?: import("lkt-vue-kernel").ValidTextValue;
                            class?: import("lkt-vue-kernel").ValidTextValue;
                            type?: import("lkt-vue-kernel").IconType | undefined;
                            dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                            position?: import("lkt-vue-kernel").IconPosition | undefined;
                            events?: {
                                click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                            } | undefined;
                        };
                        iconEndOn?: import("lkt-vue-kernel").ValidTextValue | {
                            icon?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                            iconText?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                            text?: import("lkt-vue-kernel").ValidTextValue;
                            class?: import("lkt-vue-kernel").ValidTextValue;
                            type?: import("lkt-vue-kernel").IconType | undefined;
                            dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                            position?: import("lkt-vue-kernel").IconPosition | undefined;
                            events?: {
                                click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                            } | undefined;
                        };
                        iconEndOff?: import("lkt-vue-kernel").ValidTextValue | {
                            icon?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                            iconText?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                            text?: import("lkt-vue-kernel").ValidTextValue;
                            class?: import("lkt-vue-kernel").ValidTextValue;
                            type?: import("lkt-vue-kernel").IconType | undefined;
                            dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                            position?: import("lkt-vue-kernel").IconPosition | undefined;
                            events?: {
                                click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                            } | undefined;
                        };
                        dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                        anchor?: /*elided*/ any | undefined;
                        resource?: string | undefined;
                        resourceData?: import("lkt-vue-kernel").LktObject | undefined;
                        modal?: import("lkt-vue-kernel").ValidModalName;
                        modalKey?: import("lkt-vue-kernel").ValidModalKey;
                        modalData?: Function | {
                            [x: string]: any;
                            [x: number]: any;
                            modalName?: import("lkt-vue-kernel").ValidModalName;
                            modalKey?: import("lkt-vue-kernel").ValidModalKey;
                            zIndex?: number | undefined;
                            type?: import("lkt-vue-kernel").ModalType | undefined;
                            size?: string | undefined;
                            preTitle?: string | undefined;
                            preTitleIcon?: string | undefined;
                            title?: string | undefined;
                            closeIcon?: string | undefined;
                            closeConfirm?: import("lkt-vue-kernel").ValidModalName;
                            closeConfirmKey?: import("lkt-vue-kernel").ValidModalKey;
                            showClose?: boolean | undefined;
                            disabledClose?: boolean | undefined;
                            disabledVeilClick?: boolean | undefined;
                            hiddenFooter?: boolean | undefined;
                            beforeClose?: import("lkt-vue-kernel").ValidBeforeCloseModal;
                            item?: import("lkt-vue-kernel").LktObject | undefined;
                            confirmButton?: /*elided*/ any | undefined;
                            cancelButton?: /*elided*/ any | undefined;
                            headerActionsButton?: /*elided*/ any | undefined;
                        } | undefined;
                        confirmModal?: import("lkt-vue-kernel").ValidModalName;
                        confirmModalKey?: import("lkt-vue-kernel").ValidModalKey;
                        confirmData?: {
                            [x: string]: any;
                            [x: number]: any;
                            modalName?: import("lkt-vue-kernel").ValidModalName;
                            modalKey?: import("lkt-vue-kernel").ValidModalKey;
                            zIndex?: number | undefined;
                            type?: import("lkt-vue-kernel").ModalType | undefined;
                            size?: string | undefined;
                            preTitle?: string | undefined;
                            preTitleIcon?: string | undefined;
                            title?: string | undefined;
                            closeIcon?: string | undefined;
                            closeConfirm?: import("lkt-vue-kernel").ValidModalName;
                            closeConfirmKey?: import("lkt-vue-kernel").ValidModalKey;
                            showClose?: boolean | undefined;
                            disabledClose?: boolean | undefined;
                            disabledVeilClick?: boolean | undefined;
                            hiddenFooter?: boolean | undefined;
                            beforeClose?: import("lkt-vue-kernel").ValidBeforeCloseModal;
                            item?: import("lkt-vue-kernel").LktObject | undefined;
                            confirmButton?: /*elided*/ any | undefined;
                            cancelButton?: /*elided*/ any | undefined;
                            headerActionsButton?: /*elided*/ any | undefined;
                        } | undefined;
                        modalCallbacks?: {
                            modalName: import("lkt-vue-kernel").ValidModalName;
                            modalKey?: import("lkt-vue-kernel").ValidModalKey;
                            action: import("lkt-vue-kernel").ModalCallbackAction;
                            method?: string | undefined;
                            args?: import("lkt-vue-kernel").LktObject | undefined;
                        }[] | undefined;
                        tooltip?: {
                            modelValue?: boolean | undefined;
                            alwaysOpen?: boolean | undefined;
                            class?: string | undefined;
                            contentClass?: string | undefined;
                            text?: string | undefined;
                            icon?: string | undefined;
                            iconAtEnd?: boolean | undefined;
                            engine?: import("lkt-vue-kernel").TooltipPositionEngine | undefined;
                            referrerMargin?: number | string | undefined;
                            windowMargin?: number | string | undefined;
                            referrerWidth?: boolean | undefined;
                            referrer?: HTMLElement | undefined;
                            locationY?: import("lkt-vue-kernel").TooltipLocationY | undefined;
                            locationX?: import("lkt-vue-kernel").TooltipLocationX | undefined;
                            showOnReferrerHover?: boolean | undefined;
                            showOnReferrerHoverDelay?: number | undefined;
                            hideOnReferrerLeave?: boolean | undefined;
                            hideOnReferrerLeaveDelay?: number | undefined;
                            compensationX?: number | undefined;
                            compensationY?: number | undefined;
                            compensateGlobalContainers?: boolean | undefined;
                            remoteControl?: boolean | undefined;
                        } | undefined;
                        splitIcon?: string | undefined;
                        showTooltipOnHover?: boolean | undefined;
                        showTooltipOnHoverDelay?: number | undefined;
                        hideTooltipOnLeave?: boolean | undefined;
                        splitClass?: string | undefined;
                        splitButtons?: /*elided*/ any[] | undefined;
                        tabindex?: import("lkt-vue-kernel").ValidTabIndex;
                        prop?: import("lkt-vue-kernel").LktObject | undefined;
                        clickRef?: (Element | import("vue").VueElement) | undefined;
                        events?: {
                            click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                            httpStart?: Function | undefined;
                            httpEnd?: ((data: ClickEventArgs) => void | undefined) | undefined;
                        } | undefined;
                    } | undefined;
                } | undefined;
                imposter?: boolean | undefined;
                external?: boolean | undefined;
                text?: import("lkt-vue-kernel").ValidTextValue;
                icon?: string | {
                    icon?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                    iconText?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                    text?: import("lkt-vue-kernel").ValidTextValue;
                    class?: import("lkt-vue-kernel").ValidTextValue;
                    type?: import("lkt-vue-kernel").IconType | undefined;
                    dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                    position?: import("lkt-vue-kernel").IconPosition | undefined;
                    events?: {
                        click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                    } | undefined;
                } | undefined;
                events?: {
                    click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                } | undefined;
                prop?: import("lkt-vue-kernel").LktObject | undefined;
                onClick?: Function | undefined;
            } | undefined;
            resource?: string | undefined;
            resourceData?: import("lkt-vue-kernel").LktObject | undefined;
            modal?: import("lkt-vue-kernel").ValidModalName;
            modalKey?: import("lkt-vue-kernel").ValidModalKey;
            modalData?: Function | {
                [x: string]: any;
                [x: number]: any;
                modalName?: import("lkt-vue-kernel").ValidModalName;
                modalKey?: import("lkt-vue-kernel").ValidModalKey;
                zIndex?: number | undefined;
                type?: import("lkt-vue-kernel").ModalType | undefined;
                size?: string | undefined;
                preTitle?: string | undefined;
                preTitleIcon?: string | undefined;
                title?: string | undefined;
                closeIcon?: string | undefined;
                closeConfirm?: import("lkt-vue-kernel").ValidModalName;
                closeConfirmKey?: import("lkt-vue-kernel").ValidModalKey;
                showClose?: boolean | undefined;
                disabledClose?: boolean | undefined;
                disabledVeilClick?: boolean | undefined;
                hiddenFooter?: boolean | undefined;
                beforeClose?: import("lkt-vue-kernel").ValidBeforeCloseModal;
                item?: import("lkt-vue-kernel").LktObject | undefined;
                confirmButton?: {
                    type?: import("lkt-vue-kernel").ButtonType | undefined;
                    name?: string | undefined;
                    value?: string | undefined;
                    disabled?: import("lkt-vue-kernel").ValidIsDisabledValue;
                    openTooltip?: boolean | undefined;
                    loading?: boolean | undefined;
                    class?: string | undefined;
                    containerClass?: string | undefined;
                    wrapContent?: boolean | undefined;
                    text?: import("lkt-vue-kernel").ValidTextValue;
                    icon?: string | {
                        icon?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                        iconText?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                        text?: import("lkt-vue-kernel").ValidTextValue;
                        class?: import("lkt-vue-kernel").ValidTextValue;
                        type?: import("lkt-vue-kernel").IconType | undefined;
                        dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                        position?: import("lkt-vue-kernel").IconPosition | undefined;
                        events?: {
                            click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                        } | undefined;
                    } | undefined;
                    iconEnd?: string | {
                        icon?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                        iconText?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                        text?: import("lkt-vue-kernel").ValidTextValue;
                        class?: import("lkt-vue-kernel").ValidTextValue;
                        type?: import("lkt-vue-kernel").IconType | undefined;
                        dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                        position?: import("lkt-vue-kernel").IconPosition | undefined;
                        events?: {
                            click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                        } | undefined;
                    } | undefined;
                    img?: string | undefined;
                    checked?: boolean | undefined;
                    textOn?: import("lkt-vue-kernel").ValidTextValue;
                    textOff?: import("lkt-vue-kernel").ValidTextValue;
                    iconOn?: import("lkt-vue-kernel").ValidTextValue | {
                        icon?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                        iconText?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                        text?: import("lkt-vue-kernel").ValidTextValue;
                        class?: import("lkt-vue-kernel").ValidTextValue;
                        type?: import("lkt-vue-kernel").IconType | undefined;
                        dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                        position?: import("lkt-vue-kernel").IconPosition | undefined;
                        events?: {
                            click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                        } | undefined;
                    };
                    iconOff?: import("lkt-vue-kernel").ValidTextValue | {
                        icon?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                        iconText?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                        text?: import("lkt-vue-kernel").ValidTextValue;
                        class?: import("lkt-vue-kernel").ValidTextValue;
                        type?: import("lkt-vue-kernel").IconType | undefined;
                        dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                        position?: import("lkt-vue-kernel").IconPosition | undefined;
                        events?: {
                            click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                        } | undefined;
                    };
                    iconEndOn?: import("lkt-vue-kernel").ValidTextValue | {
                        icon?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                        iconText?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                        text?: import("lkt-vue-kernel").ValidTextValue;
                        class?: import("lkt-vue-kernel").ValidTextValue;
                        type?: import("lkt-vue-kernel").IconType | undefined;
                        dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                        position?: import("lkt-vue-kernel").IconPosition | undefined;
                        events?: {
                            click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                        } | undefined;
                    };
                    iconEndOff?: import("lkt-vue-kernel").ValidTextValue | {
                        icon?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                        iconText?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                        text?: import("lkt-vue-kernel").ValidTextValue;
                        class?: import("lkt-vue-kernel").ValidTextValue;
                        type?: import("lkt-vue-kernel").IconType | undefined;
                        dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                        position?: import("lkt-vue-kernel").IconPosition | undefined;
                        events?: {
                            click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                        } | undefined;
                    };
                    dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                    anchor?: {
                        type?: import("lkt-vue-kernel").AnchorType | undefined;
                        to?: string | ((data: import("lkt-vue-kernel").LktObject) => import("lkt-vue-kernel").RouteConfig | string) | {
                            path?: string | undefined;
                            name?: string | undefined;
                            hash?: string | undefined;
                            params?: import("lkt-vue-kernel").LktObject | undefined;
                            query?: import("lkt-vue-kernel").LktObject | undefined;
                            replace?: boolean | undefined;
                        } | undefined;
                        class?: string | undefined;
                        isActive?: boolean | undefined;
                        downloadFileName?: string | undefined;
                        disabled?: boolean | undefined;
                        confirmModal?: import("lkt-vue-kernel").ValidModalName;
                        confirmModalKey?: import("lkt-vue-kernel").ValidModalKey;
                        confirmData?: {
                            [x: string]: any;
                            [x: number]: any;
                            modalName?: import("lkt-vue-kernel").ValidModalName;
                            modalKey?: import("lkt-vue-kernel").ValidModalKey;
                            zIndex?: number | undefined;
                            type?: import("lkt-vue-kernel").ModalType | undefined;
                            size?: string | undefined;
                            preTitle?: string | undefined;
                            preTitleIcon?: string | undefined;
                            title?: string | undefined;
                            closeIcon?: string | undefined;
                            closeConfirm?: import("lkt-vue-kernel").ValidModalName;
                            closeConfirmKey?: import("lkt-vue-kernel").ValidModalKey;
                            showClose?: boolean | undefined;
                            disabledClose?: boolean | undefined;
                            disabledVeilClick?: boolean | undefined;
                            hiddenFooter?: boolean | undefined;
                            beforeClose?: import("lkt-vue-kernel").ValidBeforeCloseModal;
                            item?: import("lkt-vue-kernel").LktObject | undefined;
                            confirmButton?: /*elided*/ any | undefined;
                            cancelButton?: /*elided*/ any | undefined;
                            headerActionsButton?: /*elided*/ any | undefined;
                        } | undefined;
                        imposter?: boolean | undefined;
                        external?: boolean | undefined;
                        text?: import("lkt-vue-kernel").ValidTextValue;
                        icon?: string | {
                            icon?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                            iconText?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                            text?: import("lkt-vue-kernel").ValidTextValue;
                            class?: import("lkt-vue-kernel").ValidTextValue;
                            type?: import("lkt-vue-kernel").IconType | undefined;
                            dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                            position?: import("lkt-vue-kernel").IconPosition | undefined;
                            events?: {
                                click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                            } | undefined;
                        } | undefined;
                        events?: {
                            click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                        } | undefined;
                        prop?: import("lkt-vue-kernel").LktObject | undefined;
                        onClick?: Function | undefined;
                    } | undefined;
                    resource?: string | undefined;
                    resourceData?: import("lkt-vue-kernel").LktObject | undefined;
                    modal?: import("lkt-vue-kernel").ValidModalName;
                    modalKey?: import("lkt-vue-kernel").ValidModalKey;
                    modalData?: Function | /*elided*/ any | undefined;
                    confirmModal?: import("lkt-vue-kernel").ValidModalName;
                    confirmModalKey?: import("lkt-vue-kernel").ValidModalKey;
                    confirmData?: /*elided*/ any | undefined;
                    modalCallbacks?: {
                        modalName: import("lkt-vue-kernel").ValidModalName;
                        modalKey?: import("lkt-vue-kernel").ValidModalKey;
                        action: import("lkt-vue-kernel").ModalCallbackAction;
                        method?: string | undefined;
                        args?: import("lkt-vue-kernel").LktObject | undefined;
                    }[] | undefined;
                    tooltip?: {
                        modelValue?: boolean | undefined;
                        alwaysOpen?: boolean | undefined;
                        class?: string | undefined;
                        contentClass?: string | undefined;
                        text?: string | undefined;
                        icon?: string | undefined;
                        iconAtEnd?: boolean | undefined;
                        engine?: import("lkt-vue-kernel").TooltipPositionEngine | undefined;
                        referrerMargin?: number | string | undefined;
                        windowMargin?: number | string | undefined;
                        referrerWidth?: boolean | undefined;
                        referrer?: HTMLElement | undefined;
                        locationY?: import("lkt-vue-kernel").TooltipLocationY | undefined;
                        locationX?: import("lkt-vue-kernel").TooltipLocationX | undefined;
                        showOnReferrerHover?: boolean | undefined;
                        showOnReferrerHoverDelay?: number | undefined;
                        hideOnReferrerLeave?: boolean | undefined;
                        hideOnReferrerLeaveDelay?: number | undefined;
                        compensationX?: number | undefined;
                        compensationY?: number | undefined;
                        compensateGlobalContainers?: boolean | undefined;
                        remoteControl?: boolean | undefined;
                    } | undefined;
                    splitIcon?: string | undefined;
                    showTooltipOnHover?: boolean | undefined;
                    showTooltipOnHoverDelay?: number | undefined;
                    hideTooltipOnLeave?: boolean | undefined;
                    splitClass?: string | undefined;
                    splitButtons?: /*elided*/ any[] | undefined;
                    tabindex?: import("lkt-vue-kernel").ValidTabIndex;
                    prop?: import("lkt-vue-kernel").LktObject | undefined;
                    clickRef?: (Element | import("vue").VueElement) | undefined;
                    events?: {
                        click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                        httpStart?: Function | undefined;
                        httpEnd?: ((data: ClickEventArgs) => void | undefined) | undefined;
                    } | undefined;
                } | undefined;
                cancelButton?: {
                    type?: import("lkt-vue-kernel").ButtonType | undefined;
                    name?: string | undefined;
                    value?: string | undefined;
                    disabled?: import("lkt-vue-kernel").ValidIsDisabledValue;
                    openTooltip?: boolean | undefined;
                    loading?: boolean | undefined;
                    class?: string | undefined;
                    containerClass?: string | undefined;
                    wrapContent?: boolean | undefined;
                    text?: import("lkt-vue-kernel").ValidTextValue;
                    icon?: string | {
                        icon?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                        iconText?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                        text?: import("lkt-vue-kernel").ValidTextValue;
                        class?: import("lkt-vue-kernel").ValidTextValue;
                        type?: import("lkt-vue-kernel").IconType | undefined;
                        dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                        position?: import("lkt-vue-kernel").IconPosition | undefined;
                        events?: {
                            click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                        } | undefined;
                    } | undefined;
                    iconEnd?: string | {
                        icon?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                        iconText?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                        text?: import("lkt-vue-kernel").ValidTextValue;
                        class?: import("lkt-vue-kernel").ValidTextValue;
                        type?: import("lkt-vue-kernel").IconType | undefined;
                        dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                        position?: import("lkt-vue-kernel").IconPosition | undefined;
                        events?: {
                            click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                        } | undefined;
                    } | undefined;
                    img?: string | undefined;
                    checked?: boolean | undefined;
                    textOn?: import("lkt-vue-kernel").ValidTextValue;
                    textOff?: import("lkt-vue-kernel").ValidTextValue;
                    iconOn?: import("lkt-vue-kernel").ValidTextValue | {
                        icon?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                        iconText?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                        text?: import("lkt-vue-kernel").ValidTextValue;
                        class?: import("lkt-vue-kernel").ValidTextValue;
                        type?: import("lkt-vue-kernel").IconType | undefined;
                        dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                        position?: import("lkt-vue-kernel").IconPosition | undefined;
                        events?: {
                            click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                        } | undefined;
                    };
                    iconOff?: import("lkt-vue-kernel").ValidTextValue | {
                        icon?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                        iconText?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                        text?: import("lkt-vue-kernel").ValidTextValue;
                        class?: import("lkt-vue-kernel").ValidTextValue;
                        type?: import("lkt-vue-kernel").IconType | undefined;
                        dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                        position?: import("lkt-vue-kernel").IconPosition | undefined;
                        events?: {
                            click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                        } | undefined;
                    };
                    iconEndOn?: import("lkt-vue-kernel").ValidTextValue | {
                        icon?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                        iconText?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                        text?: import("lkt-vue-kernel").ValidTextValue;
                        class?: import("lkt-vue-kernel").ValidTextValue;
                        type?: import("lkt-vue-kernel").IconType | undefined;
                        dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                        position?: import("lkt-vue-kernel").IconPosition | undefined;
                        events?: {
                            click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                        } | undefined;
                    };
                    iconEndOff?: import("lkt-vue-kernel").ValidTextValue | {
                        icon?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                        iconText?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                        text?: import("lkt-vue-kernel").ValidTextValue;
                        class?: import("lkt-vue-kernel").ValidTextValue;
                        type?: import("lkt-vue-kernel").IconType | undefined;
                        dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                        position?: import("lkt-vue-kernel").IconPosition | undefined;
                        events?: {
                            click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                        } | undefined;
                    };
                    dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                    anchor?: {
                        type?: import("lkt-vue-kernel").AnchorType | undefined;
                        to?: string | ((data: import("lkt-vue-kernel").LktObject) => import("lkt-vue-kernel").RouteConfig | string) | {
                            path?: string | undefined;
                            name?: string | undefined;
                            hash?: string | undefined;
                            params?: import("lkt-vue-kernel").LktObject | undefined;
                            query?: import("lkt-vue-kernel").LktObject | undefined;
                            replace?: boolean | undefined;
                        } | undefined;
                        class?: string | undefined;
                        isActive?: boolean | undefined;
                        downloadFileName?: string | undefined;
                        disabled?: boolean | undefined;
                        confirmModal?: import("lkt-vue-kernel").ValidModalName;
                        confirmModalKey?: import("lkt-vue-kernel").ValidModalKey;
                        confirmData?: {
                            [x: string]: any;
                            [x: number]: any;
                            modalName?: import("lkt-vue-kernel").ValidModalName;
                            modalKey?: import("lkt-vue-kernel").ValidModalKey;
                            zIndex?: number | undefined;
                            type?: import("lkt-vue-kernel").ModalType | undefined;
                            size?: string | undefined;
                            preTitle?: string | undefined;
                            preTitleIcon?: string | undefined;
                            title?: string | undefined;
                            closeIcon?: string | undefined;
                            closeConfirm?: import("lkt-vue-kernel").ValidModalName;
                            closeConfirmKey?: import("lkt-vue-kernel").ValidModalKey;
                            showClose?: boolean | undefined;
                            disabledClose?: boolean | undefined;
                            disabledVeilClick?: boolean | undefined;
                            hiddenFooter?: boolean | undefined;
                            beforeClose?: import("lkt-vue-kernel").ValidBeforeCloseModal;
                            item?: import("lkt-vue-kernel").LktObject | undefined;
                            confirmButton?: /*elided*/ any | undefined;
                            cancelButton?: /*elided*/ any | undefined;
                            headerActionsButton?: /*elided*/ any | undefined;
                        } | undefined;
                        imposter?: boolean | undefined;
                        external?: boolean | undefined;
                        text?: import("lkt-vue-kernel").ValidTextValue;
                        icon?: string | {
                            icon?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                            iconText?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                            text?: import("lkt-vue-kernel").ValidTextValue;
                            class?: import("lkt-vue-kernel").ValidTextValue;
                            type?: import("lkt-vue-kernel").IconType | undefined;
                            dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                            position?: import("lkt-vue-kernel").IconPosition | undefined;
                            events?: {
                                click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                            } | undefined;
                        } | undefined;
                        events?: {
                            click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                        } | undefined;
                        prop?: import("lkt-vue-kernel").LktObject | undefined;
                        onClick?: Function | undefined;
                    } | undefined;
                    resource?: string | undefined;
                    resourceData?: import("lkt-vue-kernel").LktObject | undefined;
                    modal?: import("lkt-vue-kernel").ValidModalName;
                    modalKey?: import("lkt-vue-kernel").ValidModalKey;
                    modalData?: Function | /*elided*/ any | undefined;
                    confirmModal?: import("lkt-vue-kernel").ValidModalName;
                    confirmModalKey?: import("lkt-vue-kernel").ValidModalKey;
                    confirmData?: /*elided*/ any | undefined;
                    modalCallbacks?: {
                        modalName: import("lkt-vue-kernel").ValidModalName;
                        modalKey?: import("lkt-vue-kernel").ValidModalKey;
                        action: import("lkt-vue-kernel").ModalCallbackAction;
                        method?: string | undefined;
                        args?: import("lkt-vue-kernel").LktObject | undefined;
                    }[] | undefined;
                    tooltip?: {
                        modelValue?: boolean | undefined;
                        alwaysOpen?: boolean | undefined;
                        class?: string | undefined;
                        contentClass?: string | undefined;
                        text?: string | undefined;
                        icon?: string | undefined;
                        iconAtEnd?: boolean | undefined;
                        engine?: import("lkt-vue-kernel").TooltipPositionEngine | undefined;
                        referrerMargin?: number | string | undefined;
                        windowMargin?: number | string | undefined;
                        referrerWidth?: boolean | undefined;
                        referrer?: HTMLElement | undefined;
                        locationY?: import("lkt-vue-kernel").TooltipLocationY | undefined;
                        locationX?: import("lkt-vue-kernel").TooltipLocationX | undefined;
                        showOnReferrerHover?: boolean | undefined;
                        showOnReferrerHoverDelay?: number | undefined;
                        hideOnReferrerLeave?: boolean | undefined;
                        hideOnReferrerLeaveDelay?: number | undefined;
                        compensationX?: number | undefined;
                        compensationY?: number | undefined;
                        compensateGlobalContainers?: boolean | undefined;
                        remoteControl?: boolean | undefined;
                    } | undefined;
                    splitIcon?: string | undefined;
                    showTooltipOnHover?: boolean | undefined;
                    showTooltipOnHoverDelay?: number | undefined;
                    hideTooltipOnLeave?: boolean | undefined;
                    splitClass?: string | undefined;
                    splitButtons?: /*elided*/ any[] | undefined;
                    tabindex?: import("lkt-vue-kernel").ValidTabIndex;
                    prop?: import("lkt-vue-kernel").LktObject | undefined;
                    clickRef?: (Element | import("vue").VueElement) | undefined;
                    events?: {
                        click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                        httpStart?: Function | undefined;
                        httpEnd?: ((data: ClickEventArgs) => void | undefined) | undefined;
                    } | undefined;
                } | undefined;
                headerActionsButton?: {
                    type?: import("lkt-vue-kernel").ButtonType | undefined;
                    name?: string | undefined;
                    value?: string | undefined;
                    disabled?: import("lkt-vue-kernel").ValidIsDisabledValue;
                    openTooltip?: boolean | undefined;
                    loading?: boolean | undefined;
                    class?: string | undefined;
                    containerClass?: string | undefined;
                    wrapContent?: boolean | undefined;
                    text?: import("lkt-vue-kernel").ValidTextValue;
                    icon?: string | {
                        icon?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                        iconText?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                        text?: import("lkt-vue-kernel").ValidTextValue;
                        class?: import("lkt-vue-kernel").ValidTextValue;
                        type?: import("lkt-vue-kernel").IconType | undefined;
                        dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                        position?: import("lkt-vue-kernel").IconPosition | undefined;
                        events?: {
                            click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                        } | undefined;
                    } | undefined;
                    iconEnd?: string | {
                        icon?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                        iconText?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                        text?: import("lkt-vue-kernel").ValidTextValue;
                        class?: import("lkt-vue-kernel").ValidTextValue;
                        type?: import("lkt-vue-kernel").IconType | undefined;
                        dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                        position?: import("lkt-vue-kernel").IconPosition | undefined;
                        events?: {
                            click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                        } | undefined;
                    } | undefined;
                    img?: string | undefined;
                    checked?: boolean | undefined;
                    textOn?: import("lkt-vue-kernel").ValidTextValue;
                    textOff?: import("lkt-vue-kernel").ValidTextValue;
                    iconOn?: import("lkt-vue-kernel").ValidTextValue | {
                        icon?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                        iconText?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                        text?: import("lkt-vue-kernel").ValidTextValue;
                        class?: import("lkt-vue-kernel").ValidTextValue;
                        type?: import("lkt-vue-kernel").IconType | undefined;
                        dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                        position?: import("lkt-vue-kernel").IconPosition | undefined;
                        events?: {
                            click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                        } | undefined;
                    };
                    iconOff?: import("lkt-vue-kernel").ValidTextValue | {
                        icon?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                        iconText?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                        text?: import("lkt-vue-kernel").ValidTextValue;
                        class?: import("lkt-vue-kernel").ValidTextValue;
                        type?: import("lkt-vue-kernel").IconType | undefined;
                        dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                        position?: import("lkt-vue-kernel").IconPosition | undefined;
                        events?: {
                            click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                        } | undefined;
                    };
                    iconEndOn?: import("lkt-vue-kernel").ValidTextValue | {
                        icon?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                        iconText?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                        text?: import("lkt-vue-kernel").ValidTextValue;
                        class?: import("lkt-vue-kernel").ValidTextValue;
                        type?: import("lkt-vue-kernel").IconType | undefined;
                        dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                        position?: import("lkt-vue-kernel").IconPosition | undefined;
                        events?: {
                            click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                        } | undefined;
                    };
                    iconEndOff?: import("lkt-vue-kernel").ValidTextValue | {
                        icon?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                        iconText?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                        text?: import("lkt-vue-kernel").ValidTextValue;
                        class?: import("lkt-vue-kernel").ValidTextValue;
                        type?: import("lkt-vue-kernel").IconType | undefined;
                        dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                        position?: import("lkt-vue-kernel").IconPosition | undefined;
                        events?: {
                            click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                        } | undefined;
                    };
                    dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                    anchor?: {
                        type?: import("lkt-vue-kernel").AnchorType | undefined;
                        to?: string | ((data: import("lkt-vue-kernel").LktObject) => import("lkt-vue-kernel").RouteConfig | string) | {
                            path?: string | undefined;
                            name?: string | undefined;
                            hash?: string | undefined;
                            params?: import("lkt-vue-kernel").LktObject | undefined;
                            query?: import("lkt-vue-kernel").LktObject | undefined;
                            replace?: boolean | undefined;
                        } | undefined;
                        class?: string | undefined;
                        isActive?: boolean | undefined;
                        downloadFileName?: string | undefined;
                        disabled?: boolean | undefined;
                        confirmModal?: import("lkt-vue-kernel").ValidModalName;
                        confirmModalKey?: import("lkt-vue-kernel").ValidModalKey;
                        confirmData?: {
                            [x: string]: any;
                            [x: number]: any;
                            modalName?: import("lkt-vue-kernel").ValidModalName;
                            modalKey?: import("lkt-vue-kernel").ValidModalKey;
                            zIndex?: number | undefined;
                            type?: import("lkt-vue-kernel").ModalType | undefined;
                            size?: string | undefined;
                            preTitle?: string | undefined;
                            preTitleIcon?: string | undefined;
                            title?: string | undefined;
                            closeIcon?: string | undefined;
                            closeConfirm?: import("lkt-vue-kernel").ValidModalName;
                            closeConfirmKey?: import("lkt-vue-kernel").ValidModalKey;
                            showClose?: boolean | undefined;
                            disabledClose?: boolean | undefined;
                            disabledVeilClick?: boolean | undefined;
                            hiddenFooter?: boolean | undefined;
                            beforeClose?: import("lkt-vue-kernel").ValidBeforeCloseModal;
                            item?: import("lkt-vue-kernel").LktObject | undefined;
                            confirmButton?: /*elided*/ any | undefined;
                            cancelButton?: /*elided*/ any | undefined;
                            headerActionsButton?: /*elided*/ any | undefined;
                        } | undefined;
                        imposter?: boolean | undefined;
                        external?: boolean | undefined;
                        text?: import("lkt-vue-kernel").ValidTextValue;
                        icon?: string | {
                            icon?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                            iconText?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                            text?: import("lkt-vue-kernel").ValidTextValue;
                            class?: import("lkt-vue-kernel").ValidTextValue;
                            type?: import("lkt-vue-kernel").IconType | undefined;
                            dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                            position?: import("lkt-vue-kernel").IconPosition | undefined;
                            events?: {
                                click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                            } | undefined;
                        } | undefined;
                        events?: {
                            click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                        } | undefined;
                        prop?: import("lkt-vue-kernel").LktObject | undefined;
                        onClick?: Function | undefined;
                    } | undefined;
                    resource?: string | undefined;
                    resourceData?: import("lkt-vue-kernel").LktObject | undefined;
                    modal?: import("lkt-vue-kernel").ValidModalName;
                    modalKey?: import("lkt-vue-kernel").ValidModalKey;
                    modalData?: Function | /*elided*/ any | undefined;
                    confirmModal?: import("lkt-vue-kernel").ValidModalName;
                    confirmModalKey?: import("lkt-vue-kernel").ValidModalKey;
                    confirmData?: /*elided*/ any | undefined;
                    modalCallbacks?: {
                        modalName: import("lkt-vue-kernel").ValidModalName;
                        modalKey?: import("lkt-vue-kernel").ValidModalKey;
                        action: import("lkt-vue-kernel").ModalCallbackAction;
                        method?: string | undefined;
                        args?: import("lkt-vue-kernel").LktObject | undefined;
                    }[] | undefined;
                    tooltip?: {
                        modelValue?: boolean | undefined;
                        alwaysOpen?: boolean | undefined;
                        class?: string | undefined;
                        contentClass?: string | undefined;
                        text?: string | undefined;
                        icon?: string | undefined;
                        iconAtEnd?: boolean | undefined;
                        engine?: import("lkt-vue-kernel").TooltipPositionEngine | undefined;
                        referrerMargin?: number | string | undefined;
                        windowMargin?: number | string | undefined;
                        referrerWidth?: boolean | undefined;
                        referrer?: HTMLElement | undefined;
                        locationY?: import("lkt-vue-kernel").TooltipLocationY | undefined;
                        locationX?: import("lkt-vue-kernel").TooltipLocationX | undefined;
                        showOnReferrerHover?: boolean | undefined;
                        showOnReferrerHoverDelay?: number | undefined;
                        hideOnReferrerLeave?: boolean | undefined;
                        hideOnReferrerLeaveDelay?: number | undefined;
                        compensationX?: number | undefined;
                        compensationY?: number | undefined;
                        compensateGlobalContainers?: boolean | undefined;
                        remoteControl?: boolean | undefined;
                    } | undefined;
                    splitIcon?: string | undefined;
                    showTooltipOnHover?: boolean | undefined;
                    showTooltipOnHoverDelay?: number | undefined;
                    hideTooltipOnLeave?: boolean | undefined;
                    splitClass?: string | undefined;
                    splitButtons?: /*elided*/ any[] | undefined;
                    tabindex?: import("lkt-vue-kernel").ValidTabIndex;
                    prop?: import("lkt-vue-kernel").LktObject | undefined;
                    clickRef?: (Element | import("vue").VueElement) | undefined;
                    events?: {
                        click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                        httpStart?: Function | undefined;
                        httpEnd?: ((data: ClickEventArgs) => void | undefined) | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            confirmModal?: import("lkt-vue-kernel").ValidModalName;
            confirmModalKey?: import("lkt-vue-kernel").ValidModalKey;
            confirmData?: {
                [x: string]: any;
                [x: number]: any;
                modalName?: import("lkt-vue-kernel").ValidModalName;
                modalKey?: import("lkt-vue-kernel").ValidModalKey;
                zIndex?: number | undefined;
                type?: import("lkt-vue-kernel").ModalType | undefined;
                size?: string | undefined;
                preTitle?: string | undefined;
                preTitleIcon?: string | undefined;
                title?: string | undefined;
                closeIcon?: string | undefined;
                closeConfirm?: import("lkt-vue-kernel").ValidModalName;
                closeConfirmKey?: import("lkt-vue-kernel").ValidModalKey;
                showClose?: boolean | undefined;
                disabledClose?: boolean | undefined;
                disabledVeilClick?: boolean | undefined;
                hiddenFooter?: boolean | undefined;
                beforeClose?: import("lkt-vue-kernel").ValidBeforeCloseModal;
                item?: import("lkt-vue-kernel").LktObject | undefined;
                confirmButton?: {
                    type?: import("lkt-vue-kernel").ButtonType | undefined;
                    name?: string | undefined;
                    value?: string | undefined;
                    disabled?: import("lkt-vue-kernel").ValidIsDisabledValue;
                    openTooltip?: boolean | undefined;
                    loading?: boolean | undefined;
                    class?: string | undefined;
                    containerClass?: string | undefined;
                    wrapContent?: boolean | undefined;
                    text?: import("lkt-vue-kernel").ValidTextValue;
                    icon?: string | {
                        icon?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                        iconText?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                        text?: import("lkt-vue-kernel").ValidTextValue;
                        class?: import("lkt-vue-kernel").ValidTextValue;
                        type?: import("lkt-vue-kernel").IconType | undefined;
                        dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                        position?: import("lkt-vue-kernel").IconPosition | undefined;
                        events?: {
                            click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                        } | undefined;
                    } | undefined;
                    iconEnd?: string | {
                        icon?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                        iconText?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                        text?: import("lkt-vue-kernel").ValidTextValue;
                        class?: import("lkt-vue-kernel").ValidTextValue;
                        type?: import("lkt-vue-kernel").IconType | undefined;
                        dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                        position?: import("lkt-vue-kernel").IconPosition | undefined;
                        events?: {
                            click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                        } | undefined;
                    } | undefined;
                    img?: string | undefined;
                    checked?: boolean | undefined;
                    textOn?: import("lkt-vue-kernel").ValidTextValue;
                    textOff?: import("lkt-vue-kernel").ValidTextValue;
                    iconOn?: import("lkt-vue-kernel").ValidTextValue | {
                        icon?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                        iconText?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                        text?: import("lkt-vue-kernel").ValidTextValue;
                        class?: import("lkt-vue-kernel").ValidTextValue;
                        type?: import("lkt-vue-kernel").IconType | undefined;
                        dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                        position?: import("lkt-vue-kernel").IconPosition | undefined;
                        events?: {
                            click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                        } | undefined;
                    };
                    iconOff?: import("lkt-vue-kernel").ValidTextValue | {
                        icon?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                        iconText?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                        text?: import("lkt-vue-kernel").ValidTextValue;
                        class?: import("lkt-vue-kernel").ValidTextValue;
                        type?: import("lkt-vue-kernel").IconType | undefined;
                        dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                        position?: import("lkt-vue-kernel").IconPosition | undefined;
                        events?: {
                            click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                        } | undefined;
                    };
                    iconEndOn?: import("lkt-vue-kernel").ValidTextValue | {
                        icon?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                        iconText?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                        text?: import("lkt-vue-kernel").ValidTextValue;
                        class?: import("lkt-vue-kernel").ValidTextValue;
                        type?: import("lkt-vue-kernel").IconType | undefined;
                        dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                        position?: import("lkt-vue-kernel").IconPosition | undefined;
                        events?: {
                            click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                        } | undefined;
                    };
                    iconEndOff?: import("lkt-vue-kernel").ValidTextValue | {
                        icon?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                        iconText?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                        text?: import("lkt-vue-kernel").ValidTextValue;
                        class?: import("lkt-vue-kernel").ValidTextValue;
                        type?: import("lkt-vue-kernel").IconType | undefined;
                        dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                        position?: import("lkt-vue-kernel").IconPosition | undefined;
                        events?: {
                            click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                        } | undefined;
                    };
                    dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                    anchor?: {
                        type?: import("lkt-vue-kernel").AnchorType | undefined;
                        to?: string | ((data: import("lkt-vue-kernel").LktObject) => import("lkt-vue-kernel").RouteConfig | string) | {
                            path?: string | undefined;
                            name?: string | undefined;
                            hash?: string | undefined;
                            params?: import("lkt-vue-kernel").LktObject | undefined;
                            query?: import("lkt-vue-kernel").LktObject | undefined;
                            replace?: boolean | undefined;
                        } | undefined;
                        class?: string | undefined;
                        isActive?: boolean | undefined;
                        downloadFileName?: string | undefined;
                        disabled?: boolean | undefined;
                        confirmModal?: import("lkt-vue-kernel").ValidModalName;
                        confirmModalKey?: import("lkt-vue-kernel").ValidModalKey;
                        confirmData?: {
                            [x: string]: any;
                            [x: number]: any;
                            modalName?: import("lkt-vue-kernel").ValidModalName;
                            modalKey?: import("lkt-vue-kernel").ValidModalKey;
                            zIndex?: number | undefined;
                            type?: import("lkt-vue-kernel").ModalType | undefined;
                            size?: string | undefined;
                            preTitle?: string | undefined;
                            preTitleIcon?: string | undefined;
                            title?: string | undefined;
                            closeIcon?: string | undefined;
                            closeConfirm?: import("lkt-vue-kernel").ValidModalName;
                            closeConfirmKey?: import("lkt-vue-kernel").ValidModalKey;
                            showClose?: boolean | undefined;
                            disabledClose?: boolean | undefined;
                            disabledVeilClick?: boolean | undefined;
                            hiddenFooter?: boolean | undefined;
                            beforeClose?: import("lkt-vue-kernel").ValidBeforeCloseModal;
                            item?: import("lkt-vue-kernel").LktObject | undefined;
                            confirmButton?: /*elided*/ any | undefined;
                            cancelButton?: /*elided*/ any | undefined;
                            headerActionsButton?: /*elided*/ any | undefined;
                        } | undefined;
                        imposter?: boolean | undefined;
                        external?: boolean | undefined;
                        text?: import("lkt-vue-kernel").ValidTextValue;
                        icon?: string | {
                            icon?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                            iconText?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                            text?: import("lkt-vue-kernel").ValidTextValue;
                            class?: import("lkt-vue-kernel").ValidTextValue;
                            type?: import("lkt-vue-kernel").IconType | undefined;
                            dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                            position?: import("lkt-vue-kernel").IconPosition | undefined;
                            events?: {
                                click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                            } | undefined;
                        } | undefined;
                        events?: {
                            click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                        } | undefined;
                        prop?: import("lkt-vue-kernel").LktObject | undefined;
                        onClick?: Function | undefined;
                    } | undefined;
                    resource?: string | undefined;
                    resourceData?: import("lkt-vue-kernel").LktObject | undefined;
                    modal?: import("lkt-vue-kernel").ValidModalName;
                    modalKey?: import("lkt-vue-kernel").ValidModalKey;
                    modalData?: Function | /*elided*/ any | undefined;
                    confirmModal?: import("lkt-vue-kernel").ValidModalName;
                    confirmModalKey?: import("lkt-vue-kernel").ValidModalKey;
                    confirmData?: /*elided*/ any | undefined;
                    modalCallbacks?: {
                        modalName: import("lkt-vue-kernel").ValidModalName;
                        modalKey?: import("lkt-vue-kernel").ValidModalKey;
                        action: import("lkt-vue-kernel").ModalCallbackAction;
                        method?: string | undefined;
                        args?: import("lkt-vue-kernel").LktObject | undefined;
                    }[] | undefined;
                    tooltip?: {
                        modelValue?: boolean | undefined;
                        alwaysOpen?: boolean | undefined;
                        class?: string | undefined;
                        contentClass?: string | undefined;
                        text?: string | undefined;
                        icon?: string | undefined;
                        iconAtEnd?: boolean | undefined;
                        engine?: import("lkt-vue-kernel").TooltipPositionEngine | undefined;
                        referrerMargin?: number | string | undefined;
                        windowMargin?: number | string | undefined;
                        referrerWidth?: boolean | undefined;
                        referrer?: HTMLElement | undefined;
                        locationY?: import("lkt-vue-kernel").TooltipLocationY | undefined;
                        locationX?: import("lkt-vue-kernel").TooltipLocationX | undefined;
                        showOnReferrerHover?: boolean | undefined;
                        showOnReferrerHoverDelay?: number | undefined;
                        hideOnReferrerLeave?: boolean | undefined;
                        hideOnReferrerLeaveDelay?: number | undefined;
                        compensationX?: number | undefined;
                        compensationY?: number | undefined;
                        compensateGlobalContainers?: boolean | undefined;
                        remoteControl?: boolean | undefined;
                    } | undefined;
                    splitIcon?: string | undefined;
                    showTooltipOnHover?: boolean | undefined;
                    showTooltipOnHoverDelay?: number | undefined;
                    hideTooltipOnLeave?: boolean | undefined;
                    splitClass?: string | undefined;
                    splitButtons?: /*elided*/ any[] | undefined;
                    tabindex?: import("lkt-vue-kernel").ValidTabIndex;
                    prop?: import("lkt-vue-kernel").LktObject | undefined;
                    clickRef?: (Element | import("vue").VueElement) | undefined;
                    events?: {
                        click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                        httpStart?: Function | undefined;
                        httpEnd?: ((data: ClickEventArgs) => void | undefined) | undefined;
                    } | undefined;
                } | undefined;
                cancelButton?: {
                    type?: import("lkt-vue-kernel").ButtonType | undefined;
                    name?: string | undefined;
                    value?: string | undefined;
                    disabled?: import("lkt-vue-kernel").ValidIsDisabledValue;
                    openTooltip?: boolean | undefined;
                    loading?: boolean | undefined;
                    class?: string | undefined;
                    containerClass?: string | undefined;
                    wrapContent?: boolean | undefined;
                    text?: import("lkt-vue-kernel").ValidTextValue;
                    icon?: string | {
                        icon?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                        iconText?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                        text?: import("lkt-vue-kernel").ValidTextValue;
                        class?: import("lkt-vue-kernel").ValidTextValue;
                        type?: import("lkt-vue-kernel").IconType | undefined;
                        dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                        position?: import("lkt-vue-kernel").IconPosition | undefined;
                        events?: {
                            click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                        } | undefined;
                    } | undefined;
                    iconEnd?: string | {
                        icon?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                        iconText?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                        text?: import("lkt-vue-kernel").ValidTextValue;
                        class?: import("lkt-vue-kernel").ValidTextValue;
                        type?: import("lkt-vue-kernel").IconType | undefined;
                        dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                        position?: import("lkt-vue-kernel").IconPosition | undefined;
                        events?: {
                            click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                        } | undefined;
                    } | undefined;
                    img?: string | undefined;
                    checked?: boolean | undefined;
                    textOn?: import("lkt-vue-kernel").ValidTextValue;
                    textOff?: import("lkt-vue-kernel").ValidTextValue;
                    iconOn?: import("lkt-vue-kernel").ValidTextValue | {
                        icon?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                        iconText?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                        text?: import("lkt-vue-kernel").ValidTextValue;
                        class?: import("lkt-vue-kernel").ValidTextValue;
                        type?: import("lkt-vue-kernel").IconType | undefined;
                        dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                        position?: import("lkt-vue-kernel").IconPosition | undefined;
                        events?: {
                            click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                        } | undefined;
                    };
                    iconOff?: import("lkt-vue-kernel").ValidTextValue | {
                        icon?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                        iconText?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                        text?: import("lkt-vue-kernel").ValidTextValue;
                        class?: import("lkt-vue-kernel").ValidTextValue;
                        type?: import("lkt-vue-kernel").IconType | undefined;
                        dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                        position?: import("lkt-vue-kernel").IconPosition | undefined;
                        events?: {
                            click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                        } | undefined;
                    };
                    iconEndOn?: import("lkt-vue-kernel").ValidTextValue | {
                        icon?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                        iconText?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                        text?: import("lkt-vue-kernel").ValidTextValue;
                        class?: import("lkt-vue-kernel").ValidTextValue;
                        type?: import("lkt-vue-kernel").IconType | undefined;
                        dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                        position?: import("lkt-vue-kernel").IconPosition | undefined;
                        events?: {
                            click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                        } | undefined;
                    };
                    iconEndOff?: import("lkt-vue-kernel").ValidTextValue | {
                        icon?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                        iconText?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                        text?: import("lkt-vue-kernel").ValidTextValue;
                        class?: import("lkt-vue-kernel").ValidTextValue;
                        type?: import("lkt-vue-kernel").IconType | undefined;
                        dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                        position?: import("lkt-vue-kernel").IconPosition | undefined;
                        events?: {
                            click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                        } | undefined;
                    };
                    dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                    anchor?: {
                        type?: import("lkt-vue-kernel").AnchorType | undefined;
                        to?: string | ((data: import("lkt-vue-kernel").LktObject) => import("lkt-vue-kernel").RouteConfig | string) | {
                            path?: string | undefined;
                            name?: string | undefined;
                            hash?: string | undefined;
                            params?: import("lkt-vue-kernel").LktObject | undefined;
                            query?: import("lkt-vue-kernel").LktObject | undefined;
                            replace?: boolean | undefined;
                        } | undefined;
                        class?: string | undefined;
                        isActive?: boolean | undefined;
                        downloadFileName?: string | undefined;
                        disabled?: boolean | undefined;
                        confirmModal?: import("lkt-vue-kernel").ValidModalName;
                        confirmModalKey?: import("lkt-vue-kernel").ValidModalKey;
                        confirmData?: {
                            [x: string]: any;
                            [x: number]: any;
                            modalName?: import("lkt-vue-kernel").ValidModalName;
                            modalKey?: import("lkt-vue-kernel").ValidModalKey;
                            zIndex?: number | undefined;
                            type?: import("lkt-vue-kernel").ModalType | undefined;
                            size?: string | undefined;
                            preTitle?: string | undefined;
                            preTitleIcon?: string | undefined;
                            title?: string | undefined;
                            closeIcon?: string | undefined;
                            closeConfirm?: import("lkt-vue-kernel").ValidModalName;
                            closeConfirmKey?: import("lkt-vue-kernel").ValidModalKey;
                            showClose?: boolean | undefined;
                            disabledClose?: boolean | undefined;
                            disabledVeilClick?: boolean | undefined;
                            hiddenFooter?: boolean | undefined;
                            beforeClose?: import("lkt-vue-kernel").ValidBeforeCloseModal;
                            item?: import("lkt-vue-kernel").LktObject | undefined;
                            confirmButton?: /*elided*/ any | undefined;
                            cancelButton?: /*elided*/ any | undefined;
                            headerActionsButton?: /*elided*/ any | undefined;
                        } | undefined;
                        imposter?: boolean | undefined;
                        external?: boolean | undefined;
                        text?: import("lkt-vue-kernel").ValidTextValue;
                        icon?: string | {
                            icon?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                            iconText?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                            text?: import("lkt-vue-kernel").ValidTextValue;
                            class?: import("lkt-vue-kernel").ValidTextValue;
                            type?: import("lkt-vue-kernel").IconType | undefined;
                            dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                            position?: import("lkt-vue-kernel").IconPosition | undefined;
                            events?: {
                                click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                            } | undefined;
                        } | undefined;
                        events?: {
                            click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                        } | undefined;
                        prop?: import("lkt-vue-kernel").LktObject | undefined;
                        onClick?: Function | undefined;
                    } | undefined;
                    resource?: string | undefined;
                    resourceData?: import("lkt-vue-kernel").LktObject | undefined;
                    modal?: import("lkt-vue-kernel").ValidModalName;
                    modalKey?: import("lkt-vue-kernel").ValidModalKey;
                    modalData?: Function | /*elided*/ any | undefined;
                    confirmModal?: import("lkt-vue-kernel").ValidModalName;
                    confirmModalKey?: import("lkt-vue-kernel").ValidModalKey;
                    confirmData?: /*elided*/ any | undefined;
                    modalCallbacks?: {
                        modalName: import("lkt-vue-kernel").ValidModalName;
                        modalKey?: import("lkt-vue-kernel").ValidModalKey;
                        action: import("lkt-vue-kernel").ModalCallbackAction;
                        method?: string | undefined;
                        args?: import("lkt-vue-kernel").LktObject | undefined;
                    }[] | undefined;
                    tooltip?: {
                        modelValue?: boolean | undefined;
                        alwaysOpen?: boolean | undefined;
                        class?: string | undefined;
                        contentClass?: string | undefined;
                        text?: string | undefined;
                        icon?: string | undefined;
                        iconAtEnd?: boolean | undefined;
                        engine?: import("lkt-vue-kernel").TooltipPositionEngine | undefined;
                        referrerMargin?: number | string | undefined;
                        windowMargin?: number | string | undefined;
                        referrerWidth?: boolean | undefined;
                        referrer?: HTMLElement | undefined;
                        locationY?: import("lkt-vue-kernel").TooltipLocationY | undefined;
                        locationX?: import("lkt-vue-kernel").TooltipLocationX | undefined;
                        showOnReferrerHover?: boolean | undefined;
                        showOnReferrerHoverDelay?: number | undefined;
                        hideOnReferrerLeave?: boolean | undefined;
                        hideOnReferrerLeaveDelay?: number | undefined;
                        compensationX?: number | undefined;
                        compensationY?: number | undefined;
                        compensateGlobalContainers?: boolean | undefined;
                        remoteControl?: boolean | undefined;
                    } | undefined;
                    splitIcon?: string | undefined;
                    showTooltipOnHover?: boolean | undefined;
                    showTooltipOnHoverDelay?: number | undefined;
                    hideTooltipOnLeave?: boolean | undefined;
                    splitClass?: string | undefined;
                    splitButtons?: /*elided*/ any[] | undefined;
                    tabindex?: import("lkt-vue-kernel").ValidTabIndex;
                    prop?: import("lkt-vue-kernel").LktObject | undefined;
                    clickRef?: (Element | import("vue").VueElement) | undefined;
                    events?: {
                        click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                        httpStart?: Function | undefined;
                        httpEnd?: ((data: ClickEventArgs) => void | undefined) | undefined;
                    } | undefined;
                } | undefined;
                headerActionsButton?: {
                    type?: import("lkt-vue-kernel").ButtonType | undefined;
                    name?: string | undefined;
                    value?: string | undefined;
                    disabled?: import("lkt-vue-kernel").ValidIsDisabledValue;
                    openTooltip?: boolean | undefined;
                    loading?: boolean | undefined;
                    class?: string | undefined;
                    containerClass?: string | undefined;
                    wrapContent?: boolean | undefined;
                    text?: import("lkt-vue-kernel").ValidTextValue;
                    icon?: string | {
                        icon?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                        iconText?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                        text?: import("lkt-vue-kernel").ValidTextValue;
                        class?: import("lkt-vue-kernel").ValidTextValue;
                        type?: import("lkt-vue-kernel").IconType | undefined;
                        dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                        position?: import("lkt-vue-kernel").IconPosition | undefined;
                        events?: {
                            click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                        } | undefined;
                    } | undefined;
                    iconEnd?: string | {
                        icon?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                        iconText?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                        text?: import("lkt-vue-kernel").ValidTextValue;
                        class?: import("lkt-vue-kernel").ValidTextValue;
                        type?: import("lkt-vue-kernel").IconType | undefined;
                        dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                        position?: import("lkt-vue-kernel").IconPosition | undefined;
                        events?: {
                            click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                        } | undefined;
                    } | undefined;
                    img?: string | undefined;
                    checked?: boolean | undefined;
                    textOn?: import("lkt-vue-kernel").ValidTextValue;
                    textOff?: import("lkt-vue-kernel").ValidTextValue;
                    iconOn?: import("lkt-vue-kernel").ValidTextValue | {
                        icon?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                        iconText?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                        text?: import("lkt-vue-kernel").ValidTextValue;
                        class?: import("lkt-vue-kernel").ValidTextValue;
                        type?: import("lkt-vue-kernel").IconType | undefined;
                        dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                        position?: import("lkt-vue-kernel").IconPosition | undefined;
                        events?: {
                            click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                        } | undefined;
                    };
                    iconOff?: import("lkt-vue-kernel").ValidTextValue | {
                        icon?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                        iconText?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                        text?: import("lkt-vue-kernel").ValidTextValue;
                        class?: import("lkt-vue-kernel").ValidTextValue;
                        type?: import("lkt-vue-kernel").IconType | undefined;
                        dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                        position?: import("lkt-vue-kernel").IconPosition | undefined;
                        events?: {
                            click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                        } | undefined;
                    };
                    iconEndOn?: import("lkt-vue-kernel").ValidTextValue | {
                        icon?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                        iconText?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                        text?: import("lkt-vue-kernel").ValidTextValue;
                        class?: import("lkt-vue-kernel").ValidTextValue;
                        type?: import("lkt-vue-kernel").IconType | undefined;
                        dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                        position?: import("lkt-vue-kernel").IconPosition | undefined;
                        events?: {
                            click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                        } | undefined;
                    };
                    iconEndOff?: import("lkt-vue-kernel").ValidTextValue | {
                        icon?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                        iconText?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                        text?: import("lkt-vue-kernel").ValidTextValue;
                        class?: import("lkt-vue-kernel").ValidTextValue;
                        type?: import("lkt-vue-kernel").IconType | undefined;
                        dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                        position?: import("lkt-vue-kernel").IconPosition | undefined;
                        events?: {
                            click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                        } | undefined;
                    };
                    dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                    anchor?: {
                        type?: import("lkt-vue-kernel").AnchorType | undefined;
                        to?: string | ((data: import("lkt-vue-kernel").LktObject) => import("lkt-vue-kernel").RouteConfig | string) | {
                            path?: string | undefined;
                            name?: string | undefined;
                            hash?: string | undefined;
                            params?: import("lkt-vue-kernel").LktObject | undefined;
                            query?: import("lkt-vue-kernel").LktObject | undefined;
                            replace?: boolean | undefined;
                        } | undefined;
                        class?: string | undefined;
                        isActive?: boolean | undefined;
                        downloadFileName?: string | undefined;
                        disabled?: boolean | undefined;
                        confirmModal?: import("lkt-vue-kernel").ValidModalName;
                        confirmModalKey?: import("lkt-vue-kernel").ValidModalKey;
                        confirmData?: {
                            [x: string]: any;
                            [x: number]: any;
                            modalName?: import("lkt-vue-kernel").ValidModalName;
                            modalKey?: import("lkt-vue-kernel").ValidModalKey;
                            zIndex?: number | undefined;
                            type?: import("lkt-vue-kernel").ModalType | undefined;
                            size?: string | undefined;
                            preTitle?: string | undefined;
                            preTitleIcon?: string | undefined;
                            title?: string | undefined;
                            closeIcon?: string | undefined;
                            closeConfirm?: import("lkt-vue-kernel").ValidModalName;
                            closeConfirmKey?: import("lkt-vue-kernel").ValidModalKey;
                            showClose?: boolean | undefined;
                            disabledClose?: boolean | undefined;
                            disabledVeilClick?: boolean | undefined;
                            hiddenFooter?: boolean | undefined;
                            beforeClose?: import("lkt-vue-kernel").ValidBeforeCloseModal;
                            item?: import("lkt-vue-kernel").LktObject | undefined;
                            confirmButton?: /*elided*/ any | undefined;
                            cancelButton?: /*elided*/ any | undefined;
                            headerActionsButton?: /*elided*/ any | undefined;
                        } | undefined;
                        imposter?: boolean | undefined;
                        external?: boolean | undefined;
                        text?: import("lkt-vue-kernel").ValidTextValue;
                        icon?: string | {
                            icon?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                            iconText?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                            text?: import("lkt-vue-kernel").ValidTextValue;
                            class?: import("lkt-vue-kernel").ValidTextValue;
                            type?: import("lkt-vue-kernel").IconType | undefined;
                            dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                            position?: import("lkt-vue-kernel").IconPosition | undefined;
                            events?: {
                                click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                            } | undefined;
                        } | undefined;
                        events?: {
                            click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                        } | undefined;
                        prop?: import("lkt-vue-kernel").LktObject | undefined;
                        onClick?: Function | undefined;
                    } | undefined;
                    resource?: string | undefined;
                    resourceData?: import("lkt-vue-kernel").LktObject | undefined;
                    modal?: import("lkt-vue-kernel").ValidModalName;
                    modalKey?: import("lkt-vue-kernel").ValidModalKey;
                    modalData?: Function | /*elided*/ any | undefined;
                    confirmModal?: import("lkt-vue-kernel").ValidModalName;
                    confirmModalKey?: import("lkt-vue-kernel").ValidModalKey;
                    confirmData?: /*elided*/ any | undefined;
                    modalCallbacks?: {
                        modalName: import("lkt-vue-kernel").ValidModalName;
                        modalKey?: import("lkt-vue-kernel").ValidModalKey;
                        action: import("lkt-vue-kernel").ModalCallbackAction;
                        method?: string | undefined;
                        args?: import("lkt-vue-kernel").LktObject | undefined;
                    }[] | undefined;
                    tooltip?: {
                        modelValue?: boolean | undefined;
                        alwaysOpen?: boolean | undefined;
                        class?: string | undefined;
                        contentClass?: string | undefined;
                        text?: string | undefined;
                        icon?: string | undefined;
                        iconAtEnd?: boolean | undefined;
                        engine?: import("lkt-vue-kernel").TooltipPositionEngine | undefined;
                        referrerMargin?: number | string | undefined;
                        windowMargin?: number | string | undefined;
                        referrerWidth?: boolean | undefined;
                        referrer?: HTMLElement | undefined;
                        locationY?: import("lkt-vue-kernel").TooltipLocationY | undefined;
                        locationX?: import("lkt-vue-kernel").TooltipLocationX | undefined;
                        showOnReferrerHover?: boolean | undefined;
                        showOnReferrerHoverDelay?: number | undefined;
                        hideOnReferrerLeave?: boolean | undefined;
                        hideOnReferrerLeaveDelay?: number | undefined;
                        compensationX?: number | undefined;
                        compensationY?: number | undefined;
                        compensateGlobalContainers?: boolean | undefined;
                        remoteControl?: boolean | undefined;
                    } | undefined;
                    splitIcon?: string | undefined;
                    showTooltipOnHover?: boolean | undefined;
                    showTooltipOnHoverDelay?: number | undefined;
                    hideTooltipOnLeave?: boolean | undefined;
                    splitClass?: string | undefined;
                    splitButtons?: /*elided*/ any[] | undefined;
                    tabindex?: import("lkt-vue-kernel").ValidTabIndex;
                    prop?: import("lkt-vue-kernel").LktObject | undefined;
                    clickRef?: (Element | import("vue").VueElement) | undefined;
                    events?: {
                        click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                        httpStart?: Function | undefined;
                        httpEnd?: ((data: ClickEventArgs) => void | undefined) | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            modalCallbacks?: {
                modalName: import("lkt-vue-kernel").ValidModalName;
                modalKey?: import("lkt-vue-kernel").ValidModalKey;
                action: import("lkt-vue-kernel").ModalCallbackAction;
                method?: string | undefined;
                args?: import("lkt-vue-kernel").LktObject | undefined;
            }[] | undefined;
            tooltip?: {
                modelValue?: boolean | undefined;
                alwaysOpen?: boolean | undefined;
                class?: string | undefined;
                contentClass?: string | undefined;
                text?: string | undefined;
                icon?: string | undefined;
                iconAtEnd?: boolean | undefined;
                engine?: import("lkt-vue-kernel").TooltipPositionEngine | undefined;
                referrerMargin?: number | string | undefined;
                windowMargin?: number | string | undefined;
                referrerWidth?: boolean | undefined;
                referrer?: HTMLElement | undefined;
                locationY?: import("lkt-vue-kernel").TooltipLocationY | undefined;
                locationX?: import("lkt-vue-kernel").TooltipLocationX | undefined;
                showOnReferrerHover?: boolean | undefined;
                showOnReferrerHoverDelay?: number | undefined;
                hideOnReferrerLeave?: boolean | undefined;
                hideOnReferrerLeaveDelay?: number | undefined;
                compensationX?: number | undefined;
                compensationY?: number | undefined;
                compensateGlobalContainers?: boolean | undefined;
                remoteControl?: boolean | undefined;
            } | undefined;
            splitIcon?: string | undefined;
            showTooltipOnHover?: boolean | undefined;
            showTooltipOnHoverDelay?: number | undefined;
            hideTooltipOnLeave?: boolean | undefined;
            splitClass?: string | undefined;
            splitButtons?: /*elided*/ any[] | undefined;
            tabindex?: import("lkt-vue-kernel").ValidTabIndex;
            prop?: import("lkt-vue-kernel").LktObject | undefined;
            clickRef?: (Element | import("vue").VueElement) | undefined;
            events?: {
                click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                httpStart?: Function | undefined;
                httpEnd?: ((data: ClickEventArgs) => void | undefined) | undefined;
            } | undefined;
        } | undefined;
        nextHidden?: boolean | ((currentStep: StepProcessStepConfig, steps: StepProcessStepConfig[]) => boolean) | undefined;
        prevButton?: false | {
            type?: import("lkt-vue-kernel").ButtonType | undefined;
            name?: string | undefined;
            value?: string | undefined;
            disabled?: import("lkt-vue-kernel").ValidIsDisabledValue;
            openTooltip?: boolean | undefined;
            loading?: boolean | undefined;
            class?: string | undefined;
            containerClass?: string | undefined;
            wrapContent?: boolean | undefined;
            text?: import("lkt-vue-kernel").ValidTextValue;
            icon?: string | {
                icon?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                iconText?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                text?: import("lkt-vue-kernel").ValidTextValue;
                class?: import("lkt-vue-kernel").ValidTextValue;
                type?: import("lkt-vue-kernel").IconType | undefined;
                dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                position?: import("lkt-vue-kernel").IconPosition | undefined;
                events?: {
                    click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                } | undefined;
            } | undefined;
            iconEnd?: string | {
                icon?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                iconText?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                text?: import("lkt-vue-kernel").ValidTextValue;
                class?: import("lkt-vue-kernel").ValidTextValue;
                type?: import("lkt-vue-kernel").IconType | undefined;
                dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                position?: import("lkt-vue-kernel").IconPosition | undefined;
                events?: {
                    click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                } | undefined;
            } | undefined;
            img?: string | undefined;
            checked?: boolean | undefined;
            textOn?: import("lkt-vue-kernel").ValidTextValue;
            textOff?: import("lkt-vue-kernel").ValidTextValue;
            iconOn?: import("lkt-vue-kernel").ValidTextValue | {
                icon?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                iconText?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                text?: import("lkt-vue-kernel").ValidTextValue;
                class?: import("lkt-vue-kernel").ValidTextValue;
                type?: import("lkt-vue-kernel").IconType | undefined;
                dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                position?: import("lkt-vue-kernel").IconPosition | undefined;
                events?: {
                    click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                } | undefined;
            };
            iconOff?: import("lkt-vue-kernel").ValidTextValue | {
                icon?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                iconText?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                text?: import("lkt-vue-kernel").ValidTextValue;
                class?: import("lkt-vue-kernel").ValidTextValue;
                type?: import("lkt-vue-kernel").IconType | undefined;
                dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                position?: import("lkt-vue-kernel").IconPosition | undefined;
                events?: {
                    click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                } | undefined;
            };
            iconEndOn?: import("lkt-vue-kernel").ValidTextValue | {
                icon?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                iconText?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                text?: import("lkt-vue-kernel").ValidTextValue;
                class?: import("lkt-vue-kernel").ValidTextValue;
                type?: import("lkt-vue-kernel").IconType | undefined;
                dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                position?: import("lkt-vue-kernel").IconPosition | undefined;
                events?: {
                    click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                } | undefined;
            };
            iconEndOff?: import("lkt-vue-kernel").ValidTextValue | {
                icon?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                iconText?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                text?: import("lkt-vue-kernel").ValidTextValue;
                class?: import("lkt-vue-kernel").ValidTextValue;
                type?: import("lkt-vue-kernel").IconType | undefined;
                dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                position?: import("lkt-vue-kernel").IconPosition | undefined;
                events?: {
                    click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                } | undefined;
            };
            dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
            anchor?: {
                type?: import("lkt-vue-kernel").AnchorType | undefined;
                to?: string | ((data: import("lkt-vue-kernel").LktObject) => import("lkt-vue-kernel").RouteConfig | string) | {
                    path?: string | undefined;
                    name?: string | undefined;
                    hash?: string | undefined;
                    params?: import("lkt-vue-kernel").LktObject | undefined;
                    query?: import("lkt-vue-kernel").LktObject | undefined;
                    replace?: boolean | undefined;
                } | undefined;
                class?: string | undefined;
                isActive?: boolean | undefined;
                downloadFileName?: string | undefined;
                disabled?: boolean | undefined;
                confirmModal?: import("lkt-vue-kernel").ValidModalName;
                confirmModalKey?: import("lkt-vue-kernel").ValidModalKey;
                confirmData?: {
                    [x: string]: any;
                    [x: number]: any;
                    modalName?: import("lkt-vue-kernel").ValidModalName;
                    modalKey?: import("lkt-vue-kernel").ValidModalKey;
                    zIndex?: number | undefined;
                    type?: import("lkt-vue-kernel").ModalType | undefined;
                    size?: string | undefined;
                    preTitle?: string | undefined;
                    preTitleIcon?: string | undefined;
                    title?: string | undefined;
                    closeIcon?: string | undefined;
                    closeConfirm?: import("lkt-vue-kernel").ValidModalName;
                    closeConfirmKey?: import("lkt-vue-kernel").ValidModalKey;
                    showClose?: boolean | undefined;
                    disabledClose?: boolean | undefined;
                    disabledVeilClick?: boolean | undefined;
                    hiddenFooter?: boolean | undefined;
                    beforeClose?: import("lkt-vue-kernel").ValidBeforeCloseModal;
                    item?: import("lkt-vue-kernel").LktObject | undefined;
                    confirmButton?: {
                        type?: import("lkt-vue-kernel").ButtonType | undefined;
                        name?: string | undefined;
                        value?: string | undefined;
                        disabled?: import("lkt-vue-kernel").ValidIsDisabledValue;
                        openTooltip?: boolean | undefined;
                        loading?: boolean | undefined;
                        class?: string | undefined;
                        containerClass?: string | undefined;
                        wrapContent?: boolean | undefined;
                        text?: import("lkt-vue-kernel").ValidTextValue;
                        icon?: string | {
                            icon?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                            iconText?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                            text?: import("lkt-vue-kernel").ValidTextValue;
                            class?: import("lkt-vue-kernel").ValidTextValue;
                            type?: import("lkt-vue-kernel").IconType | undefined;
                            dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                            position?: import("lkt-vue-kernel").IconPosition | undefined;
                            events?: {
                                click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                            } | undefined;
                        } | undefined;
                        iconEnd?: string | {
                            icon?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                            iconText?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                            text?: import("lkt-vue-kernel").ValidTextValue;
                            class?: import("lkt-vue-kernel").ValidTextValue;
                            type?: import("lkt-vue-kernel").IconType | undefined;
                            dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                            position?: import("lkt-vue-kernel").IconPosition | undefined;
                            events?: {
                                click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                            } | undefined;
                        } | undefined;
                        img?: string | undefined;
                        checked?: boolean | undefined;
                        textOn?: import("lkt-vue-kernel").ValidTextValue;
                        textOff?: import("lkt-vue-kernel").ValidTextValue;
                        iconOn?: import("lkt-vue-kernel").ValidTextValue | {
                            icon?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                            iconText?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                            text?: import("lkt-vue-kernel").ValidTextValue;
                            class?: import("lkt-vue-kernel").ValidTextValue;
                            type?: import("lkt-vue-kernel").IconType | undefined;
                            dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                            position?: import("lkt-vue-kernel").IconPosition | undefined;
                            events?: {
                                click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                            } | undefined;
                        };
                        iconOff?: import("lkt-vue-kernel").ValidTextValue | {
                            icon?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                            iconText?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                            text?: import("lkt-vue-kernel").ValidTextValue;
                            class?: import("lkt-vue-kernel").ValidTextValue;
                            type?: import("lkt-vue-kernel").IconType | undefined;
                            dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                            position?: import("lkt-vue-kernel").IconPosition | undefined;
                            events?: {
                                click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                            } | undefined;
                        };
                        iconEndOn?: import("lkt-vue-kernel").ValidTextValue | {
                            icon?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                            iconText?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                            text?: import("lkt-vue-kernel").ValidTextValue;
                            class?: import("lkt-vue-kernel").ValidTextValue;
                            type?: import("lkt-vue-kernel").IconType | undefined;
                            dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                            position?: import("lkt-vue-kernel").IconPosition | undefined;
                            events?: {
                                click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                            } | undefined;
                        };
                        iconEndOff?: import("lkt-vue-kernel").ValidTextValue | {
                            icon?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                            iconText?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                            text?: import("lkt-vue-kernel").ValidTextValue;
                            class?: import("lkt-vue-kernel").ValidTextValue;
                            type?: import("lkt-vue-kernel").IconType | undefined;
                            dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                            position?: import("lkt-vue-kernel").IconPosition | undefined;
                            events?: {
                                click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                            } | undefined;
                        };
                        dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                        anchor?: /*elided*/ any | undefined;
                        resource?: string | undefined;
                        resourceData?: import("lkt-vue-kernel").LktObject | undefined;
                        modal?: import("lkt-vue-kernel").ValidModalName;
                        modalKey?: import("lkt-vue-kernel").ValidModalKey;
                        modalData?: Function | {
                            [x: string]: any;
                            [x: number]: any;
                            modalName?: import("lkt-vue-kernel").ValidModalName;
                            modalKey?: import("lkt-vue-kernel").ValidModalKey;
                            zIndex?: number | undefined;
                            type?: import("lkt-vue-kernel").ModalType | undefined;
                            size?: string | undefined;
                            preTitle?: string | undefined;
                            preTitleIcon?: string | undefined;
                            title?: string | undefined;
                            closeIcon?: string | undefined;
                            closeConfirm?: import("lkt-vue-kernel").ValidModalName;
                            closeConfirmKey?: import("lkt-vue-kernel").ValidModalKey;
                            showClose?: boolean | undefined;
                            disabledClose?: boolean | undefined;
                            disabledVeilClick?: boolean | undefined;
                            hiddenFooter?: boolean | undefined;
                            beforeClose?: import("lkt-vue-kernel").ValidBeforeCloseModal;
                            item?: import("lkt-vue-kernel").LktObject | undefined;
                            confirmButton?: /*elided*/ any | undefined;
                            cancelButton?: /*elided*/ any | undefined;
                            headerActionsButton?: /*elided*/ any | undefined;
                        } | undefined;
                        confirmModal?: import("lkt-vue-kernel").ValidModalName;
                        confirmModalKey?: import("lkt-vue-kernel").ValidModalKey;
                        confirmData?: {
                            [x: string]: any;
                            [x: number]: any;
                            modalName?: import("lkt-vue-kernel").ValidModalName;
                            modalKey?: import("lkt-vue-kernel").ValidModalKey;
                            zIndex?: number | undefined;
                            type?: import("lkt-vue-kernel").ModalType | undefined;
                            size?: string | undefined;
                            preTitle?: string | undefined;
                            preTitleIcon?: string | undefined;
                            title?: string | undefined;
                            closeIcon?: string | undefined;
                            closeConfirm?: import("lkt-vue-kernel").ValidModalName;
                            closeConfirmKey?: import("lkt-vue-kernel").ValidModalKey;
                            showClose?: boolean | undefined;
                            disabledClose?: boolean | undefined;
                            disabledVeilClick?: boolean | undefined;
                            hiddenFooter?: boolean | undefined;
                            beforeClose?: import("lkt-vue-kernel").ValidBeforeCloseModal;
                            item?: import("lkt-vue-kernel").LktObject | undefined;
                            confirmButton?: /*elided*/ any | undefined;
                            cancelButton?: /*elided*/ any | undefined;
                            headerActionsButton?: /*elided*/ any | undefined;
                        } | undefined;
                        modalCallbacks?: {
                            modalName: import("lkt-vue-kernel").ValidModalName;
                            modalKey?: import("lkt-vue-kernel").ValidModalKey;
                            action: import("lkt-vue-kernel").ModalCallbackAction;
                            method?: string | undefined;
                            args?: import("lkt-vue-kernel").LktObject | undefined;
                        }[] | undefined;
                        tooltip?: {
                            modelValue?: boolean | undefined;
                            alwaysOpen?: boolean | undefined;
                            class?: string | undefined;
                            contentClass?: string | undefined;
                            text?: string | undefined;
                            icon?: string | undefined;
                            iconAtEnd?: boolean | undefined;
                            engine?: import("lkt-vue-kernel").TooltipPositionEngine | undefined;
                            referrerMargin?: number | string | undefined;
                            windowMargin?: number | string | undefined;
                            referrerWidth?: boolean | undefined;
                            referrer?: HTMLElement | undefined;
                            locationY?: import("lkt-vue-kernel").TooltipLocationY | undefined;
                            locationX?: import("lkt-vue-kernel").TooltipLocationX | undefined;
                            showOnReferrerHover?: boolean | undefined;
                            showOnReferrerHoverDelay?: number | undefined;
                            hideOnReferrerLeave?: boolean | undefined;
                            hideOnReferrerLeaveDelay?: number | undefined;
                            compensationX?: number | undefined;
                            compensationY?: number | undefined;
                            compensateGlobalContainers?: boolean | undefined;
                            remoteControl?: boolean | undefined;
                        } | undefined;
                        splitIcon?: string | undefined;
                        showTooltipOnHover?: boolean | undefined;
                        showTooltipOnHoverDelay?: number | undefined;
                        hideTooltipOnLeave?: boolean | undefined;
                        splitClass?: string | undefined;
                        splitButtons?: /*elided*/ any[] | undefined;
                        tabindex?: import("lkt-vue-kernel").ValidTabIndex;
                        prop?: import("lkt-vue-kernel").LktObject | undefined;
                        clickRef?: (Element | import("vue").VueElement) | undefined;
                        events?: {
                            click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                            httpStart?: Function | undefined;
                            httpEnd?: ((data: ClickEventArgs) => void | undefined) | undefined;
                        } | undefined;
                    } | undefined;
                    cancelButton?: {
                        type?: import("lkt-vue-kernel").ButtonType | undefined;
                        name?: string | undefined;
                        value?: string | undefined;
                        disabled?: import("lkt-vue-kernel").ValidIsDisabledValue;
                        openTooltip?: boolean | undefined;
                        loading?: boolean | undefined;
                        class?: string | undefined;
                        containerClass?: string | undefined;
                        wrapContent?: boolean | undefined;
                        text?: import("lkt-vue-kernel").ValidTextValue;
                        icon?: string | {
                            icon?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                            iconText?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                            text?: import("lkt-vue-kernel").ValidTextValue;
                            class?: import("lkt-vue-kernel").ValidTextValue;
                            type?: import("lkt-vue-kernel").IconType | undefined;
                            dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                            position?: import("lkt-vue-kernel").IconPosition | undefined;
                            events?: {
                                click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                            } | undefined;
                        } | undefined;
                        iconEnd?: string | {
                            icon?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                            iconText?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                            text?: import("lkt-vue-kernel").ValidTextValue;
                            class?: import("lkt-vue-kernel").ValidTextValue;
                            type?: import("lkt-vue-kernel").IconType | undefined;
                            dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                            position?: import("lkt-vue-kernel").IconPosition | undefined;
                            events?: {
                                click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                            } | undefined;
                        } | undefined;
                        img?: string | undefined;
                        checked?: boolean | undefined;
                        textOn?: import("lkt-vue-kernel").ValidTextValue;
                        textOff?: import("lkt-vue-kernel").ValidTextValue;
                        iconOn?: import("lkt-vue-kernel").ValidTextValue | {
                            icon?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                            iconText?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                            text?: import("lkt-vue-kernel").ValidTextValue;
                            class?: import("lkt-vue-kernel").ValidTextValue;
                            type?: import("lkt-vue-kernel").IconType | undefined;
                            dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                            position?: import("lkt-vue-kernel").IconPosition | undefined;
                            events?: {
                                click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                            } | undefined;
                        };
                        iconOff?: import("lkt-vue-kernel").ValidTextValue | {
                            icon?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                            iconText?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                            text?: import("lkt-vue-kernel").ValidTextValue;
                            class?: import("lkt-vue-kernel").ValidTextValue;
                            type?: import("lkt-vue-kernel").IconType | undefined;
                            dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                            position?: import("lkt-vue-kernel").IconPosition | undefined;
                            events?: {
                                click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                            } | undefined;
                        };
                        iconEndOn?: import("lkt-vue-kernel").ValidTextValue | {
                            icon?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                            iconText?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                            text?: import("lkt-vue-kernel").ValidTextValue;
                            class?: import("lkt-vue-kernel").ValidTextValue;
                            type?: import("lkt-vue-kernel").IconType | undefined;
                            dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                            position?: import("lkt-vue-kernel").IconPosition | undefined;
                            events?: {
                                click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                            } | undefined;
                        };
                        iconEndOff?: import("lkt-vue-kernel").ValidTextValue | {
                            icon?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                            iconText?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                            text?: import("lkt-vue-kernel").ValidTextValue;
                            class?: import("lkt-vue-kernel").ValidTextValue;
                            type?: import("lkt-vue-kernel").IconType | undefined;
                            dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                            position?: import("lkt-vue-kernel").IconPosition | undefined;
                            events?: {
                                click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                            } | undefined;
                        };
                        dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                        anchor?: /*elided*/ any | undefined;
                        resource?: string | undefined;
                        resourceData?: import("lkt-vue-kernel").LktObject | undefined;
                        modal?: import("lkt-vue-kernel").ValidModalName;
                        modalKey?: import("lkt-vue-kernel").ValidModalKey;
                        modalData?: Function | {
                            [x: string]: any;
                            [x: number]: any;
                            modalName?: import("lkt-vue-kernel").ValidModalName;
                            modalKey?: import("lkt-vue-kernel").ValidModalKey;
                            zIndex?: number | undefined;
                            type?: import("lkt-vue-kernel").ModalType | undefined;
                            size?: string | undefined;
                            preTitle?: string | undefined;
                            preTitleIcon?: string | undefined;
                            title?: string | undefined;
                            closeIcon?: string | undefined;
                            closeConfirm?: import("lkt-vue-kernel").ValidModalName;
                            closeConfirmKey?: import("lkt-vue-kernel").ValidModalKey;
                            showClose?: boolean | undefined;
                            disabledClose?: boolean | undefined;
                            disabledVeilClick?: boolean | undefined;
                            hiddenFooter?: boolean | undefined;
                            beforeClose?: import("lkt-vue-kernel").ValidBeforeCloseModal;
                            item?: import("lkt-vue-kernel").LktObject | undefined;
                            confirmButton?: /*elided*/ any | undefined;
                            cancelButton?: /*elided*/ any | undefined;
                            headerActionsButton?: /*elided*/ any | undefined;
                        } | undefined;
                        confirmModal?: import("lkt-vue-kernel").ValidModalName;
                        confirmModalKey?: import("lkt-vue-kernel").ValidModalKey;
                        confirmData?: {
                            [x: string]: any;
                            [x: number]: any;
                            modalName?: import("lkt-vue-kernel").ValidModalName;
                            modalKey?: import("lkt-vue-kernel").ValidModalKey;
                            zIndex?: number | undefined;
                            type?: import("lkt-vue-kernel").ModalType | undefined;
                            size?: string | undefined;
                            preTitle?: string | undefined;
                            preTitleIcon?: string | undefined;
                            title?: string | undefined;
                            closeIcon?: string | undefined;
                            closeConfirm?: import("lkt-vue-kernel").ValidModalName;
                            closeConfirmKey?: import("lkt-vue-kernel").ValidModalKey;
                            showClose?: boolean | undefined;
                            disabledClose?: boolean | undefined;
                            disabledVeilClick?: boolean | undefined;
                            hiddenFooter?: boolean | undefined;
                            beforeClose?: import("lkt-vue-kernel").ValidBeforeCloseModal;
                            item?: import("lkt-vue-kernel").LktObject | undefined;
                            confirmButton?: /*elided*/ any | undefined;
                            cancelButton?: /*elided*/ any | undefined;
                            headerActionsButton?: /*elided*/ any | undefined;
                        } | undefined;
                        modalCallbacks?: {
                            modalName: import("lkt-vue-kernel").ValidModalName;
                            modalKey?: import("lkt-vue-kernel").ValidModalKey;
                            action: import("lkt-vue-kernel").ModalCallbackAction;
                            method?: string | undefined;
                            args?: import("lkt-vue-kernel").LktObject | undefined;
                        }[] | undefined;
                        tooltip?: {
                            modelValue?: boolean | undefined;
                            alwaysOpen?: boolean | undefined;
                            class?: string | undefined;
                            contentClass?: string | undefined;
                            text?: string | undefined;
                            icon?: string | undefined;
                            iconAtEnd?: boolean | undefined;
                            engine?: import("lkt-vue-kernel").TooltipPositionEngine | undefined;
                            referrerMargin?: number | string | undefined;
                            windowMargin?: number | string | undefined;
                            referrerWidth?: boolean | undefined;
                            referrer?: HTMLElement | undefined;
                            locationY?: import("lkt-vue-kernel").TooltipLocationY | undefined;
                            locationX?: import("lkt-vue-kernel").TooltipLocationX | undefined;
                            showOnReferrerHover?: boolean | undefined;
                            showOnReferrerHoverDelay?: number | undefined;
                            hideOnReferrerLeave?: boolean | undefined;
                            hideOnReferrerLeaveDelay?: number | undefined;
                            compensationX?: number | undefined;
                            compensationY?: number | undefined;
                            compensateGlobalContainers?: boolean | undefined;
                            remoteControl?: boolean | undefined;
                        } | undefined;
                        splitIcon?: string | undefined;
                        showTooltipOnHover?: boolean | undefined;
                        showTooltipOnHoverDelay?: number | undefined;
                        hideTooltipOnLeave?: boolean | undefined;
                        splitClass?: string | undefined;
                        splitButtons?: /*elided*/ any[] | undefined;
                        tabindex?: import("lkt-vue-kernel").ValidTabIndex;
                        prop?: import("lkt-vue-kernel").LktObject | undefined;
                        clickRef?: (Element | import("vue").VueElement) | undefined;
                        events?: {
                            click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                            httpStart?: Function | undefined;
                            httpEnd?: ((data: ClickEventArgs) => void | undefined) | undefined;
                        } | undefined;
                    } | undefined;
                    headerActionsButton?: {
                        type?: import("lkt-vue-kernel").ButtonType | undefined;
                        name?: string | undefined;
                        value?: string | undefined;
                        disabled?: import("lkt-vue-kernel").ValidIsDisabledValue;
                        openTooltip?: boolean | undefined;
                        loading?: boolean | undefined;
                        class?: string | undefined;
                        containerClass?: string | undefined;
                        wrapContent?: boolean | undefined;
                        text?: import("lkt-vue-kernel").ValidTextValue;
                        icon?: string | {
                            icon?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                            iconText?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                            text?: import("lkt-vue-kernel").ValidTextValue;
                            class?: import("lkt-vue-kernel").ValidTextValue;
                            type?: import("lkt-vue-kernel").IconType | undefined;
                            dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                            position?: import("lkt-vue-kernel").IconPosition | undefined;
                            events?: {
                                click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                            } | undefined;
                        } | undefined;
                        iconEnd?: string | {
                            icon?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                            iconText?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                            text?: import("lkt-vue-kernel").ValidTextValue;
                            class?: import("lkt-vue-kernel").ValidTextValue;
                            type?: import("lkt-vue-kernel").IconType | undefined;
                            dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                            position?: import("lkt-vue-kernel").IconPosition | undefined;
                            events?: {
                                click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                            } | undefined;
                        } | undefined;
                        img?: string | undefined;
                        checked?: boolean | undefined;
                        textOn?: import("lkt-vue-kernel").ValidTextValue;
                        textOff?: import("lkt-vue-kernel").ValidTextValue;
                        iconOn?: import("lkt-vue-kernel").ValidTextValue | {
                            icon?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                            iconText?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                            text?: import("lkt-vue-kernel").ValidTextValue;
                            class?: import("lkt-vue-kernel").ValidTextValue;
                            type?: import("lkt-vue-kernel").IconType | undefined;
                            dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                            position?: import("lkt-vue-kernel").IconPosition | undefined;
                            events?: {
                                click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                            } | undefined;
                        };
                        iconOff?: import("lkt-vue-kernel").ValidTextValue | {
                            icon?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                            iconText?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                            text?: import("lkt-vue-kernel").ValidTextValue;
                            class?: import("lkt-vue-kernel").ValidTextValue;
                            type?: import("lkt-vue-kernel").IconType | undefined;
                            dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                            position?: import("lkt-vue-kernel").IconPosition | undefined;
                            events?: {
                                click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                            } | undefined;
                        };
                        iconEndOn?: import("lkt-vue-kernel").ValidTextValue | {
                            icon?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                            iconText?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                            text?: import("lkt-vue-kernel").ValidTextValue;
                            class?: import("lkt-vue-kernel").ValidTextValue;
                            type?: import("lkt-vue-kernel").IconType | undefined;
                            dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                            position?: import("lkt-vue-kernel").IconPosition | undefined;
                            events?: {
                                click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                            } | undefined;
                        };
                        iconEndOff?: import("lkt-vue-kernel").ValidTextValue | {
                            icon?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                            iconText?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                            text?: import("lkt-vue-kernel").ValidTextValue;
                            class?: import("lkt-vue-kernel").ValidTextValue;
                            type?: import("lkt-vue-kernel").IconType | undefined;
                            dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                            position?: import("lkt-vue-kernel").IconPosition | undefined;
                            events?: {
                                click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                            } | undefined;
                        };
                        dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                        anchor?: /*elided*/ any | undefined;
                        resource?: string | undefined;
                        resourceData?: import("lkt-vue-kernel").LktObject | undefined;
                        modal?: import("lkt-vue-kernel").ValidModalName;
                        modalKey?: import("lkt-vue-kernel").ValidModalKey;
                        modalData?: Function | {
                            [x: string]: any;
                            [x: number]: any;
                            modalName?: import("lkt-vue-kernel").ValidModalName;
                            modalKey?: import("lkt-vue-kernel").ValidModalKey;
                            zIndex?: number | undefined;
                            type?: import("lkt-vue-kernel").ModalType | undefined;
                            size?: string | undefined;
                            preTitle?: string | undefined;
                            preTitleIcon?: string | undefined;
                            title?: string | undefined;
                            closeIcon?: string | undefined;
                            closeConfirm?: import("lkt-vue-kernel").ValidModalName;
                            closeConfirmKey?: import("lkt-vue-kernel").ValidModalKey;
                            showClose?: boolean | undefined;
                            disabledClose?: boolean | undefined;
                            disabledVeilClick?: boolean | undefined;
                            hiddenFooter?: boolean | undefined;
                            beforeClose?: import("lkt-vue-kernel").ValidBeforeCloseModal;
                            item?: import("lkt-vue-kernel").LktObject | undefined;
                            confirmButton?: /*elided*/ any | undefined;
                            cancelButton?: /*elided*/ any | undefined;
                            headerActionsButton?: /*elided*/ any | undefined;
                        } | undefined;
                        confirmModal?: import("lkt-vue-kernel").ValidModalName;
                        confirmModalKey?: import("lkt-vue-kernel").ValidModalKey;
                        confirmData?: {
                            [x: string]: any;
                            [x: number]: any;
                            modalName?: import("lkt-vue-kernel").ValidModalName;
                            modalKey?: import("lkt-vue-kernel").ValidModalKey;
                            zIndex?: number | undefined;
                            type?: import("lkt-vue-kernel").ModalType | undefined;
                            size?: string | undefined;
                            preTitle?: string | undefined;
                            preTitleIcon?: string | undefined;
                            title?: string | undefined;
                            closeIcon?: string | undefined;
                            closeConfirm?: import("lkt-vue-kernel").ValidModalName;
                            closeConfirmKey?: import("lkt-vue-kernel").ValidModalKey;
                            showClose?: boolean | undefined;
                            disabledClose?: boolean | undefined;
                            disabledVeilClick?: boolean | undefined;
                            hiddenFooter?: boolean | undefined;
                            beforeClose?: import("lkt-vue-kernel").ValidBeforeCloseModal;
                            item?: import("lkt-vue-kernel").LktObject | undefined;
                            confirmButton?: /*elided*/ any | undefined;
                            cancelButton?: /*elided*/ any | undefined;
                            headerActionsButton?: /*elided*/ any | undefined;
                        } | undefined;
                        modalCallbacks?: {
                            modalName: import("lkt-vue-kernel").ValidModalName;
                            modalKey?: import("lkt-vue-kernel").ValidModalKey;
                            action: import("lkt-vue-kernel").ModalCallbackAction;
                            method?: string | undefined;
                            args?: import("lkt-vue-kernel").LktObject | undefined;
                        }[] | undefined;
                        tooltip?: {
                            modelValue?: boolean | undefined;
                            alwaysOpen?: boolean | undefined;
                            class?: string | undefined;
                            contentClass?: string | undefined;
                            text?: string | undefined;
                            icon?: string | undefined;
                            iconAtEnd?: boolean | undefined;
                            engine?: import("lkt-vue-kernel").TooltipPositionEngine | undefined;
                            referrerMargin?: number | string | undefined;
                            windowMargin?: number | string | undefined;
                            referrerWidth?: boolean | undefined;
                            referrer?: HTMLElement | undefined;
                            locationY?: import("lkt-vue-kernel").TooltipLocationY | undefined;
                            locationX?: import("lkt-vue-kernel").TooltipLocationX | undefined;
                            showOnReferrerHover?: boolean | undefined;
                            showOnReferrerHoverDelay?: number | undefined;
                            hideOnReferrerLeave?: boolean | undefined;
                            hideOnReferrerLeaveDelay?: number | undefined;
                            compensationX?: number | undefined;
                            compensationY?: number | undefined;
                            compensateGlobalContainers?: boolean | undefined;
                            remoteControl?: boolean | undefined;
                        } | undefined;
                        splitIcon?: string | undefined;
                        showTooltipOnHover?: boolean | undefined;
                        showTooltipOnHoverDelay?: number | undefined;
                        hideTooltipOnLeave?: boolean | undefined;
                        splitClass?: string | undefined;
                        splitButtons?: /*elided*/ any[] | undefined;
                        tabindex?: import("lkt-vue-kernel").ValidTabIndex;
                        prop?: import("lkt-vue-kernel").LktObject | undefined;
                        clickRef?: (Element | import("vue").VueElement) | undefined;
                        events?: {
                            click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                            httpStart?: Function | undefined;
                            httpEnd?: ((data: ClickEventArgs) => void | undefined) | undefined;
                        } | undefined;
                    } | undefined;
                } | undefined;
                imposter?: boolean | undefined;
                external?: boolean | undefined;
                text?: import("lkt-vue-kernel").ValidTextValue;
                icon?: string | {
                    icon?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                    iconText?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                    text?: import("lkt-vue-kernel").ValidTextValue;
                    class?: import("lkt-vue-kernel").ValidTextValue;
                    type?: import("lkt-vue-kernel").IconType | undefined;
                    dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                    position?: import("lkt-vue-kernel").IconPosition | undefined;
                    events?: {
                        click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                    } | undefined;
                } | undefined;
                events?: {
                    click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                } | undefined;
                prop?: import("lkt-vue-kernel").LktObject | undefined;
                onClick?: Function | undefined;
            } | undefined;
            resource?: string | undefined;
            resourceData?: import("lkt-vue-kernel").LktObject | undefined;
            modal?: import("lkt-vue-kernel").ValidModalName;
            modalKey?: import("lkt-vue-kernel").ValidModalKey;
            modalData?: Function | {
                [x: string]: any;
                [x: number]: any;
                modalName?: import("lkt-vue-kernel").ValidModalName;
                modalKey?: import("lkt-vue-kernel").ValidModalKey;
                zIndex?: number | undefined;
                type?: import("lkt-vue-kernel").ModalType | undefined;
                size?: string | undefined;
                preTitle?: string | undefined;
                preTitleIcon?: string | undefined;
                title?: string | undefined;
                closeIcon?: string | undefined;
                closeConfirm?: import("lkt-vue-kernel").ValidModalName;
                closeConfirmKey?: import("lkt-vue-kernel").ValidModalKey;
                showClose?: boolean | undefined;
                disabledClose?: boolean | undefined;
                disabledVeilClick?: boolean | undefined;
                hiddenFooter?: boolean | undefined;
                beforeClose?: import("lkt-vue-kernel").ValidBeforeCloseModal;
                item?: import("lkt-vue-kernel").LktObject | undefined;
                confirmButton?: {
                    type?: import("lkt-vue-kernel").ButtonType | undefined;
                    name?: string | undefined;
                    value?: string | undefined;
                    disabled?: import("lkt-vue-kernel").ValidIsDisabledValue;
                    openTooltip?: boolean | undefined;
                    loading?: boolean | undefined;
                    class?: string | undefined;
                    containerClass?: string | undefined;
                    wrapContent?: boolean | undefined;
                    text?: import("lkt-vue-kernel").ValidTextValue;
                    icon?: string | {
                        icon?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                        iconText?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                        text?: import("lkt-vue-kernel").ValidTextValue;
                        class?: import("lkt-vue-kernel").ValidTextValue;
                        type?: import("lkt-vue-kernel").IconType | undefined;
                        dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                        position?: import("lkt-vue-kernel").IconPosition | undefined;
                        events?: {
                            click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                        } | undefined;
                    } | undefined;
                    iconEnd?: string | {
                        icon?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                        iconText?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                        text?: import("lkt-vue-kernel").ValidTextValue;
                        class?: import("lkt-vue-kernel").ValidTextValue;
                        type?: import("lkt-vue-kernel").IconType | undefined;
                        dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                        position?: import("lkt-vue-kernel").IconPosition | undefined;
                        events?: {
                            click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                        } | undefined;
                    } | undefined;
                    img?: string | undefined;
                    checked?: boolean | undefined;
                    textOn?: import("lkt-vue-kernel").ValidTextValue;
                    textOff?: import("lkt-vue-kernel").ValidTextValue;
                    iconOn?: import("lkt-vue-kernel").ValidTextValue | {
                        icon?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                        iconText?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                        text?: import("lkt-vue-kernel").ValidTextValue;
                        class?: import("lkt-vue-kernel").ValidTextValue;
                        type?: import("lkt-vue-kernel").IconType | undefined;
                        dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                        position?: import("lkt-vue-kernel").IconPosition | undefined;
                        events?: {
                            click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                        } | undefined;
                    };
                    iconOff?: import("lkt-vue-kernel").ValidTextValue | {
                        icon?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                        iconText?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                        text?: import("lkt-vue-kernel").ValidTextValue;
                        class?: import("lkt-vue-kernel").ValidTextValue;
                        type?: import("lkt-vue-kernel").IconType | undefined;
                        dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                        position?: import("lkt-vue-kernel").IconPosition | undefined;
                        events?: {
                            click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                        } | undefined;
                    };
                    iconEndOn?: import("lkt-vue-kernel").ValidTextValue | {
                        icon?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                        iconText?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                        text?: import("lkt-vue-kernel").ValidTextValue;
                        class?: import("lkt-vue-kernel").ValidTextValue;
                        type?: import("lkt-vue-kernel").IconType | undefined;
                        dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                        position?: import("lkt-vue-kernel").IconPosition | undefined;
                        events?: {
                            click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                        } | undefined;
                    };
                    iconEndOff?: import("lkt-vue-kernel").ValidTextValue | {
                        icon?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                        iconText?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                        text?: import("lkt-vue-kernel").ValidTextValue;
                        class?: import("lkt-vue-kernel").ValidTextValue;
                        type?: import("lkt-vue-kernel").IconType | undefined;
                        dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                        position?: import("lkt-vue-kernel").IconPosition | undefined;
                        events?: {
                            click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                        } | undefined;
                    };
                    dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                    anchor?: {
                        type?: import("lkt-vue-kernel").AnchorType | undefined;
                        to?: string | ((data: import("lkt-vue-kernel").LktObject) => import("lkt-vue-kernel").RouteConfig | string) | {
                            path?: string | undefined;
                            name?: string | undefined;
                            hash?: string | undefined;
                            params?: import("lkt-vue-kernel").LktObject | undefined;
                            query?: import("lkt-vue-kernel").LktObject | undefined;
                            replace?: boolean | undefined;
                        } | undefined;
                        class?: string | undefined;
                        isActive?: boolean | undefined;
                        downloadFileName?: string | undefined;
                        disabled?: boolean | undefined;
                        confirmModal?: import("lkt-vue-kernel").ValidModalName;
                        confirmModalKey?: import("lkt-vue-kernel").ValidModalKey;
                        confirmData?: {
                            [x: string]: any;
                            [x: number]: any;
                            modalName?: import("lkt-vue-kernel").ValidModalName;
                            modalKey?: import("lkt-vue-kernel").ValidModalKey;
                            zIndex?: number | undefined;
                            type?: import("lkt-vue-kernel").ModalType | undefined;
                            size?: string | undefined;
                            preTitle?: string | undefined;
                            preTitleIcon?: string | undefined;
                            title?: string | undefined;
                            closeIcon?: string | undefined;
                            closeConfirm?: import("lkt-vue-kernel").ValidModalName;
                            closeConfirmKey?: import("lkt-vue-kernel").ValidModalKey;
                            showClose?: boolean | undefined;
                            disabledClose?: boolean | undefined;
                            disabledVeilClick?: boolean | undefined;
                            hiddenFooter?: boolean | undefined;
                            beforeClose?: import("lkt-vue-kernel").ValidBeforeCloseModal;
                            item?: import("lkt-vue-kernel").LktObject | undefined;
                            confirmButton?: /*elided*/ any | undefined;
                            cancelButton?: /*elided*/ any | undefined;
                            headerActionsButton?: /*elided*/ any | undefined;
                        } | undefined;
                        imposter?: boolean | undefined;
                        external?: boolean | undefined;
                        text?: import("lkt-vue-kernel").ValidTextValue;
                        icon?: string | {
                            icon?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                            iconText?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                            text?: import("lkt-vue-kernel").ValidTextValue;
                            class?: import("lkt-vue-kernel").ValidTextValue;
                            type?: import("lkt-vue-kernel").IconType | undefined;
                            dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                            position?: import("lkt-vue-kernel").IconPosition | undefined;
                            events?: {
                                click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                            } | undefined;
                        } | undefined;
                        events?: {
                            click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                        } | undefined;
                        prop?: import("lkt-vue-kernel").LktObject | undefined;
                        onClick?: Function | undefined;
                    } | undefined;
                    resource?: string | undefined;
                    resourceData?: import("lkt-vue-kernel").LktObject | undefined;
                    modal?: import("lkt-vue-kernel").ValidModalName;
                    modalKey?: import("lkt-vue-kernel").ValidModalKey;
                    modalData?: Function | /*elided*/ any | undefined;
                    confirmModal?: import("lkt-vue-kernel").ValidModalName;
                    confirmModalKey?: import("lkt-vue-kernel").ValidModalKey;
                    confirmData?: /*elided*/ any | undefined;
                    modalCallbacks?: {
                        modalName: import("lkt-vue-kernel").ValidModalName;
                        modalKey?: import("lkt-vue-kernel").ValidModalKey;
                        action: import("lkt-vue-kernel").ModalCallbackAction;
                        method?: string | undefined;
                        args?: import("lkt-vue-kernel").LktObject | undefined;
                    }[] | undefined;
                    tooltip?: {
                        modelValue?: boolean | undefined;
                        alwaysOpen?: boolean | undefined;
                        class?: string | undefined;
                        contentClass?: string | undefined;
                        text?: string | undefined;
                        icon?: string | undefined;
                        iconAtEnd?: boolean | undefined;
                        engine?: import("lkt-vue-kernel").TooltipPositionEngine | undefined;
                        referrerMargin?: number | string | undefined;
                        windowMargin?: number | string | undefined;
                        referrerWidth?: boolean | undefined;
                        referrer?: HTMLElement | undefined;
                        locationY?: import("lkt-vue-kernel").TooltipLocationY | undefined;
                        locationX?: import("lkt-vue-kernel").TooltipLocationX | undefined;
                        showOnReferrerHover?: boolean | undefined;
                        showOnReferrerHoverDelay?: number | undefined;
                        hideOnReferrerLeave?: boolean | undefined;
                        hideOnReferrerLeaveDelay?: number | undefined;
                        compensationX?: number | undefined;
                        compensationY?: number | undefined;
                        compensateGlobalContainers?: boolean | undefined;
                        remoteControl?: boolean | undefined;
                    } | undefined;
                    splitIcon?: string | undefined;
                    showTooltipOnHover?: boolean | undefined;
                    showTooltipOnHoverDelay?: number | undefined;
                    hideTooltipOnLeave?: boolean | undefined;
                    splitClass?: string | undefined;
                    splitButtons?: /*elided*/ any[] | undefined;
                    tabindex?: import("lkt-vue-kernel").ValidTabIndex;
                    prop?: import("lkt-vue-kernel").LktObject | undefined;
                    clickRef?: (Element | import("vue").VueElement) | undefined;
                    events?: {
                        click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                        httpStart?: Function | undefined;
                        httpEnd?: ((data: ClickEventArgs) => void | undefined) | undefined;
                    } | undefined;
                } | undefined;
                cancelButton?: {
                    type?: import("lkt-vue-kernel").ButtonType | undefined;
                    name?: string | undefined;
                    value?: string | undefined;
                    disabled?: import("lkt-vue-kernel").ValidIsDisabledValue;
                    openTooltip?: boolean | undefined;
                    loading?: boolean | undefined;
                    class?: string | undefined;
                    containerClass?: string | undefined;
                    wrapContent?: boolean | undefined;
                    text?: import("lkt-vue-kernel").ValidTextValue;
                    icon?: string | {
                        icon?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                        iconText?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                        text?: import("lkt-vue-kernel").ValidTextValue;
                        class?: import("lkt-vue-kernel").ValidTextValue;
                        type?: import("lkt-vue-kernel").IconType | undefined;
                        dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                        position?: import("lkt-vue-kernel").IconPosition | undefined;
                        events?: {
                            click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                        } | undefined;
                    } | undefined;
                    iconEnd?: string | {
                        icon?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                        iconText?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                        text?: import("lkt-vue-kernel").ValidTextValue;
                        class?: import("lkt-vue-kernel").ValidTextValue;
                        type?: import("lkt-vue-kernel").IconType | undefined;
                        dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                        position?: import("lkt-vue-kernel").IconPosition | undefined;
                        events?: {
                            click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                        } | undefined;
                    } | undefined;
                    img?: string | undefined;
                    checked?: boolean | undefined;
                    textOn?: import("lkt-vue-kernel").ValidTextValue;
                    textOff?: import("lkt-vue-kernel").ValidTextValue;
                    iconOn?: import("lkt-vue-kernel").ValidTextValue | {
                        icon?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                        iconText?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                        text?: import("lkt-vue-kernel").ValidTextValue;
                        class?: import("lkt-vue-kernel").ValidTextValue;
                        type?: import("lkt-vue-kernel").IconType | undefined;
                        dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                        position?: import("lkt-vue-kernel").IconPosition | undefined;
                        events?: {
                            click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                        } | undefined;
                    };
                    iconOff?: import("lkt-vue-kernel").ValidTextValue | {
                        icon?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                        iconText?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                        text?: import("lkt-vue-kernel").ValidTextValue;
                        class?: import("lkt-vue-kernel").ValidTextValue;
                        type?: import("lkt-vue-kernel").IconType | undefined;
                        dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                        position?: import("lkt-vue-kernel").IconPosition | undefined;
                        events?: {
                            click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                        } | undefined;
                    };
                    iconEndOn?: import("lkt-vue-kernel").ValidTextValue | {
                        icon?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                        iconText?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                        text?: import("lkt-vue-kernel").ValidTextValue;
                        class?: import("lkt-vue-kernel").ValidTextValue;
                        type?: import("lkt-vue-kernel").IconType | undefined;
                        dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                        position?: import("lkt-vue-kernel").IconPosition | undefined;
                        events?: {
                            click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                        } | undefined;
                    };
                    iconEndOff?: import("lkt-vue-kernel").ValidTextValue | {
                        icon?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                        iconText?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                        text?: import("lkt-vue-kernel").ValidTextValue;
                        class?: import("lkt-vue-kernel").ValidTextValue;
                        type?: import("lkt-vue-kernel").IconType | undefined;
                        dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                        position?: import("lkt-vue-kernel").IconPosition | undefined;
                        events?: {
                            click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                        } | undefined;
                    };
                    dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                    anchor?: {
                        type?: import("lkt-vue-kernel").AnchorType | undefined;
                        to?: string | ((data: import("lkt-vue-kernel").LktObject) => import("lkt-vue-kernel").RouteConfig | string) | {
                            path?: string | undefined;
                            name?: string | undefined;
                            hash?: string | undefined;
                            params?: import("lkt-vue-kernel").LktObject | undefined;
                            query?: import("lkt-vue-kernel").LktObject | undefined;
                            replace?: boolean | undefined;
                        } | undefined;
                        class?: string | undefined;
                        isActive?: boolean | undefined;
                        downloadFileName?: string | undefined;
                        disabled?: boolean | undefined;
                        confirmModal?: import("lkt-vue-kernel").ValidModalName;
                        confirmModalKey?: import("lkt-vue-kernel").ValidModalKey;
                        confirmData?: {
                            [x: string]: any;
                            [x: number]: any;
                            modalName?: import("lkt-vue-kernel").ValidModalName;
                            modalKey?: import("lkt-vue-kernel").ValidModalKey;
                            zIndex?: number | undefined;
                            type?: import("lkt-vue-kernel").ModalType | undefined;
                            size?: string | undefined;
                            preTitle?: string | undefined;
                            preTitleIcon?: string | undefined;
                            title?: string | undefined;
                            closeIcon?: string | undefined;
                            closeConfirm?: import("lkt-vue-kernel").ValidModalName;
                            closeConfirmKey?: import("lkt-vue-kernel").ValidModalKey;
                            showClose?: boolean | undefined;
                            disabledClose?: boolean | undefined;
                            disabledVeilClick?: boolean | undefined;
                            hiddenFooter?: boolean | undefined;
                            beforeClose?: import("lkt-vue-kernel").ValidBeforeCloseModal;
                            item?: import("lkt-vue-kernel").LktObject | undefined;
                            confirmButton?: /*elided*/ any | undefined;
                            cancelButton?: /*elided*/ any | undefined;
                            headerActionsButton?: /*elided*/ any | undefined;
                        } | undefined;
                        imposter?: boolean | undefined;
                        external?: boolean | undefined;
                        text?: import("lkt-vue-kernel").ValidTextValue;
                        icon?: string | {
                            icon?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                            iconText?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                            text?: import("lkt-vue-kernel").ValidTextValue;
                            class?: import("lkt-vue-kernel").ValidTextValue;
                            type?: import("lkt-vue-kernel").IconType | undefined;
                            dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                            position?: import("lkt-vue-kernel").IconPosition | undefined;
                            events?: {
                                click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                            } | undefined;
                        } | undefined;
                        events?: {
                            click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                        } | undefined;
                        prop?: import("lkt-vue-kernel").LktObject | undefined;
                        onClick?: Function | undefined;
                    } | undefined;
                    resource?: string | undefined;
                    resourceData?: import("lkt-vue-kernel").LktObject | undefined;
                    modal?: import("lkt-vue-kernel").ValidModalName;
                    modalKey?: import("lkt-vue-kernel").ValidModalKey;
                    modalData?: Function | /*elided*/ any | undefined;
                    confirmModal?: import("lkt-vue-kernel").ValidModalName;
                    confirmModalKey?: import("lkt-vue-kernel").ValidModalKey;
                    confirmData?: /*elided*/ any | undefined;
                    modalCallbacks?: {
                        modalName: import("lkt-vue-kernel").ValidModalName;
                        modalKey?: import("lkt-vue-kernel").ValidModalKey;
                        action: import("lkt-vue-kernel").ModalCallbackAction;
                        method?: string | undefined;
                        args?: import("lkt-vue-kernel").LktObject | undefined;
                    }[] | undefined;
                    tooltip?: {
                        modelValue?: boolean | undefined;
                        alwaysOpen?: boolean | undefined;
                        class?: string | undefined;
                        contentClass?: string | undefined;
                        text?: string | undefined;
                        icon?: string | undefined;
                        iconAtEnd?: boolean | undefined;
                        engine?: import("lkt-vue-kernel").TooltipPositionEngine | undefined;
                        referrerMargin?: number | string | undefined;
                        windowMargin?: number | string | undefined;
                        referrerWidth?: boolean | undefined;
                        referrer?: HTMLElement | undefined;
                        locationY?: import("lkt-vue-kernel").TooltipLocationY | undefined;
                        locationX?: import("lkt-vue-kernel").TooltipLocationX | undefined;
                        showOnReferrerHover?: boolean | undefined;
                        showOnReferrerHoverDelay?: number | undefined;
                        hideOnReferrerLeave?: boolean | undefined;
                        hideOnReferrerLeaveDelay?: number | undefined;
                        compensationX?: number | undefined;
                        compensationY?: number | undefined;
                        compensateGlobalContainers?: boolean | undefined;
                        remoteControl?: boolean | undefined;
                    } | undefined;
                    splitIcon?: string | undefined;
                    showTooltipOnHover?: boolean | undefined;
                    showTooltipOnHoverDelay?: number | undefined;
                    hideTooltipOnLeave?: boolean | undefined;
                    splitClass?: string | undefined;
                    splitButtons?: /*elided*/ any[] | undefined;
                    tabindex?: import("lkt-vue-kernel").ValidTabIndex;
                    prop?: import("lkt-vue-kernel").LktObject | undefined;
                    clickRef?: (Element | import("vue").VueElement) | undefined;
                    events?: {
                        click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                        httpStart?: Function | undefined;
                        httpEnd?: ((data: ClickEventArgs) => void | undefined) | undefined;
                    } | undefined;
                } | undefined;
                headerActionsButton?: {
                    type?: import("lkt-vue-kernel").ButtonType | undefined;
                    name?: string | undefined;
                    value?: string | undefined;
                    disabled?: import("lkt-vue-kernel").ValidIsDisabledValue;
                    openTooltip?: boolean | undefined;
                    loading?: boolean | undefined;
                    class?: string | undefined;
                    containerClass?: string | undefined;
                    wrapContent?: boolean | undefined;
                    text?: import("lkt-vue-kernel").ValidTextValue;
                    icon?: string | {
                        icon?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                        iconText?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                        text?: import("lkt-vue-kernel").ValidTextValue;
                        class?: import("lkt-vue-kernel").ValidTextValue;
                        type?: import("lkt-vue-kernel").IconType | undefined;
                        dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                        position?: import("lkt-vue-kernel").IconPosition | undefined;
                        events?: {
                            click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                        } | undefined;
                    } | undefined;
                    iconEnd?: string | {
                        icon?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                        iconText?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                        text?: import("lkt-vue-kernel").ValidTextValue;
                        class?: import("lkt-vue-kernel").ValidTextValue;
                        type?: import("lkt-vue-kernel").IconType | undefined;
                        dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                        position?: import("lkt-vue-kernel").IconPosition | undefined;
                        events?: {
                            click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                        } | undefined;
                    } | undefined;
                    img?: string | undefined;
                    checked?: boolean | undefined;
                    textOn?: import("lkt-vue-kernel").ValidTextValue;
                    textOff?: import("lkt-vue-kernel").ValidTextValue;
                    iconOn?: import("lkt-vue-kernel").ValidTextValue | {
                        icon?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                        iconText?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                        text?: import("lkt-vue-kernel").ValidTextValue;
                        class?: import("lkt-vue-kernel").ValidTextValue;
                        type?: import("lkt-vue-kernel").IconType | undefined;
                        dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                        position?: import("lkt-vue-kernel").IconPosition | undefined;
                        events?: {
                            click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                        } | undefined;
                    };
                    iconOff?: import("lkt-vue-kernel").ValidTextValue | {
                        icon?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                        iconText?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                        text?: import("lkt-vue-kernel").ValidTextValue;
                        class?: import("lkt-vue-kernel").ValidTextValue;
                        type?: import("lkt-vue-kernel").IconType | undefined;
                        dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                        position?: import("lkt-vue-kernel").IconPosition | undefined;
                        events?: {
                            click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                        } | undefined;
                    };
                    iconEndOn?: import("lkt-vue-kernel").ValidTextValue | {
                        icon?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                        iconText?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                        text?: import("lkt-vue-kernel").ValidTextValue;
                        class?: import("lkt-vue-kernel").ValidTextValue;
                        type?: import("lkt-vue-kernel").IconType | undefined;
                        dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                        position?: import("lkt-vue-kernel").IconPosition | undefined;
                        events?: {
                            click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                        } | undefined;
                    };
                    iconEndOff?: import("lkt-vue-kernel").ValidTextValue | {
                        icon?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                        iconText?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                        text?: import("lkt-vue-kernel").ValidTextValue;
                        class?: import("lkt-vue-kernel").ValidTextValue;
                        type?: import("lkt-vue-kernel").IconType | undefined;
                        dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                        position?: import("lkt-vue-kernel").IconPosition | undefined;
                        events?: {
                            click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                        } | undefined;
                    };
                    dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                    anchor?: {
                        type?: import("lkt-vue-kernel").AnchorType | undefined;
                        to?: string | ((data: import("lkt-vue-kernel").LktObject) => import("lkt-vue-kernel").RouteConfig | string) | {
                            path?: string | undefined;
                            name?: string | undefined;
                            hash?: string | undefined;
                            params?: import("lkt-vue-kernel").LktObject | undefined;
                            query?: import("lkt-vue-kernel").LktObject | undefined;
                            replace?: boolean | undefined;
                        } | undefined;
                        class?: string | undefined;
                        isActive?: boolean | undefined;
                        downloadFileName?: string | undefined;
                        disabled?: boolean | undefined;
                        confirmModal?: import("lkt-vue-kernel").ValidModalName;
                        confirmModalKey?: import("lkt-vue-kernel").ValidModalKey;
                        confirmData?: {
                            [x: string]: any;
                            [x: number]: any;
                            modalName?: import("lkt-vue-kernel").ValidModalName;
                            modalKey?: import("lkt-vue-kernel").ValidModalKey;
                            zIndex?: number | undefined;
                            type?: import("lkt-vue-kernel").ModalType | undefined;
                            size?: string | undefined;
                            preTitle?: string | undefined;
                            preTitleIcon?: string | undefined;
                            title?: string | undefined;
                            closeIcon?: string | undefined;
                            closeConfirm?: import("lkt-vue-kernel").ValidModalName;
                            closeConfirmKey?: import("lkt-vue-kernel").ValidModalKey;
                            showClose?: boolean | undefined;
                            disabledClose?: boolean | undefined;
                            disabledVeilClick?: boolean | undefined;
                            hiddenFooter?: boolean | undefined;
                            beforeClose?: import("lkt-vue-kernel").ValidBeforeCloseModal;
                            item?: import("lkt-vue-kernel").LktObject | undefined;
                            confirmButton?: /*elided*/ any | undefined;
                            cancelButton?: /*elided*/ any | undefined;
                            headerActionsButton?: /*elided*/ any | undefined;
                        } | undefined;
                        imposter?: boolean | undefined;
                        external?: boolean | undefined;
                        text?: import("lkt-vue-kernel").ValidTextValue;
                        icon?: string | {
                            icon?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                            iconText?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                            text?: import("lkt-vue-kernel").ValidTextValue;
                            class?: import("lkt-vue-kernel").ValidTextValue;
                            type?: import("lkt-vue-kernel").IconType | undefined;
                            dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                            position?: import("lkt-vue-kernel").IconPosition | undefined;
                            events?: {
                                click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                            } | undefined;
                        } | undefined;
                        events?: {
                            click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                        } | undefined;
                        prop?: import("lkt-vue-kernel").LktObject | undefined;
                        onClick?: Function | undefined;
                    } | undefined;
                    resource?: string | undefined;
                    resourceData?: import("lkt-vue-kernel").LktObject | undefined;
                    modal?: import("lkt-vue-kernel").ValidModalName;
                    modalKey?: import("lkt-vue-kernel").ValidModalKey;
                    modalData?: Function | /*elided*/ any | undefined;
                    confirmModal?: import("lkt-vue-kernel").ValidModalName;
                    confirmModalKey?: import("lkt-vue-kernel").ValidModalKey;
                    confirmData?: /*elided*/ any | undefined;
                    modalCallbacks?: {
                        modalName: import("lkt-vue-kernel").ValidModalName;
                        modalKey?: import("lkt-vue-kernel").ValidModalKey;
                        action: import("lkt-vue-kernel").ModalCallbackAction;
                        method?: string | undefined;
                        args?: import("lkt-vue-kernel").LktObject | undefined;
                    }[] | undefined;
                    tooltip?: {
                        modelValue?: boolean | undefined;
                        alwaysOpen?: boolean | undefined;
                        class?: string | undefined;
                        contentClass?: string | undefined;
                        text?: string | undefined;
                        icon?: string | undefined;
                        iconAtEnd?: boolean | undefined;
                        engine?: import("lkt-vue-kernel").TooltipPositionEngine | undefined;
                        referrerMargin?: number | string | undefined;
                        windowMargin?: number | string | undefined;
                        referrerWidth?: boolean | undefined;
                        referrer?: HTMLElement | undefined;
                        locationY?: import("lkt-vue-kernel").TooltipLocationY | undefined;
                        locationX?: import("lkt-vue-kernel").TooltipLocationX | undefined;
                        showOnReferrerHover?: boolean | undefined;
                        showOnReferrerHoverDelay?: number | undefined;
                        hideOnReferrerLeave?: boolean | undefined;
                        hideOnReferrerLeaveDelay?: number | undefined;
                        compensationX?: number | undefined;
                        compensationY?: number | undefined;
                        compensateGlobalContainers?: boolean | undefined;
                        remoteControl?: boolean | undefined;
                    } | undefined;
                    splitIcon?: string | undefined;
                    showTooltipOnHover?: boolean | undefined;
                    showTooltipOnHoverDelay?: number | undefined;
                    hideTooltipOnLeave?: boolean | undefined;
                    splitClass?: string | undefined;
                    splitButtons?: /*elided*/ any[] | undefined;
                    tabindex?: import("lkt-vue-kernel").ValidTabIndex;
                    prop?: import("lkt-vue-kernel").LktObject | undefined;
                    clickRef?: (Element | import("vue").VueElement) | undefined;
                    events?: {
                        click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                        httpStart?: Function | undefined;
                        httpEnd?: ((data: ClickEventArgs) => void | undefined) | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            confirmModal?: import("lkt-vue-kernel").ValidModalName;
            confirmModalKey?: import("lkt-vue-kernel").ValidModalKey;
            confirmData?: {
                [x: string]: any;
                [x: number]: any;
                modalName?: import("lkt-vue-kernel").ValidModalName;
                modalKey?: import("lkt-vue-kernel").ValidModalKey;
                zIndex?: number | undefined;
                type?: import("lkt-vue-kernel").ModalType | undefined;
                size?: string | undefined;
                preTitle?: string | undefined;
                preTitleIcon?: string | undefined;
                title?: string | undefined;
                closeIcon?: string | undefined;
                closeConfirm?: import("lkt-vue-kernel").ValidModalName;
                closeConfirmKey?: import("lkt-vue-kernel").ValidModalKey;
                showClose?: boolean | undefined;
                disabledClose?: boolean | undefined;
                disabledVeilClick?: boolean | undefined;
                hiddenFooter?: boolean | undefined;
                beforeClose?: import("lkt-vue-kernel").ValidBeforeCloseModal;
                item?: import("lkt-vue-kernel").LktObject | undefined;
                confirmButton?: {
                    type?: import("lkt-vue-kernel").ButtonType | undefined;
                    name?: string | undefined;
                    value?: string | undefined;
                    disabled?: import("lkt-vue-kernel").ValidIsDisabledValue;
                    openTooltip?: boolean | undefined;
                    loading?: boolean | undefined;
                    class?: string | undefined;
                    containerClass?: string | undefined;
                    wrapContent?: boolean | undefined;
                    text?: import("lkt-vue-kernel").ValidTextValue;
                    icon?: string | {
                        icon?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                        iconText?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                        text?: import("lkt-vue-kernel").ValidTextValue;
                        class?: import("lkt-vue-kernel").ValidTextValue;
                        type?: import("lkt-vue-kernel").IconType | undefined;
                        dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                        position?: import("lkt-vue-kernel").IconPosition | undefined;
                        events?: {
                            click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                        } | undefined;
                    } | undefined;
                    iconEnd?: string | {
                        icon?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                        iconText?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                        text?: import("lkt-vue-kernel").ValidTextValue;
                        class?: import("lkt-vue-kernel").ValidTextValue;
                        type?: import("lkt-vue-kernel").IconType | undefined;
                        dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                        position?: import("lkt-vue-kernel").IconPosition | undefined;
                        events?: {
                            click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                        } | undefined;
                    } | undefined;
                    img?: string | undefined;
                    checked?: boolean | undefined;
                    textOn?: import("lkt-vue-kernel").ValidTextValue;
                    textOff?: import("lkt-vue-kernel").ValidTextValue;
                    iconOn?: import("lkt-vue-kernel").ValidTextValue | {
                        icon?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                        iconText?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                        text?: import("lkt-vue-kernel").ValidTextValue;
                        class?: import("lkt-vue-kernel").ValidTextValue;
                        type?: import("lkt-vue-kernel").IconType | undefined;
                        dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                        position?: import("lkt-vue-kernel").IconPosition | undefined;
                        events?: {
                            click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                        } | undefined;
                    };
                    iconOff?: import("lkt-vue-kernel").ValidTextValue | {
                        icon?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                        iconText?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                        text?: import("lkt-vue-kernel").ValidTextValue;
                        class?: import("lkt-vue-kernel").ValidTextValue;
                        type?: import("lkt-vue-kernel").IconType | undefined;
                        dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                        position?: import("lkt-vue-kernel").IconPosition | undefined;
                        events?: {
                            click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                        } | undefined;
                    };
                    iconEndOn?: import("lkt-vue-kernel").ValidTextValue | {
                        icon?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                        iconText?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                        text?: import("lkt-vue-kernel").ValidTextValue;
                        class?: import("lkt-vue-kernel").ValidTextValue;
                        type?: import("lkt-vue-kernel").IconType | undefined;
                        dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                        position?: import("lkt-vue-kernel").IconPosition | undefined;
                        events?: {
                            click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                        } | undefined;
                    };
                    iconEndOff?: import("lkt-vue-kernel").ValidTextValue | {
                        icon?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                        iconText?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                        text?: import("lkt-vue-kernel").ValidTextValue;
                        class?: import("lkt-vue-kernel").ValidTextValue;
                        type?: import("lkt-vue-kernel").IconType | undefined;
                        dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                        position?: import("lkt-vue-kernel").IconPosition | undefined;
                        events?: {
                            click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                        } | undefined;
                    };
                    dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                    anchor?: {
                        type?: import("lkt-vue-kernel").AnchorType | undefined;
                        to?: string | ((data: import("lkt-vue-kernel").LktObject) => import("lkt-vue-kernel").RouteConfig | string) | {
                            path?: string | undefined;
                            name?: string | undefined;
                            hash?: string | undefined;
                            params?: import("lkt-vue-kernel").LktObject | undefined;
                            query?: import("lkt-vue-kernel").LktObject | undefined;
                            replace?: boolean | undefined;
                        } | undefined;
                        class?: string | undefined;
                        isActive?: boolean | undefined;
                        downloadFileName?: string | undefined;
                        disabled?: boolean | undefined;
                        confirmModal?: import("lkt-vue-kernel").ValidModalName;
                        confirmModalKey?: import("lkt-vue-kernel").ValidModalKey;
                        confirmData?: {
                            [x: string]: any;
                            [x: number]: any;
                            modalName?: import("lkt-vue-kernel").ValidModalName;
                            modalKey?: import("lkt-vue-kernel").ValidModalKey;
                            zIndex?: number | undefined;
                            type?: import("lkt-vue-kernel").ModalType | undefined;
                            size?: string | undefined;
                            preTitle?: string | undefined;
                            preTitleIcon?: string | undefined;
                            title?: string | undefined;
                            closeIcon?: string | undefined;
                            closeConfirm?: import("lkt-vue-kernel").ValidModalName;
                            closeConfirmKey?: import("lkt-vue-kernel").ValidModalKey;
                            showClose?: boolean | undefined;
                            disabledClose?: boolean | undefined;
                            disabledVeilClick?: boolean | undefined;
                            hiddenFooter?: boolean | undefined;
                            beforeClose?: import("lkt-vue-kernel").ValidBeforeCloseModal;
                            item?: import("lkt-vue-kernel").LktObject | undefined;
                            confirmButton?: /*elided*/ any | undefined;
                            cancelButton?: /*elided*/ any | undefined;
                            headerActionsButton?: /*elided*/ any | undefined;
                        } | undefined;
                        imposter?: boolean | undefined;
                        external?: boolean | undefined;
                        text?: import("lkt-vue-kernel").ValidTextValue;
                        icon?: string | {
                            icon?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                            iconText?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                            text?: import("lkt-vue-kernel").ValidTextValue;
                            class?: import("lkt-vue-kernel").ValidTextValue;
                            type?: import("lkt-vue-kernel").IconType | undefined;
                            dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                            position?: import("lkt-vue-kernel").IconPosition | undefined;
                            events?: {
                                click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                            } | undefined;
                        } | undefined;
                        events?: {
                            click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                        } | undefined;
                        prop?: import("lkt-vue-kernel").LktObject | undefined;
                        onClick?: Function | undefined;
                    } | undefined;
                    resource?: string | undefined;
                    resourceData?: import("lkt-vue-kernel").LktObject | undefined;
                    modal?: import("lkt-vue-kernel").ValidModalName;
                    modalKey?: import("lkt-vue-kernel").ValidModalKey;
                    modalData?: Function | /*elided*/ any | undefined;
                    confirmModal?: import("lkt-vue-kernel").ValidModalName;
                    confirmModalKey?: import("lkt-vue-kernel").ValidModalKey;
                    confirmData?: /*elided*/ any | undefined;
                    modalCallbacks?: {
                        modalName: import("lkt-vue-kernel").ValidModalName;
                        modalKey?: import("lkt-vue-kernel").ValidModalKey;
                        action: import("lkt-vue-kernel").ModalCallbackAction;
                        method?: string | undefined;
                        args?: import("lkt-vue-kernel").LktObject | undefined;
                    }[] | undefined;
                    tooltip?: {
                        modelValue?: boolean | undefined;
                        alwaysOpen?: boolean | undefined;
                        class?: string | undefined;
                        contentClass?: string | undefined;
                        text?: string | undefined;
                        icon?: string | undefined;
                        iconAtEnd?: boolean | undefined;
                        engine?: import("lkt-vue-kernel").TooltipPositionEngine | undefined;
                        referrerMargin?: number | string | undefined;
                        windowMargin?: number | string | undefined;
                        referrerWidth?: boolean | undefined;
                        referrer?: HTMLElement | undefined;
                        locationY?: import("lkt-vue-kernel").TooltipLocationY | undefined;
                        locationX?: import("lkt-vue-kernel").TooltipLocationX | undefined;
                        showOnReferrerHover?: boolean | undefined;
                        showOnReferrerHoverDelay?: number | undefined;
                        hideOnReferrerLeave?: boolean | undefined;
                        hideOnReferrerLeaveDelay?: number | undefined;
                        compensationX?: number | undefined;
                        compensationY?: number | undefined;
                        compensateGlobalContainers?: boolean | undefined;
                        remoteControl?: boolean | undefined;
                    } | undefined;
                    splitIcon?: string | undefined;
                    showTooltipOnHover?: boolean | undefined;
                    showTooltipOnHoverDelay?: number | undefined;
                    hideTooltipOnLeave?: boolean | undefined;
                    splitClass?: string | undefined;
                    splitButtons?: /*elided*/ any[] | undefined;
                    tabindex?: import("lkt-vue-kernel").ValidTabIndex;
                    prop?: import("lkt-vue-kernel").LktObject | undefined;
                    clickRef?: (Element | import("vue").VueElement) | undefined;
                    events?: {
                        click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                        httpStart?: Function | undefined;
                        httpEnd?: ((data: ClickEventArgs) => void | undefined) | undefined;
                    } | undefined;
                } | undefined;
                cancelButton?: {
                    type?: import("lkt-vue-kernel").ButtonType | undefined;
                    name?: string | undefined;
                    value?: string | undefined;
                    disabled?: import("lkt-vue-kernel").ValidIsDisabledValue;
                    openTooltip?: boolean | undefined;
                    loading?: boolean | undefined;
                    class?: string | undefined;
                    containerClass?: string | undefined;
                    wrapContent?: boolean | undefined;
                    text?: import("lkt-vue-kernel").ValidTextValue;
                    icon?: string | {
                        icon?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                        iconText?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                        text?: import("lkt-vue-kernel").ValidTextValue;
                        class?: import("lkt-vue-kernel").ValidTextValue;
                        type?: import("lkt-vue-kernel").IconType | undefined;
                        dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                        position?: import("lkt-vue-kernel").IconPosition | undefined;
                        events?: {
                            click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                        } | undefined;
                    } | undefined;
                    iconEnd?: string | {
                        icon?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                        iconText?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                        text?: import("lkt-vue-kernel").ValidTextValue;
                        class?: import("lkt-vue-kernel").ValidTextValue;
                        type?: import("lkt-vue-kernel").IconType | undefined;
                        dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                        position?: import("lkt-vue-kernel").IconPosition | undefined;
                        events?: {
                            click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                        } | undefined;
                    } | undefined;
                    img?: string | undefined;
                    checked?: boolean | undefined;
                    textOn?: import("lkt-vue-kernel").ValidTextValue;
                    textOff?: import("lkt-vue-kernel").ValidTextValue;
                    iconOn?: import("lkt-vue-kernel").ValidTextValue | {
                        icon?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                        iconText?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                        text?: import("lkt-vue-kernel").ValidTextValue;
                        class?: import("lkt-vue-kernel").ValidTextValue;
                        type?: import("lkt-vue-kernel").IconType | undefined;
                        dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                        position?: import("lkt-vue-kernel").IconPosition | undefined;
                        events?: {
                            click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                        } | undefined;
                    };
                    iconOff?: import("lkt-vue-kernel").ValidTextValue | {
                        icon?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                        iconText?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                        text?: import("lkt-vue-kernel").ValidTextValue;
                        class?: import("lkt-vue-kernel").ValidTextValue;
                        type?: import("lkt-vue-kernel").IconType | undefined;
                        dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                        position?: import("lkt-vue-kernel").IconPosition | undefined;
                        events?: {
                            click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                        } | undefined;
                    };
                    iconEndOn?: import("lkt-vue-kernel").ValidTextValue | {
                        icon?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                        iconText?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                        text?: import("lkt-vue-kernel").ValidTextValue;
                        class?: import("lkt-vue-kernel").ValidTextValue;
                        type?: import("lkt-vue-kernel").IconType | undefined;
                        dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                        position?: import("lkt-vue-kernel").IconPosition | undefined;
                        events?: {
                            click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                        } | undefined;
                    };
                    iconEndOff?: import("lkt-vue-kernel").ValidTextValue | {
                        icon?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                        iconText?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                        text?: import("lkt-vue-kernel").ValidTextValue;
                        class?: import("lkt-vue-kernel").ValidTextValue;
                        type?: import("lkt-vue-kernel").IconType | undefined;
                        dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                        position?: import("lkt-vue-kernel").IconPosition | undefined;
                        events?: {
                            click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                        } | undefined;
                    };
                    dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                    anchor?: {
                        type?: import("lkt-vue-kernel").AnchorType | undefined;
                        to?: string | ((data: import("lkt-vue-kernel").LktObject) => import("lkt-vue-kernel").RouteConfig | string) | {
                            path?: string | undefined;
                            name?: string | undefined;
                            hash?: string | undefined;
                            params?: import("lkt-vue-kernel").LktObject | undefined;
                            query?: import("lkt-vue-kernel").LktObject | undefined;
                            replace?: boolean | undefined;
                        } | undefined;
                        class?: string | undefined;
                        isActive?: boolean | undefined;
                        downloadFileName?: string | undefined;
                        disabled?: boolean | undefined;
                        confirmModal?: import("lkt-vue-kernel").ValidModalName;
                        confirmModalKey?: import("lkt-vue-kernel").ValidModalKey;
                        confirmData?: {
                            [x: string]: any;
                            [x: number]: any;
                            modalName?: import("lkt-vue-kernel").ValidModalName;
                            modalKey?: import("lkt-vue-kernel").ValidModalKey;
                            zIndex?: number | undefined;
                            type?: import("lkt-vue-kernel").ModalType | undefined;
                            size?: string | undefined;
                            preTitle?: string | undefined;
                            preTitleIcon?: string | undefined;
                            title?: string | undefined;
                            closeIcon?: string | undefined;
                            closeConfirm?: import("lkt-vue-kernel").ValidModalName;
                            closeConfirmKey?: import("lkt-vue-kernel").ValidModalKey;
                            showClose?: boolean | undefined;
                            disabledClose?: boolean | undefined;
                            disabledVeilClick?: boolean | undefined;
                            hiddenFooter?: boolean | undefined;
                            beforeClose?: import("lkt-vue-kernel").ValidBeforeCloseModal;
                            item?: import("lkt-vue-kernel").LktObject | undefined;
                            confirmButton?: /*elided*/ any | undefined;
                            cancelButton?: /*elided*/ any | undefined;
                            headerActionsButton?: /*elided*/ any | undefined;
                        } | undefined;
                        imposter?: boolean | undefined;
                        external?: boolean | undefined;
                        text?: import("lkt-vue-kernel").ValidTextValue;
                        icon?: string | {
                            icon?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                            iconText?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                            text?: import("lkt-vue-kernel").ValidTextValue;
                            class?: import("lkt-vue-kernel").ValidTextValue;
                            type?: import("lkt-vue-kernel").IconType | undefined;
                            dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                            position?: import("lkt-vue-kernel").IconPosition | undefined;
                            events?: {
                                click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                            } | undefined;
                        } | undefined;
                        events?: {
                            click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                        } | undefined;
                        prop?: import("lkt-vue-kernel").LktObject | undefined;
                        onClick?: Function | undefined;
                    } | undefined;
                    resource?: string | undefined;
                    resourceData?: import("lkt-vue-kernel").LktObject | undefined;
                    modal?: import("lkt-vue-kernel").ValidModalName;
                    modalKey?: import("lkt-vue-kernel").ValidModalKey;
                    modalData?: Function | /*elided*/ any | undefined;
                    confirmModal?: import("lkt-vue-kernel").ValidModalName;
                    confirmModalKey?: import("lkt-vue-kernel").ValidModalKey;
                    confirmData?: /*elided*/ any | undefined;
                    modalCallbacks?: {
                        modalName: import("lkt-vue-kernel").ValidModalName;
                        modalKey?: import("lkt-vue-kernel").ValidModalKey;
                        action: import("lkt-vue-kernel").ModalCallbackAction;
                        method?: string | undefined;
                        args?: import("lkt-vue-kernel").LktObject | undefined;
                    }[] | undefined;
                    tooltip?: {
                        modelValue?: boolean | undefined;
                        alwaysOpen?: boolean | undefined;
                        class?: string | undefined;
                        contentClass?: string | undefined;
                        text?: string | undefined;
                        icon?: string | undefined;
                        iconAtEnd?: boolean | undefined;
                        engine?: import("lkt-vue-kernel").TooltipPositionEngine | undefined;
                        referrerMargin?: number | string | undefined;
                        windowMargin?: number | string | undefined;
                        referrerWidth?: boolean | undefined;
                        referrer?: HTMLElement | undefined;
                        locationY?: import("lkt-vue-kernel").TooltipLocationY | undefined;
                        locationX?: import("lkt-vue-kernel").TooltipLocationX | undefined;
                        showOnReferrerHover?: boolean | undefined;
                        showOnReferrerHoverDelay?: number | undefined;
                        hideOnReferrerLeave?: boolean | undefined;
                        hideOnReferrerLeaveDelay?: number | undefined;
                        compensationX?: number | undefined;
                        compensationY?: number | undefined;
                        compensateGlobalContainers?: boolean | undefined;
                        remoteControl?: boolean | undefined;
                    } | undefined;
                    splitIcon?: string | undefined;
                    showTooltipOnHover?: boolean | undefined;
                    showTooltipOnHoverDelay?: number | undefined;
                    hideTooltipOnLeave?: boolean | undefined;
                    splitClass?: string | undefined;
                    splitButtons?: /*elided*/ any[] | undefined;
                    tabindex?: import("lkt-vue-kernel").ValidTabIndex;
                    prop?: import("lkt-vue-kernel").LktObject | undefined;
                    clickRef?: (Element | import("vue").VueElement) | undefined;
                    events?: {
                        click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                        httpStart?: Function | undefined;
                        httpEnd?: ((data: ClickEventArgs) => void | undefined) | undefined;
                    } | undefined;
                } | undefined;
                headerActionsButton?: {
                    type?: import("lkt-vue-kernel").ButtonType | undefined;
                    name?: string | undefined;
                    value?: string | undefined;
                    disabled?: import("lkt-vue-kernel").ValidIsDisabledValue;
                    openTooltip?: boolean | undefined;
                    loading?: boolean | undefined;
                    class?: string | undefined;
                    containerClass?: string | undefined;
                    wrapContent?: boolean | undefined;
                    text?: import("lkt-vue-kernel").ValidTextValue;
                    icon?: string | {
                        icon?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                        iconText?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                        text?: import("lkt-vue-kernel").ValidTextValue;
                        class?: import("lkt-vue-kernel").ValidTextValue;
                        type?: import("lkt-vue-kernel").IconType | undefined;
                        dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                        position?: import("lkt-vue-kernel").IconPosition | undefined;
                        events?: {
                            click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                        } | undefined;
                    } | undefined;
                    iconEnd?: string | {
                        icon?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                        iconText?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                        text?: import("lkt-vue-kernel").ValidTextValue;
                        class?: import("lkt-vue-kernel").ValidTextValue;
                        type?: import("lkt-vue-kernel").IconType | undefined;
                        dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                        position?: import("lkt-vue-kernel").IconPosition | undefined;
                        events?: {
                            click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                        } | undefined;
                    } | undefined;
                    img?: string | undefined;
                    checked?: boolean | undefined;
                    textOn?: import("lkt-vue-kernel").ValidTextValue;
                    textOff?: import("lkt-vue-kernel").ValidTextValue;
                    iconOn?: import("lkt-vue-kernel").ValidTextValue | {
                        icon?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                        iconText?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                        text?: import("lkt-vue-kernel").ValidTextValue;
                        class?: import("lkt-vue-kernel").ValidTextValue;
                        type?: import("lkt-vue-kernel").IconType | undefined;
                        dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                        position?: import("lkt-vue-kernel").IconPosition | undefined;
                        events?: {
                            click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                        } | undefined;
                    };
                    iconOff?: import("lkt-vue-kernel").ValidTextValue | {
                        icon?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                        iconText?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                        text?: import("lkt-vue-kernel").ValidTextValue;
                        class?: import("lkt-vue-kernel").ValidTextValue;
                        type?: import("lkt-vue-kernel").IconType | undefined;
                        dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                        position?: import("lkt-vue-kernel").IconPosition | undefined;
                        events?: {
                            click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                        } | undefined;
                    };
                    iconEndOn?: import("lkt-vue-kernel").ValidTextValue | {
                        icon?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                        iconText?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                        text?: import("lkt-vue-kernel").ValidTextValue;
                        class?: import("lkt-vue-kernel").ValidTextValue;
                        type?: import("lkt-vue-kernel").IconType | undefined;
                        dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                        position?: import("lkt-vue-kernel").IconPosition | undefined;
                        events?: {
                            click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                        } | undefined;
                    };
                    iconEndOff?: import("lkt-vue-kernel").ValidTextValue | {
                        icon?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                        iconText?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                        text?: import("lkt-vue-kernel").ValidTextValue;
                        class?: import("lkt-vue-kernel").ValidTextValue;
                        type?: import("lkt-vue-kernel").IconType | undefined;
                        dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                        position?: import("lkt-vue-kernel").IconPosition | undefined;
                        events?: {
                            click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                        } | undefined;
                    };
                    dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                    anchor?: {
                        type?: import("lkt-vue-kernel").AnchorType | undefined;
                        to?: string | ((data: import("lkt-vue-kernel").LktObject) => import("lkt-vue-kernel").RouteConfig | string) | {
                            path?: string | undefined;
                            name?: string | undefined;
                            hash?: string | undefined;
                            params?: import("lkt-vue-kernel").LktObject | undefined;
                            query?: import("lkt-vue-kernel").LktObject | undefined;
                            replace?: boolean | undefined;
                        } | undefined;
                        class?: string | undefined;
                        isActive?: boolean | undefined;
                        downloadFileName?: string | undefined;
                        disabled?: boolean | undefined;
                        confirmModal?: import("lkt-vue-kernel").ValidModalName;
                        confirmModalKey?: import("lkt-vue-kernel").ValidModalKey;
                        confirmData?: {
                            [x: string]: any;
                            [x: number]: any;
                            modalName?: import("lkt-vue-kernel").ValidModalName;
                            modalKey?: import("lkt-vue-kernel").ValidModalKey;
                            zIndex?: number | undefined;
                            type?: import("lkt-vue-kernel").ModalType | undefined;
                            size?: string | undefined;
                            preTitle?: string | undefined;
                            preTitleIcon?: string | undefined;
                            title?: string | undefined;
                            closeIcon?: string | undefined;
                            closeConfirm?: import("lkt-vue-kernel").ValidModalName;
                            closeConfirmKey?: import("lkt-vue-kernel").ValidModalKey;
                            showClose?: boolean | undefined;
                            disabledClose?: boolean | undefined;
                            disabledVeilClick?: boolean | undefined;
                            hiddenFooter?: boolean | undefined;
                            beforeClose?: import("lkt-vue-kernel").ValidBeforeCloseModal;
                            item?: import("lkt-vue-kernel").LktObject | undefined;
                            confirmButton?: /*elided*/ any | undefined;
                            cancelButton?: /*elided*/ any | undefined;
                            headerActionsButton?: /*elided*/ any | undefined;
                        } | undefined;
                        imposter?: boolean | undefined;
                        external?: boolean | undefined;
                        text?: import("lkt-vue-kernel").ValidTextValue;
                        icon?: string | {
                            icon?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                            iconText?: import("lkt-vue-kernel").ValidTextValue | (() => string);
                            text?: import("lkt-vue-kernel").ValidTextValue;
                            class?: import("lkt-vue-kernel").ValidTextValue;
                            type?: import("lkt-vue-kernel").IconType | undefined;
                            dot?: import("lkt-vue-kernel").ValidIconDot | undefined;
                            position?: import("lkt-vue-kernel").IconPosition | undefined;
                            events?: {
                                click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                            } | undefined;
                        } | undefined;
                        events?: {
                            click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                        } | undefined;
                        prop?: import("lkt-vue-kernel").LktObject | undefined;
                        onClick?: Function | undefined;
                    } | undefined;
                    resource?: string | undefined;
                    resourceData?: import("lkt-vue-kernel").LktObject | undefined;
                    modal?: import("lkt-vue-kernel").ValidModalName;
                    modalKey?: import("lkt-vue-kernel").ValidModalKey;
                    modalData?: Function | /*elided*/ any | undefined;
                    confirmModal?: import("lkt-vue-kernel").ValidModalName;
                    confirmModalKey?: import("lkt-vue-kernel").ValidModalKey;
                    confirmData?: /*elided*/ any | undefined;
                    modalCallbacks?: {
                        modalName: import("lkt-vue-kernel").ValidModalName;
                        modalKey?: import("lkt-vue-kernel").ValidModalKey;
                        action: import("lkt-vue-kernel").ModalCallbackAction;
                        method?: string | undefined;
                        args?: import("lkt-vue-kernel").LktObject | undefined;
                    }[] | undefined;
                    tooltip?: {
                        modelValue?: boolean | undefined;
                        alwaysOpen?: boolean | undefined;
                        class?: string | undefined;
                        contentClass?: string | undefined;
                        text?: string | undefined;
                        icon?: string | undefined;
                        iconAtEnd?: boolean | undefined;
                        engine?: import("lkt-vue-kernel").TooltipPositionEngine | undefined;
                        referrerMargin?: number | string | undefined;
                        windowMargin?: number | string | undefined;
                        referrerWidth?: boolean | undefined;
                        referrer?: HTMLElement | undefined;
                        locationY?: import("lkt-vue-kernel").TooltipLocationY | undefined;
                        locationX?: import("lkt-vue-kernel").TooltipLocationX | undefined;
                        showOnReferrerHover?: boolean | undefined;
                        showOnReferrerHoverDelay?: number | undefined;
                        hideOnReferrerLeave?: boolean | undefined;
                        hideOnReferrerLeaveDelay?: number | undefined;
                        compensationX?: number | undefined;
                        compensationY?: number | undefined;
                        compensateGlobalContainers?: boolean | undefined;
                        remoteControl?: boolean | undefined;
                    } | undefined;
                    splitIcon?: string | undefined;
                    showTooltipOnHover?: boolean | undefined;
                    showTooltipOnHoverDelay?: number | undefined;
                    hideTooltipOnLeave?: boolean | undefined;
                    splitClass?: string | undefined;
                    splitButtons?: /*elided*/ any[] | undefined;
                    tabindex?: import("lkt-vue-kernel").ValidTabIndex;
                    prop?: import("lkt-vue-kernel").LktObject | undefined;
                    clickRef?: (Element | import("vue").VueElement) | undefined;
                    events?: {
                        click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                        httpStart?: Function | undefined;
                        httpEnd?: ((data: ClickEventArgs) => void | undefined) | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            modalCallbacks?: {
                modalName: import("lkt-vue-kernel").ValidModalName;
                modalKey?: import("lkt-vue-kernel").ValidModalKey;
                action: import("lkt-vue-kernel").ModalCallbackAction;
                method?: string | undefined;
                args?: import("lkt-vue-kernel").LktObject | undefined;
            }[] | undefined;
            tooltip?: {
                modelValue?: boolean | undefined;
                alwaysOpen?: boolean | undefined;
                class?: string | undefined;
                contentClass?: string | undefined;
                text?: string | undefined;
                icon?: string | undefined;
                iconAtEnd?: boolean | undefined;
                engine?: import("lkt-vue-kernel").TooltipPositionEngine | undefined;
                referrerMargin?: number | string | undefined;
                windowMargin?: number | string | undefined;
                referrerWidth?: boolean | undefined;
                referrer?: HTMLElement | undefined;
                locationY?: import("lkt-vue-kernel").TooltipLocationY | undefined;
                locationX?: import("lkt-vue-kernel").TooltipLocationX | undefined;
                showOnReferrerHover?: boolean | undefined;
                showOnReferrerHoverDelay?: number | undefined;
                hideOnReferrerLeave?: boolean | undefined;
                hideOnReferrerLeaveDelay?: number | undefined;
                compensationX?: number | undefined;
                compensationY?: number | undefined;
                compensateGlobalContainers?: boolean | undefined;
                remoteControl?: boolean | undefined;
            } | undefined;
            splitIcon?: string | undefined;
            showTooltipOnHover?: boolean | undefined;
            showTooltipOnHoverDelay?: number | undefined;
            hideTooltipOnLeave?: boolean | undefined;
            splitClass?: string | undefined;
            splitButtons?: /*elided*/ any[] | undefined;
            tabindex?: import("lkt-vue-kernel").ValidTabIndex;
            prop?: import("lkt-vue-kernel").LktObject | undefined;
            clickRef?: (Element | import("vue").VueElement) | undefined;
            events?: {
                click?: ((data: ClickEventArgs) => void | undefined) | undefined;
                httpStart?: Function | undefined;
                httpEnd?: ((data: ClickEventArgs) => void | undefined) | undefined;
            } | undefined;
        } | undefined;
        prevHidden?: boolean | ((currentStep: StepProcessStepConfig, steps: StepProcessStepConfig[]) => boolean) | undefined;
    }[];
}, __VLS_25: {
    currentStep: any;
    currentStepIndex: any;
    amountOfSteps: number;
};
type __VLS_Slots = {} & {
    [K in NonNullable<typeof __VLS_13>]?: (props: typeof __VLS_14) => any;
} & {
    'nav-info'?: (props: typeof __VLS_10) => any;
} & {
    'nav-info'?: (props: typeof __VLS_25) => any;
};
declare const __VLS_component: import("vue").DefineComponent<StepProcessConfig, {
    goNext: () => void;
    goPrev: () => void;
    startLoader: () => boolean;
    stopLoader: () => boolean;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    finish: (...args: any[]) => void;
    next: (...args: any[]) => void;
    prev: (...args: any[]) => void;
    "update:modelValue": (...args: any[]) => void;
    "update:loading": (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<StepProcessConfig> & Readonly<{
    onFinish?: ((...args: any[]) => any) | undefined;
    onNext?: ((...args: any[]) => any) | undefined;
    onPrev?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    "onUpdate:loading"?: ((...args: any[]) => any) | undefined;
}>, {
    loading: boolean;
    header: import("lkt-vue-kernel").HeaderConfig;
    modelValue: string | number;
    buttonNavPosition: ItemCrudButtonNavPosition;
    buttonNavVisibility: ItemCrudButtonNavVisibility;
    steps: Array<StepProcessStepConfig>;
    nextButton: ButtonConfig;
    prevButton: ButtonConfig;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
