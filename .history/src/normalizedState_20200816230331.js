import {schema, normalize} from 'normalizr'
import defaultState from './products.json'

const category = new schema.Entity('categories')

const product = new schema.Entity('products',{
  category: category
})

const normalizedData = normalize(defaultState.products,[product])

export default normalizedData