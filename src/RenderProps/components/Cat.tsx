interface CatProps {
  mouse: { x: number; y: number };
}

const Cat = ({ mouse }: CatProps) => {
  return (
    <img
      src="https://img.freepik.com/free-photo/closeup-shot-of-one-ginger-cat-hugging-and-licking-the-other-isolated-on-a-white-wall_181624-32893.jpg?w=996&t=st=1671155360~exp=1671155960~hmac=10714a39134f85cf927c780becb39ac8f78ed137390913338197316e2918b50c"
      alt="cat"
      style={{ position: "absolute", left: mouse.x, right: mouse.y }}
      width="20%"
    />
  );
};

export default Cat;
