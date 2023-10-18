import React from "react";

export default function Prev(props) {
  return (
    <div className="prevResponse">
      <ul>
        <li>Name : {props.name}</li>
        <li>Department : {props.dep}</li>
        <li>skype : {props.skype}</li>
        <li>Mail : {props.email}</li>
        <li>Comment : {props.comment}</li>
      </ul>
    </div>
  );
}
