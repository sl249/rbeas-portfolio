import Controller from '@ember/controller';
import $ from 'jquery';
import { A } from '@ember/array';

export default Controller.extend({
  email: 'ricardoandrebeas@gmail.com',
  links: A([
    {
      link: 'portfolio.index',
      icon: 'home',
      title: 'Home'
    },
    {
      link: 'portfolio.blog',
      icon: 'comment',
      title: 'Blog'
    }
  ]),
  actions: {
    copyEmail(email) {
      let $temp = $("<input>");
      $('body').append($temp);
      $temp.val(`${email}`).select();
      document.execCommand('copy');
      $temp.remove();
    }
  }
});
