import Button from "./components/Button";
import { useRef, useState } from "react";

const Ref = () => {
  const [count, setCount] = useState(0);

  const buttonRef = useRef<HTMLButtonElement>(null);

  const increase = () => setCount(count + 1);
  const click = () => buttonRef.current?.click();

  return (
    <>
      <Button
        onClick={increase}
        className="button"
        label="Button current count "
        ref={buttonRef}
      >
        {count}
      </Button>

      <button onClick={click}>click</button>
    </>
  );
};

export default Ref;
