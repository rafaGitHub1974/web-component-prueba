<template>
  <div class="card">
    <ButtonGroup>
      <Button label="Save" icon="pi pi-check" />
      <Button label="Delete" icon="pi pi-trash" />
      <Button label="Cancel" icon="pi pi-times" />
    </ButtonGroup>
    <div class="card flex flex-wrap gap-3 p-fluid">
      <div class="flex-auto">
        <label for="buttondisplay" class="font-bold block mb-2"> Button </label>
        <Calendar v-model="buttondisplay" showIcon :showOnFocus="false" inputId="buttondisplay" />
      </div>
      <div class="flex-auto">
        <label for="icondisplay" class="font-bold block mb-2"> Default Icon </label>
        <Calendar v-model="icondisplay" showIcon iconDisplay="input" inputId="icondisplay" />
      </div>
      <div class="flex-auto">
        <label for="templatedisplay" class="font-bold block mb-2"> Custom Icon </label>
        <Calendar
          v-model="templatedisplay"
          showIcon
          iconDisplay="input"
          timeOnly
          inputId="templatedisplay"
        >
          <template #inputicon="{ clickCallback }">
            <InputIcon class="pi pi-clock cursor-pointer" @click="clickCallback" />
          </template>
        </Calendar>
      </div>
    </div>
    <DataTable :value="lista" tableStyle="min-width: 50rem">
      <Column field="completed" header="completed"></Column>
      <Column field="id" header="id"></Column>
      <Column field="title" header="title"></Column>
      <Column field="userId" header="userId"></Column>
    </DataTable>
  </div>
</template>

<script setup lang="ts">
import axios from 'axios'
import Button from 'primevue/button'
import ButtonGroup from 'primevue/buttongroup'
import { onMounted, ref } from 'vue'
// import 'primeicons/primeicons.css'
import Calendar from 'primevue/calendar'
import Column from 'primevue/column'
import DataTable from 'primevue/datatable'

//icons

const lista = ref([])
const buttondisplay = ref()
const icondisplay = ref()
const templatedisplay = ref()
onMounted(async () => {
  axios.get('https://jsonplaceholder.typicode.com/todos').then((response) => {
    lista.value = response.data
    console.log('Lista: ', lista.value)
  })
})
</script>
