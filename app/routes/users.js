import Route from '@ember/routing/route';
import $ from 'jquery';

export default Route.extend({
  model: function() {
    const url = 'https://api.github.com/users';
    return $.getJSON(url).then(function(data) {
      return data.splice(0, 10);
    });
  }
});
