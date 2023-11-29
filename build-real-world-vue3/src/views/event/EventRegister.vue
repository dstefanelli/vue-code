<script setup lang="ts">
import type { EventAPI } from '@/models/event';
import { useRouter } from 'vue-router';

const router = useRouter();

defineProps({
    event: {
        required: true,
        type: Object as () => EventAPI
    }
});
const goToDetail = () => {
    router.push({ name: "EventDetail" })
}

</script>

<template>
    <div class="event-card">
        <h2>Register to the event</h2>
        <button @click="goToDetail">Click to register</button>
    </div>
</template>
