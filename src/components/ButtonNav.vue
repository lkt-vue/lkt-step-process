<script setup lang="ts">

    import { ButtonNavProps } from '../config/ButtonNavProps';

    const props = withDefaults(defineProps<ButtonNavProps>(), {

    });

    const emit = defineEmits(['prev', 'next']);
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
        <lkt-button
            ref="nextButtonRef"
            v-if="nextButton"
            v-show="!isLoading && !nextHidden"
            v-bind="nextButton"
            @click="emit('next')"
        />
    </div>
</template>