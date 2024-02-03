// type TButtonSocial = {
//   lable: string;
// };

// const ButtonSocial = ({ lable }: TButtonSocial) => {
//   return <button className="bg-slate-900 text-white py-3 px-4 rounded-full">Continue with {lable}</button>
// };

// export default ButtonSocial;

type TButtonSocial = {
  lable: string;
  icon?: React.ReactNode;
  varian?: string;
};
const ButtonSocial = ({ lable, icon, varian = "" }: TButtonSocial) => {
  // khai báo biến myStyle
  //  sử dụng let để có thể thay đổi giá trị của biến

  let myStyle = "bg-slate-900 border-slate-900 text-white"; // mặc định

  if (varian === "outline") {
    myStyle = "bg-white text-slate-900 border-slate-900 ";
  } else if (varian === "success") {
    myStyle = "bg-green-500 text-white border-green-500";
  }

  return (
    <button
      className={`${myStyle} flex border-2  justify-center items-center gap-x-3 text-white bg-slate-900 rounded-full`}
    >
      {icon}Continue with {lable}
    </button>
  );
};

export default ButtonSocial;
