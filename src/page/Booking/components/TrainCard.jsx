const TrainCard = () => {
  return (
    <div className="bg-blue-500 w-32 h-60 rounded-lg text-center relative p-3 text-white">
      <div className="bg-yellow-500 rounded-lg py-1 mb-2">
        <span className="font-bold text-sm">SE8</span>
      </div>
      <div className="bg-white text-black rounded-lg p-2 text-xs">
        <div className="flex justify-between mb-1">
          <span className="font-bold">TG đi</span>
          <span>26/10 06:00</span>
        </div>
        <div className="flex justify-between mb-1">
          <span className="font-bold">TG đến</span>
          <span>27/10 19:12</span>
        </div>
        <div className="flex justify-between mb-1">
          <span className="font-bold">SL chỗ đặt</span>
          <span>0</span>
        </div>
        <div className="flex justify-between">
          <span className="font-bold">SL chỗ trống</span>
          <span>204</span>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-black rounded-b-lg flex justify-center items-center">
        <div className="bg-yellow-500 rounded-full w-4 h-4 mx-1"></div>
        <div className="bg-yellow-500 rounded-full w-4 h-4 mx-1"></div>
      </div>
    </div>
  );
};

export default TrainCard;
