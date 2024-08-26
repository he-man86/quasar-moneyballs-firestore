<template>
  <q-list separator>
    <q-item v-for="customer in entries.customers" :key="customer.id" clickable v-ripple
          :active="selection === customer.id" active-class="bg-teal-1 text-orange-8" @click="selection=customer.id">
          <q-item-section avatar>
              <q-icon name="business" color="black" size="34px" />
          </q-item-section>

          <q-item-section class="q-mx-sm">
              <q-item-label lines="1">{{ customer.name }}</q-item-label>
              <q-item-label lines="1">{{ customer.address }}</q-item-label>
              <q-item-label lines="1" class="q-mt-xs text-body2 text-weight-bold text-primary text-uppercase">
                <span class="cursor-pointer">Open website</span>
              </q-item-label>
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
  <addCustomer v-model="prompt"></addCustomer>
  <q-stepper-navigation class="bottom">
    <q-btn @click="onContinue" color="primary" label="Continue" :disabled="selection==''"/>
  </q-stepper-navigation>
</template>


<script setup>
import { ref } from 'vue'
import { useStoreEntries } from "../../stores/storeEntries"
import AddCustomer from "./dialogs/AddCustomer.vue"
const entries = useStoreEntries();
const selection = ref('')
const prompt = ref(false)
//Emits
const emit = defineEmits(['continue','back'])
//Methods
const onContinue = ()=>{
  entries.loadProjects(selection.value)
  emit('continue')
}
</script>

