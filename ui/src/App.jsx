import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes.jsx";
import Quiz from "./Quiz";

function App() {
  return (
    <>
      {" "}
      <RouterProvider router={router} />
      <Quiz />
    </>
  );
}

export default App;
