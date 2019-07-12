import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    addCar: function() {
      const newCar = this.store.createRecord('car', {
        make: this.get('carMake'),
        model: this.get('carModel'),
        year: this.get('carYear')
      });

      newCar.save();
      this.transitionTo('cars');
    }
  }
});
