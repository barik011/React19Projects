import Card from "./Card"
import Clock from "./Clock"
import Form from "./Form"



function App() {
  const products = [
  {
    id:1,
    prod_title:'Mobile',
    prod_price:24355,
    prod_desc:'Mobile dummy description data',
    slug:'mobile'
  },
  {
    id:2,
    prod_title:'Television',
    prod_price:30000,
    prod_desc:'Television dummy description data',
    slug:'television'
  },
  {
    id:3,
    prod_title:'Computer System',
    prod_price:89000,
    prod_desc:'Computer dummy description data',
    slug:'computer'
  }
]
  
  return (
    <>
      <Form />
     {products.map((prod) => (
      <div key={prod.id}>
         <Card data={prod}/>
      </div>
     ))}

     <Clock />
      
    </>
  )
}

export default App
