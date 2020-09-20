import { useEffect } from "react";

export default function useClickOut(ref, insidehandler, outsideHandler) {
  useEffect(() => {
    function clickOutsiteHandler(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        outsideHandler();
      } else {
        insidehandler();
      }
    }

    document.addEventListener("mousedown", clickOutsiteHandler);

    return () => {
      document.removeEventListener("mousedown", clickOutsiteHandler);
    };
  }, [ref]);
}
