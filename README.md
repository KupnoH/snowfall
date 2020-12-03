#Snowfall

Simple easy-to-use and easy-to-set-up lightweight library for snowfall effect on your site. No dependencies required.

##Contents
- Installation;
- Customization;
- Credits;
- TODOs.

##Installation
The set up for this library is very easy.
- download library's files and place them in your project's assets;
- add library's styles in a header. You can use `snowfall.min.css`, or `snowfall.css` or even `src/snowfall.css` which is generated from `snowfall.scss` file;
- add library's script in a footer. You can use `snowfall.min.js` or `src/snowfall.js`;
- right after opening `<body>` tag add `<div id="some-unique-id></div>` block, where specify `some-unique-id`;
- right after library's script add `new Snowfall("some-unique-id");` where you should specify the unique id from the previous step;
- save all the files and voila!

##Customization
To customize the snowfall effect(increase/decrease number of snowflakes, increase/decrease it's size/color etc) you need to edit `src/_snow_vars.scss`. But, please, make sure you have scss compiler installed. Alternatively, you can edit `snowfall.css`.
Most of the things placed into `src/_snow_vars.scss`. So you just can edit them.
There are 3 snowflakes layers for a better snow effect, which reflects on the number of some variables.
Here the short description for variables:
- $snowflake1_color - color for the first layer of snowflakes (#fafafa - default);
- $snowflake2_color - color for the second layer of snowflakes (#f9f9f9 - default);
- $snowflake3_color - color for the third layer of snowflakes (#fbfbfb - default);
- $snowflakes_num - the number of snowflakes (default - 150);
- $snowflakes_size - snowflake size (default - 1rem);
- $snowflakes_step - snowflake size change step (default - 0.3rem) (used for 2nd and 3rd layers);
- $snowflake_animation_duration - used for snowflake's "lifetime" (default - 8s);
- $snowflake_animation_duration_step - used for changing snowflake's "lifetime" (default - 2s) (used for 2nd and 3rd layers);

Of course, there are more stuff to change if you want. So feel free to browse through `src/snowfall.scss` and edit it as you wish. Though editing only this variables can change snowfall behavior.

If you think this instructions are incomplete or you want to ask me something, feel free to write me an email `kupnoh25@gmail.com`.

##Credits
Huge thanks to [redstapler](https://redstapler.co/) because the snowfall library this plugin uses based on [cool tutorial from them](https://www.youtube.com/watch?v=8eyAoBBucHk) which you can use as an example of how it looks like.

Also, huge thanks to [me](https://github.com/KupnoH), because I did snowfall library available for almost every site and made a port of it for WordPress.

Big thanks and tons of love to my wife, who inspires me a lot. Love you, darling.

And thanks to my cat.

##TODOs:
- add some TODOs