import { ChangeEventHandler } from "react";

type InputProps = {
  onChange: ChangeEventHandler<HTMLInputElement>;
  value: string | number;
  label: string;
  name: string;
  placeholder?: string;
  disabled?: boolean;
};

const disabledClass = "disabled:text-white";

export default function CreateProductInput(props: InputProps) {
  return (
    <div className="mb-5 text-lg">
      <label className="block text-gray-200">{props.label}</label>
      <input
        type="text"
        name={props.name}
        className={`text-gray-600 mx-3 my-2 px-1 rounded focus:outline-none focus:drop-shadow-xl hover:drop-shadow-xl ${
          props.disabled && disabledClass
        }`}
        onChange={props.onChange}
        value={props.value}
        placeholder={props.placeholder}
        disabled={props.disabled}
      />
    </div>
  );
}
