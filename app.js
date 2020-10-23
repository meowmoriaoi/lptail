const resizeOptimizeImages = require('resize-optimize-images');

(async () => {
    // Set the options.
    const options = {
        images: [
            'resize/res1.jpg',
            'resize/res2.jpg',
            'resize/res3.jpg',
            'resize/res4.jpg',
            'resize/res5.jpg',
            'resize/res6.jpg'
        ],
        width: 500
    };

    // Run the module.
    await resizeOptimizeImages(options);
})();