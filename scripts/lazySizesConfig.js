window.lazySizesConfig = window.lazySizesConfig || {};

        // use .lazy instead of .lazyload
        // window.lazySizesConfig.lazyClass = 'lazy';

        // use data-original instead of data-src
        // lazySizesConfig.srcAttr = 'data-original';

        //  page is optimized for fast onload event. (default: 2): The loadMode can be used
        //  to constrain the allowed loading mode. Possible values are 0 = don't load anything,
        //  1 = only load visible elements, 2 = load also very near view elements (expand option)
        //  and 3 = load also not so near view elements (expand * expFactor option). This value
        //  is automatically set to 3 after onload. Change this value to 1 if you (also) optimize
        //  for the onload event or change it to 3 if your onload event is already heavily delayed.
        // lazySizesConfig.loadMode = 0;