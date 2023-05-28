export function getImageURL(person, size = 's'){
    return(
        'https://i.imgur.com/zEgIJ6y.jpeg' +
       person.imageId +
        size +
        '.jpg'
      );
    }