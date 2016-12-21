$(document).ready(function() {
  $('.payment-directly').on('click', function(){
    $('#show_old_information_'+ $(this).attr('id')).removeClass('display-none');
    $('.form_payment_directly').css('height','60%');
  });
  $('.btn_payment_fix').on('click', function(){
    var $modal = $('#modal_payment_'+ $(this).attr('id'));
    $modal.on('click', '.payment-paypal', function(){
      $modal.hide();
      $('.content_block').css('opacity', '0.3');
      $('.modal-backdrop').hide();
      $('#loader_paypal').removeClass('display-none');
    });
  });
})
