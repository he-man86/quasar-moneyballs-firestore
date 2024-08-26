<template>
  <q-list separator>
    <q-item v-for="visit in entries.visits" :key="visit.id" clickable v-ripple
          :active="selection === visit.id" active-class="bg-teal-1 text-orange-8" @click="selection=visit.id">
          <q-item-section avatar>
              <q-icon name="business" color="black" size="34px" />
          </q-item-section>

          <q-item-section class="q-mx-sm">
              <q-item-label lines="1">{{ visit.name }}</q-item-label>
          </q-item-section>

          <q-item-section top side>
              <div class="text-grey-8 q-gutter-xs">
                  <q-btn class="gt-xs" size="12px" flat dense round icon="delete" />
                  <q-btn size="12px" flat dense round icon="edit" />
              </div>
          </q-item-section>
      </q-item>
  </q-list>
  <div class="row justify-end q-px-md q-py-sm">
    <q-btn round color="primary" icon="add" @click="prompt = !prompt" />
  </div>
  <AddVisit v-model="prompt"></AddVisit  oject>
  <q-stepper-navigation>
    <q-btn @click="onContinue" color="primary" label="Continue" :disabled="selection==''" />
    <q-btn flat @click="$emit('back')" color="primary" label="Back" class="q-ml-sm" />
  </q-stepper-navigation>
</template>

<script setup>
import { ref } from 'vue'
import { useStoreEntries } from "../../stores/storeEntries"
import AddVisit from './dialogs/AddVisit.vue';
const entries = useStoreEntries();
const selection = ref('')
const prompt = ref(false)
//Emits
const emit = defineEmits(['continue','back'])
//Methods
const onContinue = ()=>{
  entries.loadReports(selection.value)
  emit('continue')
}
</script>
