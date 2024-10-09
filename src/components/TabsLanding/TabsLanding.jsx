import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import 'bootstrap/dist/css/bootstrap.min.css';
import './TabsLanding.css'

function Navbar() {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="fill-tab-example"
      className="mb-3 myTab"
      fill
    >
      <Tab eventKey="home" title="Cadastro" tabClassName='myTab'></Tab>
      <Tab eventKey="profile" title="Login" tabClassName='myTab'></Tab>
    </Tabs>
  );
}

export default Navbar;