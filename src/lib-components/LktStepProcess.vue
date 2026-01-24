<script setup lang="ts">
    import { computed, onMounted, ref, useSlots, watch } from 'vue';
    import {
        ButtonConfig,
        ClickEventArgs,
        getDefaultValues,
        ItemCrudButtonNavPosition,
        ItemCrudButtonNavVisibility,
        StepProcess,
        StepProcessConfig,
        StepProcessStepConfig,
        StepRenderType,
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
        firstRenderReached = ref(<{[key:string]:boolean}>{}),
        navRef = ref(null);

    watch(() => props.loading, (value) => isLoading.value = value);
    watch(() => props.modelValue, (value) => currentStep.value = value);
    watch(isLoading, (value) => emit('update:loading', value));
    watch(currentStep, (value) => {
        firstRenderReached.value[value] = true;
        emit('update:modelValue', value);
    });

    const slotsSteps = computed(() => {
        let r = [];
        for (let k in slots) if (k.indexOf('step-') !== -1) r.push(k.substring(5));
        return r;
    });

    const currentStepIndex = computed(() => {
            return stepsHaystack.value.findIndex((step: StepProcessStepConfig) => step.key === currentStep.value);
        }),
        visibleStepIndex = computed(() => {
            let baseIndex = stepsHaystack.value.findIndex((step: StepProcessStepConfig) => step.key === currentStep.value);
            let r = baseIndex;
            for (let i = 0; i < baseIndex; ++i) {
                let excluded = false,
                    excludedValue = stepsHaystack.value[i].excludedFromTotalCount;

                if (typeof excludedValue === 'function') excluded = excludedValue() === true;
                else if (typeof excludedValue === 'boolean') excluded = excludedValue === true;

                if (excluded) --r;
            }
            return r + 1;
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
            let r = 0;
            stepsHaystack.value.forEach(step => {
                let excluded = false;
                if (typeof step.excludedFromTotalCount === 'function') excluded = step.excludedFromTotalCount() === true;
                else if (typeof step.excludedFromTotalCount === 'boolean') excluded = step.excludedFromTotalCount === true;

                if (!excluded) ++r;
            })
            return r;
        }),
        computedButtonNavProps = computed(() => {
            return <ButtonNavProps>{
                isLoading: isLoading.value,
                prevButton: computedPrevButton.value,
                nextButton: computedNextButton.value,
                currentStep: currentStep.value,
                currentStepConfig: currentStepConfig.value,
                currentStepIndex: currentStepIndex.value,
                visibleStepIndex: visibleStepIndex.value,
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
            let fromStep = currentStep.value;

            let nextKey = stepsHaystack.value[currentStepIndex.value]?.nextKey;
            let nextIndex = currentStepIndex.value + 1;

            if (typeof nextKey === 'function') nextKey = nextKey();
            if (typeof nextKey === 'string') {
                let needle = stepsHaystack.value.findIndex((z) => {
                    return z.key === nextKey;
                })

                if (needle > -1) nextIndex = needle;
            }

            let toStep = stepsHaystack.value[nextIndex].key;

            if (typeof currentStepConfig.value?.events?.leave === 'function') {
                currentStepConfig.value?.events?.leave({to: toStep})
            }

            currentStep.value = toStep;
            if (typeof currentStepConfig.value?.events?.enter === 'function') {
                currentStepConfig.value?.events?.enter({from: fromStep})
            }
            if (currentStepIndex.value === (stepsHaystack.value.length - 1)) {
                emit('finish', data);

            } else {
                emit('next', data);
            }
        },
        onPrev = (data: any) => {
            let fromStep = currentStep.value;

            let prevKey = stepsHaystack.value[currentStepIndex.value]?.prevKey;
            let nextIndex = currentStepIndex.value - 1;

            if (typeof prevKey === 'function') prevKey = prevKey();
            if (typeof prevKey === 'string') {
                let needle = stepsHaystack.value.findIndex((z) => {
                    return z.key === prevKey;
                })

                if (needle > -1) nextIndex = needle;
            }

            let toStep = stepsHaystack.value[nextIndex].key;

            if (typeof currentStepConfig.value?.events?.leave === 'function') {
                currentStepConfig.value?.events?.leave({to: toStep})
            }

            currentStep.value = toStep;
            if (typeof currentStepConfig.value?.events?.enter === 'function') {
                currentStepConfig.value?.events?.enter({from: fromStep})
            }
            emit('prev', data);
        },
        canRenderStep = (stepKey:string) => {
            const stepIndex = stepsHaystack.value.findIndex((step: StepProcessStepConfig) => step.key === stepKey);

            if (stepIndex > -1 && stepsHaystack.value[stepIndex]?.renderType) {
                switch (stepsHaystack.value[stepIndex]?.renderType) {
                    case StepRenderType.AlwaysRendersAlwaysVisible:
                    case StepRenderType.AlwaysRendersVisibleAfterFirstActive:
                    case StepRenderType.AlwaysRendersVisibleIfActive:
                        return true;

                    case StepRenderType.RendersAndVisibleIfActive:
                        return stepKey === currentStep.value;

                    case StepRenderType.RendersAfterFirstActiveVisibleIfActive:
                        return firstRenderReached.value[stepKey] === true;
                }
            }
            return stepKey === currentStep.value;
        },
        canShowStep = (stepKey:string) => {

            const stepIndex = stepsHaystack.value.findIndex((step: StepProcessStepConfig) => step.key === stepKey);

            if (stepIndex > -1 && stepsHaystack.value[stepIndex]?.renderType) {
                switch (stepsHaystack.value[stepIndex]?.renderType) {
                    case StepRenderType.AlwaysRendersAlwaysVisible:
                        return true;

                    case StepRenderType.AlwaysRendersVisibleAfterFirstActive:
                        return firstRenderReached.value[stepKey] === true;

                    case StepRenderType.AlwaysRendersVisibleIfActive:
                    case StepRenderType.RendersAndVisibleIfActive:
                    case StepRenderType.RendersAfterFirstActiveVisibleIfActive:
                        return stepKey === currentStep.value;
                }
            }

            return true;
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
            <template #nav-info="{currentStep, currentStepIndex, amountOfSteps, visibleStep}" v-if="slots['nav-info']">
                <slot
                    name="nav-info"
                      v-bind="{
                        visibleStep,
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
                    <div v-if="canRenderStep(step)" v-show="canShowStep(step)">
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
            <template #nav-info="{currentStep, currentStepIndex, amountOfSteps, visibleStep}" v-if="slots['nav-info']">
                <slot
                    name="nav-info"
                    v-bind="{
                        visibleStep,
                        currentStep,
                        currentStepIndex,
                        amountOfSteps: computedAmountOfSteps,
                    }"
                />
            </template>
        </button-nav>
    </article>
</template>