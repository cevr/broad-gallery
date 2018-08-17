const randomImageSeed = Math.floor(Math.random() * 10 + 900);
const randomGallerySeed = Math.floor(Math.random() * 20 + 7) * 3;
const names = [
    'Leanne Graham',
    'Ervin Howell',
    'Clementine Bauch',
    'Patricia Lebsack',
    'Kurtis Weissnat',
    'Nicholas Runolfsdottir V',
    'Glenna Reichert',
    'Clementina DuBuque',
    'Bret',
    'Anastasia',
    'Elbert',
    'Tawney Goodman',
    'Kyle Greenwich',
    'Abel Gloan',
    'Giovani Gilette',
    'Marco Rasp',
    'Stefan Bridger',
    'Steve Matlick',
    'Donny Rester',
    'Bryan Adams'
];
export function getImages() {
    let images = [];
    for (let i = 0; i < randomGallerySeed; i++) {
        const image = {
            url: `https://picsum.photos/g/500?image=${i + randomImageSeed}`,
            author: names[i],
            title: `Image ${i + randomImageSeed}`,
            isDeleted: false,
            index: i
        };
        images.push(image);
    }
    return images;
}
