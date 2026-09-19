import React,{useState} from 'react'

const ListCars = () => {
    const [cars, setCars] = useState([]);
  const [year, setYear] = useState(new Date().getFullYear());
  const [carMade, setCarMade] = useState('');
  const [carModel, setcarModel] = useState('');

  const onAddHandler = () => {
    const newCar = {
      year: Number(year),
      carmade: carMade.trim(),
      carmodel: carModel.trim()
    }
    if (newCar.year != null &&  newCar.carmade.trim()  != "" && newCar.carmodel.trim()  !="" ) {
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
          <div className="border min-h-80 p-2 flex flex-col">
            <h2 className="text-2xl  font-bold">List of Cars Types</h2>
            <ul className='h-10'>
              {
                carsData?.map((car, index) => (<li key={index}>{car.year} years, Model:{car.carmade} : Marven:{car.carmodel} </li>))
              }

            </ul>
            <div className='w-full flex flex-col justify-center items-center gap-3.5'>
            <input className="border w-1/2" type="number" value={year} onChange={onYearHandler} placeholder="Enter Year" />
            <input className="border w-1/2" type="text" value={carMade} onChange={onMadeHandler} placeholder="Enter made by" />
            <input className="border w-1/2" type="text" value={carModel} onChange={onModelHandler} placeholder="Enter modal name" />
            <button className="w-36 bg-amber-700 border-0 cursor-pointer text-white font-bold rounded-md" onClick={onAddHandler}>Add Car</button>
            </div>
          </div>
        </>
  )
}

export default ListCars