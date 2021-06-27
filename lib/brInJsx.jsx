import * as React from "react"

export default (text) => {
  const textArray = text.split(/(\n)/).map((item, index) => {
    return (
      <React.Fragment key={index}>
        {item.match(/\n/) ? <br /> : item}
      </React.Fragment>
    );
  });
  return <div>{textArray}</div>;
}