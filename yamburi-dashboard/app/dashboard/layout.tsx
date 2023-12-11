import React from 'react';
import './css/style.css';
import Sidebar from '@/components/Sidebar/Sidebar';

type Props = {}

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='dashboardlayout'>
            <div className='dashboardlayout-left'>
                <Sidebar/>
            </div>
            <div className='dashboardlayout-right'>
                {children}
            </div>
        </div>
    )
}
export default layout