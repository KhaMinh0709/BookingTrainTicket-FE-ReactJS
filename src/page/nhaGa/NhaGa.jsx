import NhaGaCard from "./components/NhaGaCard"

export const NhaGa = () =>{
    const trainStations = [
        {
          id: 1,
          name: "Ga Sài Gòn",
          image: "https://imacorp.com/wp-content/uploads/2024/09/IMA_Logo_Blue.jpg",
          description: "Nhà ga trung tâm tại Thành phố Hồ Chí Minh"
        },
        {
          id: 2,
          name: "Ga Hà Nội",
          image: "/placeholder.svg?height=200&width=400",
          description: "Nhà ga chính tại Thủ đô Hà Nội"
        },
        {
          id: 3,
          name: "Ga Đà Nẵng",
          image: "/placeholder.svg?height=200&width=400",
          description: "Nhà ga trung tâm tại Đà Nẵng"
        }
      ]
      
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
                onSeeMore={() => console.log(`Xem thêm về ${station.name}`)}
              />

            ))}
          </div>
        </div>
      )
}