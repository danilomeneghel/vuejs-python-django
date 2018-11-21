new Vue({
  el: '#starting',
  delimiters: ['${','}'],
  data: {
    products: [],
    loading: true,
    currentProduct: {},
    message: null,
    newProduct: { 'name': null, 'category': null, 'price': null },
    search_term: '',
  },
  mounted: function() {
    this.getProducts();
  },
  methods: {
    getProducts: function() {
      let api_url = '/api/product/';
      if(this.search_term!==''||this.search_term!==null) {
        api_url = `/api/product/?search=${this.search_term}`
      }
      this.loading = true;
      this.$http.get(api_url)
          .then((response) => {
            this.products = response.data;
            this.loading = false;
          })
          .catch((err) => {
            this.loading = false;
            console.log(err);
          })
    },
    getProduct: function(id) {
      this.loading = true;
      this.$http.get(`/api/product/${id}/`)
          .then((response) => {
            this.currentProduct = response.data;
            $("#editProductModal").modal('show');
            this.loading = false;
          })
          .catch((err) => {
            this.loading = false;
            console.log(err);
          })
    },
    addProduct: function() {
      this.loading = true;
      this.$http.post('/api/product/',this.newProduct)
          .then((response) => {
            this.loading = true;
            this.getProducts();
            this.newProduct.name = null;
            this.newProduct.category = null;
            this.newProduct.price = null;
            this.newProduct.description = null;
            $("#addProductModal").modal('hide');
          })
          .catch((err) => {
            this.loading = true;
            console.log(err);
          })
    },
    updateProduct: function() {
      this.loading = true;
      this.$http.put(`/api/product/${this.currentProduct.id}/`, this.currentProduct)
          .then((response) => {
            this.loading = false;
            this.currentProduct = response.data;
            this.getProducts();
            $("#editProductModal").modal('hide');
          })
          .catch((err) => {
            this.loading = false;
            console.log(err);
          })
    },
    deleteProduct: function(id) {
      this.loading = true;
      this.$http.delete(`/api/product/${id}/`)
          .then((response) => {
            this.loading = false;
            this.getProducts();
          })
          .catch((err) => {
            this.loading = false;
            console.log(err);
          })
    }
  }
});
