Vue.component('list', {
  template: `<li>{{ item.name }} <span>X</span></li>`,
  props: ['item']
});

var dogList = new Vue({
  el: '#dog-list',
  data: {
    dogs: [
      { name: 'Artie' },
      { name: 'Oliver' },
      { name: 'Max' },
      { name: 'Walter' }
    ],
    dogName: ''
  },
  methods: {
    addDog: function() {
      this.dogs.push({ name: this.dogName });
      this.dogName = '';
    },
    clearDog: function(index) {
      this.dogs.splice(index, 1);
    }
  }
});
