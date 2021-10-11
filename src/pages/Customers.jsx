import React, { useEffect } from 'react'

import 'antd/dist/antd.css';

import { Table, Tag, Button } from 'antd';

import Axios from 'axios';

import { useSelector, useDispatch } from 'react-redux'

import ModalAddUser from './ModalAddUser';

const url = 'http://localhost:80/'


const Customers = () => {

    const dispatch = useDispatch();

    const getDataOCR = () => {
        Axios({
            url: url + '/dataAlert',
            method: 'GET'
        }).then(result => {

            dispatch({
                type: 'GET_USER_API',
                tableData: result.data['index']
            });

        });
    }

    let data = useSelector(state => state.ThemeReducer.tableData)

    const handleClick = () => {
    
        dispatch({
            type: 'GET_MODAL',
            visible: true
        });
    }


    useEffect(() => {
        getDataOCR();
    }, [])

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'key'
        },
        {
            title: 'Email',
            dataIndex: 'mail',
            key: 'key',
        },
        {
            title: 'Metrics',
            dataIndex: 'metric',
            key: 'key',
            render: (tags) => {
    
                return (
                    <div>{tags.split(',').map((tag, index) => {
                        let color = 'green'
                        if (tag === 'M1') {
                            color = 'red'
                        }
                        else if (tag === 'M2') {
                            color = 'geekblue'
                        }
                        else if (tag === 'M4') {
                            color = 'blue'
                        }
                        return (
                            <Tag style={{ fontWeight: 'bold' }} color={color} key={index}>{tag}</Tag>
                        )
                    })}</div>
                )
            }
    
        },
    
        {
            title: 'Action',
            key: 'key',
            render: () => <Button onClick={handleClick}  type="primary" ghost>Edit</Button>
        }
    ];

    return (
        <div>
            <div className="row">
                <div className="col-12">

                    <div className="card">
                        <Button onClick={handleClick} style={{ float: 'right', marginBottom: 20, fontWeight: 'bold' }} type="primary" >
                            Thêm user
                        </Button>
                        <ModalAddUser></ModalAddUser>
                        <Table key={data.id} columns={columns} dataSource={data} pagination={{ pageSize: 5 }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Customers
