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

    <div class="flex h-screen overflow-y-hidden">
        <sidebar />

        <div class="flex flex-col flex-1 h-full overflow-hidden">
            <Navbar />

            <main
                class="flex-1 max-h-full p-5 overflow-hidden overflow-y-scroll"
            >
                <slot />
            </main>

            <Footer />
        </div>
    </div>
</template>
