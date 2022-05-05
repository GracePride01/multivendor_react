var Index = {

    suggestions : [],

    init : function()
    {
        Index.bindEvents();
        //$('#getNewSuggestionsButton1').click();
               // Index.getSuggestionsFromServer('data/suggestions1.json');
                Index.getSuggestionsFromServer('notification/loadSuggestions');
        Index.initCkEditor();
    },

    bindEvents : function()
    {
        $('#getNewSuggestionsButton1').on('click', function()
        {
            Index.getSuggestionsFromServer('data/suggestions1.json');
        });

        $('#getNewSuggestionsButton2').on('click', function()
        {
            Index.getSuggestionsFromServer('data/suggestions2.json');
        });
    },

    initCkEditor : function()
    {
        //Here "CKEDITOR.SHIFT + 51" is the key combination for '#'
        $('textarea#ckeditorBox').ckeditor({ suggestionsTriggerKey: { keyCode: CKEDITOR.SHIFT + 51 }});
        CKEDITOR.on( 'instanceReady', function( evt ) {
            //Here 'Index.suggestions' is the Array which is holding the current list of suggestions
            CKEDITOR.instances.ckeditorBox.execCommand('reloadSuggetionBox',Index.suggestions);
        });
    },

    getSuggestionsFromServer : function(url)
    {
        Index.suggestions = [];
        Index.ajaxCall(url,'',Index.getSuggestionsFromServerCallback);
    },

    getSuggestionsFromServerCallback : function(response)
    {

        var sugggestions = response.sugggestions;

        $.each(sugggestions, function(index,sugggestion)
        {
            Index.suggestions.push({
                            "id" : sugggestion.id,
                            "label" : sugggestion.label
                        });
        });
        CKEDITOR.instances.ckeditorBox.execCommand('reloadSuggetionBox',Index.suggestions);
    },

    ajaxCall : function(urlForAjax,dataForAjax,successCallBack)
    {
               $.getJSON('/notification/loadSuggestions')
                        .done(function (resp) { console.log(resp);
                            successCallBack(resp);
                        })
    }   
}