import React from "react";
import Button from "./Button";
import sortBy from "lodash/sortBy";
import classNames from "classnames";

const SORTS = {
  NONE: list => list,
  TITLE: list => sortBy(list, "title"),
  AUTHOR: list => sortBy(list, "author"),
  COMMENTS: list => sortBy(list, "num_comments").reverse(),
  POINTS: list => sortBy(list, "points").reverse()
};

const Table = ({ list, onDismiss, onSort, sortKey, isSortReverse }) => {
  const sortedList = SORTS[sortKey](list);
  const reverseSortedList = isSortReverse ? sortedList.reverse() : sortedList;

  const Sort = ({ sortKey, activeSortKey, onSort, children }) => {
    const sortClass = classNames("button-inline", {
      "button-active": sortKey === activeSortKey
    });

    return (
      <Button onClick={() => onSort(sortKey)} className={sortClass}>
        {children}
      </Button>
    );
  };

  return (
    <div className="table">
      <div className="table-header">
        <span style={{ width: "40%" }}>
          <Sort sortKey={"TITLE"} onSort={onSort} activeSortKey={sortKey}>
            Title
          </Sort>
        </span>
        <span style={{ width: "30%" }}>
          <Sort sortKey={"AUTHOR"} onSort={onSort} activeSortKey={sortKey}>
            Author
          </Sort>
        </span>
        <span style={{ width: "10%" }}>
          <Sort sortKey={"COMMENTS"} onSort={onSort} activeSortKey={sortKey}>
            Comments
          </Sort>
        </span>
        <span style={{ width: "10%" }}>
          <Sort sortKey={"POINTS"} onSort={onSort} activeSortKey={sortKey}>
            Points
          </Sort>
        </span>
        <span style={{ width: "10%" }}>Archive</span>
      </div>
      {reverseSortedList.map(el => (
        <div key={el.objectID} className="table-row">
          <span style={{ width: "40%" }}>
            <a href={el.url}>{el.title}</a>
          </span>
          <span style={{ width: "30%" }}>{el.author}</span>
          <span style={{ width: "10%" }}>{el.num_comments}</span>
          <span style={{ width: "10%" }}>{el.points}</span>
          <span style={{ width: "10%" }}>
            <Button onClick={() => onDismiss(el.objectID)}>Dismiss</Button>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Table;
