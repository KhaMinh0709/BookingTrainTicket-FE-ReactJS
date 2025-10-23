import { useState } from 'react';
import { Clock, MapPin, Users, Train, ChevronRight, Calendar } from 'lucide-react';

const formatPrice = (price) => {
  try {
    return new Intl.NumberFormat('vi-VN').format(Number(price));
  } catch (e) {
    return price;
  }
};

// TrainCard Component với thiết kế mới
export const TrainCard = ({ id, TrainName, TGDi, TGDen, GiaVe, SucChua, onSelect }) => {
  return (
    <div className="group relative bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
      {/* Header với gradient */}
      <div className="bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-700 p-5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full -mr-16 -mt-16"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-5 rounded-full -ml-12 -mb-12"></div>
        
        <div className="relative flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-white/20 backdrop-blur-sm p-2 rounded-lg">
              <Train className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-white font-bold text-xl">{TrainName}</h3>
              <p className="text-blue-100 text-sm">Mã: {id}</p>
            </div>
          </div>
          <div className="bg-amber-400 text-gray-900 font-bold px-4 py-2 rounded-lg shadow-lg">
            <div className="text-xs opacity-80">Từ</div>
            <div className="text-lg leading-tight">{formatPrice(GiaVe)}₫</div>
          </div>
        </div>
      </div>

      {/* Body với thông tin chi tiết */}
      <div className="p-5 space-y-4">
        {/* Thời gian */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-gray-500 text-xs">
              <Clock className="w-3.5 h-3.5" />
              <span>Khởi hành</span>
            </div>
            <div className="font-semibold text-gray-900 text-sm leading-tight">{TGDi}</div>
          </div>
          
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-gray-500 text-xs">
              <MapPin className="w-3.5 h-3.5" />
              <span>Đến nơi</span>
            </div>
            <div className="font-semibold text-gray-900 text-sm leading-tight">{TGDen}</div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-100"></div>

        {/* Footer với số chỗ và nút đặt */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-green-50 p-2 rounded-lg">
              <Users className="w-4 h-4 text-green-600" />
            </div>
            <div>
              <div className="text-xs text-gray-500">Còn trống</div>
              <div className="font-bold text-green-600">{SucChua} chỗ</div>
            </div>
          </div>
          
          <button
            onClick={() => onSelect && onSelect(id)}
            className="group/btn bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-2.5 rounded-lg font-semibold shadow-md hover:shadow-xl transition-all duration-200 flex items-center gap-2"
          >
            Chọn tàu
            <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Badge cho số chỗ ít */}
      {SucChua < 10 && (
        <div className="absolute top-16 left-0 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-r-full shadow-lg">
          Sắp hết chỗ!
        </div>
      )}
    </div>
  );
};
