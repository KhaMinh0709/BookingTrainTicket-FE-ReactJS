import NhaGaCard from "./components/NhaGaCard"
import { useNavigate } from 'react-router-dom';

export const NhaGa = () =>{
 const navigate = useNavigate();
 const trainStations = [
    {
        id: 1,
        name: "Ga Sài Gòn",
        image: "https://th.bing.com/th/id/OIP.FJCjBwwHWFQTf0O_B0pjBgHaEK?rs=1&pid=ImgDetMain",
        description: "Nhà ga trung tâm tại Thành phố Hồ Chí Minh"
    },
    {
        id: 2,
        name: "Ga Hà Nội",
        image: "https://th.bing.com/th/id/R.2d0e03ed7205730b006ad5ce374611d1?rik=69pAW4p3mU7NMg&pid=ImgRaw&r=0",
        description: "Nhà ga chính tại Thủ đô Hà Nội"
    },
    {
        id: 3,
        name: "Ga Đà Nẵng",
        image: "https://th.bing.com/th/id/OIP.k1DzVbP1vTC4PrICi1RJbgHaEQ?rs=1&pid=ImgDetMain",
        description: "Nhà ga trung tâm tại Đà Nẵng"
    },
    {
        id: 4,
        name: "Ga Hội An",
        image: "https://th.bing.com/th/id/OIP.2a3cPChgMecevWVpj-z7xgHaEd?rs=1&pid=ImgDetMain",
        description: "Nhà ga trung tâm tại Hội An"
    },
    {
        id: 5,
        name: "Ga Phú Yên",
        image: "https://th.bing.com/th/id/OIP.U3RfqsmMdWfaR8c26QjToQHaDg?rs=1&pid=ImgDetMain",
        description: "Nhà ga trung tâm tại Phú Yên"
    },
    {
        id: 6,
        name: "Ga Nha Trang",
        image: "https://th.bing.com/th/id/OIP.k1DzVbP1vTC4PrICi1RJbgHaEQ?rs=1&pid=ImgDetMain",
        description: "Nhà ga tại Nha Trang"
    }
];

      
      return (
        <div className="container mx-auto py-8 px-4">
          <h1 className="text-3xl font-bold mb-8">Các Nhà Ga Việt Nam</h1>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {trainStations.map((station) => (
              <NhaGaCard
                key={station.id}
                name={station.name}
                image={station.image}
                description={station.description}
                onSeeMore={() => navigate(`/NhaGa/${station.id}`)}
              />

            ))}
          </div>
        </div>
      )
}