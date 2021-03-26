import React from "react";
// import { Windmill } from "@windmill/react-ui";
import {
  TableContainer,
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
  TableFooter,
  Pagination,
} from "@windmill/react-ui";
import ReviewEntry from "./DashboardReviewEntry";

export const DashboardReviews = () => {
  return (
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
          {/* {TODO: Make a ReviewEntry for every review} */}
          <ReviewEntry
            date="2015-01-24"
            visual={4}
            content={3}
            relevance={5}
            comment="test comment"
          />
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
  );
};

export default DashboardReviews;
