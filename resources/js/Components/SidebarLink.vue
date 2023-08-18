<script setup>
import { computed } from "vue";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { Link, usePage } from "@inertiajs/vue3";

import Icon from "@/Components/Icon.vue";

const props = defineProps({
    item: Object,
});

const classes = computed(() =>
    usePage().props.currentRouteName == props.item?.href
        ? "bg-slate-900 text-slate-300 "
        : "hover:bg-slate-900 hover:text-slate-300 "
);
</script>

<template>
    <Link
        v-if="!props.item.children.length"
        :href="route(props.item.href)"
        :class="[
            'flex items-center pointer border-r-4 px-5 py-2 text-capitalize text-gray-600 ',
            classes,
        ]"
    >
        <Icon
            :icon="props.item?.icon"
            v-if="props.item?.icon"
            :class="['h-6 w-6 shrink-0 mr-1 flex items-center']"
        ></Icon>
        <span>{{ props.item.label }}</span>
    </Link>

    <div v-else>
        <Disclosure as="div">
            <DisclosureButton
                :class="[
                    'flex items-center pointer border-r-4 px-5 py-2 text-capitalize text-gray-600 w-full text-left',
                ]"
            >
                <Icon
                    :icon="props.item?.icon"
                    v-if="props.item?.icon"
                    :class="['h-6 w-6 shrink-0 mr-2']"
                ></Icon>
                <span class="flex-1">{{ item.label }}</span>
            </DisclosureButton>
            <DisclosurePanel class="pl-3">
                <SidebarLink v-for="item in props.item.children" :item="item" />
            </DisclosurePanel>
        </Disclosure>
    </div>
</template>
