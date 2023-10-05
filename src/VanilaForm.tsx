import { useEffect } from "react";

const VanilaForm = () => {
  useEffect(() => {
    const inputs = Array.from(document.getElementsByTagName('input'));
    const listener = (event: Event) => {
      const el = event.target as Element;
      if (!el) return;
      const errElementId = el.getAttribute('aria-errormessage');
      if (!errElementId) return;
      const errElement = document.getElementById(errElementId);
      if (!errElement) return;
      errElement.innerText = '';
    }
    inputs.forEach(el => el.addEventListener('focus', listener));
    return () => {
      inputs.forEach(el => el.removeEventListener('focus', listener));
    }
  }, []);

  const onSubmit = (event: any) => { // eslint-disable-line
    event.preventDefault();
    const data = new FormData(event.target);
    const dataObject = Object.fromEntries(data.entries());
    Object.entries(dataObject).forEach(([key, value]) => {
      if (!value) {
        const el = document.getElementsByName(key)[0];
        if (!el) return;
        const errElementId = el.getAttribute('aria-errormessage');
        if (!errElementId) return;
        const errElement = document.getElementById(errElementId);
        if (!errElement) return;
        errElement.innerText = `${key.charAt(0).toUpperCase() + key.slice(1)} is required`;
      }
    })
  }

  return (
    <div className="flex flex-col items-stretch w-full">
      <h1 className="text-2xl font-bold mb-5">Vanila form</h1>
      <form id="form" className="flex flex-col gap-4" onSubmit={onSubmit}>
        <div className="mb-3 flex flex-col justify-between">
          <label htmlFor="userName" className="text-sm">Username:</label>
          <input id="userName" name="userName"
                 className="border border-gray-600 rounded leading-6 px-2 py-1"
                 type="text"
                 aria-errormessage="error-userName"
          />
          <span id="error-userName" className="error-msg text-red-400 text-sm"></span>
        </div>
        <div className="mb-3 flex flex-col justify-between">
          <label htmlFor="password" className="text-sm">Password:</label>
          <input id="password" name="password"
                 className="border border-gray-600 rounded leading-6 px-2 py-1"
                 type="password"
                 aria-errormessage="error-password"
          />
          <span id="error-password" className="error-msg text-red-400 text-sm"></span>
        </div>
        <div className="flex justify-end gap-3">
          <button type="submit" className="rounded border px-3 py-1">Login</button>
        </div>
      </form>
    </div>
  )
}

export default VanilaForm;
