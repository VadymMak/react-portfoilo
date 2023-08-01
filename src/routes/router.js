import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import RootLayout from "../layouts/RootLayout";

import Home from "../pages/home/Home";
import Project from "../pages/project/Project";
import About from "../pages/about/About";
import Contacts from "../pages/contacts/Contacts";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="project" element={<Project />} />
      <Route path="about" element={<About />} />
      <Route path="contacts" element={<Contacts />} />
    </Route>
  )
);
