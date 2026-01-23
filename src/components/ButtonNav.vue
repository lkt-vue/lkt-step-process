<script setup lang="ts">

    import { ButtonNavProps } from '../config/ButtonNavProps';
    import { computed, ref, SetupContext, useSlots } from 'vue';
    import { DotConfig } from 'lkt-vue-kernel';

    const props = withDefaults(defineProps<ButtonNavProps>(), {});

    const emit = defineEmits(['prev', 'next']);
    const slots: SetupContext['slots'] = useSlots();

    const prevButtonRef = ref(null),
        nextButtonRef = ref(null);

    defineExpose({
        goNext: () => {
            // @ts-ignore
            nextButtonRef.value.click();
        },
        goPrev: () => {
            // @ts-ignore
            prevButtonRef.value.click();
        }
    });

    const stepHasDotsInfo = computed(() => {
        if (typeof props.currentStepConfig?.excludedFromTotalCount === 'function') return !props.currentStepConfig.excludedFromTotalCount();
        if (typeof props.currentStepConfig?.excludedFromTotalCount === 'boolean') return !props.currentStepConfig.excludedFromTotalCount;
        return true;
    })
</script>

<template>
    <div class="lkt-step-process--nav" v-if="prevButton || nextButton || (stepHasDotsInfo && (slots['nav-info'] || dots && amountOfSteps > 0))">
        <lkt-button
            ref="prevButtonRef"
            v-if="prevButton"
            v-show="!isLoading"
            v-bind="prevButton"
            class="is-prev-button"
        />

        <div class="lkt-step-process--nav-info" v-if="stepHasDotsInfo && (slots['nav-info'] || dots && amountOfSteps > 0)">
            <template v-if="slots['nav-info']">
                <slot
                    name="nav-info"
                    v-bind="{
                        visibleStep: visibleStepIndex,
                        currentStep,
                        currentStepIndex,
                        amountOfSteps,
                    }"
                />
            </template>

            <div class="lkt-step-process--dots" v-if="dots && amountOfSteps > 0 && stepHasDotsInfo">
                <lkt-dot
                    v-for="n in amountOfSteps"
                    v-bind="<DotConfig>{
                        text: dotsNumbers ? n : '',
                        class: n === visibleStepIndex ? 'is-active' : '',
                    }"
                />
            </div>
        </div>


        <lkt-button
            ref="nextButtonRef"
            v-if="nextButton"
            v-show="!isLoading"
            v-bind="nextButton"
            class="is-next-button"
        />
    </div>
</template>