import logo from './logo.svg';
import './App.css';
import { AddTodo } from './containers/AddTodo';
import { Footer } from './components/Footer';
import { VisibleTodoList } from './containers/VisibleTodoList'
function App() {
  return (
    <div>
      <AddTodo  />
      <Footer/>
      <VisibleTodoList/>
    </div>
  );
}

export default App;
