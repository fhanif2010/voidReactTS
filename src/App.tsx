import './App.css'
import CardUser from './component/CardUser'

type User = {
  name: string;
  unit: string;
  nik: number;
}

const Data: User[] = [
  {
    name: 'Faisal Hanif',
    unit: 'Pusat Bisnis',
    nik: 10912301230
  },
  {
    name: 'Asep',
    unit: 'Pusat Bisnis',
    nik: 10
  }
]
function App() {
  return (
    <>
    <h1>Data</h1>
    {
      Data.map((User) => {
        return (
        <CardUser name={User.name} unit={User.unit} nik={User.nik}/>
      )
      })
    }
    </>
  )
}

export default App
