import React, { useEffect } from "react";
import { ICallback } from "../interfaces/IPage";
export default function PrioList({ pageName }: { pageName: ICallback }) {
  const moduleName = "Priority List";
  useEffect(() => { if (pageName) pageName(moduleName); }, [pageName]);

  return (
    <div className="p-2">
      test
    </div>
  );
}

