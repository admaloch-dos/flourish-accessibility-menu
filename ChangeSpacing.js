
// change css properties for letter/word spacing/lineheight
const setSpacingCss = (value, css) => {
    $("#view p").not('#ADA_widget, #ADA_widget *').css(css, value); //Selects everything inside #view except ada modal and header
    $(".Footer").css(css, value);
}

const selectChangeHandler = (icon, iconClass, itemId) => {
    if (icon.classList.contains(iconClass)) {
        if (icon.classList.contains('plus-icon')) {
            $(itemId).next().prop('selected', true).change();
        }
        if (icon.classList.contains('minus-icon')) {
            $(itemId).prev().prop('selected', true).change();
        }

    }
}

const spacingIcon = document.querySelectorAll('.spacing-icon')
spacingIcon.forEach(icon => {
    icon.addEventListener('click', () => {
        selectChangeHandler(icon, 'letter-spacing-icon', '#letter_spacing option:selected')
        selectChangeHandler(icon, 'word-spacing-icon', '#word_spacing option:selected')
        selectChangeHandler(icon, 'line-height-icon', '#line_height option:selected')
    })
})

const changeIndent = (value, amount, select) => {
    if (value !== amount) {
        $(select).css({ "text-indent": "6px" });
    } else {
        $(select).css({ "text-indent": "0px" });
    }
}

const restoreSpacingDefault = (itemId, removeItemArr) => {
    // $(itemId).val($(`${itemId} option:first`).val()).triggerChange()
    $(itemId).prop("selectedIndex", 0).trigger('change');
    checkIfWidgetActive()
    removeWidgetControls(removeItemArr)
}


$(document).ready(function () {
    // Letter Spacing
    var selectedVal = $.cookie("LetterSpaceVal");
    if (selectedVal) {
        $("#letter_spacing").val(selectedVal);
        $("#letter_spacing").prop("selected", true);
        $("#view p").not('#ADA_widget, #ADA_widget *, #widget-list li').css("letter-spacing", selectedVal); //Selects everything inside #view except ada modal and header
        $(".Footer").css("letter-spacing", selectedVal);
        changeIndent(selectedVal, '10px', '#LetterSpacing_option select')
    }
    $("#letter_spacing").on("change", function () {
        var selection1 = $(this).val();

        $(selection1).prop("selected", true);
        $("#view p").not('#ADA_widget, #ADA_widget *, #widget-list li').css("letter-spacing", selection1); //Selects everything inside #view except ada modal and header
        $(".Footer").css("letter-spacing", selection1);
        $.cookie("LetterSpaceVal", selection1, { path: '/' })
        changeIndent(selection1, '10px', '#LetterSpacing_option select')
        console.log(selection1)
        widgetItemObj.letterSpaceCookie = selection1 === 'inherit' ? false : true
        selection1 === 'inherit' ? removeWidgetControls(['letter_spacing']) : addWidgetControls('letter_spacing', 'Letter spacing')


        checkIfWidgetActive()
    });

    //Word Spacing
    var selectedVal2 = $.cookie("WordSpaceVal");
    if (selectedVal2) {
        $("#word_spacing").val(selectedVal2);
        $("#word_spacing").prop("selected", true);
        $("#view p").not('#ADA_widget, #ADA_widget *, #widget-list li').css("word-spacing", selectedVal2); //Selects everything inside #view except ada modal and header
        changeIndent(selectedVal2, '10px', '#WordSpacing_option select')
    }
    $("#word_spacing").on("change", function () {
        var selection2 = $(this).val();
        $(selection2).prop("selected", true);
        $("#view p").not('#ADA_widget, #ADA_widget *, #widget-list li').css("#word_spacing", selection2); //Selects everything inside #view except ada modal and header
        $(".Footer").css("#word_spacing", selection2);
        $.cookie("WordSpaceVal", selection2, { path: '/' })
        changeIndent(selection2, '10px', '#WordSpacing_option select')
        widgetItemObj.wordSpaceCookie = selection2 === 'inherit' ? false : true
        selection2 === 'inherit' ? removeWidgetControls(['word_spacing']) : addWidgetControls('word_spacing', 'Word spacing')
        checkIfWidgetActive()

    });

    //Line Height
    var selectedVal3 = $.cookie("LinpageHeightVal");
    if (selectedVal3) {
        $("#line_height").val(selectedVal3);
        $("#line_height").prop("selected", true);
        $("#view p").not('#ADA_widget, #ADA_widget *, #widget-list li').css("line-height", selectedVal3); //Selects everything inside #view except ada modal and header
        $(".Footer").css("line-height", selectedVal3);

        changeIndent(selectedVal3, '3.3', '#LineHeight_option select')
    }
    $("#line_height").on("change", function () {
        var selection3 = $(this).val();
        $(selection3).prop("selected", true);
        $("#view p").not('#ADA_widget, #ADA_widget *, #widget-list li').css("line-height", selection3); //Selects everything inside #view except ada modal and header
        $(".Footer").css("line-height", selection3);
        $.cookie("LinpageHeightVal", selection3, { path: '/' })

        changeIndent(selection3, '3.3', '#LineHeight_option select')
        console.log(selection3)
        widgetItemObj.lineHeightCookie = selection3 === 'inherit' ? false : true
        checkIfWidgetActive()
        selection3 === 'inherit' ? removeWidgetControls(['line_height']) : addWidgetControls('line_height', 'Line height')

    });
});

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

}); //end of doc ready