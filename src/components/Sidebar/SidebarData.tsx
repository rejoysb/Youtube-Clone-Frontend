import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';

export const SidebarData = [
    {
        "title":"Home",
        "icon":<HomeIcon/>,
        "path":"/"
    },
    {
        "title":"Subscriptions",
        "icon":<SubscriptionsIcon/>,
        "path":"/subs"
    },
    {
        "title":"Trending",
        "icon":<WhatshotIcon/>,
        "path":"/trending"
    },
    {
        "title":"Liked Videos",
        "icon":<ThumbUpAltIcon/>,
        "path":"/likes"
    }
]

