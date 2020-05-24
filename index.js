function implement_list () {

    //Enter items they need to purchase by entering text and hitting "Return" or clicking the "Add item" button
    $('#js-shopping-list-form').submit(function (event) {
        const listItemName = $('#shopping-list-entry').val();
        $('.shopping-list').append('<li><span class="shopping-item">'
            + listItemName
            + '</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>'
        )
        event.preventDefault();
    })
    
    //check and uncheck items on the list by clicking the "Check" button
    $('.shopping-list').on('click', '.shopping-item-toggle', function (event) {
        const listItemSpan = $(this).closest('li').children('span');

        if (listItemSpan.hasClass('shopping-item__checked')) {
            listItemSpan.removeClass('shopping-item__checked');
        } else {
            listItemSpan.addClass('shopping-item__checked');
        }
    })

    //permanently remove items from the list
    $('.shopping-list').on('click', '.shopping-item-delete', function (event) {
        $(this).closest('li').remove();
    })


}

$(implement_list());
