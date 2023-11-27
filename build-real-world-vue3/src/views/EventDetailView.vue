<script setup lang="ts">
import EventService from '@/services/EventService';
import { ref, onMounted } from 'vue';

const event = ref({} as EventAPI);
const props = defineProps({
    id: {
        type: Number,
        required: true
    }
})
const id = ref(8419988);

onMounted(() => {
    EventService.getEvent(props.id)
        .then((response) => {
            event.value = response.data
            console.log(response)
        })
        .catch((error) => {
            console.log(error)
        })
});
</script>

<template>
    <div class="event-card">
        <h2>{{ event.title }}</h2>
        <span>@{{ event.time }} on {{ event.date }}</span>
    </div>
</template>
