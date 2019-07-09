import Route from '@ember/routing/route';
import $ from 'jquery';

/*
const cars = [
  {
    id: 1,
    make: 'Honda',
    model: 'Accord',
    year: '2007'
  },
  {
    id: 2,
    make: 'Toyota',
    model: 'Camry',
    year: '2013'
  },
  {
    id: 3,
    make: 'Ford',
    model: 'Explorer',
    year: '2002'
  }
]; */

export default Route.extend({
  model: function() {
    return $.getJSON('car.json').then(function(data) {
      return data;
    });
  }
});
