import Dropdown from './components/Dropdown'


const App = () =>{
  const data = [
    {value: 1, name: '1'},
    {value: 2, name: '2'},
    {value: 3, name: '3'},
]
  return(
    <div>
    <Dropdown options={data}/>
  </div>

  )

}

export default App