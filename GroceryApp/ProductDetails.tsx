export type Product = Product[]

export interface Product {
  name: string
  image: string
  actual_price: number
  discount: string
  buying_price: number
  portion: string
  details: ProductDetails
}

export interface ProductDetails {
  name: string
  cost: number
  ingredients: Ingredient[]
}

export interface Ingredient {
  type: string
  required?: boolean
  name: string
  image: string
  is_paid?: boolean
  quantity?: number
  options?: Option[]
}

export interface Option {
    name: string
    cost?: number
  }