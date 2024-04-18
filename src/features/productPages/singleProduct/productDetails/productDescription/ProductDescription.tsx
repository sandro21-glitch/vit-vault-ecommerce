import React from "react";

type DescriptionTypes = {
  desc: string;
};

const ProductDescription = ({ desc }: DescriptionTypes) => {
  let lineBreakOccurred = false;

  const wrappedDesc = desc.split(" - ").map((part, index) => {
    const parts = part.split("–");

    const isFirstPartAfterLineBreak = lineBreakOccurred && index > 0;

    if (!lineBreakOccurred && index > 0) {
      lineBreakOccurred = true;
    }

    return (
      <React.Fragment key={index}>
        {isFirstPartAfterLineBreak && (
          <>
            <br />
            <br />
            {parts.map((subPart, subIndex) => (
              <React.Fragment key={subIndex}>
                {subIndex === 0 && <strong>{subPart.split(" ")[0]}</strong>}
                {subIndex === 0 && " " + subPart.split(" ").slice(1).join(" ")}
                {subIndex > 0 && <> – {subPart}</>}
              </React.Fragment>
            ))}
          </>
        )}
        {!isFirstPartAfterLineBreak &&
          parts.map((subPart, subIndex) => (
            <React.Fragment key={subIndex}>
              {subIndex === 0 && parts.length > 1 && (
                <strong>{subPart.split(" ")[0]}</strong>
              )}
              {subIndex === 0 && parts.length === 1 && subPart}
              {subIndex > 0 && <> – {subPart}</>}
            </React.Fragment>
          ))}
      </React.Fragment>
    );
  });

  return (
    <div className="mb-5">
      <p className="text-[14px]">{wrappedDesc}</p>
    </div>
  );
};

export default ProductDescription;
