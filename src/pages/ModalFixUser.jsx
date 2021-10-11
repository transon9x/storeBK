import React from 'react'
import {
    Modal, Form,
    Input,
    message, 
} from 'antd';

import { useSelector, useDispatch } from 'react-redux'


export default function ModalFixUser() {
    const [form] = Form.useForm();


    const dispatch = useDispatch();

    let OnData = useSelector(state => state.ThemeReducer.visible)

    const onCancel = () => {
        dispatch({
            type: 'OFF_MODAL',
            visible: false
        });
        message.error('Submit failed!');
    }


    const onFinish = (values) => {
        dispatch({
            type: 'OFF_MODAL',
            visible: false
        });
        message.success('Submit success!');

    };
    return (
        <div>
            <Modal
                title="QUẢN LÝ NGƯỜI DÙNG"
                centered
                visible={OnData}
                onOk={onFinish}
                onCancel={onCancel}
                width={1000}
            >

                <Form labelCol={{ span: 5 }}
                    wrapperCol={{ span: 16 }} form={form} name="dynamic_form_nest_item" onFinish={onFinish} autoComplete="off">
                    <Form.Item
                        name={['user', 'name']}
                        label="Tên chỉ số"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name={['user', 'name']}
                        label="Ngưỡng chỉ số"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                </Form>

            </Modal>
        </div>
    )
}
