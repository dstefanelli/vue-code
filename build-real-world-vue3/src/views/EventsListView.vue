<script setup lang="ts">
import EventService from '@/services/EventService';
import EventCard from '@/components/EventCard.vue';
import { computed, onMounted, ref, watchEffect } from 'vue';
import type { EventAPI } from '@/models/event';

const props = defineProps(['page']);
const events = ref([] as Array<EventAPI>);
const page = computed(()=> props.page );
import { useRouter } from 'vue-router';
const totalEvents = ref(0);
const hasNext = computed(() => {
  const totalPages = Math.ceil( totalEvents.value / 2);
  return page.value < totalPages
})

const router = useRouter();

onMounted(() => {
  watchEffect(()=>{
    EventService.getEvents( 2, page.value)
      .then((response: any) => {
        events.value = response.data,
        totalEvents.value = response.headers['x-total-count'],
        console.log(response)
      })
      .catch((error: any) => {
        router.push({ name: 'NetworkError' })
      })
  })
})
</script>

<template>
    <h1>Events for Good</h1>
    <div class="events">
      <EventCard v-for="event in events" :key="event.id" :event="event" />
      <div class="pagination">
        <RouterLink id="page-prev" :to="{ name: 'EventList', query: { page: page - 1} }" rel="prev" v-if="page != 1">Prev</RouterLink>
        <RouterLink id="page-next" :to="{ name: 'EventList', query: { page: page + 1 } }" rel="next" v-if="hasNext">Next</RouterLink>
      </div>
    </div>
</template>

<style scoped>
.events{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.pagination {
  display: flex;
  width: 290px;
  justify-content: space-between;
}
.pagination a {
  flex: 1;
  text-decoration: none;
  color: #2c3e50;
}

#page-prev {
  text-align: left;
}

#page-next {
  text-align: right;
}
</style>