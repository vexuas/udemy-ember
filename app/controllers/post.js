import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    sayHello() {
      alert('Hello');
    },
    toggleBody() {
      this.toggleProperty('isShowingBody');
    },
    submitAction() {
      alert(this.get('name'));
      alert(this.get('comment'));
    }
  },
  created: new Date(),
  title: 'My Blog Post',
  body: 'This is the body of my blog post',
  authors: ['William', 'Robert', 'Michelle'],
  comments: [
    {
      name: 'Mike Smith',
      comment: 'Thanks for the great post'
    },
    {
      name: 'John Doe',
      comment: 'Nice Post!'
    },
    {
      name: 'Jeff Williams',
      comment: 'Good job!'
    }
  ]
});
