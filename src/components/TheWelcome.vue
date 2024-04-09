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
        <Calendar v-model="templatedisplay" showIcon iconDisplay="input" timeOnly inputId="templatedisplay">
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

  <div>
    <p>No encontrarse su actividad -conforme al CNAE que consta en la base de datos de la Tesorería General de la
      Seguridad Social- en el momento de la solicitud de la prestación, entre aquellas que experimentaron una reducción
      de
      más de un 7,5% en el número medio diario de trabajadores con actividad afiliados al sistema de la Seguridad
      Social,
      durante el periodo de percepción de la prestación, en relación con el tercer trimestre el año 2020 (disposición
      adicional segunda del Real Decreto-ley 3/2021, de 2 de febrero), no habiendo justificado documentalmente una
      reducción de al menos el 75% en la facturación en relación con el mismo periodo del año 2019.</p>

    <p>Como consecuencia de ello, la mutua recabará del Ministerio de Hacienda los datos tributarios de los ejercicios
      2019 y 2020 necesarios para el seguimiento y control de las prestaciones reconocidas.</p>

    <p>En cualquier caso, de acuerdo con el apartado 4 del artículo 9 del Real Decreto-ley 24/2020 de 26 de junio, el
      trabajador autónomo podrá aportar a la Mutua, en el plazo de diez días, la siguiente documentación:</p>

    <ul>
      <li>Copia del modelo 303 de autoliquidación del Impuesto sobre el Valor Añadido (IVA), correspondiente a las
        declaraciones del segundo y tercer trimestre de los años 2019 y 2020.</li>
      <li>Copia del modelo 130 correspondiente a la autoliquidación en pago fraccionado del Impuesto sobre la Renta de
        las
        Personas Físicas (IRPF) del segundo y tercer trimestre de los años 2019 y 2020 a los efectos de poder determinar
        lo que corresponde al tercer y cuarto trimestre de esos años.</li>
    </ul>

    <p>Si usted tributa por estimación directa en el Impuesto sobre la Renta de las Personas Físicas (IRPF) por
      estimación
      objetiva (modelo 131) deberá:</p>

    <ul>
      <li>Cumplimentar y firmar esta declaración jurada: <a a target="_blank"
          href="https://umivaleactiva.es/dam/varios/prestaciones/240409_POECATA_Declaraci-n-jurada.pdf">https://umivaleactiva.es/dam/varios/prestaciones/240409_POECATA_Declaraci-n-jurada.pdf</a>
      </li>
      <li>Aportar modelo 131 para justificar que tributa por esa modalidad.</li>
      <li>Aportar la documentación necesaria que permita acreditar la reducción de la facturación en un 75%.</li>
    </ul>

    <p>También es posible presentar cualquier otro medio de prueba admitido en derecho que sirva para acreditar los
      rendimientos netos exigidos en este precepto, como pueden ser alguno de los siguientes documentos:</p>

    <ul>
      <li>Libro de registro de facturas emitidas y recibidas.</li>
      <li>Libro diario de ingresos y gastos.</li>
      <li>Libro de registro de ventas e ingresos.</li>
      <li>Libro de compras y gastos.</li>
    </ul>

    <p>En defecto de los libros anteriores, justificantes y facturas de las operaciones realizadas durante el periodo
      declarado.</p>

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

<!-- <style>
@import 'https://cdn.jsdelivr.net/npm/primevue@3.17.0/resources/primevue.min.css';
@import 'https://cdn.jsdelivr.net/npm/primevue@3.17.0/resources/themes/saga-blue/theme.css';
@import 'https://cdn.jsdelivr.net/npm/primeicons@5.0.0/primeicons.css';
@import 'https://cdn.jsdelivr.net/npm/primeflex@2.0.0/primeflex.min.css';
</style> -->
<style scoped>
@import "primeflex/primeflex.css";
@import "primeicons/primeicons.css";
@import "primevue/resources/themes/aura-light-green/theme.css";
@import "primevue/resources/primevue.min.css";
</style>
