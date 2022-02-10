import { Box, Flex } from "@chakra-ui/react";
import { Route, Routes } from "react-router";
import Sidebar from "../../components/Layout/Sidebar";
import { HomePage, MediaListPage, MovieContent, NotFound } from "../index";
import MoviesPage from "../MoviesPage";
import TVsPage from "../TVsPage";

const PageRoutes = () => {
  return (
    <Flex>
      <Sidebar />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/tv" element={<TVsPage />} />
        <Route path="/category/:genre" element={<MediaListPage />} />
        <Route path="/movie/:id" element={<MovieContent />} />
      </Routes>
    </Flex>
  );
};

export default PageRoutes;
