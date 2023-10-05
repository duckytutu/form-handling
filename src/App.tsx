import VanilaForm from "./VanilaForm.tsx";
import ReactForm from "./ReactForm.tsx";

function App() {
  return (
    <div className="flex justify-between max-w-screen-lg mx-auto gap-20 mt-10">
      <VanilaForm />
      <ReactForm />
    </div>
  )
}

export default App
