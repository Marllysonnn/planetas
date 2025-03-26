import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Terra from '../components/planetas/terra';
import Venus from '../components/planetas/venus';
import Mercurio from '../components/planetas/mercurio';
import Marte from '../components/planetas/marte';
import Jupiter from '../components/planetas/jupiter';
import Saturno from '../components/planetas/saturno';
import Netuno from '../components/planetas/netuno';
import Urano from '../components/planetas/urano';

const AppRoute = () => {
    return (
        <Router>
            <Routes>
                <Route path="/terra" element={<Terra />} />
                <Route path="/venus" element={<Venus />} />
                <Route path="/mercurio" element={<Mercurio />} />
                <Route path="/jupiter" element={<Jupiter />} />
                <Route path="/saturno" element={<Saturno />} />
                <Route path="/marte" element={<Marte />} />
                <Route path="/netuno" element={<Netuno />} />
                <Route path="/urano" element={<Urano />} />
            </Routes>
        </Router>
    );
}
export default AppRoute;