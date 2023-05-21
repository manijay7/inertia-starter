<script setup>
import { computed } from "vue";
import { Link } from "@inertiajs/vue3";

const props = defineProps({
    href: String,
    active: Boolean,
});

const classes = computed(() =>
    props.active
        ? "flex items-center space-x-4 p-2 text-base transition duration-75 rounded-lg bg-gray-100 group text-gray-900 dark:text-gray-200 dark:bg-gray-700"
        : "flex items-center space-x-4 p-2 text-base transition duration-75 rounded-lg hover:bg-gray-100 group text-gray-700 dark:text-gray-200 dark:hover:bg-gray-700"
);
</script>

<template>
    <Link :href="href" :class="classes">
        <slot />
    </Link>
</template>
