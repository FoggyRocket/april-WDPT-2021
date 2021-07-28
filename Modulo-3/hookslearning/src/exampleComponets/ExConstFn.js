import { useState,useEffect } from "react"

export const ExConstFn = () => {
    const  [count,setCout] = useState(0)


    return(
        <div>
            <span>Este es un  FN const {count}</span>
        </div>
    )
}