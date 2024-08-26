<template>
  <div class="q-pa-md">
    <q-stepper v-model="step" header-nav animated keep-alive swipeable ref="stepper" color="primary">
      <q-step :name="1" title="Customer" icon="business" :done="step > 1" :header-nav="step > 1">
        <CustomerStep @continue="handleContinue" @back="handleBack"></CustomerStep>
      </q-step>
      <q-step :name="2" title="Project" icon="report" :done="step > 2" :header-nav="step > 2">
        <ProjectStep @continue="handleContinue" @back="handleBack"></ProjectStep>
      </q-step>
      <q-step :name="3" title="Visit" icon="flag" :done="step > 3" :header-nav="step > 3">
        <VisitStep @continue="handleContinue" @back="handleBack"></VisitStep>
      </q-step>
      <q-step :name="4" title="Report" icon="activity" :header-nav="step > 4">
        <ReportStep @continue="handleContinue" @back="handleBack"></ReportStep>
      </q-step>
    </q-stepper>
  </div>
</template>

<script setup>

  /*
    imports
  */
    import { ref } from 'vue'
    import { useStoreEntries } from 'src/stores/storeEntries'
    import CustomerStep from "../components/Index/CustomerStep.vue"
    import ProjectStep from "../components/Index/ProjectStep.vue"
    import VisitStep from "../components/Index/VisitStep.vue"
    import ReportStep from 'src/components/Index/ReportStep.vue';
  /*
    state
  */

    const storeEntries = useStoreEntries()
    let step = ref(1)

    const handleContinue = (id) => {
      step.value += 1
    }
    const handleBack = (id) => {
      step.value -= 1
    }
</script>
