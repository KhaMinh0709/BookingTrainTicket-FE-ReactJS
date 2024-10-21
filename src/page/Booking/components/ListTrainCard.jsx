import PropTypes from "prop-types";
import TrainCard from "./TrainCard";

export const ListTrainCard = ({ trains }) => {
    return (
        <div className="flex flex-wrap justify-center gap-4">
            {/* Render danh sách TrainCard */}
            {trains.length > 0 ? (
                trains.map((train, index) => (
                    <TrainCard
                        key={index}
                        TrainName={train.trainName}
                        TGDi={train.departureTime || "??"}
                        TGDen={train.arrivalTime || "??"}
                        SucChua={train.capacityTrain}
                    />
                ))
            ) : (
                <p>HÃY CHỌN LỊCH TRÌNH PHÙ HỢP</p>
            )}
        </div>
    );
};

// Định nghĩa kiểu dữ liệu cho props
ListTrainCard.propTypes = {
    trains: PropTypes.arrayOf(
        PropTypes.shape({
            trainName: PropTypes.string.isRequired,
            departureTime: PropTypes.string, 
            arrivalTime: PropTypes.string, 
            capacityTrain: PropTypes.number.isRequired,
        })
    ).isRequired,
};
