import { defineStore } from 'pinia';

export const useProductStore = defineStore('product', {
  state: () => ({
    items: [] as Array<{ id: number; title: string; price: number; thumbnail: string }>, // Define item structure
    loading: false,
    dialogVisible: false,
    selectedProduct: {} as { id?: number; title?: string; price?: number; thumbnail?: string }, // Optional properties
  }),

  actions: {
    async fetchData() {
      this.loading = true;
      try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        this.items = data.products.map((product: any) => ({
          ...product,
          price: Number(product.price),
        }));
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        this.loading = false;
      }
    },

    formatCurrency(value: number) {
      return `$${value.toFixed(2)}`;
    },

    showDialog(product: { id: number; title: string; price: number; thumbnail: string }) {
      this.selectedProduct = { ...product };
      this.dialogVisible = true;
    },

    closeDialog() {
      this.dialogVisible = false;
    },

    saveProduct() {
      const index = this.items.findIndex(item => item.id === this.selectedProduct.id);
      if (index !== -1) {
        this.items[index] = { ...this.selectedProduct };
      }
      this.closeDialog();
    },

    deleteProduct(id: number) {
      this.items = this.items.filter(item => item.id !== id);
      console.log(`Product with id ${id} deleted.`);
    },
  },
});