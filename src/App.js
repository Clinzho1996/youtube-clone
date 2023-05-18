import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
  Outlet,
} from "react-router-dom";
import Feed from "./components/Feed";
import VideoDetail from "./components/VideoDetail";
import ChannelDetail from "./components/ChannelDetail";
import SearchFeed from "./components/SearchFeed";
import Home from "./pages/Home/Home";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/video/:id" element={<VideoDetail />} />
        <Route path="/channel/:id" element={<ChannelDetail />} />
        <Route path="/search/:searchTerm" element={<SearchFeed />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

const Root = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default App;
