import { useState } from "react";
import Modal from "./components/Modal";
const Portal = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => setCount((prevCount) => prevCount + 1);

  return (
    <div onClick={handleClick}>
      <span>Count: {count}</span>
      <Modal>
        <div className="border-solid border-2 border-sky-500 mt-1 p-4 text-center">
          <h2>Modal</h2>
          <p>모달 영역을 클릭하면 클릭 이벤트가 부모 컴포넌트로 전파됨</p>
        </div>
      </Modal>
    </div>
  );
};

export default Portal;
