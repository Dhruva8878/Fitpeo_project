import { FaClipboardCheck, FaHome, FaWallet } from 'react-icons/fa';
import { FaChartSimple } from 'react-icons/fa6';
import { IoBagCheck } from 'react-icons/io5';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { BsArrowsExpandVertical } from "react-icons/bs";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const DashSidebar = () => {
    const [collapsed, setCollapsed] = useState(true);
    const navigate = useNavigate();

    return (
        <div className='max-h-[100vh]'>
            <Sidebar
                collapsed={collapsed}
                backgroundColor={"#202938"}
                rootStyles={{ height: "100%" }}
            >
                <Menu className='text-white'>
                    <MenuItem icon={<FaHome className='text-xl' />} onClick={() => navigate("/")}>
                        Dashboard
                    </MenuItem>
                    <MenuItem icon={<FaChartSimple className='text-xl' />} onClick={() => navigate("/coming-soon")}>
                        Charts
                    </MenuItem>
                    <MenuItem icon={<FaClipboardCheck className='text-xl' />} onClick={() => navigate("/coming-soon")}>
                        E-commerce
                    </MenuItem>
                    <MenuItem icon={<FaWallet className='text-xl' />} onClick={() => navigate("/coming-soon")}>
                        Wallet
                    </MenuItem>
                    <MenuItem icon={<IoBagCheck className='text-xl' />} onClick={() => navigate("/coming-soon")}>
                        Cart
                    </MenuItem>
                </Menu>
                <BsArrowsExpandVertical onClick={() => setCollapsed(!collapsed)} className='text-xl text-white ml-7 mt-80' />
            </Sidebar>
        </div>
    );
}
