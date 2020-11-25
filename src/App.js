import React,{useContext} from 'react';
import Navbar from './components/Navbar';
import Chat from './components/Chat';


import  {ChatContext} from './context/ChatProvider';

function App() {
  const {usuario} = useContext(ChatContext);
 
  return usuario !== null ?(
    <div>
      <Navbar />
      {usuario.estado ? <Chat /> :<div className='lrand text-center  mt-5'>Debes iniciar Sesion</div>}
    </div>
  ):(<div>Cargando ...</div>);
}

export default App;
