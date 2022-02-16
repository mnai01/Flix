import { Flex, Grid, GridItem, Skeleton } from "@chakra-ui/react";
import YouTube from "react-youtube";

const opts = {
  height: "600",
  width: "1080",
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
  },
};

const MediaContent = () => {
  return (
    <Flex
      direction={"column"}
      position={"relative"}
      width={"100%"}
      height={"80%"}
      justify={"center"}
      p={50}
    >
      <Skeleton width={"100%"} height={"10%"} p={"10"}></Skeleton>
      <Grid
        h="95%"
        w="100%"
        p="20"
        border="2px"
        border-radius="20px"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(7, 1fr)"
        gap={4}
        area="auto"
      >
        <GridItem rowSpan={2} colSpan={1} bg="tomato" />
        <YouTube videoId={"v7v1hIkYH24"} opts={opts} />
        <GridItem rowSpan={5} colSpan={3} bg="tomato" />
      </Grid>
    </Flex>
  );
};

export default MediaContent;
