import Skeleton from "./skeleton";

const skeletonData = Array.from(Array(32));
const SkeletonList = ({ show }) => {
  return show ? skeletonData.map((skel) => <Skeleton></Skeleton>) : <></>;
};

export default SkeletonList;
