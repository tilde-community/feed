define(['jquery', 'mustache'], ($, Mustache) => {
    const TEMPLATE = $('template#feed').html();


    function add($feeds, feed) {
        let height = $feeds[0].scrollHeight;
        let $feed = Mustache.render(TEMPLATE, feed);
        $feeds.prepend($feed);

        if ($feeds.scrollTop() < 100) {
            $feeds.scrollTop(0);
        } else {
            let difference = $feeds[0].scrollHeight - height;
            let scrollTop = $feeds.scrollTop() + difference;
            $feeds.scrollTop(scrollTop);
        }

        return $feed;
    }


    return function feeds($feeds) {
        return {
            add: (feed) => add($feeds, feed)
        };
    };
});
