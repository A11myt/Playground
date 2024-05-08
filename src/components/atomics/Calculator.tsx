import React, { useEffect } from "react";
import { ICallback } from "../interfaces/IPage";

export default function Calculator({ pageName }: { pageName: ICallback }) {
  const moduleName = "Calculator";
  useEffect(() => {
    if (pageName) pageName(moduleName);
  }, [pageName]);
  return (
    <div className="w-1/5">
      <h1>Calculator</h1>
      <div></div>
    </div>
  );
}
