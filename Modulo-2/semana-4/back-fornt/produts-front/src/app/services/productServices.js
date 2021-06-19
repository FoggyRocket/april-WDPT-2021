import {_axios} from './api'


export const getProducts=()=>{
    return _axios.get("/products")
}

                        //{name:"",des:"",image:"",}
export const createProduct = (product) => {
    return _axios.post("/products",product)
}