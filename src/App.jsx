import React from "react";
import { Route, RouterProvider, createBrowserRouter } from "react-router-dom";

import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/mainLayout";
import JobsPage from "./pages/JobsPage";
import NotFound from "./pages/NotFound";
import JobPage, { jobLoader } from "./pages/JobPage";
import AddJobPage from "./pages/AddJobPage";
import EditJobPage from "./pages/EditJobPage";

const App = () => {
  const addJob = async (newJob) => {
    await fetch("/api/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newJob),
    });
    return;
  };

  const deleteJob = async (id) => {
    await fetch(`/api/jobs/${id}`, {
      method: "DELETE",
    });
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <HomePage isHome={true} />,
        },
        {
          path: "/jobs",
          element: <JobsPage />,
        },
        {
          path: "/jobs/:id",
          element: <JobPage deleteJob={deleteJob} />,
          loader: jobLoader,
        },
        {
          path: "/add-job",
          element: <AddJobPage addJobSubmit={addJob} />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
        {
          path: "/editJob/:id",
          element: <EditJobPage />,
          loader: jobLoader,
        }
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
