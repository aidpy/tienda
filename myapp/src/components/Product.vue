<template>
  <div>
    <Button label="Fetch Products" @click="fetchProducts" />
    <DataTable :value="productStore.items" :loading="productStore.loading" responsiveLayout="scroll">
      <Column field="title" header="Title" />
      <Column field="price" header="Price">
        <template #body="slotProps">
          {{ productStore.formatCurrency(slotProps.data.price) }}
        </template>
      </Column>
      <Column header="Image">
        <template #body="slotProps">
          <img :src="slotProps.data.thumbnail" alt="Product Image" class="shadow-lg" width="64" />
        </template>
      </Column>
      <Column header="Actions">
        <template #body="slotProps">
          <Button label="Edit" @click="productStore.showDialog(slotProps.data)" />
          <Button label="Delete" @click="productStore.deleteProduct(slotProps.data.id)" class="p-button-danger" />
        </template>
      </Column>
    </DataTable>

    <Dialog v-model:visible="productStore.dialogVisible" header="Edit Product" :modal="true" :closable="false">
      <div>
        <div class="field">
          <label for="title">Title</label>
          <InputText id="title" v-model="productStore.selectedProduct.title" @keyup.enter="productStore.saveProduct" />
        </div>
        <div class="field">
          <label for="price">Price</label>
          <InputNumber id="price" v-model="productStore.selectedProduct.price" mode="currency" currency="USD"
            @keyup.enter="productStore.saveProduct" />
        </div>
        <div class="flex justify-content-end mt-4">
          <Button label="Save Changes" @click="productStore.saveProduct" class="p-button-success" />
          <Button label="Cancel" @click="productStore.closeDialog" class="p-button-text" />
        </div>
      </div>
    </Dialog>
  </div>
</template>

<script lang="ts" setup>
import { useProductStore } from '/src/stores/productStore';

const productStore = useProductStore();

const fetchProducts = async () => {
  await productStore.fetchData();
};
</script>

<style>
.field {
  margin-bottom: 1rem;
}
</style>