import React from "react";
import { Card, CardBody } from "@windmill/react-ui";

interface Props {
  metric: string;
  score: number;
}

export const DashboardScoreCard: React.FC<Props> = ({ metric, score }) => {
  return (
    <div className="h-64 w-64  rounded-lg border shadow-lg p-10">
      <div className="flex justify-center h-1/6 text-2xl font-semibold text-gray-500 ">
        {metric}
      </div>
      <div className="flex items-center justify-center font-bold h-4/6 text-6xl">
        {score}
      </div>
    </div>
  );
};

export default DashboardScoreCard;
