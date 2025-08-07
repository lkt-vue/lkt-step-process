<script setup lang="ts">

    import { ButtonNavProps } from '../config/ButtonNavProps';
    import { SetupContext, useSlots } from 'vue';

    const props = withDefaults(defineProps<ButtonNavProps>(), {

    });

    const emit = defineEmits(['prev', 'next']);
    const slots: SetupContext['slots'] = useSlots();
</script>

<template>
    <div class="lkt-step-process-buttons">
        <lkt-button
            ref="prevButtonRef"
            v-if="prevButton"
            v-show="!isLoading && !prevHidden"
            v-bind="prevButton"
            @click="emit('prev')"
        />

        <template v-if="slots['between-buttons-ever']" v-show="!isLoading">
            <slot name="between-buttons-ever"/>
        </template>


        <lkt-button
            ref="nextButtonRef"
            v-if="nextButton"
            v-show="!isLoading && !nextHidden"
            v-bind="nextButton"
            @click="emit('next')"
        />
    </div>
</template>