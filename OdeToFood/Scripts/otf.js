﻿


$(function () {

    var ajaxFormSubmit = function () {
        var $form = $(this);
        var option = {
            url: $form.attr("action"),
            type: $form.attr("method"),
            data: $form.serialize()
        };
        $.ajax(option).done(function (data) {
            var $target = $($form.attr("data-otf-target"));
            var $newHtml = $(data);
            $target.replaceWith($newHtml);
            $newHtml.effect("highlight");
        });
        return false;
    };

    var submitAutocompleteForm = function (event, ui) {
        var $input = $(this);
        $input.val(ui.item.label);
        var $form = $input.parents("form:first");
        $form.submit();
    };

    var createAutocomplete = function () {
        var $input = $(this);
        var options = {
            source: $input.attr("data-otf-autocomplete"),
            select:submitAutocompleteForm
        };

        $input.autocomplete(options);
    };

    var getPage = function () {
        var $a = $(this);
        var options = {
            url: $a.attr("href"),
            data:$("form").serialize(),
            type:"get"
        };
        $.ajax(options).done(function (data) {
            var target = $a.parents("div.pagedList").attr("data-otf-target");
            $(target).replaceWith(data);
        });
        return false;
    };

    $("form[data-otf-ajax='true']").submit(ajaxFormSubmit);
    $("input[data-otf-autocomplete]").each(createAutocomplete);
    $(".body-content").on("click",".pagedList a",getPage);

});