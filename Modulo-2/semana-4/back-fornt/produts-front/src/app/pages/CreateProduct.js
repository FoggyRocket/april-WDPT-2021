import React,{Component} from 'react'
import { createProduct } from '../services/productServices'



export default class CreateProduct extends Component{
    state={
        user:{}
    }

    handleChange = (event) =>{
        //event.target.name && event.target.vaule
        let {name,value} = event.target
        let {user} = this.state
        // user.pero = Perro
        // user["dyelna"] = 212
        user[name] = value

        this.setState({ user })
    }


    handleSubmit = (event) =>{
        event.preventDefault()
        console.log("me esta presionando!!!!")
        createProduct(this.state.user)
        .then(res=>{
            this.props.history.push("/")
        })
        .catch(error=>console.log("error",error))
    }
    render(){
        const {user} = this.state
        const { handleChange,handleSubmit } = this
        console.log("el user",user)
        return(
            <form onSubmit={handleSubmit}>
                <div className="uk-margin">
                    <div className="uk-inline">
                        <span className="uk-form-icon" uk-icon="icon: user"></span>
                        <input placeholder="name"
                        className="uk-input" type="text" name="name" onChange={handleChange} />
                    </div>
                </div>
                <div className="uk-margin">
                    <div className="uk-inline">
                        <span className="uk-form-icon" uk-icon="icon: user"></span>
                        <input required  placeholder="price"
                        className="uk-input" type="number" name="price"onChange={handleChange} />
                    </div>
                </div>

                <div className="uk-margin">
                    <div className="uk-inline">
                        <span className="uk-form-icon uk-form-icon-flip" uk-icon="icon: lock"></span>
                        <input placeholder="descriptiopn" required
                        className="uk-input" type="text" name="description"onChange={handleChange}/>
                    </div>
                </div>
                <div className="uk-margin">
                    <div className="uk-inline">
                        <span className="uk-form-icon uk-form-icon-flip" uk-icon="icon: lock"></span>
                        <input placeholder="seller" required
                        className="uk-input" type="text" name="_seller"onChange={handleChange}/>
                    </div>
                </div>
                <div className="uk-margin">
                    <div className="uk-inline">
                        <span className="uk-form-icon uk-form-icon-flip" uk-icon="icon: lock"></span>
                        <input placeholder="image" required
                        className="uk-input" type="text" name="image"onChange={handleChange}/>
                    </div>
                </div>
                <button className="uk-button uk-button-default">Submit</button>
            </form>
        )
    }
}