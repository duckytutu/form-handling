import { useState } from "react";

const ReactForm = () => {
  const [formData, setFormData] = useState({userName: '', password: ''});
  const [errors, setErrors] = useState({ userName: '', password: ''});

  const onChange = (event: any) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const onSubmit = (event: any) => {
    event.preventDefault();
    Object.entries(formData).forEach(([key, value]) => {
      if (!value) setErrors((prevState) => (
        {
          ...prevState,
          [key]: `${key.charAt(0).toUpperCase() + key.slice(1)} is required`
        }
      ))
    })
  }

  const onFocus = (event: any) => {
    const { name } = event.target;
    setErrors((prevState) => ({
      ...prevState,
      [name]: '',
    }))
  }

  return (
    <div className="flex flex-col items-stretch w-full">
      <h1 className="text-2xl font-bold mb-5">React form</h1>
      <form id="form" className="flex flex-col gap-4" onSubmit={onSubmit}>
        <div className="mb-3 flex flex-col justify-between">
          <label htmlFor="userName" className="text-sm">Username:</label>
          <input id="userName" name="userName"
                 className="border border-gray-600 rounded leading-6 px-2 py-1"
                 type="text"
                 aria-errormessage="error-userName"
                 value={formData.userName}
                 onChange={onChange}
                 onFocus={onFocus}
          />
          { errors.userName ? <span id="error-userName" className="error-msg text-red-400 text-sm">{errors.userName}</span> : ''}

        </div>
        <div className="mb-3 flex flex-col justify-between">
          <label htmlFor="password" className="text-sm">Password:</label>
          <input id="password" name="password"
                 className="border border-gray-600 rounded leading-6 px-2 py-1"
                 type="password"
                 aria-errormessage="error-password"
                 value={formData.password}
                 onChange={onChange}
                 onFocus={onFocus}
          />
          { errors.password ? <span id="error-password" className="error-msg text-red-400 text-sm">{errors.password}</span> : ''}
        </div>
        <div className="flex justify-end gap-3">
          <button type="submit" className="rounded border px-3 py-1">Login</button>
        </div>
      </form>
    </div>
  )
}

export default ReactForm;
