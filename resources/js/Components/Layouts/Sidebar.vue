<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import { ChevronDownIcon } from "@heroicons/vue/20/solid";

import SidebarLink from "@/Components/SidebarLink.vue";
import Icon from "@/Components/Icon.vue";

const logout = () => {
    router.post(route("logout"));
};

const props = defineProps({
    isSidebarOpen: {
        type: Boolean,
    },
});

const navItems = [
    {
        href: "dashboard",
        label: "home",
        icon: "heroicons-outline:home",
        children: [],
    },
    {
        label: "settings",
        icon: "heroicons-outline:mail",
        children: [
            {
                href: "login",
                label: "Login",
                children: [],
                icon: "heroicons-outline:home",
            },
        ],
    },
];

const emit = defineEmits(["toggle-sidebar"]);
</script>

<template>
    <aside
        class="bg-white dark:bg-slate-800 text-gray-300 flex-col flex-1 flex-shrink-0 lg:flex transition-all duration-200 ease-in-out z-20 h-screen sticky top-0"
        style="width: 248px; min-width: 248px"
        :class="{
            '  hidden': !props.isSidebarOpen,
        }"
    >
        <div class="flex items-baseline justify-between">
            <div
                class="px-6 pt-5 h-16 min-w-full border-b border-b-tertiary-50 shadow-md bg-tertiary-900/50"
                style="width: auto"
            >
                <img
                    src="/images/logo/logo-no-background.png"
                    alt="Ekklesia logo"
                />
            </div>
            <button
                @click="$emit('toggle-sidebar')"
                class="p-2 rounded-md lg:hidden"
            >
                <svg
                    class="w-6 h-6 text-gray-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
            </button>
        </div>
        <div class="h-full overflow-y-auto">
            <div class="w-full flex flex-row justify-center py-5"></div>

            <!-- Sidebar menu -->
            <ul class="font-medium text-base">
                <li
                    v-for="item in navItems"
                    :key="item"
                    class="relative pointer"
                >
                    <SidebarLink :item="item" />
                </li>
            </ul>
        </div>
    </aside>
</template>
