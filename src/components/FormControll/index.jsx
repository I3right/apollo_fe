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
    <div className="w-[240px] mt-4 p-2 bg-slate-400 ">
      <h2 className="font-bold text-2xl">FormControll</h2>
      <form onSubmit={handleSubmit(submitData)} className=" flex justify-between relative">
        <div>
          <input
            name="content"
            {...register("content", {
              required: true,
            })}
            type="text"
            placeholder="Add todo here"
          />
          {errors.content?.type === "required" && (
            <p role="alert" className="text-red-600 absolute top-8">
              please enter content.
            </p>
          )}
        </div>
        <button className="my-auto w-10 bg-[#e2e0e0] hover:bg-[#ababab]">ADD</button>
      </form>
    </div>
  );
};

export default FormControll;
