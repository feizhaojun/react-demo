const Store = {
  items: [],

  getAll() {
    return this.items;
  },

  addNewItemHandler(text) {
    this.items.push(text);
  },

  emitChange() {
    this.emit('change');
  }
};

export default Store;