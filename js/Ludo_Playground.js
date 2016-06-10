function card_based_content_responsive() {
    var screen_width = $(window).width()
    var total_column = 0;
    switch (true) {
        case screen_width >= 1285:
            total_column = 6;
            break;
        case screen_width >= 1095:
            total_column = 5;
            break;
        case screen_width >= 930:
            total_column = 4;
            break;
        case screen_width >= 770:
            total_column = 3;
            break;
        case screen_width >= 550:
            total_column = 2;
            break;
        case screen_width < 550:
            total_column = 1;

            break;
    }
    var total_height_of_column = new Array(total_column); 

    // array initiation
    for (var i = 0; i < total_column; i++) {
        total_height_of_column[i] = 0;
    }

    var post = 0;
    var post_height = 0;
    var current_col = 0;
    var current_left_distance = 0;

    var main = $('.main-content');
    var total_post = main.children().length;

    // positioning column
    for (var post_num = 0; post_num < total_post; post_num++) {
        current_col = post_num % total_column;

        // x axis
        current_left_distance = 100 / total_column * current_col + '%';
        $('.column-' + post_num).css('left', current_left_distance);

        // y axis
        $('.post-'+post_num).css('top', total_height_of_column[current_col]);

        // get height of current post
        post = main.children().children().eq(post_num);
        post_height = post.height();
        total_height_of_column[current_col] = total_height_of_column[current_col] + post_height + 10;
    }
}

$(window).load(function() {
    card_based_content_responsive();
    $( window ).resize(card_based_content_responsive);
})