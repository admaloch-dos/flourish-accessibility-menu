// function getOffset(el) {
//   const rect = el.getBoundingClientRect();
//   return {
//     left: rect.left + window.scrollX,
//     top: rect.top + window.scrollY
//   };
// }

// $(window).scroll(function () {
//   const main = document.querySelector('.main')
// const coords = getOffset(main)

//   console.log(coords)
//   if ($(window).scrollTop() >= 740) {
//     $(window).scrollTop(740);
//   }
// });

// var body = document.body,
//   html = document.documentElement;

// var height = Math.max(body.scrollHeight, body.offsetHeight,
//   html.clientHeight, html.scrollHeight, html.offsetHeight);

// console.log(height)



$(document).keydown(function (e) {
  if (e.shiftKey && e.which == 72) { // Shift + h
    window.location.replace("https://www.floridamemory.com/");
  }
  if (e.shiftKey && e.which == 82) { // Shift + r
    window.location.replace("https://www.floridamemory.com/discover/audio/radio/");
  }
});




$(document).ready(function () {

  //Letter Spacing
  var selectedVal = $.cookie("LetterSpaceVal");
  if (selectedVal) {
    $("#letter_spacing").val(selectedVal);
    $("#letter_spacing").prop("selected", true);
    $("#view p").not('#ADA_widget, #ADA_widget *').css("letter-spacing", selectedVal); //Selects everything inside #view except ada modal and header
    $(".Footer").css("letter-spacing", selectedVal);
  }
  $("#letter_spacing").on("change", function () {
    var selection1 = $(this).val();
    $(selection1).prop("selected", true);
    $("#view p").not('#ADA_widget, #ADA_widget *').css("letter-spacing", selection1); //Selects everything inside #view except ada modal and header
    $(".Footer").css("letter-spacing", selection1);
    $.cookie("LetterSpaceVal", selection1, { path: '/' })
  });



  //Word Spacing
  var selectedVal2 = $.cookie("WordSpaceVal");
  if (selectedVal2) {
    $("#word_spacing").val(selectedVal2);
    $("#word_spacing").prop("selected", true);
    $("#view p").not('#ADA_widget, #ADA_widget *').css("word-spacing", selectedVal2); //Selects everything inside #view except ada modal and header
  }
  $("#word_spacing").on("change", function () {
    var selection2 = $(this).val();
    $(selection2).prop("selected", true);
    $("#view p").not('#ADA_widget, #ADA_widget *').css("#word_spacing", selection2); //Selects everything inside #view except ada modal and header
    $(".Footer").css("#word_spacing", selection2);
    $.cookie("WordSpaceVal", selection2, { path: '/' })
  });



  //Line Height
  var selectedVal3 = $.cookie("LinpageHeightVal");
  if (selectedVal3) {
    $("#line_height").val(selectedVal3);
    $("#line_height").prop("selected", true);
    $("#view p").not('#ADA_widget, #ADA_widget *').css("line-height", selectedVal3); //Selects everything inside #view except ada modal and header
    $(".Footer").css("line-height", selectedVal3);
  }
  $("#line_height").on("change", function () {
    var selection3 = $(this).val();
    $(selection3).prop("selected", true);
    $("#view p").not('#ADA_widget, #ADA_widget *').css("line-height", selection3); //Selects everything inside #view except ada modal and header
    $(".Footer").css("line-height", selection3);
    $.cookie("LinpageHeightVal", selection3, { path: '/' })
  });
});








/////COOKIE SETTING FOR FONT TYPE
$(document).ready(function () {
  $("#ADA_widget #FT_Default").addClass("active");
});
//FOR FONT TYPE CHANGE -- ADDS ACTIVE CLASS TO LI WHEN CLICKED
//https://stackoverflow.com/questions/3972944/jquery-removeclass-on-parent-sibling-child
$(function () {
  $('#ADA_widget .font_type_form .form-check ul li').click(function () {
    $(this).addClass('active').siblings().removeClass('active');
  });
});

$(document).ready(function () {
  // Cookie for DyslexicFontCookie
  // Check (onLoad) if DyslexicFontCookie is there and set the class to body if it is
  // Add active class to li
  if ($.cookie('DyslexicFontCookie') == "yes") {
    $("#ADA_widget #FT_Dyslexic").addClass("active");
    $("body").addClass("DyslexicFont");
    $('body').removeClass('BaskervilleFont');
    $("#ADA_widget #FT_Default").removeClass("active");
    $("#ADA_widget #FT_Baskerville").removeClass("active");

    $.cookie('BaskervilleFontCookie') == "no";
    $.cookie('BaskervilleFontCookie') == "undefined";
    $.cookie("BaskervilleFontCookie", null, {
      path: '/'
    });
  }


  // When input is clicked save cookie for 30days
  $("#ADA_widget a.FontTypeDyslexic").click(function () {
    $.cookie("BaskervilleFontCookie", null, {
      path: '/'
    });
    if ($.cookie('DyslexicFontCookie') == "undefined" || $.cookie('DyslexicFontCookie') == "no") {
      $.cookie('DyslexicFontCookie', 'yes', { path: '/' });
      $("body").addClass("DyslexicFont");
      $('body').removeClass('BaskervilleFont');

    } else {
      $.cookie('DyslexicFontCookie', 'yes', { path: '/' });
      $("body").addClass("DyslexicFont");
      $('body').removeClass('BaskervilleFont');
    }
  });

  //When 'a.FontTypeDefault' is clicked, removes 'DyslexicFont' and erases FontTypeCookie
  $("#ADA_widget a.FontTypeDefault").click(function () {
    $('body').removeClass('DyslexicFont');
    $('body').removeClass('BaskervilleFont');
    if ($.cookie('DyslexicFontCookie') == "yes") {
      $.cookie("DyslexicFontCookie", null, { path: '/' });
    }
    if ($.cookie('BaskervilleFontCookie') == "yes") {
      $.cookie("BaskervilleFontCookie", null, { path: '/' });
    }
  });
});

$(document).ready(function () {
  // Cookie for BaskervilleFontCookie
  // Check (onLoad) if BaskervilleFontCookie is there and set the class to body if it is
  // Add active class to li
  if ($.cookie('BaskervilleFontCookie') == "yes") {
    $("#ADA_widget #FT_Baskerville").addClass("active");
    $("body").addClass("BaskervilleFont");
    $("#ADA_widget #FT_Default").removeClass("active");
    $("#ADA_widget #FT_Dyslexic").removeClass("active");
    $('body').removeClass('DyslexicFont');

    $.cookie('DyslexicFontCookie') == "no";
    $.cookie('DyslexicFontCookie') == "undefined";
    $.cookie("DyslexicFontCookie", null, { path: '/' });
  }

  // When input is clicked save cookie for 30days
  $("#ADA_widget a.FontTypeBaskerville").click(function () {
    $.cookie("DyslexicFontCookie", null, {
      path: '/'
    });
    if ($.cookie('BaskervilleFontCookie') == "undefined" || $.cookie('BaskervilleFontCookie') == "no") {
      $.cookie('BaskervilleFontCookie', 'yes', { path: '/' });
      $("body").addClass("BaskervilleFont");
      $('body').removeClass('DyslexicFont');

    } else {
      $.cookie('BaskervilleFontCookie', 'yes', { path: '/' });
      $("body").addClass("BaskervilleFont");
      $('body').removeClass('DyslexicFont');
    }
  });

  //When 'a.FontTypeDefault' is clicked, removes 'DyslexicFont' and erases FontTypeCookie
  $("#ADA_widget a.FontTypeDefault").click(function () {
    $('body').removeClass('DyslexicFont');
    $('body').removeClass('BaskervilleFont');
    if ($.cookie('BaskervilleFontCookie') == "yes") {
      $.cookie("BaskervilleFontCookie", null, { path: '/' });
    }
    if ($.cookie('DyslexicFontCookie') == "yes") {
      $.cookie("DyslexicFontCookie", null, { path: '/' });
    }
  });
});



$(document).ready(function () {
  $("#ADA_widget #Cur_Default").addClass("active");
});
//FOR Cursor_Enlarge -- ADDS ACTIVE CLASS TO LI WHEN CLICKED
//https://stackoverflow.com/questions/3972944/jquery-removeclass-on-parent-sibling-child
$(function () {
  $('#ADA_widget .cursorSwap_form .form-check ul li').click(function () {
    $(this).addClass('active').siblings().removeClass('active');
  });
});



// Cookie for CursorEnlarge
$(document).ready(function () {
  // Check (onLoad) if CursorEnlargeCookie is there and set the class to body if it is
  // Add active class to li
  if ($.cookie('CursorEnlargeCookie') == "yes") {
    $("#ADA_widget #Cur_Enlarge").addClass("active");
    $("body").addClass("Cursor_Enlarge");
    $("#ADA_widget #Cur_Default").removeClass("active");
  }


  // When input is clicked save cookie for 30days
  $("#ADA_widget a.Cursor_Enlarge_option").click(function () {
    if ($.cookie('CursorEnlargeCookie') == "undefined" || $.cookie('CursorEnlargeCookie') == "no") {
      $.cookie('CursorEnlargeCookie', 'yes', { path: '/' });
      $("body").addClass("Cursor_Enlarge");

    } else {
      $.cookie('CursorEnlargeCookie', 'yes', { path: '/' });
      $("body").addClass("Cursor_Enlarge");
    }
  });

  //When 'a.Cursor_Default' is clicked, removes 'CursorEnlarge' and erases CursorEnlargeCookie
  $("#ADA_widget a.Cursor_Default").click(function () {
    $('body').removeClass('Cursor_Enlarge');
    if ($.cookie('CursorEnlargeCookie') == "yes") {
      $.cookie("CursorEnlargeCookie", null, {
        path: '/'
      });
    }
  });
});

$(".rs-handle").on("change", function () {
  console.log('this changed')
});


// $(document).ready(function () {

//   //Letter Spacing
//   var speechVol = $.cookie("speechVolCookie");
//   var speechRate = $.cookie("speechRateCookie");
//   var speechPitch = $.cookie("speechPitchCookie");
//   if (selectedVal) {
//     $("#letter_spacing").val(selectedVal);
//     $("#letter_spacing").prop("selected", true);
//     $("#view p").not('#ADA_widget, #ADA_widget *').css("letter-spacing", selectedVal); //Selects everything inside #view except ada modal and header
//     $(".Footer").css("letter-spacing", selectedVal);
//   }
//   $("#letter_spacing").on("change", function () {
//     var selection1 = $(this).val();
//     $(selection1).prop("selected", true);
//     $("#view p").not('#ADA_widget, #ADA_widget *').css("letter-spacing", selection1); //Selects everything inside #view except ada modal and header
//     $(".Footer").css("letter-spacing", selection1);
//     $.cookie("LetterSpaceVal", selection1, { path: '/' })
//   });

// })



$(document).bind('mousemove', function (e) {
  $('#tail').css({
    left: 0,
    top: e.pageY - 20
  });
});



// JavaScript Document
$(document).ready(function () {
  $("#ADA_widget #DefaultBG_option").addClass("active");
}); // end of doc ready

//FOR BACKGROUND COLOR CHANGE -- ADDS ACTIVE CLASS TO LI WHEN CLICKED
//https://stackoverflow.com/questions/3972944/jquery-removeclass-on-parent-sibling-child
$(function () {
  $('#ADA_widget .bg_form .form-check ul li').click(function () {
    $(this).addClass('active').siblings().removeClass('active');
  });
});





// Toggle Seizure
$(function () {
  $('[id="ToggleSeizure"]').change(function () {

    if ($(this).is(':checked')) {

      $(this).next(".switch-label").attr("data-state", "Toggled On");
      $("html").addClass("SeizureSafe");
    } else {
      $("html").removeClass("SeizureSafe");
    }
  });
});


// Toggle Reading Mask
$(function () {
  $('[id="ToggleReadingMask"]').change(function () {

    if ($(this).is(':checked')) {

      $("body").addClass("ReadingMask_ON");
      $("#top_mask").fadeIn()
      $("#bottom_mask").fadeIn()

    } else {

      $("body").removeClass("ReadingMask_ON");
      $("#top_mask").fadeOut()
      $("#bottom_mask").fadeOut()
    }
  });
});


// Toggle Reading Guide
$(function () {
  $('[id="ToggleReadingGuide"]').change(function () {
    if ($(this).is(':checked')) {
      $("#tail").hide()
      $("body").addClass("CursorGuide");
      $("#tail").fadeIn(500)

    } else {
      $("#tail").fadeOut(500)
      setTimeout(() => {
        $("body").removeClass("CursorGuide");
      }, 500);

    }
  });
});

// Toggle Highlight Hover
$(function () {
  $('[id="ToggleHighlightHover"]').change(function () {
    if ($(this).is(':checked')) {
      $("body").addClass("HighlightHover");
    } else {
      $("body").removeClass("HighlightHover");
    }
  });
});


// Toggle Highlight Links
$(function () {
  $('[id="ToggleHighlightLinks"]').change(function () {
    if ($(this).is(':checked')) {
      $("body").addClass("HighlightLinks");
    } else {
      $("body").removeClass("HighlightLinks");
    }
  });
});


// Toggle Image Description
$(function () {
  $('[id="ToggleImageDescription"]').change(function () {
    if ($(this).is(':checked')) {
      $("body").addClass("ImageDescription");
      $('img[alt], .feature .img[alt], i.fa[alt]').hover(
        function (e) {
          //do the mouseenter things here...
          var ImageDescription = $(this).attr("alt");
          $("#ImageDescription_magnify").text(ImageDescription);
          $('#ImageDescription_magnify').attr('style', 'display: block!important');
          $('#ImageDescription_magnify').attr('style', 'opacity: 1!important');

          //If #text_magnify is empty, hide
          if ($('#ImageDescription_magnify').is(':empty')) {
            $('#ImageDescription_magnify').attr('style', 'display: none!important');
            $('#ImageDescription_magnify').attr('style', 'opacity: 0!important');
          }
        },
        function (e) {
          //do the mouseleave things here...
          $('#ImageDescription_magnify').attr('style', 'display: none!important');
          $('#ImageDescription_magnify').attr('style', 'opacity: 0!important');
        }
      );

    } else {
      $("body").removeClass("ImageDescription");
      $('img[alt], .feature .img[alt], i.fa[alt]').hover(
        function (e) {
          //do the mouseleave things here...
          $('#ImageDescription_magnify').attr('style', 'display: none!important');
          $('#ImageDescription_magnify').attr('style', 'opacity: 0!important');
        });
    } //end of else
  }); //end of change
}); // end of function








// Toggle Text-to-Speech click
$(function () {
  $('[id="ToggleTTS_click"]').change(function () {
    if ($(this).is(':checked')) {

      $(".audio_state").hide()
      $("body").addClass("TTS_click_enabled");
      $(".audio_state").fadeIn(600)


    } else {
      $(".audio_state").fadeOut(500)
      setTimeout(() => {
        $("body").removeClass("TTS_click_enabled");
        $.cookie('TTS_click_enabled', 'false');
      }, 500);


    }
  });
});


// $(document).keydown(function (e) {
//   if (e.shiftKey && e.which == 110) { // Shift + .(on num board)
//     $('[id="ToggleTTS_click"]').prop('checked', true);
//     $("body").addClass("TTS_click_enabled");
//     $.cookie('TTS_click_enabled', 'true');
//   }
//   if (e.shiftKey && e.which == 190) { // Shift + .
//     $('[id="ToggleTTS_click"]').prop('checked', true);
//     $("body").addClass("TTS_click_enabled");
//     $.cookie('TTS_click_enabled', 'true');
//   }
//   if (e.shiftKey && e.which == 88) { // Shift + x
//     $('[id="ToggleTTS_click"]').prop('checked', false);
//     $("body").removeClass("TTS_click_enabled");
//     $.cookie('TTS_click_enabled', 'false');
//   }
// });



$(document).ready(function () {
  ////////////////// Page Structure ///////////////////

  // !-- -- -- -- -- --Footer-- -- -- -- -- - >
  var output2 = "";
  $('.navbar.Footer nav.affiliates li a, .navbar.Footer nav.additional_Links a').each(function () {
    var source2 = $(this).attr("href");
    var text2 = $(this).text();
    output2 += '<option value="' + source2 + '">' + text2 + '</option>';
    $("#select_page #footer_group").html(output2);
  });



  //////////// Change Letter Spacing ///////////////////
  $("#letter_spacing").on('change', function () {
    var getLetterSpace = $(this).val();
    $("#view *").not('#ADA_widget, #ADA_widget *').css("letter-spacing", getLetterSpace); //Selects everything inside #view except ada modal and header
    $(".Footer").css("letter-spacing", getLetterSpace);
  });


  //////////// Change Word Spacing ///////////////////
  $("#word_spacing").on('change', function () {
    var getWordSpace = $(this).val();
    $("#view *").not('#ADA_widget, #ADA_widget *').css("word-spacing", getWordSpace); //Selects everything inside #view except ada modal and header
    $(".Footer").css("word-spacing", getWordSpace);
  });






  /////////////////////////////////////////////////////////  TEXT TO SPEECH - with on click //////////////////////////////////////////////////////////////
  //Hides TTS on Android Devices
  function getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (userAgent.match(/Android/i)) {
      //return 'Android';
      $('#TTS_option').hide();

    }
  }

  const resetSpeech = () => {
    $('.curr-active-item').removeClass('curr-active-item')
    $('.play').removeClass('audio-playing audio-paused')
    $('.play').addClass('audio-inactive')
    $('.play').find('.fa').removeClass('fa-pause')
    $('.play').find('.fa').addClass('fa-play ')
    synth.cancel();
  }

  var speechVol = $.cookie("speechVolCookie");
  var speechRate = $.cookie("speechRateCookie");
  var speechPitch = $.cookie("speechPitchCookie");

  const getCookieVal = (cookie) => {
    let value = 5
    if ($.cookie(cookie)) {
      value = $.cookie(cookie)
    }
    return value
  }
  let volValue = getCookieVal(speechVol)

  getMobileOperatingSystem();
  // roundSlider.js -- https://roundsliderui.com/
  $("#volume").roundSlider({
    sliderType: "min-range",
    radius: 60,
    showTooltip: true,
    width: 10,
    value: volValue.speechVol ? volValue.speechVol : 5,
    step: 1,
    handleSize: 0,
    max: 10,
    min: 0,
    handleShape: "square",
    circleShape: "half-top",
    change: function (e) {
      resetSpeech()
      $.cookie("speechVol", e.value, { path: '/' })

    }

  });


  $("#rate").roundSlider({
    sliderType: "min-range",
    radius: 60,
    showTooltip: true,
    width: 10,
    value: volValue.speechRate ? volValue.speechRate : 5,
    step: 1,
    handleSize: 0,
    max: 10,
    min: 0,
    handleShape: "square",
    circleShape: "half-top",
    change: function (e) {
      resetSpeech()
      $.cookie("speechRate", e.value, { path: '/' })
    }

  });

  $("#pitch").roundSlider({
    sliderType: "min-range",
    radius: 60,
    showTooltip: true,
    width: 10,
    value: volValue.speechPitch ? volValue.speechPitch : 5,
    step: 1,
    handleSize: 0,
    max: 10,
    min: 0,
    handleShape: "square",
    circleShape: "half-top",
    change: function (e) {
      resetSpeech()
      $.cookie("speechPitch", e.value, { path: '/' })
    }

  });


  const resetVoiceSettings = () => {
    $("#volume").roundSlider({
      value: 5
    });
    $("#rate").roundSlider({
      value: 5
    });
    $("#pitch").roundSlider({
      value: 5
    });
  }

  const resetVoiceDefault = () => {
    if ($("#voice option[value='Microsoft David - English (United States)']").length > 0) {

      return $("#voice").val('Microsoft David - English (United States)');
    } else {

      return $("#voice").val($("#voice option:first").val());
    }
  }



  const resetVoiceBtn = document.querySelector('#reset-voice-btn')
  resetVoiceBtn.addEventListener('click', () => {
    $.removeCookie('voiceCookie');
    resetVoiceSettings()
    resetSpeech()
    resetVoiceDefault()

  })


  $("#volume input").addClass("volume_selector");
  $("#rate input").addClass("rate_selector");
  $("#pitch input").addClass("pitch_selector");


  $("<span class='headings'>Volume</span>").appendTo("#volume");
  $("<span class='headings'>Rate</span>").appendTo("#rate");
  $("<span class='headings'>Pitch</span>").appendTo("#pitch");


  let ssu;
  let voices;
  var synth = window.speechSynthesis;
  var voiceSelect = document.getElementById('voice');
  var volumeInput = document.querySelector('.volume_selector');
  var rateInput = document.querySelector('.rate_selector');
  var pitchInput = document.querySelector('.pitch_selector');

  // Fetch the list of voices and populate the voice options.
  function loadVoices() {
    // Fetch the available voices.
    var voiceList = speechSynthesis.getVoices();

    // Loop through each of the voices.
    voiceList.forEach(function (voice, i) {

      //Returns Microsoft Mark, Microsoft Zira & Google US English
      // if (i !== 1 && i !== 2 && i !== 4) return;

      // Create a new option element.
      var option = document.createElement('option');

      // Set the options value and text.
      option.value = voice.name;
      option.innerHTML = voice.name;

      // Add the option to the voice selector.
      voiceSelect.appendChild(option);

    });
  }

  // Execute loadVoices.
  loadVoices();

  // Chrome loads voices asynchronously.
  synth.onvoiceschanged = function (e) {
    loadVoices();
  };

  $(document).ready(function () {
    initSpeechSynthesis();
  });

  $("#voice").on("change", function (e) {
    resetSpeech()

    let currVoice = $('#voice').find(":selected").text();

    var voiceCookie = $.cookie("speechVoiceCookie");
    $.cookie("voiceCookie", currVoice, { path: '/' })
  });



  setTimeout(() => {
    if ($.cookie("voiceCookie")) {
      let cookieValue = $.cookie("voiceCookie")
      $("#voice").val(cookieValue)
    } else {
      resetVoiceDefault()
    }
  }, 500);





  $('<div class="audio_state">\
  <button class="play audio-inactive btn " title="Play"><i class="fa fa-play" aria-hidden="true"></i></button>\
  <button class="stop btn " title="Cancel"><i class="fa fa-refresh" aria-hidden="true"></i> Reset</button>\
  </div>').insertAfter("p");
  /*
  <button role="button" type="button" class="play btn btn-danger" title="Play"><i class="fa fa-volume-up" aria-hidden="true"></i></button>\
  <button role="button" type="button" class="pause btn btn-danger" title="Pause"><i class="fa fa-pause" aria-hidden="true"></i></button>\
  <button role="button" type="button" class="resume btn btn-danger" title="Resume"><i class="fa fa-refresh" aria-hidden="true"></i></button>\
  <button role="button" type="button" class="stop btn btn-danger" title="Cancel"><i class="fa fa-stop" aria-hidden="true"></i></button>\
  */

  //https://stackoverflow.com/a/30361156/10792033
  //Wrapping groups of adjacent siblings
  $('div.audio_state').each(function () {
    $(this)
      .prev()
      .addBack()
      .wrapAll('<section class="TTS_content"></section>');
  });


  /***** ON Play CLICK *****/
  $('div.audio_state .play').each(function (index) {
    $(this).click(function () {
      if (!$(this).hasClass('curr-active-item')) {
        resetSpeech()
        $(this).addClass('curr-active-item')
      }
      $(this).find('.fa').removeClass('fa-pause')
      $(this).find('.fa').addClass('fa-play ')
      if ($(this).hasClass('audio-playing')) {
        $(this).removeClass('audio-inactive audio-playing')
        $(this).addClass('audio-paused')
        synth.pause()
      } else {
        $(this).find('.fa').removeClass('fa-play');
        $(this).find('.fa').addClass('fa-pause');
        if ($(this).hasClass('audio-inactive')) {
          $('.play').removeClass('audio-inactive audio-paused')
          synth.cancel();
          ssu.text = $(this).parent("div.audio_state").prev("p").text();
          ssu.volume = parseFloat(volumeInput.value / 10);
          ssu.rate = parseFloat(rateInput.value / 5);
          ssu.pitch = parseFloat(pitchInput.value / 5);
          if (voiceSelect.value) {
            ssu.voice = speechSynthesis.getVoices().filter(function (voice) {
              return voice.name == voiceSelect.value;
            })[0];
          }
          $(this).addClass('audio-playing')
          synth.speak(ssu);
          ssu.addEventListener("end", (event) => {
            resetSpeech()
          });
        } else if ($(this).hasClass('audio-paused')) {

          $(this).removeClass('audio-inactive audio-paused')
          $(this).addClass('audio-playing')
          synth.resume()
        }
      }
    });
  });



  //Global Cancels Speech on reset button
  $(".stop").on("click", function () {
    resetSpeech()
  });



  $("#ADA_trigger").click(function () {
    $("#ADA_trigger").fadeOut();
    resetSpeech()
  });

  // Cancels all utterances if the user leaves the site.
  window.onbeforeunload = function (e) {
    resetSpeech()
  };


  function initSpeechSynthesis() {
    if (!('speechSynthesis' in window)) {
      alert("Sorry, your browser doesn't support text to speech!");
      return;
    }
    ssu = new SpeechSynthesisUtterance();
    ssu.lang = 'en-US';
  };

  // reset all when vol/pitch/rate are changed

}); //end of doc ready








$(document).ready(function () {
  $("#keydownTip").click(function () {
    $('#tooltip_template').toggleClass("toast_close");
  });
});

// Get the modal

var ADA_widget = document.getElementById("ADA_widget");

// Get the button that opens the ADA_widget
var OpenADA_widget = document.getElementById("ADA_trigger");

// Get the <span> element that closes the ADA_widget
var CloseADA_widget = document.getElementsByClassName("ADA_close")[0];

// When the user clicks the button, open the ADA_widget
OpenADA_widget.onclick = function () {
  displayModal()
}

// When the user clicks on <span> (x), close the ADA_widget
CloseADA_widget.onclick = function () {
  // ADA_widget.style.display = "none";
  displayModal()

  setTimeout(() => {
    $("#ADA_trigger").fadeIn('slow');
  }, 800);


  // $("body").css("overflow", "auto");
}

// When the user clicks anywhere outside of the ADA_widget, close it
window.onclick = function (event) {
  if (event.target == ADA_widget) {
    // ADA_widget.style.display = "none";
    displayModal()

    setTimeout(() => {
      $("#ADA_trigger").fadeIn('slow');
    }, 800);
    // $("body").css("overflow", "auto");
    // $(".modal-backdrop").css("display", "none");
    // $("#keyboard_shortcuts").css("display", "none");
  }
}

const preventPageScroll = () => {
  var top = 0

  var pageHeight = document.documentElement.scrollHeight;
  var bottom = top + pageHeight - $(window).height();
  $(document).on("scroll", function (e) {
    var windowScrollTop = $(window).scrollTop();
    if (windowScrollTop < top) {
      $(document).scrollTop(top);
    }
    else if (windowScrollTop > bottom) {
      $(document).scrollTop(bottom);
    }
    else {
      return;
    }
  });
}

window.addEventListener("resize", (event) => {
  if (document.body.classList.contains('ReadingMask_ON')) {
    setTimeout(() => {
      location.reload()
    }, 500);
  } else {
    return;
  }
});

//prevent page scroll if checked
$(function () {
  $('#ToggleReadingMask').change(function () {
    if ($('#ToggleReadingMask').is(':checked')) {
      console.log('reading mask checked')
      window.scrollTo(0, 0);
      preventPageScroll()

    } else {
      console.log('reading mask not checked')
    }
  });
});

//////////// Reading Mask ///////////////////
//More focus & fewer distractions
$(document).bind('mousemove', function (e) {

  // console.log(e.pageY)
  $('#top_mask').css({
    top: e.pageY - 1300
  });

  $('#bottom_mask').css({
    top: e.pageY + 20
  });
});


////////////image description magnify///////////////////
$(document).on('mousemove', function (e) {
  $('#ImageDescription_magnify').css({
    left: e.pageX,
    top: e.pageY
  });
});


const keyTogglerFunc = (itemId, itemClass) => {
  if ($(itemId).is(':checked')) {
    $(itemId).prop('checked', false).trigger('change');
  } else {
    $(itemId).prop('checked', true).trigger('change');
  }
}

const removeAllCookies = () => {
  $.removeCookie('BackgroundColorCookie');
  $.removeCookie('TextColorCookie');
  $.removeCookie('LinkColorCookie');
  $.removeCookie('TextMagnifier');
  $.removeCookie('HighlightLinks');
  $.removeCookie('ImageDescription');
  $.removeCookie('HighlightHover');
  $.removeCookie('FontSizeCookie');
  $.removeCookie('FM_FontSizeCookie');
  $.removeCookie('BaskervilleFontCookie');
  $.removeCookie('DyslexicFontCookie');
  $.removeCookie('FM_FontTypeCookie');
  $.removeCookie('CursorEnlargeCookie');
  $.removeCookie('DarkContrastBackgroundCookie');
  $.removeCookie('LowSaturationBackgroundCookie');
  $.removeCookie('InvertBackgroundCookie');
  $.removeCookie('HighSaturationBackgroundCookie');
  $.removeCookie('FM_DesaturatedBackgroundCookie');
  $.removeCookie('DesaturatedBackgroundCookie');
  $.removeCookie('FM_InvertBackgroundCookie');
  $.removeCookie('FM_DarkContrastCookie');
  $.removeCookie('SeizureSafe');
  $.removeCookie('ReadingMask');
  $.removeCookie('CursorGuide');
  $.removeCookie('TTS_click_enabled');
  $.removeCookie('LinpageHeightVal');
  $.removeCookie('WordSpaceVal');
  $.removeCookie('LetterSpaceVal');
  $.removeCookie('speechPitch');
  $.removeCookie('speechRate');
  $.removeCookie('speechVol');
  $.removeCookie('voiceCookie');
}




// function resetAdaModal() {
//   removeAllCookies()
//   storeMainScrollPosition()
//   sessionStorage.setItem("reloadModalOpen", "true");
//   $("body").fadeOut()
//   setTimeout(() => {
//       document.location.reload();
//   }, 200);
// }

// toggle reading mask on ctrl + m
document.addEventListener('keydown', (event) => {
  var name = event.key;
  if (name === 'Shift') return
  if (event.shiftKey) {
    name === "!" && keyTogglerFunc('#ToggleHighlightHover')
    name === "@" && keyTogglerFunc('#ToggleHighlightLinks')
    name === "#" && keyTogglerFunc('#ToggleTextMagnifier')
    name === "$" && keyTogglerFunc('#ToggleImageDescription')
    name === '%' && keyTogglerFunc('#ToggleSeizure')
    name === "^" && keyTogglerFunc('#ToggleReadingMask')
    name === '&' && keyTogglerFunc('#ToggleReadingGuide')
    name === '*' && keyTogglerFunc('#ToggleTTS_click')
    if (name === 'Q') {


      resetAdaModal()
    }
    name === 'A' && displayModal()


  } else {
    return;
  }
}, false);




// $(document).ready(function(){
//   var top = window.innerHeight.offset().top;
//   $(document).scrollTop(top);
//   var pageHeight = window.innerHeight;
//   var bottom = top + pageHeight - $(window).height();
//   $(document).on("scroll", function(e){
//       var windowScrollTop = $(window).scrollTop();
//       if(windowScrollTop < top){
//           console.log("not allowed");
//           $(document).scrollTop(top);
//       }
//       else if(windowScrollTop > bottom){
//           $(document).scrollTop(bottom);
//       }
//       else{
//           console.log("allowed");
//       }
//   });
// });

setTimeout(() => {
  if (document.body.classList.contains('ReadingMask_ON')) {
    setTimeout(() => {
      window.scrollTo(0, 0);
      console.log('scrolled to top')
    }, 100);
    setTimeout(() => {
      preventPageScroll()
      console.log('prevented scroll on page load')
    }, 500);

  }
}, 100);

var hasTouchScreen = false;

if ("maxTouchPoints" in navigator) {
  hasTouchScreen = navigator.maxTouchPoints > 0;
} else if ("msMaxTouchPoints" in navigator) {
  hasTouchScreen = navigator.msMaxTouchPoints > 0;
} else {
  var mQ = window.matchMedia && matchMedia("(pointer:coarse)");
  if (mQ && mQ.media === "(pointer:coarse)") {
    hasTouchScreen = !!mQ.matches;
  } else if ('orientation' in window) {
    hasTouchScreen = true; // deprecated, but good fallback
  } else {
    // Only as a last resort, fall back to user agent sniffing
    var UA = navigator.userAgent;
    hasTouchScreen = (
      /\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(UA) ||
      /\b(Android|Windows Phone|iPad|iPod)\b/i.test(UA)
    );
  }
}

if (hasTouchScreen) {
  console.log('this is a touch screen')
} else {
  console.log('this is a desktop')
}