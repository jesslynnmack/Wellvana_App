import React from "react";
import { Button, ButtonGroup } from "reactstrap";

const Link = props => {
  function handleClick(e) {
    console.log("link was clicked");
  }
  return (
    <Button
      color="none"
      className="button-link"
      href={props.url}
      onClick={handleClick}
    >
      <img src={props.image}></img>
      <p>{props.text}</p>
    </Button>
  );
};

export default Link;
