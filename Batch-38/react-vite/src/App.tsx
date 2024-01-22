import "./App.css";
import TodoList from "./components/TodoList";

// định nghĩa 1 component Avatar

function Avatar() {
  return (
    <img src="https://cdn.tgdd.vn/Products/Images/42/305695/Kit/oppo-reno10-note-new.jpg" />
  );
}

//  tạo component Button
// component code như một function
// dùng như 1 thẻ HTML

const Productlist = () => {
  return (
    <>
      <img src="javascript:void(0)" alt="" />
      <h3>Xiaomi</h3>
      <strong>9.900.000</strong>
    </>
  );
};

// const TodoListItem = () => {
//   return <li>Lau nha</li>;
// };

// const TodoList = () => {
//   return (
//     <ul>
//       <TodoListItem />
//       <TodoListItem />
//       <TodoListItem />
//       <TodoListItem />
//     </ul>
//   );
// };
// const TodoListItem = () => {
//   return <li>Lau nha</li>;
// };

// const TodoList = () => {
//   return (
//     <ul>
//       <TodoListItem />
//       <TodoListItem />
//       <TodoListItem />
//     </ul>
//   );
// };

function Button() {
  return <button>Login with Google</button>;
}
function App() {
  const h2 = <h2>Hello heading 2</h2>;
  const name = "Loi";
  const str = <p>Hello {name}</p>;
  const user = {
    name: "Loi",
    age: 21,
    work: "DUE",
  };
  return (
    <>
      <h1
        style={{
          color: "blue",
          background: "green",
        }}
      >
        Hello React
      </h1>
      <h2>
        Tôi năm nay {user.age} tuổi, tên là {user.name}, làm việc tại{" "}
        {user.work}
      </h2>
      {h2}
      {str}
      <Avatar />
      <Button />
      <Productlist />
      <TodoList />
    </>
  );
}

export default App;
