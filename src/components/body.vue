<template>

  <a-table :columns="columns" :data-source="data" class="table" :pagination="false">
    <template #bodyCell="{ column, text }">
      <template v-if="column.dataIndex === 'name'">
        <a>{{ text }}</a>
      </template>
    </template>
  </a-table>

</template>

<script setup>
import {ref} from "vue";

const columns = ref()
const data = ref()

columns.value = [{
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
}, {
  title: 'Age',
  dataIndex: 'age',
  key: 'age',
  width: 80,
}, {
  title: 'Address',
  dataIndex: 'address',
  key: 'address 1',
  ellipsis: true,
}, {
  title: 'Long Column Long Column Long Column',
  dataIndex: 'address',
  key: 'address 2',
  ellipsis: true,
}, {
  title: 'Long Column Long Column',
  dataIndex: 'address',
  key: 'address 3',
  ellipsis: true,
}, {
  title: 'Long Column',
  dataIndex: 'address',
  key: 'address 4',
  ellipsis: true,
}]

data.value = [{
  key: '1',
  name: 'John Brown',
  age: 32,
  address: 'New York No. 1 Lake Park, New York No. 1 Lake Park',
  tags: ['nice', 'developer'],
}, {
  key: '2',
  name: 'Jim Green',
  age: 42,
  address: 'London No. 2 Lake Park, London No. 2 Lake Park',
  tags: ['loser'],
}, {
  key: '3',
  name: 'Joe Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park, Sidney No. 1 Lake Park',
  tags: ['cool', 'teacher'],
}]

</script>

<style scoped>
.table{
  margin-top: 100px;
}
</style>