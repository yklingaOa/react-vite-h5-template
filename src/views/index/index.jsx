import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Index=  () => {
    const navigate = useNavigate()
    const [items] = useState([...Array(9).keys()])
    const goItem = (v) => (event) => {
        console.log(v,event);
        
        navigate('item', {state: {v}})
    }
    return (
        <div className="w-full h-[500px] bg-[#00ffff] flex flex-wrap">
            {
                items.map((v,i) => (
                    <div className="w-[100px] h-[100px] bg-slate-50 flex items-center justify-center font-bold mx-[5px]" key={i} onClick={goItem(v)}>item{v}</div>
                ))
            }
        </div>
    )
}
export default Index;
