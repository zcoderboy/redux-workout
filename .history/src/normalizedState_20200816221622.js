import {schema, normalize} from 'normalizr'
import defaultProducts from './products.json'

const category = new schema.Entity('categories')
const productSchema = new schema.Entity('products',{
  category: categorySchema
})