<script setup lang="ts">
    import { computed, onMounted, ref, useSlots, watch } from 'vue';
    import {
        ButtonConfig,
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
        prevButtonRef = ref(null),
        nextButtonRef = ref(null);

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

            let r: ButtonConfig = { ...props.prevButton };
            if (typeof currentStepConfig.value?.prevButton === 'object') {
                r = { ...r, ...currentStepConfig.value?.prevButton };
            }
            if (typeof r.disabled === 'undefined') {
                r.disabled = prevDisabled.value;
            }
            return r;
        }),
        computedNextButton = computed(() => {
            if (currentStepConfig.value?.nextButton === false) {
                return false;
            }

            if (props.nextButton === false && !currentStepConfig.value?.nextButton) {
                return false;
            }

            let r: ButtonConfig = { ...props.nextButton };
            if (typeof currentStepConfig.value?.nextButton === 'object') {
                r = { ...r, ...currentStepConfig.value?.nextButton };
            }
            return r;
        }),
        prevHidden = computed(() => {
            if (typeof currentStepConfig.value === 'object'){
                if (typeof currentStepConfig.value?.prevHidden === 'function') {
                    return currentStepConfig.value.prevHidden(currentStepConfig.value, stepsHaystack.value);
                }
                if (typeof currentStepConfig.value?.prevHidden === 'boolean') {
                    return currentStepConfig.value.prevHidden;
                }
            }
            return currentStepIndex.value === 0;
        }),
        nextHidden = computed(() => {
            if (typeof currentStepConfig.value === 'object') {
                if (typeof currentStepConfig.value?.nextHidden === 'function') {
                    return currentStepConfig.value.nextHidden(currentStepConfig.value, stepsHaystack.value);
                }
                if (typeof currentStepConfig.value?.nextHidden === 'boolean') {
                    return currentStepConfig.value.nextHidden;
                }
                return currentStepConfig.value?.nextButton === false;
            }
            return true;
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
        computedButtonNavProps = computed(() => {
            return <ButtonNavProps>{
                isLoading: isLoading.value,
                prevHidden: prevHidden.value,
                nextHidden: nextHidden.value,
                prevButton: computedPrevButton.value,
                nextButton: computedNextButton.value,
            };
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
            nextButtonRef.value.click();
        },
        goPrev: () => {
            // @ts-ignore
            prevButtonRef.value.click();
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
            v-if="computedRenderTopButtonNav"
            v-bind="computedButtonNavProps"
            @prev="onPrev"
            @next="onNext"
        >
            <template #between-buttons-ever="{}" v-if="slots['between-buttons-ever']">
                <slot name="between-buttons-ever"/>
            </template>
        </button-nav>

        <div class="lkt-step-process_content" v-if="!isLoading">
            <div class="lkt-grid-1">
                <div v-for="step in slotsSteps" v-show="step === currentStep">
                    <slot :name="'step-'+step" v-bind:config="stepsHaystack" />
                </div>
            </div>
        </div>
        <lkt-loader v-if="isLoading" />

        <button-nav
            v-if="computedRenderBottomButtonNav"
            v-bind="computedButtonNavProps"
            @prev="onPrev"
            @next="onNext"
        >
            <template #between-buttons-ever="{}" v-if="slots['between-buttons-ever']">
                <slot name="between-buttons-ever"/>
            </template>
        </button-nav>
    </article>
</template>