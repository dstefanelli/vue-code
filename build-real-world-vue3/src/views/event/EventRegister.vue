<script setup lang="ts">
import type { EventAPI } from '@/models/event';
import { inject } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const gStore: any = inject('gStore');

defineProps({
    event: {
        required: true,
        type: Object as () => EventAPI
    }
});
const goToDetail = () => {
    gStore.flashMessage = 'You are registered';
    setTimeout(() => {
        gStore.flashMessage = ''
    }, 3000)
    router.push({ name: "EventDetail" })
}

</script>

<template>
    <div class="event-card">
        <h2>Register to the event</h2>
        <button @click="goToDetail">Click to register</button>
    </div>
</template>
