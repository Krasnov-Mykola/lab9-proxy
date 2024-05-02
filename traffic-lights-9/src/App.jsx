
import "./App.css";
import ErrorPage from "./Pages/ErrorPage";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./Pages/Home";
import TrafficLightLayout from "./Pages/TrafficLightLayout";
import Exam from "./Pages/Exam";


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />
    },
      {
      path: "/:direction",
      element: <TrafficLightLayout />,
      errorElement: <ErrorPage />
    },
    {
      path: "/exam",
      element: <Exam />,
      errorElement: <ErrorPage />
    }
  ]);

  return (
    
    <RouterProvider router={router}/>
  );
}

export default App;
