import {schema, normalize} from 'normalizr'
import defaultProducts from './products.json'

const category = new schema.Entity('categories')

const product = new schema.Entity('products', {
//   category: category
// })

const normalizedData = normalize(defaultProducts,product)

export default normalizedData