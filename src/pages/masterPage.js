// API Reference: https://www.wix.com/velo/reference/api-overview/introduction
// “Hello, World!” Example: https://learn-code.wix.com/en/article/hello-world

import wixLocation from 'wix-location';

$w.onReady(function () {
    // Handle navigation messages from the HTML nav component
    $w('#html1').on('message', (event) => {
        if (event.data && event.data.href) {
            wixLocation.to(event.data.href);
        }
    });
});
