#Snowfall

Simple easy-to-use and easy-to-set-up lightweight plugin for snowfall effect on your site.

##Contents
- description;
- installation and set up;
- customization;
- credits;
- TODOs.

##Description
Snowfall plugin uses snowfall library to set up snow effect. For more info about the library [go here](https://github.com/KupnoH/snowfall).
Plugin is very easy to install and use.
Though some coding needed to set this plugin up it's very easy and *Installation* section explains it in details.

##Installation and set up
###Installation
To install the plugin do the same steps you do for installing wordpress plugins.
###Set up
The set up for the plugin is a bit harder, but I'll explain it in details:
The plugin allows to set up snowfall effect in 2 ways:
1. via WordPress actions
2. manually.

####1. WordPress actions.
Plugin provides action `snowfall_main_tag_action` which adds necessary blocks and queues necessary scripts. This is why this set up is easier.
To make it work add the following code right after `<body>` opening tag:

`<?php do_action('snowfall_main_tag_action'); ?>`

When this action will be added, and the plugin will be enabled you will see the snowfall effect on your site. 
####2. Manual set up
As mentioned above manual set up is a bit harder than set up through Wordpress actions.
To set up plugin manually you need to:
- add `<div id="some-unique-id"></div>` right after `<body>` opening tag. 
**NOTE:** the `id` attribute for this block should be unique.
- create the following javascript snippet: `new Snowfall("some-unique-id");` **NOTE:** `some-unique-id` from this code snippet should be the same as `id` attribute from the block you created above.
- enqueue the code snippet from the step above after `snowfall` script (`snowfall` - is a script's handle for more info see [wp_enqueue_script](https://developer.wordpress.org/reference/functions/wp_enqueue_script/))
- now activate the plugin if it's still disabled and you will see the snowfall effect on your site.

##Customization
To customize the snowfall effect(increase/decrease number of snowflakes, increase/decrease it's size/color etc) you have 2 options:
- do it manually yourself (some coding knowledge required) 
- ask me to do it for you

If you chose to do it yourself, please refer to [snowfall library documentation](https://github.com/KupnoH/snowfall).

If you want me to do it for you, please write me an email to `kupnoh25@gmail.com` with Subject `Snowfall customization` and we would discuss further details.

##Credits
Huge thanks to [redstapler](https://redstapler.co/) because the snowfall library this plugin uses based on [cool tutorial from them](https://www.youtube.com/watch?v=8eyAoBBucHk) which you can use as an example of how it looks like.
Also, huge thanks to [me](https://github.com/KupnoH), because I did snowfall library available for almost every site and made a port of it for WordPress.
Big thanks and tons of love to my wife, who inspires me a lot. Love you, darling.
And thanks to my cat.

##TODOs:
- add some TODOs