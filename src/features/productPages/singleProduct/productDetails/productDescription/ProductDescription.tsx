import React from "react";

type DescriptionTypes = {
  desc: string;
};

const ProductDescription = ({ desc }: DescriptionTypes) => {
  const pattern = / - /g;
  const parts = desc.split(pattern);

  const formattedParts = parts.map((part, index) => {
    if (index === 0 || !part.trim()) {
      return `${part} `;
    }
    return (
      <React.Fragment key={index}>
        {part}
        <br />
        <br />
      </React.Fragment>
    );
  });

  return (
    <div className="mb-5">
      <p className="text-[14px]">{formattedParts}</p>
    </div>
  );
};

export default ProductDescription;
