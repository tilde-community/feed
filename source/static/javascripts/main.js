require(['jquery', 'components/feeds'], ($, _feeds) => {
    let feeds = _feeds($('.feeds-list'));

    const ENDPOINT = 'http://localhost:8000/api/activities';
    let lastFeed = 0;


    function fetchFeeds(callback) {
        $.ajax({
            url: ENDPOINT,
            type: 'GET',
            data: { pk__gt: lastFeed },
            success: (data) => {
                lastFeed = data[data.length - 1].pk;
                callback(data);
            }
        });
    }


    setInterval(() => {
        fetchFeeds((data) => {
            data.forEach(feeds.add);
        });
    }, 500);
});
