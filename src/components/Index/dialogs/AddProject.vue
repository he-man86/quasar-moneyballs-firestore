<template>
    <q-dialog>
        <q-card>
            <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
                <q-card-section class="row items-center q-pb-none">
                    <div class="text-h6">Add new poject</div>
                    <q-space />
                    <q-btn icon="close" flat round dense v-close-popup />
                </q-card-section>
                <q-card-section>
                    <q-input filled v-model="project.name" label="Name *" lazy-rules
                        :rules="[val => val && val.length > 0 || 'Please type something']" />
                </q-card-section>
                <q-separator />
                <q-card-actions align="right">
                    <q-btn flat color="primary" label="Submit" type="submit" />
                    <q-btn flat color="primary" label="Reset" type="reset" />
                    <!-- <q-btn v-close-popup flat color="primary" label="Submit" type="submit" />
                    <q-btn v-close-popup flat color="primary" label="Reset" type="reset" /> -->
                </q-card-actions>
            </q-form>
        </q-card>
    </q-dialog>
</template>

<script setup>
import { ref,reactive } from 'vue'
import { useStoreEntries } from "../../../stores/storeEntries"
const entries = useStoreEntries();
const project = reactive({
  name: ""
})

const onSubmit = () => {
    console.log('submit')
    entries.addProject(project)
}

const onReset = () => {
    console.log('reset')
}
</script>
