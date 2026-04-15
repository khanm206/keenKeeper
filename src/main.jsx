import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import router from "./routes/Routes.jsx";
import { ToastContainer } from "react-toastify";
import FriendsProvider from "./context/FriendsContext.jsx";
import { Slide } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FriendsProvider>
      <RouterProvider router={router}></RouterProvider>
    </FriendsProvider>

    <ToastContainer
      position="top-right"
      autoClose={1500}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      transition={Slide}
    />
  </StrictMode>,
);
