<script setup lang="ts">
import type { EventAPI } from '@/models/event';

defineProps({
    event: {
        required: true,
        type: Object as ()=> EventAPI
    }
});
</script>

<template>
    <div class="event-card">
        <h2>{{ event.title }}</h2>
        <span>@{{ event.time }} on {{ event.date }}</span>
    </div>
</template>
