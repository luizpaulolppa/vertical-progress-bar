var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    items: [
      { open: true, id: 1 },
      { open: false, id: 2 },
      { open: false, id: 3 },
    ]
  },
  methods: {
    toogle(id) {
      this.items = this.items.map((item) => {
        item.open = item.id === id;

        return item;
      });
    }
  }
})