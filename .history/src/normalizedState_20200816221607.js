import {schema, normalize} from 'normalizr'
import defaultProducts from './products.json'

const categorySchema = new schema.Entity('categories')
const productSchema = new schema.Entity('products',{
  cate
})