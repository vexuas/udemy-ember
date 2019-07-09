import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('services');
  this.route('contact');

  this.route('posts', function() {
    this.route('new');
    this.route('post', { path: ':post_id' });
  });
  this.route('post');
  this.route('cars');
  this.route('users');
});

export default Router;
