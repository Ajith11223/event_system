"use client"
import { Sidenav, Nav } from 'rsuite';
import DashboardIcon from '@rsuite/icons/legacy/Dashboard';
import GroupIcon from '@rsuite/icons/legacy/Group';
import MagicIcon from '@rsuite/icons/legacy/Magic';
import GearCircleIcon from '@rsuite/icons/legacy/GearCircle';

const MainPage = () => {
  return (
    <div style={{ width: 240 }}>
    <Sidenav defaultOpenKeys={['3', '4']}>
      <Sidenav.Body>
        <Nav activeKey="1">
          <Nav.Item eventKey="1" icon={<DashboardIcon />}>
            Home
          </Nav.Item>
          <Nav.Item eventKey="2" icon={<GroupIcon />}>
           My Events
          </Nav.Item>
          <Nav.Item eventKey="3" icon={<MagicIcon />}>
            Customers
          </Nav.Item>
          <Nav.Item eventKey="4" icon={<GearCircleIcon />}>
            Settings
          </Nav.Item>
        </Nav>
      </Sidenav.Body>
    </Sidenav>
  </div>
  )
}

export default MainPage
