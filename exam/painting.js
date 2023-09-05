function painting(input) {
    let paint = Number(input[0]);
    let wallpaper = Number(input[1]);
    let gloves = Number(input[2]);
    let brush = Number(input[3]);

    let paintCost = 21.5 * paint;
    let wallpaperCost = 5.2 * wallpaper;
    let glovesAmount = Math.ceil(0.35 * wallpaper);
    let brushesAmount = Math.floor(0.48 * paint);

    let glovesPrice = gloves * glovesAmount;
    let brushPrice = brush * brushesAmount;

    let total = paintCost + wallpaperCost + glovesPrice + brushPrice;

    let res = (total / 15);

    console.log(`This delivery will cost ${res.toFixed(2)} lv.`)
}

painting(["1","3","10.9","1"])