import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
  make: DS.attr('string'),
  model: DS.attr('string'),
  year: DS.attr('string')
});
