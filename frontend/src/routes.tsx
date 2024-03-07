import {
  createBrowserRouter,
} from "react-router-dom";
import { AppLayout } from "./pages/_layouts/app-layout";
import { Customers } from "./pages/customers/customers";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Customers />,
      },
    ],
  },
]);