import Controller from '@ember/controller';
import $ from 'jquery';

export default Controller.extend({
  email: 'ricardoandrebeas@gmail.com',
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
