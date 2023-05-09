import './styles/styles.css';
import { store } from './store/store';
import { Provider } from 'react-redux';
import { RenderForm } from './components/RenderForm';
function App() {
  return (
    <Provider store={store}>
        <div className="text-red-700">
          <RenderForm />
        </div>
    </Provider>
  );
}

export default App;
