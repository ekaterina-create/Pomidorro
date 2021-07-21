import Header from './components/Header/Header';
import Main from './components/Main/Main';
import AddBlock from './components/AddBlock/AddBlock';
import TimerBlock from './components/TimerBlock/TimerBlock';
import { rootReducer } from './redux/reducers/rootReducer';
import { createStore, compose } from 'redux';
import { Provider } from 'react-redux';


export const composeEnhancers =
  (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const store = createStore(rootReducer, composeEnhancers());

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Header/>
          <Main>
        <AddBlock/>
        <TimerBlock/>
        </Main>
    </div>
    </Provider>
  );
}

export default App;
