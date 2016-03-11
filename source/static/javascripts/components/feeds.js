define(['jquery', 'mustache'], ($, Mustache) => {
    const TEMPLATE = $('template#feed').html();


    function add($feeds, feed) {
        let $feed = Mustache.render(TEMPLATE, feed);
        $feeds.prepend($feed);
        if ($feeds.scrollTop() < 100) {
            $feeds.scrollTop(0);
        }
        return $feed;
    }


    return function feeds($feeds) {
        return {
            add: (feed) => add($feeds, feed)
        };
    };
});
