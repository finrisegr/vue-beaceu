<template>
  <div class="mydatatable">
    <h1>DataTable</h1>
    <DataTable
      :value="mytable"
      stripedRows
      responsiveLayout="scroll"
      editMode="cell"
      @cell-edit-complete="onCellEditComplete"
      @row-contextmenu="onRowContextMenu"
      @value-change="onValueChange"
    >
      <template #empty>
        <p class="text-center">No data</p>
      </template>
      <Column field="id" header="ID"></Column>
      <Column field="name" header="Name">
        <template #editor="{ data, field }">
          <!-- <InputText v-model="data[field]" autofocus /> -->
          <Dropdown
            v-model="data[field]"
            :options="cities"
            optionLabel="name"
            placeholder="Select a City"
            autofocus
          />
        </template>
      </Column>
      <Column field="gender" header="Gender">
        <template #editor="{ data, field }">
          <InputText v-model="data[field]" autofocus />
        </template>
      </Column>
      <Column field="address1" header="Address 1"></Column>
      <Column field="address2" header="Address 2"></Column>
    </DataTable>
  </div>
</template>

<script>
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import InputText from 'primevue/inputtext';
import Dropdown from 'primevue/dropdown';

export default {
  name: 'MyDataTable',
  mounted() {
    this.t1 = [
      { id: '1187', name: 'Teri Ennaco', address1: 'Mira Road' },
      { id: '1188', name: 'Aniket Aryamane', address1: 'Shalimar Society' },
    ];

    this.t2 = [
      { id: '1187', gender: 'Female', address2: 'Mumbai' },
      { id: '1188', gender: 'Male', address2: 'Pune' },
    ];

    this.mytable = this.t1.map((item, i) =>
      Object.assign({}, item, this.t2[i])
    );

    // this.mytable = [];

    this.$nextTick(function () {
      window.addEventListener('keydown', (event) => {
        if (event.ctrlKey && event.keyCode === 73) {
          this.mytable.push({
            id: '1188',
            name: 'Aniket Aryamane',
            gender: 'Male',
            address1: 'Shalimar Society',
            address2: 'Pune',
          });
        }
      });
    });
  },
  data() {
    return {
      mytable: null,
      t1: null,
      t2: null,
      selectedCity: null,
      cities: [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' },
      ],
    };
  },
  components: {
    DataTable,
    Column,
    InputText,
    Dropdown,
  },
  methods: {
    onCellEditComplete(event) {
      let { data, newValue, field } = event;

      switch (field) {
        default:
          try {
            if (newValue.name) {
              if (newValue.name.trim().length > 0) data[field] = newValue.name;
            } else if (newValue.trim().length > 0) {
              data[field] = newValue;
            } else event.preventDefault();
          } catch (err) {
            console.log(err);
          }
          break;
      }
    },
    onRowContextMenu(e) {
      const { data, index } = e;
      console.log(data);
      console.log(index);
    },
    onValueChange(e) {
      console.log('CHANGED: ', e);
    },
  },
};
</script>

<style scoped></style>
