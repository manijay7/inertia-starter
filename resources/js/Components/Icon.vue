<script setup>
import { Icon } from "@iconify/vue";

const props = defineProps({
    icon: { type: String, default: "heroicons-outline:home" },
});
</script>

<template>
    <span>
        <Icon :icon="icon" class="inline-block" />
    </span>
</template>
