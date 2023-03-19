import React, { useEffect, useState } from "react";
import { validate } from "./func";
function testkenza() {
  const [refresh, setRefresh] = useState(true);
  useEffect(() => {
    if (!refresh) return;
    setRefresh(false);
    validate(181839024387);
  });
  return <div>testkenza</div>;
}

export default testkenza;
