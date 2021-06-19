import React,{Component} from 'react';
import { Card } from '../../components';
import './homeStyles.css'
import fondo from '../../assets/images/fondo.png'
import { getProducts } from '../../services/productServices';
export default class Home extends Component{
    state={
        products:[
            {
                name:"Mi producto",
                description:"Lorem asjdisajdiosajdiosajdoisajdioajsiodnsaijdnaisjnbdiasundiuwan",
                image:fondo
            },
            {
                name:"Mi producto2",
                description:"Lorem asjdisajdiosajdiosajdoisajdioajsiodnsaijdnaisjnbdiasundiuwan",
                image:fondo
            },
            {
                name:"Mi producto3",
                description:"Lorem asjdisajdiosajdiosajdoisajdioajsiodnsaijdnaisjnbdiasundiuwan",
                image:fondo
            }
        ]
    }

    //ciclo de vida
    componentDidMount(){
        getProducts()
        .then(res=>{
            console.log(res)
            let { products} = this.state
            products = res.data.result
            this.setState({ products })
        })
        .catch(error=>console.log("error",error))
    }

    render(){
        const {products} = this.state
        return(
            <div>
                <h1>Este es mi Home Homie</h1>
                <div 
                className="uk-height-large uk-background-cover uk-overflow-hidden uk-light uk-flex uk-flex-top fondo" 
                >
                    <div className="uk-width-1-2@m uk-text-center uk-margin-auto uk-margin-auto-vertical">
                        <h1 
                        uk-parallax="opacity: 0,1,1; y: -100,0,0; x: 100,100,0; scale: 2,1,1; viewport: 0.5;"
                        > Headline</h1>
                        <p 
                        uk-parallax="opacity: 0,1,1; y: 100,0,0; x: -100,-100,0; scale: 0.5,1,1; viewport: 0.5;">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
                {/* Creamos un listado de los productos dinamicamente */}
                <section uk-grid="true">
                    {products.map((product,index_p)=>(
                        <Card key={index_p} {...product} />
                    ))}
                </section>
            </div>
        )
    }
}