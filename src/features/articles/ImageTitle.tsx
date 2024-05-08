import "./imageTitle.css";
const ImageTitle = () => {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[999]">
      <div className="notification">
        <div className="notiglow"></div>
        <div className="notiborderglow"></div>
        <div className="notititle">პრაქტიკული მითითებები ცილის შესახებ</div>
      </div>
    </div>
  );
};

export default ImageTitle;
