<script setup lang="ts">
import type { EventAPI } from '@/models/event';

defineProps({
    event: {
        required: true,
        type: Object as () => EventAPI
    }
});
</script>

<template>
    <div class="event-card">
        <h2>Edit the event</h2>
    </div>
</template>