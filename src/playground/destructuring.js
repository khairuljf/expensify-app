
const book={
    title :'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher:{
        name:'Penguin'
    }
}


const {title='nothing', author:writer = 'khairul'} = book

const {name: publisherName = 'Self-publish'} = book.publisher

console.log(publisherName)