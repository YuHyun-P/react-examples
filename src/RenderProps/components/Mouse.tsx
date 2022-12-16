import { MouseEvent, ReactNode, useState } from "react";

type TMouse = {
  x: number;
  y: number;
};
interface MouseProps {
  render: (mouse: TMouse) => ReactNode;
}

const Mouse = ({ render }: MouseProps) => {
  const [mouse, setMouse] = useState<TMouse>({ x: 0, y: 0 });

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    setMouse({ x: event.clientX, y: event.clientY });
  };

  return (
    <div onMouseMove={handleMouseMove} className="border p-4">
      <p>
        현재 마우스의 위치는 ({mouse.x}, {mouse.y})입니다.
      </p>
      {render(mouse)}
    </div>
  );
};

export default Mouse;
