const imageData = [
    { folderName: 'ncl', imageName: 'bliss' },
    { folderName: 'ncl', imageName: 'breakaway' },
    { folderName: 'ncl', imageName: 'dawn' },
    { folderName: 'ncl', imageName: 'encore' },
    { folderName: 'ncl', imageName: 'epic' },
    { folderName: 'ncl', imageName: 'escape' },
    { folderName: 'ncl', imageName: 'gem' },
    { folderName: 'ncl', imageName: 'getaway' },
    { folderName: 'ncl', imageName: 'jade' },
    { folderName: 'ncl', imageName: 'jewel' },
    { folderName: 'ncl', imageName: 'joy' },
    { folderName: 'ncl', imageName: 'pearl' },
    { folderName: 'ncl', imageName: 'pride-of-america' },
    { folderName: 'ncl', imageName: 'prima' },
    { folderName: 'ncl', imageName: 'sky' },
    { folderName: 'ncl', imageName: 'spirit' },
    { folderName: 'ncl', imageName: 'star' },
    { folderName: 'ncl', imageName: 'sun' },
    { folderName: 'ncl', imageName: 'viva' },
    { folderName: 'carnival', imageName: 'breeze' },
    { folderName: 'carnival', imageName: 'celebration' },
    { folderName: 'carnival', imageName: 'conquest' },
    { folderName: 'carnival', imageName: 'dream' },
    { folderName: 'carnival', imageName: 'elation' },
    { folderName: 'carnival', imageName: 'freedom' },
    { folderName: 'carnival', imageName: 'glory' },
    { folderName: 'carnival', imageName: 'horizon' },
    { folderName: 'carnival', imageName: 'jubilee' },
    { folderName: 'carnival', imageName: 'legend' },
    { folderName: 'carnival', imageName: 'liberty' },
    { folderName: 'carnival', imageName: 'luminosa' },
    { folderName: 'carnival', imageName: 'magic' },
    { folderName: 'carnival', imageName: 'mardi-gras' },
    { folderName: 'carnival', imageName: 'miracle' },
    { folderName: 'carnival', imageName: 'panorama' },
    { folderName: 'carnival', imageName: 'pride' },
    { folderName: 'carnival', imageName: 'radiance' },
    { folderName: 'carnival', imageName: 'spirit' },
    { folderName: 'carnival', imageName: 'splendor' },
    { folderName: 'carnival', imageName: 'sunrise' },
    { folderName: 'carnival', imageName: 'sunshine' },
    { folderName: 'carnival', imageName: 'valor' },
    { folderName: 'carnival', imageName: 'venezia' },
    { folderName: 'carnival', imageName: 'vista' }
]

let IMAGES: any = {

}

for(let i of imageData) {
    const imageUrl = `./${i.folderName}/${i.imageName}.webp`;

    IMAGES[i.imageName] = new URL(imageUrl, import.meta.url).href;
}
// console.log(IMAGES)

IMAGES.moai = new URL('./homepage-images/moai.png', import.meta.url).href;
IMAGES.imageStack = new URL('./homepage-images/image-stack.png', import.meta.url).href

export default IMAGES;