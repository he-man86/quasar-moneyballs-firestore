<template>
    <q-timeline color="secondary">
        <q-timeline-entry heading body="Timeline heading" />

        <q-timeline-entry heading body="November, 2017" />

        <q-timeline-entry title="Event Title" subtitle="February 22, 1986" :body="body" />

        <q-timeline-entry title="Event Title" subtitle="February 22, 1986" :body="body" />

        <q-timeline-entry title="Event Title" subtitle="February 22, 1986" :body="body" />
    </q-timeline>

    <div class="row justify-end q-px-md q-py-sm">
        <q-btn round color="primary" icon="add" @click=toggleDialog() />
    </div>
    <AddVisit v-model="prompt"></AddVisit>
    <q-stepper-navigation>
      <q-btn flat @click="onContinue" color="primary" label="Back" class="q-ml-sm" />
    </q-stepper-navigation>
</template>

<script setup>
import { ref } from 'vue'
// import { useFieldserviceData } from "../../stores/fieldserviceData"
import AddVisit from "./dialogs/AddVisit.vue"
// const parentID = defineProps(['parent-id'])
// const FieldserviceData = useFieldserviceData();

const body = ref('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.')

const prompt = ref(false)
//Emits
const emit = defineEmits(['continue','back'])
//Methods
const onContinue = ()=>{
  entries.loadReports(selection.value)
  emit('continue')
}
</script>
