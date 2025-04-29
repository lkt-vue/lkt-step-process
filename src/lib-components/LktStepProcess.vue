<script setup lang="ts">
    import { computed, onMounted, ref, useSlots, watch } from 'vue';
    import {
        ButtonConfig,
        getDefaultValues,
        StepProcess,
        StepProcessConfig,
        StepProcessStepConfig,
    } from 'lkt-vue-kernel';

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
        nextDisabled = computed(() => {
            return currentStepIndex.value === (stepsHaystack.value.length - 1);
        }),
        computedPrevButton = computed(() => {
            let r: ButtonConfig = {...props.prevButton};
            if (currentStepConfig.value?.prevButton) {
                r = { ...r, ...currentStepConfig.value?.prevButton };
            }
            if (typeof r.disabled === 'undefined') {
                r.disabled = prevDisabled.value;
            }
            return r;
        }),
        computedNextButton = computed(() => {
            let r: ButtonConfig = {...props.nextButton};
            if (currentStepConfig.value?.nextButton) {
                r = { ...r, ...currentStepConfig.value?.nextButton };
            }
            if (typeof r.disabled === 'undefined') {
                r.disabled = nextDisabled.value;
            }
            return r;
        }),
        prevHidden = computed(() => {
            if (typeof currentStepConfig.value?.prevHidden === 'function') {
                return currentStepConfig.value.prevHidden(stepsHaystack.value);
            }
            if (typeof currentStepConfig.value?.prevHidden === 'boolean') {
                return currentStepConfig.value.prevHidden;
            }
            return currentStepIndex.value === 0;
        }),
        nextHidden = computed(() => {
            if (typeof currentStepConfig.value?.nextHidden === 'function') {
                return currentStepConfig.value.nextHidden(stepsHaystack.value);
            }
            if (typeof currentStepConfig.value?.nextHidden === 'boolean') {
                return currentStepConfig.value.nextHidden;
            }
            return currentStepIndex.value === (stepsHaystack.value.length - 1);
        }),
        classes = computed(() => {
            const r = [];
            if (currentStep.value) r.push(`step-${currentStep.value}`);
            return r.join(' ');
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
</script>

<template>
    <article class="lkt-step-process" :class="classes">
        <lkt-header v-if="header && Object.keys(header).length > 0" v-bind="header" />

        <div class="lkt-step-process-buttons">
            <lkt-button
                ref="prevButtonRef"
                v-show="!isLoading && !prevHidden"
                v-bind="computedPrevButton"
                v-on:click="onPrev"
            />
            <lkt-button
                ref="nextButtonRef"
                v-show="!isLoading && !nextHidden"
                v-bind="computedNextButton"
                v-on:click="onNext"
            />
        </div>

        <div class="lkt-step-process_content" v-if="!isLoading">
            <div class="lkt-grid-1">
                <div v-for="step in slotsSteps" v-show="step === currentStep">
                    <slot :name="'step-'+step" v-bind:config="stepsHaystack" />
                </div>
            </div>
        </div>
        <lkt-loader v-if="isLoading" />
    </article>
</template>