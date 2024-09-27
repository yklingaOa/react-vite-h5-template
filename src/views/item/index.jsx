import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Item = () => {
    const {state} = useLocation()
    useEffect(() => {
        console.log(state, 'www');
    })
    return (
        <div>item page</div>
    )
}

export default Item;