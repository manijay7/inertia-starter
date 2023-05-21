<script setup>
import { ref } from "vue";
import { router } from "@inertiajs/vue3";

import Dropdown from "@/Components/Dropdown.vue";
import DropdownLink from "@/Components/DropdownLink.vue";

const props = defineProps({
    isSidebarOpen: {
        type: Boolean,
    },
});

const logout = () => {
    router.post(route("logout"));
};

const emit = defineEmits(["toggle-sidebar"]);
</script>

<template>
    <header class="flex-shrink-0 border-b">
        <div class="flex items-center justify-between p-2 h-14">
            <!-- Navbar left -->
            <div class="flex items-center space-x-3">
                <!-- Toggle sidebar button -->
                <button
                    @click="emit('toggle-sidebar')"
                    class="p-2 rounded-md focus:outline-none focus:ring lg:hidden"
                >
                    <svg
                        class="w-4 h-4 text-gray-600"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M13 5l7 7-7 7M5 5l7 7-7 7"
                        />
                    </svg>
                </button>
                <span
                    class="p-2 text-xl font-semibold tracking-wider uppercase"
                ></span>
            </div>

            <div class="flex justify-center items-center">
                <button
                    id="theme-toggle"
                    data-tooltip-target="tooltip-toggle"
                    type="button"
                    class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg p-2"
                >
                    <i class="pi pi-bell" style="font-size: 1.3rem"></i>
                </button>

                <div class="flex items-center ml-3">
                    <Dropdown align="right" width="48">
                        <template #trigger>
                            <button
                                v-if="
                                    $page.props.jetstream.managesProfilePhotos
                                "
                                class="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition"
                            >
                                <img
                                    class="h-8 w-8 rounded-full object-cover"
                                    :src="
                                        $page.props.auth.user.profile_photo_url
                                    "
                                    :alt="$page.props.auth.user.name"
                                />
                            </button>

                            <span v-else class="inline-flex rounded-md">
                                <button
                                    type="button"
                                    class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none focus:bg-gray-50 active:bg-gray-50 transition ease-in-out duration-150"
                                >
                                    {{ $page.props.auth.user.name }}

                                    <svg
                                        class="ml-2 -mr-0.5 h-4 w-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                        />
                                    </svg>
                                </button>
                            </span>
                        </template>

                        <template #content>
                            <!-- Account Management -->
                            <div class="block px-4 py-2 text-xs text-gray-400">
                                Manage Account
                            </div>

                            <DropdownLink :href="route('profile.show')">
                                Profile
                            </DropdownLink>

                            <DropdownLink
                                v-if="$page.props.jetstream.hasApiFeatures"
                                :href="route('api-tokens.index')"
                            >
                                API Tokens
                            </DropdownLink>

                            <div class="border-t border-gray-200" />

                            <!-- Authentication -->
                            <form @submit.prevent="logout">
                                <DropdownLink as="button">
                                    Log Out
                                </DropdownLink>

                                <!-- <Link :href="route('logout')" method="post" as="button"
                                                                                                                    class="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
                                                                                                                Log Out
                                                                                                                </Link> -->
                            </form>
                        </template>
                    </Dropdown>
                </div>
            </div>
        </div>
    </header>
</template>
