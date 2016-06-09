$(window).load(function() {
    // positioning 4 column-x axis
    $('.column1').css('left', '0');
    $('.column2').css('left', '25%');
    $('.column3').css('left', '50%');
    $('.column4').css('left', '75%');

    var total_column = 4;
    var total_height_of_column = new Array(total_column); 

    // array initiation
    for (var i = 0; i < total_column; i++) {
        total_height_of_column[i] = 0;
    }

    var post = 0;
    var post_height = 0;

    var main = $('.main');
    var total_post = main.children().length;

    for (var i = 0; i < total_post; i++) {
        // get height of post
        post = main.children().eq(i);
        post_height = post.height();

        // positioning 4 column-y axis
        switch (i%total_column) {
            case 0:
                $('.post-'+i).css('top', total_height_of_column[0]);
                total_height_of_column[0] = total_height_of_column[0] + post_height;
                break;
            case 1:
                $('.post-'+i).css('top', total_height_of_column[1]);
                total_height_of_column[1] = total_height_of_column[1] + post_height;
                break;
            case 2:
                $('.post-'+i).css('top', total_height_of_column[2]);
                total_height_of_column[2] = total_height_of_column[2] + post_height;
                break;
            case 3:
                $('.post-'+i).css('top', total_height_of_column[3]);
                total_height_of_column[3] = total_height_of_column[3] + post_height;
                break;
        }
        console.log(total_height_of_column);
    }
})

