$(document).ready(function() {
  $('#contact-form').submit(function(e) {
    var name    = document.getElementById('inputName')
    var email   = document.getElementById('inputEmail')
    var phone   = document.getElementById('inputPhone')
    var message = document.getElementById('inputMessage')


    if (!name.value || !email.value || !phone.value || !message.value) {
      alertify.error("Please check your entries");
      return false;
    } else {
      $.ajax({
        method: 'POST',
        url: '//alanylu@live.unc.edu',
        data: $('#contact-form').serialize(),
        datatype: 'json'
      });
      e.preventDefault();
      $(this).get(0).reset();
      alertify.success("Message sent");
    }
  });
});
