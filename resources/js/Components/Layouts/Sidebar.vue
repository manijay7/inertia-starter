<script setup>
import SidebarLink from "@/Components/SidebarLink.vue";

const logout = () => {
    router.post(route("logout"));
};

const props = defineProps({
    isSidebarOpen: {
        type: Boolean,
    },
});

const emit = defineEmits(["toggle-sidebar"]);
</script>

<template>
    <aside
        class="fixed inset-y-0 z-10 flex flex-col flex-shrink-0 w-64 max-h-screen overflow-hidden transition-all transform duration-300 border-r shadow-lg lg:z-auto lg:static lg:shadow-none"
        :class="{
            ' -translate-x-full lg:translate-x-0': !props.isSidebarOpen,
        }"
    >
        <!-- sidebar header -->
        <div
            class="flex h-14 border-b border-solid border-gray-300 items-center justify-between flex-shrink-0 p-2"
        >
            <div class="flex items-center justify-start space-x-2">
                <a href="#" title="home">
                    <img
                        :src="'../storage/pbl_logo.png'"
                        class="w-[100%] bg-white"
                        alt="logo"
                    />
                </a>
                <h2
                    class="flex-1 text-gray-700 dark:text-gray-100 text-base font-medium"
                >
                    {{ $page.props.app.name }}
                </h2>
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

        <!-- sidebar items -->
        <div
            class="relative flex flex-col flex-1 min-h-0 pt-0 bg-white border-r border-gray-200 dark:border-gray-700"
        >
            <!-- sidebar top -->
            <div class="flex flex-col flex-1 pt-5 pb-4 overflow-y-auto">
                <div
                    class="flex-1 px-3 space-y-1 bg-white divide-y divide-gray-200 dark:divide-gray-700"
                >
                    <div class="pt-2 space-y-2">
                        <SidebarLink
                            :href="route('dashboard')"
                            :active="route().current('dashboard')"
                        >
                            <i
                                class="pi pi-chart-bar"
                                style="color: slateblue"
                            ></i>

                            <span class="font-medium">Dashboard</span>
                        </SidebarLink>
                    </div>
                </div>
            </div>

            <!-- sibebar bottom -->
            <div
                class="absolute bottom-0 left-0 h-12 justify-start hidden w-full p-2 border-t border-b-slate-400 space-x-4 lg:flex"
                sidebar-bottom-menu
            >
                <SidebarLink href="#" :active="route().current('settings')">
                    <i class="pi pi-cog" style="color: slateblue"></i>

                    <span class="font-medium">Settings</span>
                </SidebarLink>
            </div>
        </div>
    </aside>
</template>
