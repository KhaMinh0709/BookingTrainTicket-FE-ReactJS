import PropTypes from "prop-types";
import TrainCard from "./TrainCard";
import { Loading } from "../../../components/loading/Loading";
import { useEffect, useState } from "react";
import { ListCoachInTrain } from "../../../service/CoachService";
import ListCoach from "./ListCoach";


export const ListTrainCard = ({ trains, isLoading }) => {

    const [train, setTrain] = useState(null);
    const [coach, setCoach] = useState([]);

    const getCoach = async (train) => {
        const res = await ListCoachInTrain(train);
        console.log(res);
        
        setCoach(res);
    }
    useEffect(() => {
        // 
        if(train){
            getCoach(train);
        }
    },[train])
    const onSelect = (id) =>{
       setTrain(id);

    }

    return (
        <div>
            <div className="flex flex-wrap justify-center gap-4">
            {isLoading ? (
                <Loading/>
            ) : trains.length > 0 ? (
                trains.map((train, index) => (
                    <TrainCard
                        key={index}
                        id = {train.trainID}
                        TrainName={train.trainName}
                        TGDi={train.departureTime || "??"}
                        TGDen={train.arrivalTime || "??"}
                        SucChua={train.capacityTrain}
                        onSelect={onSelect}
                    />
                ))
            ) : (
                <h2>HÃY CHỌN LỊCH TRÌNH PHÙ HỢP</h2>
            )}
        </div>
            {
                coach && coach.length > 0 && <ListCoach data={coach} />
            }
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
