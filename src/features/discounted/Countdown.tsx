import { useEffect, useState } from "react";

const Countdown = () => {
  const [time, setTime] = useState(1059200);

  useEffect(() => {
    let timer = setInterval(() => {
      setTime((time) => {
        if (time === 0) {
          clearInterval(timer);
          return 0;
        } else return time - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const days = Math.floor(time / (60 * 60 * 24));
  const hours = Math.floor((time % (60 * 60 * 24)) / (60 * 60));
  const minutes = Math.floor((time % (60 * 60)) / 60);
  const seconds = time % 60;

  

  return (
    <div className="mb-10 font-poppins">
      <div className="flex items-center justify-center ">
        <div className="border px-4 py-2 rounded-md flex items-center gap-10">
          <div className="flex flex-col items-center">
            <p className="text-[1rem] uppercase">days</p>
            <p className="text-[3rem] font-bold text-secondaryGreen">{`${days}`.padStart(2, "0")}</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-[1rem] uppercase">hours</p>
            <p className="text-[3rem] font-bold text-secondaryGreen">{`${hours}`.padStart(2, "0")}</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-[1rem] uppercase">min</p>
            <p className="text-[3rem] font-bold text-secondaryGreen">{`${minutes}`.padStart(2, "0")}</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-[1rem] uppercase">sec</p>
            <p className="text-[3rem] font-bold text-secondaryGreen">{`${seconds}`.padStart(2, "0")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
