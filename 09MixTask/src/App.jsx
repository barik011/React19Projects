import { useState } from "react"


function App() {
  const [cars, setCars] = useState([]);
  const [year, setYear] = useState(new Date().getFullYear());
  const [carMade, setCarMade] = useState('');
  const [carModel, setcarModel] = useState('');

  const onAddHandler = () => {
    const newCar = {
      year: year,
      carmade: carMade,
      carmodel: carModel
    }
    if (newCar) {
      setCars(c => [...c, newCar])

      localStorage.setItem('carsStore', JSON.stringify(cars))
    }
    setYear(new Date().getFullYear());
    setCarMade('');
    setcarModel('');

  }
  const carsData = JSON.parse(localStorage.getItem('carsStore'))
  const onYearHandler = (e) => {
    setYear(e.target.value)
  }
  const onMadeHandler = (e) => {
    setCarMade(e.target.value)
  }
  const onModelHandler = (e) => {
    setcarModel(e.target.value)
  }


  return (
    <>
      <div className="w-full h-full text-center p-5">
        <h1 className="text-4xl font-bold">Mix Task for React 19</h1>
        <div className="flex flex-wrap">
          <div className="w-1/2 h-1/2 border min-h-80 flex flex-col">
            <h2 className="font-bold">List of Cars Types</h2>
            <ul>
              {
                carsData?.map((car, index) => (<li key={index}>{car.year} years, Model:{car.carmade} : Marven:{car.carmodel} </li>))
              }

            </ul>
            <input className="border w-1/2" type="number" value={year} onChange={onYearHandler} placeholder="Enter Year" />
            <input className="border w-1/2" type="text" value={carMade} onChange={onMadeHandler} placeholder="Enter made by" />
            <input className="border w-1/2" type="text" value={carModel} onChange={onModelHandler} placeholder="Enter modal name" />
            <button className="border w-3xs" onClick={onAddHandler}>Add Car</button>
          </div>
          <div className="w-1/2 h-1/2 border">BBBBBBBBBBBBBBB</div>
          <div className="w-1/2 h-1/2 border">CCCCCCCCCCCCCC</div>
          <div className="w-1/2 h-1/2 border">DDDDDDDDDDDDDD</div>

        </div>
      </div>

    </>
  )
}

export default App
