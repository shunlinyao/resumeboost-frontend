import React, { useContext, useEffect } from "react";

import Reviews from "../components/DashboardReviews";
import ScoreCard from "../components/DashboardScoreCard";
import Header from "../components/Header";
import PDFView from "../components/PDFview";
import UserContext from "../context/UserContext";
import api from "../utils/api";

const Dashboard: React.FC = () => {
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    api
      .getAllReviews()
      .then((reviews) => user && setUser({ ...user, reviews }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return user && user?.reviews ? (
    <div>
      <Header title="Dashboard" />
      <div className="flex space-x-6">
        <div className="w-1/2 flex flex-col space-y-6">
          <div className="flex space-x-6">
            <ScoreCard metric="Visual" score={user?.reviews[0].visual} />
            <ScoreCard metric="Content" score={user?.reviews[0].content} />
            <ScoreCard metric="Relevance" score={user?.reviews[0].relevance} />
          </div>
          <div className="border rounded-lg shadow-lg">
            <Reviews />
          </div>
        </div>
        <div className="max-w-1/2 rounded-lg shadow-lg">
          {/* Resume Placeholder */}
          <PDFView />
        </div>
      </div>
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default Dashboard;
