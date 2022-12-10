import { FaRegTrashAlt } from "react-icons/fa";

const style = {
  li: `flex justify-between bg-slate-200 p-4 my-2 capitalize`,
  liComplete: `flex justify-between bg-[#62B6B7] p-4 my-2 capitalize`,
  row: `flex`,
  text: `ml-2 cursor-pointer`,
  textComplete: `ml-2 cursor-pointer line-through text-[#CBEDD5]`,
  button: `cursor-pointer flex items-center`,
  bin: `fill-[#439A97]`,
  binComplete: `fill-[#CBEDD5]`,
};

function Todo({ todo, toggleComplete, deleteTodo }) {
  return (
    <li className={todo.completed ? style.liComplete : style.li}>
      <div className={style.row}>
        <input
          onChange={() => toggleComplete(todo)}
          type="checkbox"
          checked={todo.completed ? true : false}
        />
        <p
          onClick={() => toggleComplete(todo)}
          className={todo.completed ? style.textComplete : style.text}
        >
          {todo.text}
        </p>
      </div>
      <button onClick={() => deleteTodo(todo.id)}>
        {
          <FaRegTrashAlt
            className={todo.completed ? style.binComplete : style.bin}
          />
        }
      </button>
    </li>
  );
}
export default Todo;
