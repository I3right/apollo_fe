import { useForm } from "react-hook-form";
import TodoProvider from "../../providers/todoProvoder";

const FormControll = ({ getListTodo }) => {
  const todoProvoder = new TodoProvider();
  const {
    register,
    handleSubmit,
    formState: { errors },
    resetField,
  } = useForm();

  const submitData = async ({ content }) => {
    const status = await todoProvoder.createTodo({ content: content, completed: false })
    if(status === 200)   getListTodo()
    resetField("content");
  };

  return (
    <div className="w-[240px]">
      <h2>FormControll</h2>
      <form onSubmit={handleSubmit(submitData)} className="flex">
        <div>
          <input
            name="content"
            {...register("content", {
              required: true,
            })}
            type="text"
            placeholder="add todo here!"
          />
          {errors.content?.type === "required" && (
            <p role="alert" className="text-red-600">
              Fill contnt !
            </p>
          )}
        </div>
        <button className="my-auto">ADD</button>
      </form>
    </div>
  );
};

export default FormControll;
