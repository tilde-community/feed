require(['jquery', 'components/feeds'], ($, _feeds) => {
    let feeds = _feeds($('.feeds-list'));

    setInterval(() => {
        feeds.add({
            body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            kind: ['world-enter', 'world-exit', 'player-level-up', 'player-finished', 'monster-found',
                'monster-search', 'monster-attack'][Math.floor(Math.random() * 7)]
        });
    }, 1000);
});
