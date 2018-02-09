import React from "react";
import Button from "./Button";

const Table = ({ list, onDismiss }) => {
  return (
    <div className="table">
      {list.map(el => (
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
