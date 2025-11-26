<script setup lang="ts">
    import { computed, onMounted, ref, useSlots, watch } from 'vue';
    import {
        ButtonConfig, ClickEventArgs,
        getDefaultValues,
        ItemCrudButtonNavPosition,
        ItemCrudButtonNavVisibility,
        StepProcess,
        StepProcessConfig,
        StepProcessStepConfig,
    } from 'lkt-vue-kernel';
    import ButtonNav from '@/components/ButtonNav.vue';
    import { ButtonNavProps } from '@/config/ButtonNavProps';

    const props = withDefaults(defineProps<StepProcessConfig>(), getDefaultValues(StepProcess));

    const slots = useSlots();

    const emit = defineEmits([
        'next',
        'prev',
        'finish',
        'update:modelValue',
        'update:loading',
    ]);

    const isLoading = ref(props.loading),
        currentStep = ref(props.modelValue),
        stepsHaystack = ref(props.steps),
        navRef = ref(null);

    watch(() => props.loading, (value) => isLoading.value = value);
    watch(() => props.modelValue, (value) => currentStep.value = value);
    watch(isLoading, (value) => emit('update:loading', value));
    watch(currentStep, (value) => emit('update:modelValue', value));

    const slotsSteps = computed(() => {
        let r = [];
        for (let k in slots) if (k.indexOf('step-') !== -1) r.push(k.substring(5));
        return r;
    });

    const currentStepIndex = computed(() => {
            return stepsHaystack.value.findIndex((step: StepProcessStepConfig) => step.key === currentStep.value);
        }),
        currentStepConfig = computed(() => {
            return stepsHaystack.value[currentStepIndex.value];
        }),
        prevDisabled = computed(() => {
            return currentStepIndex.value === 0;
        }),
        computedPrevButton = computed(() => {
            if (currentStepConfig.value?.prevButton === false) {
                return false;
            }

            if (props.prevButton === false && !currentStepConfig.value?.prevButton) {
                return false;
            }

            if (typeof currentStepConfig.value === 'object'){
                if (typeof currentStepConfig.value?.prevHidden === 'function' && currentStepConfig.value.prevHidden(currentStepConfig.value, stepsHaystack.value)) return false;
                if (typeof currentStepConfig.value?.prevHidden === 'boolean' && currentStepConfig.value?.prevHidden === true) return false;
            }

            let r: ButtonConfig = { ...props.prevButton };
            if (typeof currentStepConfig.value?.prevButton === 'object') {
                r = { ...r, ...currentStepConfig.value?.prevButton };
            }
            if (typeof r.disabled === 'undefined') {
                r.disabled = prevDisabled.value;
            }

            const clientClickEvent = r.events?.click;

            return {
                ...r,
                events: {
                    ...r.events,
                    click: (data: ClickEventArgs) => {

                        if (typeof clientClickEvent === 'function') clientClickEvent(data);

                        if (data.httpResponse?.success === false) {
                            return;
                        }
                        onPrev(data);
                    }
                }
            };
        }),
        computedNextButton = computed(() => {
            if (currentStepConfig.value?.nextButton === false) {
                return false;
            }

            if (props.nextButton === false && !currentStepConfig.value?.nextButton) {
                return false;
            }

            if (typeof currentStepConfig.value === 'object'){
                if (typeof currentStepConfig.value?.nextHidden === 'function' && currentStepConfig.value.nextHidden(currentStepConfig.value, stepsHaystack.value)) return false;
                if (typeof currentStepConfig.value?.nextHidden === 'boolean' && currentStepConfig.value?.nextHidden === true) return false;
            }

            let r: ButtonConfig = { ...props.nextButton };
            if (typeof currentStepConfig.value?.nextButton === 'object') {
                r = { ...r, ...currentStepConfig.value?.nextButton };
            }

            const clientClickEvent = r.events?.click;

            return {
                ...r,
                events: {
                    ...r.events,
                    click: (data: ClickEventArgs) => {

                        if (typeof clientClickEvent === 'function') clientClickEvent(data);

                        if (data.httpResponse?.success === false) {
                            return;
                        }
                        onNext(data);
                    }
                }
            };
        }),
        classes = computed(() => {
            const r = [];
            if (currentStep.value) r.push(`step-${currentStep.value}`);
            return r.join(' ');
        }),
        computedRenderTopButtonNav = computed(() => {
            if (props.buttonNavVisibility === ItemCrudButtonNavVisibility.Never) return false;
            return !props.buttonNavPosition || props.buttonNavPosition === ItemCrudButtonNavPosition.Top;
        }),
        computedRenderBottomButtonNav = computed(() => {
            if (props.buttonNavVisibility === ItemCrudButtonNavVisibility.Never) return false;
            return props.buttonNavPosition === ItemCrudButtonNavPosition.Bottom;
        }),
        computedAmountOfSteps = computed(() => {
            return stepsHaystack.value.length;
        }),
        computedButtonNavProps = computed(() => {
            return <ButtonNavProps>{
                isLoading: isLoading.value,
                prevButton: computedPrevButton.value,
                nextButton: computedNextButton.value,
                currentStep: currentStep.value,
                currentStepIndex: currentStepIndex.value,
                amountOfSteps: computedAmountOfSteps.value,
                dots: props.dots,
                dotsNumbers: props.dotsNumbers,
            };
        }),
        computedHasButtonNavContent =  computed(() => {
            return typeof computedPrevButton.value === 'object'
                || typeof computedNextButton.value === 'object'
                || props.dots
                || typeof slots['nav-info'] !== 'undefined';
        });

    const onNext = (data: any) => {
            currentStep.value = stepsHaystack.value[currentStepIndex.value + 1].key;
            if (currentStepIndex.value === (stepsHaystack.value.length - 1)) {
                emit('finish', data);

            } else {
                emit('next', data);
            }
        },
        onPrev = (data: any) => {
            currentStep.value = stepsHaystack.value[currentStepIndex.value - 1].key;
            emit('prev', data);
        };


    defineExpose({
        goNext: () => {
            // @ts-ignore
            navRef.value.goNext();
        },
        goPrev: () => {
            // @ts-ignore
            navRef.value.goPrev();
        },
        startLoader: () => isLoading.value = true,
        stopLoader: () => isLoading.value = false,
    });

    onMounted(() => {
        if (!currentStep.value && stepsHaystack.value.length > 0) currentStep.value = stepsHaystack.value[0].key
    })
</script>

<template>
    <article class="lkt-step-process" :class="classes">
        <lkt-header v-if="header && Object.keys(header).length > 0" v-bind="header" />

        <button-nav
            v-if="computedRenderTopButtonNav && computedHasButtonNavContent"
            ref="navRef"
            v-bind="computedButtonNavProps"
        >
            <template #nav-info="{currentStep, currentStepIndex, amountOfSteps}" v-if="slots['nav-info']">
                <slot
                    name="nav-info"
                      v-bind="{
                        currentStep,
                        currentStepIndex,
                        amountOfSteps: computedAmountOfSteps,
                    }"
                />
            </template>
        </button-nav>

        <div class="lkt-step-process--content" v-if="!isLoading">
            <div class="lkt-grid-1">
                <template v-for="step in slotsSteps">
                    <div v-if="step === currentStep">
                        <slot :name="'step-'+step" v-bind:config="stepsHaystack" />
                    </div>
                </template>
            </div>
        </div>
        <lkt-loader v-if="isLoading" />

        <button-nav
            v-if="computedRenderBottomButtonNav && computedHasButtonNavContent"
            ref="navRef"
            v-bind="computedButtonNavProps"
        >
            <template #nav-info="{currentStep, currentStepIndex, amountOfSteps}" v-if="slots['nav-info']">
                <slot
                    name="nav-info"
                    v-bind="{
                        currentStep,
                        currentStepIndex,
                        amountOfSteps: computedAmountOfSteps,
                    }"
                />
            </template>
        </button-nav>
    </article>
</template>