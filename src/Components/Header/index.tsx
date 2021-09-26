import { MenuOutlined } from '@ant-design/icons';
import { Button, Drawer, Dropdown, PageHeader } from 'antd'
import React, { useState } from 'react'
import {ReactComponent as PcwLogo} from '../../Assets/Images/pcw_logo.svg'

const Header = () => {

    const [visible, setVisible] = useState(false);
    const showDrawer = () => {
      setVisible(true);
    };
    const onClose = () => {
      setVisible(false);
    };
    
    return (
        <PageHeader  title={<PcwLogo className="sm:max-h-16 max-h-10 header-img"/>} extra={
            <>
                <div className="flex items-center full-menu h-full pr-6">
                    <Button key="3" type="text" href="#catalog">Catalog</Button>
                    <Button key="2" type="text" href="#contact">Reach us</Button>
                </div>
                <div className="ham-menu">
                    <MenuOutlined onClick={showDrawer} />
                    <Drawer title="Menu" placement="right" onClose={onClose} visible={visible}>
                    <Button key="3" type="text" href="#catalog">Catalog</Button>
                    <br/>
                    <Button key="2" type="text" href="#contact">Reach us</Button>
                    </Drawer>
                </div>
            </>
          }/>
    )
}

export default Header