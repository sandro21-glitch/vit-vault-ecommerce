import React from "react";

type DescriptionTypes = {
  desc: string | null;
};

const ProductDescription = ({ desc }: DescriptionTypes) => {
  if (!desc) return null;
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
    <div className="mb-5 font-poppins">
      <p className="text-[14px]">{formattedParts}</p>
    </div>
  );
};

export default ProductDescription;
