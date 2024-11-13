export const DetailAboutUs = () => {
    return (
        <div className="flex flex-col md:flex-row max-w-full mx-auto space-y-6 md:space-y-0 md:space-x-6">
            
            {/* Phần bên trái: Hiệu ứng di chuyển đoàn tàu */}
            <div className="w-full md:w-1/2 bg-blue-600 text-white py-10 px-6 border-4 border-green-400 rounded-lg shadow-lg flex items-center justify-center">
                <div className="relative w-full h-48 overflow-hidden">
                    <div className="train-animation absolute left-0 bg-gray-900 w-32 h-16 rounded shadow-md flex items-center justify-center text-yellow-300 font-bold">
                        🚂 Nhà Ga Sài Gòn
                    </div>
                </div>
                <style>{`
                    /* CSS cho hiệu ứng di chuyển */
                    .train-animation {
                        animation: moveTrain 3s linear infinite;
                    }
                    @keyframes moveTrain {
                        0% { transform: translateX(-100%); }
                        100% { transform: translateX(100%); }
                    }
                `}</style>
            </div>

            {/* Phần bên phải: Nội dung giới thiệu */}
            <div className="w-full md:w-1/2 bg-gray-600 text-white py-10 px-6 border-4 border-green-400 rounded-lg shadow-lg text-center md:text-left">
                <h2 className="text-4xl font-extrabold text-yellow-400 mb-6">Tại sao nên chọn KhaMinh Station</h2>
                <p className="text-gray-200 text-xl mb-6">
                    KhaMinh Station là một nền tảng đặt vé tàu hiện đại và tiện lợi. Chúng tôi không chỉ cung cấp dịch vụ đặt vé nhanh chóng, mà còn mang đến sự trải nghiệm tốt nhất cho người dùng thông qua giao diện thân thiện và hệ thống thông tin đáng tin cậy. 
                    Mục tiêu của chúng tôi là trở thành lựa chọn hàng đầu của bạn mỗi khi cần di chuyển bằng tàu hỏa.
                </p>
                <p className="text-gray-200 text-lg mb-6">
                    Với phương châm Nhanh chóng - Tiện lợi - An toàn, KhaMinh Station cam kết đem lại những giá trị thực sự cho người dùng:
                </p>
                <ul className="list-disc list-inside text-gray-200 text-lg space-y-4">
                    <li>Đặt vé tàu mọi lúc, mọi nơi chỉ với vài thao tác đơn giản.</li>
                    <li>Thông tin lịch trình chính xác và luôn được cập nhật để đảm bảo sự tiện lợi cho chuyến đi của bạn.</li>
                    <li>Hỗ trợ nhiều phương thức thanh toán an toàn, nhanh chóng và bảo mật tuyệt đối.</li>
                    <li>Dịch vụ chăm sóc khách hàng chuyên nghiệp, hoạt động 24/7 sẵn sàng hỗ trợ bạn bất kỳ lúc nào.</li>
                </ul>
                <p className="text-gray-200 text-lg mt-6">
                    Chúng tôi không chỉ cung cấp dịch vụ, mà còn đặt trọng tâm vào việc cải thiện trải nghiệm người dùng thông qua việc lắng nghe phản hồi và liên tục nâng cấp hệ thống. Với KhaMinh Station, bạn sẽ luôn cảm thấy yên tâm và hài lòng trên mỗi chuyến đi.
                </p>
            </div>
        </div>
    );
};

export default DetailAboutUs;
