import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'

import Error404 from 'containers/errors/Error404';
import Home from 'containers/pages/Home';
function App(){
  return (
   <Router>
        <Routes>
        {/* Error Display */}     
            <Route path ="*" element={<Error404/>}/>
   
            {/* Home Display */}
            <Route path="/" element={<Home/>}/>
            </Routes>
        </Router>
  );
}
export default App;