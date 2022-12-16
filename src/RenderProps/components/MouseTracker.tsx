import Cat from "./Cat";
import Mouse from "./Mouse";

const MouseTracker = () => {
  return (
    <>
      <h1>마우스를 움직여보세요!</h1>
      <Mouse render={(mouse) => <Cat mouse={mouse} />} />
    </>
  );
};

export default MouseTracker;
