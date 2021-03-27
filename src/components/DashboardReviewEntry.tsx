import React from "react";
import { TableRow, TableCell } from "@windmill/react-ui";

import dayjs from "dayjs";

interface Props {
  date: string;
  visual: number;
  content: number;
  relevance: number;
  comment: string;
}

export const DashboardReviewEntry: React.FC<Props> = ({
  date,
  visual,
  content,
  relevance,
  comment,
}) => {
  return (
    <TableRow>
      <TableCell>
        <div className="flex items-center text-sm" data-testid="date">
          {dayjs(date).format("MMM D, YYYY")}
        </div>
      </TableCell>
      <TableCell>
        <div className="flex items-center text-sm" data-testid="visual">
          {visual}
        </div>
      </TableCell>
      <TableCell>
        <div className="flex items-center text-sm" data-testid="content">
          {content}
        </div>
      </TableCell>
      <TableCell>
        <div className="flex items-center text-sm" data-testid="relevance">
          {relevance}
        </div>
      </TableCell>
      <TableCell>
        <div className="flex items-center text-sm" data-testid="comment">
          {comment}
        </div>
      </TableCell>
    </TableRow>
  );
};

export default DashboardReviewEntry;
