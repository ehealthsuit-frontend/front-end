// import Input from "../atoms/Input";
// import Button from "../atoms/Button";

// const FormGroup = ({ taskText, setTaskText, addTask }) => (
//   <div className="flex space-x-2">
//     <Input
//       value={taskText}
//       onChange={(e) => setTaskText(e.target.value)}
//       placeholder="Search"
//     />
//     <Button onClick={addTask} >Search</Button>
//   </div>
// );

// export default FormGroup;
// import Input from './Input';

// const FormField = ({ label, value, onChange, placeholder }) => (
//   <Input
//     label={label}
//     value={value}
//     onChange={onChange}
//     placeholder={placeholder}
//     className="mb-4"
//   />
// );

// export default FormField;
import Input from '../atoms/Input';

const FormGroup = ({ label, value, onChange, placeholder }) => (
  <div className="flex flex-col mb-6">
    {label && (
      <label className="mb-1 text-sm font-semibold text-teal-700">
        {label}
      </label>
    )}
    <Input value={value} onChange={onChange} placeholder={placeholder} className="border-teal-300 focus:border-teal-500 focus:ring-teal-500" />
  </div>
);

export default FormGroup;