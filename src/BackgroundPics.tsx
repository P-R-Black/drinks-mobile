const imageUrlDefault = { uri: '/Users/paulblack/VS Code/DrinksAppRA/assets/images/keeps_guide_assets/pexels-rachel-default.jpg' }
const imgUrlLime = { uri: '/Users/paulblack/VS Code/DrinksAppRA/assets/images/keeps_guide_assets/pexels-lisa-f.jpg' }
const imgUrlOrange = { uri: '/Users/paulblack/VS Code/DrinksAppRA/assets/images/keeps_guide_assets/pexels-j-lewis.jpg' }

// const imgUrlLemon = { uri: '/Users/paulblack/VS Code/DrinksAppRA/assets/images/keeps_guide_assets/pexels-lukas.jpg' }
const imgUrlLemon = { uri: '/Users/paulblack/VS Code/DrinksAppRA/assets/images/keeps_guide_assets/small-lemons-side.jpg' }

const imgUrlColaUp = { uri: '/Users/paulblack/VS Code/DrinksAppRA/assets/images/keeps_guide_assets/pexels-cola-up.jpg' }
const imgUrlBloodOrange = { uri: '/Users/paulblack/VS Code/DrinksAppRA/assets/images/keeps_guide_assets/pexels-blood-orange-wedge.jpg' }
const imgUrlRedLemonSlice = { uri: '/Users/paulblack/VS Code/DrinksAppRA/assets/images/keeps_guide_assets/pexels-red-lemon-slice.jpg' }
const imgUrlChampagneBot = { uri: '/Users/paulblack/VS Code/DrinksAppRA/assets/images/keeps_guide_assets/pexels-champagne-bottles.jpg' }
const imgUrlMojito = { uri: '/Users/paulblack/VS Code/DrinksAppRA/assets/images/keeps_guide_assets/pexels-lime-mint-drinks.jpg' }
const imgUrlScotchTopDown = { uri: '/Users/paulblack/VS Code/DrinksAppRA/assets/images/keeps_guide_assets/pexels-scotch-topdown.jpg' }
const imgUrlOrangeSlices = { uri: '/Users/paulblack/VS Code/DrinksAppRA/assets/images/keeps_guide_assets/pexels-orange-slices.jpg' }
const imgUrlWhiteWine = { uri: '/Users/paulblack/VS Code/DrinksAppRA/assets/images/keeps_guide_assets/pexels-white-wine.jpg' }
const imgUrlRoseWine = { uri: '/Users/paulblack/VS Code/DrinksAppRA/assets/images/keeps_guide_assets/pexels-polina-rose-over.jpg' }
const imgUrlRumGold = { uri: '/Users/paulblack/VS Code/DrinksAppRA/assets/images/keeps_guide_assets/pexels-eva-gold.jpg' }


let gin = [imgUrlLime, imgUrlLemon, imgUrlBloodOrange, imgUrlRedLemonSlice];
let rum = [imgUrlColaUp, imgUrlMojito];
let tequila = [imgUrlLime, imgUrlOrange, imgUrlLemon];
let whiteWine = [imgUrlWhiteWine, imgUrlChampagneBot];
let sloeGin = [imgUrlBloodOrange, imgUrlRedLemonSlice];

export const BackgroundPics = (alc: string) => {

    let new_alc = alc

    let backgroundImage;
    switch (new_alc.toLocaleLowerCase()) {
        case "absinthe":
            backgroundImage = imgUrlLemon;
            break;
        case "amaretto":
            backgroundImage = imgUrlScotchTopDown;
            break;
        case "aquavit":
            backgroundImage = imgUrlBloodOrange;
            break;
        case "bourbon":
            backgroundImage = imgUrlScotchTopDown;
            break;
        case "brandy":
            backgroundImage = imgUrlScotchTopDown;
            break;
        case "cachaca":
            backgroundImage = imgUrlLime;
            break;
        case "champagne":
            backgroundImage = imgUrlChampagneBot;
            break;
        case "cognac":
            backgroundImage = imgUrlScotchTopDown;
            break;
        case "creme-de-menthe":
            backgroundImage = imgUrlScotchTopDown;
            break;
        case "gin":
            backgroundImage = gin[Math.floor(Math.random() * gin.length)];
            break;
        case "mezcal":
            backgroundImage = imgUrlOrangeSlices;
            break;
        case "non-alcoholic":
            backgroundImage = imageUrlDefault; // update 
            break;
        case "rose-wine-aperitif":
            backgroundImage = imgUrlRoseWine;
            break;
        case "rum":
            backgroundImage = rum[Math.floor(Math.random() * rum.length)];
            break;
        case "rum-dark":
            backgroundImage = imgUrlColaUp;
            break;
        case "rum-gold":
            backgroundImage = imgUrlRumGold;
            break;
        case "rum-light":
            backgroundImage = rum[Math.floor(Math.random() * rum.length)];
            break;
        case "rum-spiced":
            backgroundImage = imgUrlRumGold;
            break;
        case "scotch":
            backgroundImage = imgUrlScotchTopDown;
            break;
        case "sloe-gin":
            backgroundImage = sloeGin[Math.floor(Math.random() * sloeGin.length)];
            break;
        case "sparkling-white-wine":
            backgroundImage = whiteWine[Math.floor(Math.random() * whiteWine.length)];
            break;
        case "tequila":
            backgroundImage = tequila[Math.floor(Math.random() * tequila.length)];
            break;
        case "vermouth":
            backgroundImage = imgUrlScotchTopDown;
            break;
        case "vodka":
            backgroundImage = tequila[Math.floor(Math.random() * tequila.length)];
            break;
        case "whiskey":
            backgroundImage = imgUrlScotchTopDown;
            break;
        case "white-wine-aperitif":
            backgroundImage = whiteWine[Math.floor(Math.random() * whiteWine.length)];
            break;
        default:
            backgroundImage = imageUrlDefault;
    }
    return backgroundImage

}
