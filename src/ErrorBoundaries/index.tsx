import { useState } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import Title from "./components/Title";
const ErrorBoundaries = () => {
  const [titleText, setTitleText] = useState<string>("제목");

  const handleToggle = () => {
    if (typeof titleText !== "string") {
      setTitleText("제목");
    } else {
      setTitleText({});
    }
  };

  return (
    <>
      <button onClick={handleToggle}>
        {typeof titleText === "string" ? "Throw Error" : "Restore"}
      </button>
      <ErrorBoundary
        fallback={<div className="border border-rose-600">fallback UI</div>}
        key={titleText}
      >
        <Title text={titleText} />
      </ErrorBoundary>
    </>
  );
};

export default ErrorBoundaries;
