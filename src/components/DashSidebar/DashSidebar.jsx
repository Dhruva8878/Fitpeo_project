import { FaClipboardCheck, FaDharmachakra, FaHome, FaWallet } from 'react-icons/fa';
import { FaChartSimple } from 'react-icons/fa6';
import { IoBagCheck } from 'react-icons/io5';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { BsArrowsExpandVertical } from "react-icons/bs";
import { useState } from 'react';


export const DashSidebar = () => {
     const [collapsed, setCollapsed] = useState(true);
    return (
        <div className='max-h-[100vh]'>
            <Sidebar
                collapsed = {collapsed}
                backgroundColor={"#202938"}
                rootStyles={{height:"100%"}}
            >
                <Menu className='text-white'>
                   
                    <MenuItem icon={<FaHome className='text-xl'/>}>Dashboard</MenuItem>
                    <MenuItem icon={<FaChartSimple className='text-xl'/>}> Charts</MenuItem>
                    <MenuItem icon={<FaClipboardCheck  className='text-xl'/>}> E-commerce</MenuItem>
                    <MenuItem icon={<FaWallet className='text-xl'/>}> Wallet</MenuItem>
                    <MenuItem icon={<IoBagCheck className='text-xl'/>}> Wallet</MenuItem>
                </Menu>
                <BsArrowsExpandVertical onClick={() => setCollapsed(!collapsed)} className='text-xl text-white ml-7 mt-80'/> 
            </Sidebar>
        </div>
    )
}