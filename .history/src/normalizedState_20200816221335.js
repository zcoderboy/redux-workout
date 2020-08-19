import {schema, normalize} from 'normalizr'
import defaultProducts from './products.json'

const productSchema = new schema.Entity('products')

