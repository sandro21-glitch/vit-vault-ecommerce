type InfoTypes = {
  info: string;
};

const Info = ({ info }: InfoTypes) => {
  const infoParts = info.split(" - ");
  return (
    <div>
      {infoParts?.map((part, index) => (
        <p key={index} className="font-poppins text-[20px] mb-10">
          {part.trim()}
        </p>
      ))}
    </div>
  );
};

export default Info;
