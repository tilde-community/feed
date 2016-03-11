require(['jquery', 'components/feeds'], ($, _feeds) => {
    let feeds = _feeds($('.feeds-list'));

    const ENDPOINT = 'http://localhost:8000/activities';
    let lastFeed = 0;


    function fetchFeeds(callback) {
        $.ajax({
            url: ENDPOINT,
            type: 'GET',
            data: { last: lastFeed },
            success: (data) => {
                data = JSON.parse(data);
                lastFeed = data[data.length - 1].pk;
                callback(data);
            }
        });
    }


    setInterval(() => {
        fetchFeeds((data) => {
            data.forEach(feeds.add);
        });
    }, 100);
});
