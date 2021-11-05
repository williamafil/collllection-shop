import React from "react";
import clxs from "../../utils/clxs";

const StatusCircle = ({ className }) => {
  return (
    <div className={clxs("inline-block w-2 h-2 rounded-full", className)}></div>
  );
};

export default StatusCircle;
