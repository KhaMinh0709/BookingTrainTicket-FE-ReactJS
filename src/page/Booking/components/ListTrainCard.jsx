import { Calendar, Train } from "lucide-react";
import { TrainCard } from "./TrainCard";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// ListTrainCard Component
export const ListTrainCard = ({ trains = [], isLoading = false }) => {
    const navigate = useNavigate();
    const [train, setTrain] = useState(null);
    const [coach, setCoach] = useState([]);

    const getCoach = async (train) => {
        const res = await ListCoachInTrain(train);
        console.log(res);

        setCoach(res);
    }
    useEffect(() => {
        if (train) {
            getCoach(train);
        }
    }, [train])
    const onSelect = (id) => {
        // find full train object from trains by id
        const selected = trains.find(t => String(t.trainId ?? t.trainID ?? t.id) === String(id));
        setTrain(id);
        if (selected) {
            navigate('/DatVe/detail', { state: { train: selected } });
        }
    }
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-6">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-8">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="bg-blue-600 p-2 rounded-lg">
                            <Train className="w-6 h-6 text-white" />
                        </div>
                        <h1 className="text-3xl font-bold text-gray-900">Chọn chuyến tàu</h1>
                    </div>
                    <p className="text-gray-600">Tìm thấy {trains.length} chuyến tàu phù hợp</p>
                </div>

                {/* Loading state */}
                {isLoading ? (
                    <div className="flex flex-col items-center justify-center py-20">
                        <div className="relative">
                            <div className="w-16 h-16 border-4 border-blue-200 rounded-full"></div>
                            <div className="w-16 h-16 border-4 border-blue-600 rounded-full border-t-transparent animate-spin absolute top-0 left-0"></div>
                        </div>
                        <p className="mt-4 text-gray-600 font-medium">Đang tìm kiếm chuyến tàu...</p>
                    </div>
                ) : trains.length > 0 ? (
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {trains.map((train, index) => (
                            <TrainCard
                                key={train.id ?? index}
                                id={String(train.trainId ?? train.trainID ?? train.id)}
                                TrainName={train.trainName}
                                TGDi={train.departureTime ? new Date(train.departureTime).toLocaleString('vi-VN') : "Đang cập nhật"}
                                TGDen={train.arrivalTime ? new Date(train.arrivalTime).toLocaleString('vi-VN') : "Đang cập nhật"}
                                GiaVe={train.price}
                                SucChua={train.availableSeats ?? train.capacityTrain}
                                onSelect={onSelect}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="bg-white rounded-xl shadow-md p-12 text-center">
                        <div className="bg-red-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Calendar className="w-10 h-10 text-red-500" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Không tìm thấy chuyến tàu</h3>
                        <p className="text-gray-600 mb-6">
                            Không có chuyến tàu phù hợp với lựa chọn của bạn.<br />
                            Vui lòng thử chọn ngày khác hoặc liên hệ hỗ trợ.
                        </p>
                        <a
                            href="tel:0373254600"
                            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                        >
                            <span>📞</span>
                            Hotline: 0373 254 600
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
};