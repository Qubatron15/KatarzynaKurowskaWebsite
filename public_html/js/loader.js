function myFunction(view) {
    
    //$('.main-content').load('views/' + view + '.html');
    $.get('views/' + view + '.html', function( content ) {
        $('.main-content').html("<div class=\"content\">" + content  + "</div>");
    });
    
    $('.line').html("<div class=\"h-line\"></div>")
}