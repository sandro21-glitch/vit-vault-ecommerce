import "./imageTitle.css";
type ImageTitleTypes = {
  title: string;
};

const ImageTitle = ({ title }: ImageTitleTypes) => {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[999]">
      <div className="notification">
        <h4 className="notititle">{title}</h4>
      </div>
    </div>
  );
};

export default ImageTitle;
