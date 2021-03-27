import React, { useContext, useEffect } from "react";

import {
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHeader,
  TableRow,
} from "@windmill/react-ui";

import UserContext from "../context/UserContext";
import api from "../utils/api";
import ReviewEntry from "./DashboardReviewEntry";

export const DashboardReviews: React.FC = () => {
  const { user } = useContext(UserContext);

  return user && user?.reviews ? (
    <TableContainer className="max-w-4xl">
      <div className="p-4 font-bold">Reviews</div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Visual</TableCell>
            <TableCell>Content</TableCell>
            <TableCell>Relevance</TableCell>
            <TableCell>Comments</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {user?.reviews.map((r) => (
            <ReviewEntry
              date={r.createdAt}
              visual={r.visual}
              content={r.content}
              relevance={r.relevance}
              comment={r.feedback}
            />
          ))}
        </TableBody>
      </Table>
      <TableFooter className="table-fixed">
        <Pagination
          totalResults={4}
          resultsPerPage={4}
          onChange={() => {}}
          label="Reviews"
        />
      </TableFooter>
    </TableContainer>
  ) : (
    <></>
  );
};

export default DashboardReviews;
