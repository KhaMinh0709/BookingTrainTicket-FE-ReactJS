import PropTypes from 'prop-types';

const TrainCard = (props) => {
  return (
    <button 
      className="bg-gradient-to-r from-blue-400 to-blue-600 w-40 h-64 rounded-2xl text-center relative p-4 text-white shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out"
      onClick={()=>props.onSelect(props.id)}
    >
      <div className="bg-yellow-400 rounded-lg py-2 mb-4 text-black">
        <span className="font-bold text-lg">{props.TrainName}</span>
      </div>
      <div className="bg-white text-black rounded-lg p-3 text-sm mb-2">
        <div className="flex justify-between mb-1">
          <span className="font-bold">TG đi:</span>
          <span>{props.TGDi}</span>
        </div>
        <div className="flex justify-between mb-1">
          <span className="font-bold">TG đến:</span>
          <span>{props.TGDen}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-bold">Sức chứa:</span>
          <span>{props.SucChua}</span>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-10 bg-black rounded-b-xl flex justify-center items-center">
        <div className="bg-yellow-400 rounded-full w-5 h-5 mx-1"></div>
        <div className="bg-yellow-400 rounded-full w-5 h-5 mx-1"></div>
      </div>
    </button>
  );
};

// Định nghĩa PropTypes
TrainCard.propTypes = {
  id : PropTypes.string.isRequired,
  TrainName: PropTypes.string.isRequired,
  TGDi: PropTypes.string.isRequired,
  TGDen: PropTypes.string.isRequired,
  SucChua: PropTypes.number.isRequired,
  onSelect: PropTypes.func,  // Thêm sự kiện chọn tàu
};

export default TrainCard;
