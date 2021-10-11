import React from 'react'

import StatusCard from '../components/status-card/StatusCard'

import statusCards from '../assets/JsonData/status-card-data.json'

import { Button } from 'antd';

import {  useDispatch } from 'react-redux'


import ModalFixUser from './ModalFixUser'


const Dashboard = () => {

    const dispatch = useDispatch();
    
    const handleClick = () => {
    
        dispatch({
            type: 'GET_MODAL',
            visible: true
        });
    }


    return (
        <div>
            <Button onClick ={handleClick} style={{ float: 'right', marginBottom: 20, fontWeight: 'bold',  }} type="primary" >
                Chỉnh sửa chỉ số
            </Button>
            <ModalFixUser></ModalFixUser>
            <h2 className="page-header">Ngưỡng cảnh báo theo chỉ số</h2>
            
            <div className="row">
                <div className="col-12">
                    <div className="row">
                        {
                            statusCards.map((item, index) => (
                                <div className="col-4" key={index}>
                                    <StatusCard
                                        icon={item.icon}
                                        count={item.count}
                                        title={item.title}
                                    />
                                </div>
                            ))
                        }
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Dashboard
