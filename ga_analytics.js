var ga_event = function(label, category, action ) {
    category = typeof category !== 'undefined' ? category : 'button';
    action = typeof action !== 'undefined' ? action : 'click';
    ga('send', 'event', category, action, label);
}

ga_event('mobile book now');

ga_event('mobile book now', 'link');

ga_event('User below the fold', 'Scroll', 'Page interaction')