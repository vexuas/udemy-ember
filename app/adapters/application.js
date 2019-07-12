import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'car.json?jsonp=?',
  shouldReloadAll() {
    return true;
  }
});
