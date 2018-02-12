$("document").ready(function(){


    // edit button click
    $(".glyphicon-edit").on("click", function(){
            $(this).parent()
            .children(":nth-child(1)")
            .replaceWith(`
                 <input type text placeholder='task name' />
            `);
    });



});