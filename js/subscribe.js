(function() {
  var subForm = $('#subscription');
  var submit = $('button[type=submit]', subForm)

  subForm.on('change', function() {
    submit.prop('disabled', !subForm.is(':valid'));
  });

  subForm.trigger('change');
})();