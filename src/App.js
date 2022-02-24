
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import routers from "./router";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {routers.map((item, index) => (
            <Route path={item.path} element={item.element} key={index} >
              {
                item.children && item.children.map((child, i) => (
                  <Route index={child.index} path={child.path} element={child.element} key={i} />
                ))
              }
            </Route>
          ))
          }
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
 