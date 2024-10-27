import PropTypes from "prop-types";
import TrainCard from "./TrainCard";
import { Loading } from "../../../components/loading/Loading";

export const ListTrainCard = ({ trains, isLoading }) => {
    return (
        <div className="flex flex-wrap justify-center gap-4">
            {isLoading ? (
                <Loading/>
            ) : trains.length > 0 ? (
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
                <h2>HÃY CHỌN LỊCH TRÌNH PHÙ HỢP</h2>
            )}
        </div>
    );
};
ListTrainCard.propTypes = {
    trains: PropTypes.arrayOf(
        PropTypes.shape({
            trainName: PropTypes.string.isRequired,
            departureTime: PropTypes.string,
            arrivalTime: PropTypes.string,
            capacityTrain: PropTypes.number.isRequired,
        })
    ).isRequired,
    isLoading: PropTypes.bool.isRequired, // Thêm prop isLoading
};
