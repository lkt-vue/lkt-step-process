<script setup lang="ts">

    import { ButtonNavProps } from '../config/ButtonNavProps';
    import { ref, SetupContext, useSlots } from 'vue';
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
</script>

<template>
    <div class="lkt-step-process--nav">
        <lkt-button
            ref="prevButtonRef"
            v-if="prevButton"
            v-show="!isLoading"
            v-bind="prevButton"
            class="is-prev-button"
        />

        <div class="lkt-step-process--nav-info" v-if="slots['nav-info'] || dots && amountOfSteps > 0">
            <template v-if="slots['nav-info']">
                <slot
                    name="nav-info"
                    v-bind="{
                        currentStep,
                        currentStepIndex,
                        amountOfSteps,
                    }"
                />
            </template>

            <div class="lkt-step-process--dots" v-if="dots && amountOfSteps > 0">
                <lkt-dot
                    v-for="n in amountOfSteps"
                    v-bind="<DotConfig>{
                        text: dotsNumbers ? n : '',
                        class: n === (currentStepIndex + 1) ? 'is-active' : '',
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