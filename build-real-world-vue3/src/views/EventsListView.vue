<script setup lang="ts">
import EventService from '@/services/EventService';
import EventCard from '@/components/EventCard.vue';
import Event from '@/models/event';
import { onMounted, ref } from 'vue';

const events = ref(Array as () => Event[]);

onMounted(() => {
  EventService.getEvents()
    .then((response) => {
      events.value = response.data
      console.log(response)
    })
    .catch((error) => {
      console.log(error)
    })
})
</script>

<template>
  <h1>Events for Good</h1>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<style scoped>
.events{
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>