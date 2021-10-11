import React from 'react'
import {
    Modal, Button, Form,
    Input,
    Select,
    message, Space
} from 'antd';

import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

import { useSelector, useDispatch } from 'react-redux'

const { Option } = Select;


/* eslint-disable no-template-curly-in-string */



export default function ModalAddUser() {

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

                <Form form={form} name="dynamic_form_nest_item" onFinish={onFinish} autoComplete="off">
                    <Form.Item
                        name={['user', 'name']}
                        label="Name"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name={['user', 'email']}
                        label="Email"
                        rules={[
                            {
                                type: 'email',
                            },
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.List name="sights">
                        {(fields, { add, remove }) => (
                            <>
                                {fields.map(field => (
                                    <Space key={field.key} align="baseline">
                                        <Form.Item
                                            noStyle
                                            shouldUpdate={(prevValues, curValues) =>
                                                prevValues.area !== curValues.area || prevValues.sights !== curValues.sights
                                            }
                                        >
                                            {() => (
                                                <Form.Item style={{marginLeft:20}}
                                                    label="Metrics"
                                                    // fieldKey={[field.fieldKey, 'sight']}
                                                    rules={[{ required: true},]}
                                                >
                                                    <Select  style={{ width: 130 }}>
                                                        <Option >
                                                            M1
                                                        </Option>
                                                        <Option >
                                                            M2
                                                        </Option>
                                                        <Option >
                                                            M3
                                                        </Option>
                                                        <Option >
                                                            M4
                                                        </Option>
                                                    </Select>
                                                </Form.Item>
                                            )}
                                        </Form.Item>


                                        <MinusCircleOutlined onClick={() => remove(field.name)} />
                                    </Space>
                                ))}

                                <Form.Item>
                                    <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                        Add metric
                                    </Button>
                                </Form.Item>
                            </>
                        )}
                    </Form.List>
                   
                </Form>

            </Modal>
        </div>
    )
}
