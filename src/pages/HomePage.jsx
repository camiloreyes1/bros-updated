/* eslint-disable react/no-unescaped-entities */
import CarouselPics from "../components/CarouselPics"

const HomePage = () => {
  return (
    <div>
        <div className="home-page">

        <h1 style={{ color: 'white' }}> Bro's Hot Chicken</h1>
        <h2 style={{ color: 'white' }}> Can You Handle the Heat?</h2>

        <CarouselPics/>

        </div>
    </div>
  )
}

export default HomePage