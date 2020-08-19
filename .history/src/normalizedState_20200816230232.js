import {schema, normalize} from 'normalizr'
import defaultProducts from './products.json'

const category = new schema.Entity('categories')

// // Define a users schema
// const user = new schema.Entity('users');

// // Define your comments schema
// const comment = new schema.Entity('comments', {
//   commenter: user
// });

// // Define your article
// const article = new schema.Entity('articles', {
//   author: user,
//   comments: [comment]
// });

const product = new schema.Entity('products',{
  category: category
})

const normalizedData = normalize(defaultProducts.products,product)

export default normalizedData