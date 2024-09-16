<template>
  <div>
    <h1>Product Management</h1>
    <Product />
  </div>
</template>

<script lang="ts" setup>
import Product from '/src/components/Product.vue';
</script>

<style>
/* Add any global styles here */
</style>




















<!-- <template>
  <div>
    <DataTable :value="items" :loading="loading" responsiveLayout="scroll">
      <Column field="title" header="Title"></Column>

      <Column field="price" header="Price">
        <template #body="slotProps">
          {{ formatCurrency(slotProps.data.price) }}
        </template>
      </Column>

      <Column header="Image">
        <template #body="slotProps">
          <img :src="slotProps.data.thumbnail" alt="Product Image" class="shadow-lg" width="64" />
        </template>
      </Column>

      <Column header="Actions">
        <template #body="slotProps">
          <Button label="Abrir" @click="showDialog(slotProps.data)" />
          <Button label="Borrar" @click="deleteProduct(slotProps.data.id)" class="p-button-danger" />
        </template>
      </Column>
    </DataTable>

    <Dialog v-model:visible="dialogVisible" header="Editar Producto" :modal="true" :closable="false">
      <div>
        <div class="field">
          <label for="title">Title</label>
          <InputText id="title" v-model="selectedProduct.title" @keyup.enter="saveProduct" />
        </div>
        <div class="field">
          <label for="price">Price</label>
          <InputNumber id="price" v-model="selectedProduct.price" mode="currency" currency="USD"
            @keyup.enter="saveProduct" />
        </div>
        <div class="flex justify-content-end mt-4">
          <Button label="guardar cambios" @click="saveProduct" class="p-button-success" />
          <Button label="Cancel" @click="closeDialog" class="p-button-text" />
        </div>
      </div>
    </Dialog>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';

const items = ref([]);
const loading = ref(false);
const dialogVisible = ref(false);
const selectedProduct = ref({});

const fetchData = async () => {
  loading.value = true;
  try {
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();
    items.value = data.products.map(product => ({
      ...product,
      price: Number(product.price)
    }));
  } catch (error) {
    console.error('Error fetching data:', error);
  } finally {
    loading.value = false;
  }
};

const formatCurrency = (value) => {
  return `$${value.toFixed(2)}`;
};

const showDialog = (product) => {
  selectedProduct.value = { ...product };
  dialogVisible.value = true;
};

const closeDialog = () => {
  dialogVisible.value = false;
};

const saveProduct = () => {
  console.log('Product saved:', selectedProduct.value);
  const index = items.value.findIndex(item => item.id === selectedProduct.value.id);
  if (index !== -1) {
    items.value[index] = { ...selectedProduct.value };
  }
  closeDialog();
};

const deleteProduct = (id) => {
  items.value = items.value.filter(item => item.id !== id);
  console.log(`Product with id ${id} deleted.`);
};

onMounted(fetchData);
</script>

<style>
.field {
  margin-bottom: 1rem;
}
</style> -->