
// initialize the speech synthesis library
let ssu;
let voices;
let synth = window.speechSynthesis;
let voiceSelect = document.getElementById('voice');
let volumeInput = document.querySelector('.volume_selector');
let rateInput = document.querySelector('.rate_selector');
let pitchInput = document.querySelector('.pitch_selector');

// Fetch the list of voices and populate the voice options.
const loadVoices = () => {
  // Fetch the available voices.
  if (document.querySelector('#voice').length === 0) {
    let voiceList = speechSynthesis.getVoices();

    // console.log(voiceList)
    // Loop through each of the voices.
    voiceList.forEach(function (voice, i) {
      // if (i !== 0 && i !== 2 && i !== 4 && i !== 5 && i !== 6) return;
      // if (voice.name !== 'Google US English' &&
      //   voice.name !== 'Google UK English Male' &&
      //   voice.name !== 'Microsoft David - English (United States)' &&
      //   voice.name !== 'English United States' &&
      //   voice.name !== 'Daniel' &&
      //   voice.name !== 'Samantha' &&
      //   voice.name !== 'Microsoft Jenny Online (Natural) - English (United States)' &&
      //   voice.name !== 'Microsoft Steffan Online (Natural) - English (United States)' &&
      //   voice.name !== 'English (USA,DEFAULT)') {
      //   return
      // }
      // console.log(voiceSelect)
      let option = document.createElement('option');
      option.value = voice.name;
      option.innerHTML = voice.name;
      voiceSelect.appendChild(option);

    });
    // if (document.querySelector('#voice').length === 0) {
    //   voiceList.forEach(function (voice, i) {
    //     let option = document.createElement('option');
    //     option.value = voice.name;
    //     option.innerHTML = voice.name;
    //     voiceSelect.appendChild(option);

    //   });
    // }
    // if (document.querySelector('#voice').length < 2) {
    //   $('#voice-settings-header').addClass('d-none')
    // }

  }
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
  let voiceCookie = $.cookie("speechVoiceCookie");
  $.cookie("voiceCookie", currVoice, { expires: 30 })
});

const resetVoiceDefault = () => {
  if ($("#voice option[value='Google US English']").length > 0) {
    return $("#voice").val('Google US English');
  } else {
    return $("#voice").val($("#voice option:first").val());
  }
}

setTimeout(() => {
  if ($.cookie("voiceCookie")) {
    let cookieValue = $.cookie("voiceCookie")
    $("#voice").val(cookieValue)
  } else {
    resetVoiceDefault()
  }
}, 500);