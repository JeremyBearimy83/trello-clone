import { useState } from "react";

const useToggle = (init = false) => {
  const [binary, setBinary] = useState(init);
  const toggle = () => setBinary(!binary);

  return [binary, toggle];
};

export default useToggle;
