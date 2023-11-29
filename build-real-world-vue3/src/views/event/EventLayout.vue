<script setup lang="ts">
import EventService from '@/services/EventService';
import type { EventAPI } from '@/models/event';
import { ref, onMounted, computed } from 'vue';

const event = ref({} as EventAPI);
const props = defineProps({
    id: {
        type: Number,
        required: true
    }
})
const id = computed(() => props.id);
onMounted(() => {
    EventService.getEvent(id.value)
        .then((response: any) => {
            event.value = response.data
            console.log(response)
        })
        .catch((error: any) => {
            console.log(error)
        })
});
</script>

<template>
    <div v-if="event">
        <h1>{{ event.title }}</h1>
        <div class="menu">
            <RouterLink :to="{ name: 'EventDetail' }">Detail</RouterLink>
            <RouterLink :to="{ name: 'EventRegister' }">Register</RouterLink>
            <RouterLink :to="{ name: 'EventEdit' }">Edit</RouterLink>
        </div>
        <RouterView :event="event"/>
    </div>
</template>