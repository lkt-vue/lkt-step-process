<script lang="ts">
export default {name: "LktStepProcess", inheritAttrs: false}
</script>

<script setup lang="ts">
import {ref, useSlots, computed} from "vue";
import {StepProcess} from "../types/StepProcess";
import {Step} from "../types/Step";

const props = defineProps({
    modelValue: {type: Object, required: false, default: (): StepProcess => ({step: 1, steps: [], data: {}})},

    title: {type: String, default: ''},
    nextText: {type: String, default: 'Next'},
    prevText: {type: String, default: 'Back'},

    nextValidator: {type: Function, required: false, default: () => true},
    prevValidator: {type: Function, required: false, default: () => true},
});

const slots = useSlots();

const emit = defineEmits(['next', 'prev', 'finish']);

const isLoading = ref(false),
    config = ref(props.modelValue),
    prevButton = ref(null),
    nextButton = ref(null);

const displayHeader = computed(() => {
    if (isLoading.value) return false;

    return props.title || !!slots['post-title'];
});

const slotsSteps = computed(() => {
    let r = [];
    for (let k in slots) if (k.indexOf('step-') !== -1) r.push(k.substring(5));
    return r;
})

const currentStep = computed(() => {
        if (!config.value.step) {
            if (!config.value.steps) {
                return null;
            }
            if (!config.value.steps[0]) return null;
            return config.value.steps[0].name;
        }
        return config.value.step;
    }),
    currentStepIndex = computed(() => {
        return config.value.steps.findIndex((step: Step) => step.name === currentStep.value);
    }),
    currentStepConfig = computed(() => {
        return config.value.steps[currentStepIndex.value];
    }),
    prevValid = computed(() => {
        if (typeof currentStepConfig.value.prevValidator === 'function') {
            return currentStepConfig.value.prevValidator(config.value);
        }
        if (typeof currentStepConfig.value.prevValidator === 'boolean') {
            return currentStepConfig.value.prevValidator;
        }
        if (typeof props.prevValidator === 'function') {
            return props.prevValidator(config.value);
        }
        return true;
    }),
    nextValid = computed(() => {
        if (typeof currentStepConfig.value.nextValidator === 'function') {
            return currentStepConfig.value.nextValidator(config.value);
        }
        if (typeof currentStepConfig.value.nextValidator === 'boolean') {
            return currentStepConfig.value.nextValidator;
        }
        if (typeof props.nextValidator === 'function') {
            return props.nextValidator(config.value);
        }
        return true;
    }),
    prevDisabled = computed(() => {
        return currentStepIndex.value === 0 || !prevValid.value;
    }),
    nextDisabled = computed(() => {
        return currentStepIndex.value === (config.value.steps.length - 1) || !nextValid.value;
    }),
    prevHidden = computed(() => {
        if (typeof currentStepConfig.value.prevHidden === 'function') {
            return currentStepConfig.value.prevHidden(config.value);
        }
        if (typeof currentStepConfig.value.prevHidden === 'boolean') {
            return currentStepConfig.value.prevHidden;
        }
        return currentStepIndex.value === 0;
    }),
    nextHidden = computed(() => {
        if (typeof currentStepConfig.value.nextHidden === 'function') {
            return currentStepConfig.value.nextHidden(config.value);
        }
        if (typeof currentStepConfig.value.nextHidden === 'boolean') {
            return currentStepConfig.value.nextHidden;
        }
        return currentStepIndex.value === (config.value.steps.length - 1);
    }),
    prevConfirm = computed(() => {
        if (typeof currentStepConfig.value.prevConfirm === 'string') {
            return currentStepConfig.value.prevConfirm;
        }
        return '';
    }),
    nextConfirm = computed(() => {
        if (typeof currentStepConfig.value.nextConfirm === 'string') {
            return currentStepConfig.value.nextConfirm;
        }
        return '';
    }),
    nextResource = computed(() => {
        if (typeof currentStepConfig.value.nextResource === 'string') {
            return currentStepConfig.value.nextResource;
        }
        return '';
    }),
    nextResourceData = computed(() => {
        if (typeof currentStepConfig.value.nextResourceData === 'object') {
            return currentStepConfig.value.nextResourceData;
        }
        return {};
    }),
    classes = computed(() => {

        const r = ['lkt-step-process'];

        if (currentStep.value) r.push(`step-${currentStep.value}`);
        return r.join(' ');
    });

const onNext = (data: any) => {
        config.value.step = config.value.steps[currentStepIndex.value + 1].name;
        if (currentStepIndex.value === (config.value.steps.length - 1)) {
            emit('finish', data);

        } else {
            emit('next', data);
        }
    },
    onPrev = (data: any) => {
        config.value.step = config.value.steps[currentStepIndex.value - 1].name;
        emit('prev', data);
    };


defineExpose({
    goNext: () => {
        // @ts-ignore
        nextButton.value.click()
    },
    goPrev: () => {
        // @ts-ignore
        prevButton.value.click()
    },
    startLoader: () => isLoading.value = true,
    stopLoader: () => isLoading.value = false,
});
</script>

<template>
    <article :class="classes">
        <header class="lkt-step-process_header" v-if="displayHeader">
            <h1 class="lkt-step-process_header-title">{{ title }}</h1>
            <div class="lkt-step-process_header-slot">
                <slot name="post-title" v-bind:config="config" v-bind:loading="isLoading"></slot>
            </div>
        </header>
        <div class="lkt-step-process-buttons">
            <lkt-button
                :ref="(el:any) => prevButton = el"
                v-show="!isLoading && !prevHidden"
                palette="danger"
                v-bind:disabled="prevDisabled"
                v-bind:confirm-modal="prevConfirm"
                v-on:click="onPrev">
                <slot v-if="!!slots['button-prev']" name="button-prev" v-bind:config="config"></slot>
                <span v-else>Back</span>
            </lkt-button>

            <lkt-button
                :ref="(el:any) => nextButton = el"
                v-show="!isLoading && !nextHidden"
                palette="success"
                v-bind:disabled="nextDisabled"
                v-bind:confirm-modal="nextConfirm"
                v-bind:resource="nextResource"
                v-bind:resource-data="nextResourceData"
                v-on:click="onNext">
                <slot v-if="!!slots['button-next']" name="button-next" v-bind:config="config"></slot>
                <span v-else>Next</span>
            </lkt-button>
        </div>

        <div class="lkt-step-process_content" v-if="!isLoading">
            <div class="lkt-grid-1">
                <div v-for="step in slotsSteps" v-show="step === currentStep">
                    <slot :name="'step-'+step" v-bind:config="config"></slot>
                </div>
            </div>
        </div>
        <lkt-loader v-if="isLoading"></lkt-loader>
    </article>
</template>