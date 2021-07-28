import { useEffect } from "react";

export function Loader(){
    useEffect(()=>{
        return ()=>{
            console.log("me Mori by")
        }
    },[])
    return(
        <div className="App">
            <div style={{
                height:'90vh',
                backgroundColor:'blue',
                display:'flex',
                justifyContent:'center',
                alignItems:'center'
            }}>
            <span>Estoy cargando esperate pls!!!</span>
            </div>
        </div>
    )
}

