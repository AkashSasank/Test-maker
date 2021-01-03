import {Route, BrowserRouter} from 'react-router-dom';
import Home from './views/Home/Home';
import Test from './views/Test/Test';

const routes = (
    <BrowserRouter>
    <div>
        <Route exact path="/" component = {Home}/>
        <Route exact path="/tests" component = {Test}/>
    </div>
    </BrowserRouter>
);

export default routes;