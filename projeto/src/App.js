import Alunos from './components/Alunos';
import UserProvider from './context/users';

function App() {

  return (
    <UserProvider>
      <div>
        <h1>ESCOLA</h1>
        <hr/>
        <Alunos/>
      </div>
    </UserProvider>
  );
}

export default App;