/**
The docs for doing this type of thing are at 
https://developers.google.com/analytics/devguides/collection/analyticsjs/events
**/
window.onload = function () {
    'use strict';
    $('#currentYear').on('click', function () {
        ga('send', 'event', 'copyright', 'someone clicked the copyright');
        console.log('The jQuery event fired');
    });
};