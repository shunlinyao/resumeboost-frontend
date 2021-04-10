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
import React, { useContext, useEffect } from "react";

import { Review } from "../interfaces/Review";
import ReviewEntry from "./DashboardReviewEntry";
import UserContext from "../context/UserContext";
import api from "../utils/api";

export const DashboardReviews: React.FC = () => {
  const { reviews } = useContext(UserContext);

  return reviews ? (
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
        <TableBody data-testid="reviewTable">
          {reviews.map((r) => (
            <ReviewEntry
              key={r._id}
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
        {/* TODO: Implement pagination */}
        <Pagination
          totalResults={reviews.length}
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
