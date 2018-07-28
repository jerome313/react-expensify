// console.log('destructuring');

// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday',
//     publisher:{
//         name: 'Penguin'
//     }
// };

// const {name: publisherName = 'Self-Published'} = book.publisher;

// console.log(publisherName);

const item = ['Coffee (ice)', '$2.00', '$3.50', '$2.75'];
const [coffee,,price] = item;
console.log(`A medium ${coffee} costs ${price}`);