import { ReactNode, useEffect, useRef } from "react";

type ClickOutsideProps = {
  onOutsideClick: () => void;
  children: ReactNode;
};

const ClickOutside: React.FC<ClickOutsideProps> = ({
  onOutsideClick,
  children,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      containerRef.current &&
      !containerRef.current.contains(event.target as Node)
    ) {
      onOutsideClick();
    }
  };

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      handleClickOutside(event);
    };

    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  return <div ref={containerRef}>{children}</div>;
};

export default ClickOutside;
