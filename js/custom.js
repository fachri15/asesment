$(document).ready(function(){
    $("input[type='radio'][name='imunisasi']").change(function(){
      if($("#imunisasiYa").is(":checked")){
        $("#imunLain").prop("disabled", false);
      } else {
        $("#imunLain").prop("disabled", true);
      }
    });

    $('#asuhanLainText').on('input', function(){
    if ($(this).val().trim() !== '') {
      $('input[name="asuhan"][value="4"]').prop('checked', true);
    }
  });

    $('#kshLainnyaText').on('input', function(){
    if ($(this).val().trim() !== '') {
      $('input[name="keluhan"][value="5"]').prop('checked', true);
    }
  });

   $('#persalinanInText').on('input', function(){
    if ($(this).val().trim() !== '') {
      $('input[name="persalinan"][value="4"]').prop('checked', true);
    }
  });

  $('#inLainnyaText').on('input', function(){
    if ($(this).val().trim() !== '') {
      $('input[name="ginekologi"][value="8"]').prop('checked', true);
    }
  });


  });