// API Reference: https://www.wix.com/velo/reference/api-overview/introduction
// “Hello, World!” Example: https://learn-code.wix.com/en/article/hello-world

import wixLocation from 'wix-location';
import wixWindow from 'wix-window';

$w.onReady(function () {
    // Handle navigation messages from the HTML nav component
    $w('#html1').on('message', (event) => {
        if (event.data && event.data.href) {
            const href = event.data.href;
            if (href.startsWith('#')) {
                // Anchor link - scroll to section on same page
                const anchorId = href.substring(1);
                $w('#' + anchorId).scrollTo();
            } else {
                // Regular page link - navigate to page
                wixLocation.to(href);
            }
        }
    });
});
