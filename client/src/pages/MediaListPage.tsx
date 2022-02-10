import { Flex } from "@chakra-ui/react";
import { MediaList } from "../components/Media";
import useGenre from "../utils/hooks/useGenre";

const MediaListPage = () => {
  const { genre } = useGenre();

  return (
    <Flex direction="column">
      {/*  this should be some sort of header */}
      <h2>{genre.name}</h2>
      <MediaList />
    </Flex>
  );
};

export default MediaListPage;
