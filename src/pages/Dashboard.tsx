import React from "react";
import Reviews from "../components/DashboardReviews";
import ScoreCard from "../components/DashboardScoreCard";

export const DashboardPage = () => {
  return (
    <div className="flex space-x-6">
      <div className="w-1/2 flex flex-col space-y-6">
        <div className="flex space-x-6 pt-16">
          <ScoreCard metric="Visual" score={4.7} />
          <ScoreCard metric="Content" score={3.8} />
          <ScoreCard metric="Relevance" score={4.2} />
        </div>
        <div className="border rounded-lg shadow-lg">
          <Reviews />
        </div>
      </div>
      <div className="w-1/2 border rounded-lg shadow-lg">
        Resume Placeholder
      </div>
    </div>
  );
};

export default DashboardPage;
