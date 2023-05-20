<script setup>
import { computed } from "vue";
import { Link } from "@inertiajs/vue3";

const props = defineProps({
    href: String,
    active: Boolean,
});

const classes = computed(() =>
    props.active
        ? "flex items-center w-full px-5 py-2 transition-colors duration-200 dark:hover:bg-gray-800 gap-x-2 hover:bg-gray-100 focus:outline-none relative px-4 py-3 flex items-center space-x-4 rounded-xs text-white bg-gradient-to-r from-sky-600 to-cyan-400"
        : "px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group"
);
</script>

<template>
    <Link :href="href" :class="classes">
    <slot />
    </Link>
</template>
