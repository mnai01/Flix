import { Skeleton } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const MediaListItem = () => {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(`/movie/1`)}>
      <Skeleton width="185px" height="278px" />
    </div>
  );
};

export default MediaListItem;
