import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes.jsx";
import "./index.css";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
