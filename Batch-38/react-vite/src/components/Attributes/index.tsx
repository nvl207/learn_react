// import "./Attributes.css"

import styles from "./Attributes.module.css";
type TAttItem = {
  lable: string;
  isActive?: boolean;
};

const AttItem = ({ lable, isActive = false }: TAttItem) => {
  // const myClass = isActive ===true ? "attr_item attr_item_actived" : "attr_item"
  const myClass =
    isActive === true
      ? `${styles.attr_item} ${styles.attr_item_actived}`
      : `${styles.attr_item}`;
  return <span className={myClass}>{lable}</span>;
};
const Attributes = () => {
  return (
    <div className={styles.attrs_container}>
      <span className={styles.attr_lable}>Mau sac</span>
      <AttItem isActive={true} lable="Đen" />
      <AttItem lable="Hồng" />
      <AttItem lable="Xanh" />
    </div>
  );
};

export default Attributes;
