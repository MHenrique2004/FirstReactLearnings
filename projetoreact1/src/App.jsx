import Titulo from "./Titulo"

export default function App() {

  return (

   <div>
    <Titulo nome="Priscila Senna" paragrafo={true} cor="red"/>
    <Titulo cor="blue" />
    <Titulo cor ="cyan"/>
    <Titulo cor ="Gray"/>
   </div>
  )
};

