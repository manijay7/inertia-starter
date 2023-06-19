<script setup>
import Sidebar from "@/Components/Layouts/Sidebar.vue";
import Navbar from "@/Components/Layouts/Navbar.vue";
import Footer from "@/Components/Layouts/Footer.vue";
import { Head, usePage } from "@inertiajs/vue3";
import { ref } from "vue";
import Notification from "../Components/Notification.vue";

defineProps({
    title: String,
});

const closeAlert = () => {
    usePage().props.toast.message = null;
    // location.reload();
};

const isSidebarOpen = ref(false);

const toggleSidebar = () => {
    isSidebarOpen.value = !isSidebarOpen.value;
};
</script>

<template>
    <Head :title="title" />

    <div id="root">
        <div class="flex flex-auto flex-col">
            <div class="flex flex-auto min-w-0">
                <Sidebar
                    @toggle-sidebar="toggleSidebar"
                    :isSidebarOpen="isSidebarOpen"
                />

                <div
                    class="flex flex-col flex-auto min-h-screen min-w-0 relative w-full border-l border-gray-200 dark:border-gray-700"
                >
                    <Navbar
                        @toggle-sidebar="toggleSidebar"
                        :isSidebarOpen="isSidebarOpen"
                    />

                    <div class="h-full flex flex-auto flex-col justify-between">
                        <main class="h-full">
                            <div
                                class="page-container relative h-full flex flex-auto flex-col px-4 sm:px-6 md:px-8 py-4 sm:py-6 md:px-8"
                            >
                                <slot />
                            </div>
                        </main>
                        <Footer />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
