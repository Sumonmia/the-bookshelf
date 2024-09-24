
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Homepage from "../pages/Homepage";
import AboutPage from "../pages/AboutPage";
import BlogPage from "../pages/BlogPage";
import Faq from "../pages/Faq";
import { ROUTES } from "../routes";
import BookDetailsPage from "../pages/BookDetailsPage";
 export const router = createBrowserRouter([
    {
      path: `${ROUTES.HOME}`,
      element: <Homepage />,
    },
    {
        path: `${ROUTES.ABOUT}`,
        element: <AboutPage />,
      },
      {
        path: `${ROUTES.BLOG}`,
        element: <BlogPage />,
      },
      {
        path: `${ROUTES.FAQ}`,
        element: <Faq />,
      },
      {
        path: "/bookId",
        element: <BookDetailsPage />,
      },
  ]);

  