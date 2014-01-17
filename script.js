$(document).ready(function() {
    $('input:reset').click(function(){
            str = ($( "form").serialize()).replace('new_item=', '');                
            str = '<div class="item">' + str + '</div>';
            $('#todo_list').prepend(str);
    });                    

    $(document).on('click', '.item', function () {
        $(this).remove(); 
    });
});
