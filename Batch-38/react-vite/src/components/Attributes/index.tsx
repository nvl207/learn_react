import "./Attributes.css"

type TAttItem =  {
    lable : string;
    isActive?: boolean;
}

const AttItem = ({lable,isActive = false}: TAttItem) => {

    const myClass = isActive ===true ? "attr_item attr_item_actived" : "attr_item" 
    return(
        <span  className={myClass}>{lable}</span>
    )
}
const Attributes = () => {
    return (
        <div>
            <span className="attrs_container">Mau sac</span>
            < AttItem isActive = {true} lable="Hong" />
            < AttItem lable="Xanh" />
            < AttItem lable="Den" />
            < AttItem lable="Vang" />

        </div>

    )
}

export default Attributes;