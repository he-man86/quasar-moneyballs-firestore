<template>
    <q-dialog>
        <q-card>
            <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
                <q-card-section class="row items-center q-pb-none">
                    <div class="text-h6">Add new customer</div>
                    <q-space />
                    <q-btn icon="close" flat round dense v-close-popup />
                </q-card-section>
                <q-card-section>
                    <q-input filled v-model="customer.name" label="Name *" lazy-rules
                        :rules="[val => val && val.length > 0 || 'Please type something']" />
                    <q-input filled v-model="customer.address" label="Adress*" lazy-rules
                        :rules="[val => val && val.length > 0 || 'Please type something']" />
                </q-card-section>
                <q-separator />
                <q-card-actions align="right">
                    <q-btn flat color="primary" label="Submit" type="submit" />
                    <q-btn flat color="primary" label="Reset" type="reset" />
                </q-card-actions>
            </q-form>
        </q-card>
    </q-dialog>
</template>

<script setup>
import { ref,reactive } from 'vue'
import { useStoreEntries } from "../../../stores/storeEntries"
const entries = useStoreEntries();
const customer = reactive({
  name: "",
  address: "",
  email: "",
  phone: "",
  website: ""
})

const onSubmit = () => {
    console.log('submit')
    entries.addCustomer(customer)
}

const onReset = () => {
    console.log('reset')
}
</script>
