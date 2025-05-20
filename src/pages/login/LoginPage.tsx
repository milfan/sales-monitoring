import React from 'react'
import { Button, Card, Checkbox, Flex, Form, Input, Typography, message } from 'antd'
import { useNavigate } from 'react-router-dom';

const { Text } = Typography;

interface LoginFormValues {
    username: string
    password: string
    remember: boolean
}

const LoginPage: React.FC = () => {

    const navigate = useNavigate();

    const onFinish = (values: LoginFormValues) => {
        console.log('Success:', values)
        if (values.username == 'admin' && values.password == 'admin') {
            message.success('Login successful!')
            navigate("dashboard")
        }

        // TODO: Call API, navigate, store token, etc.
    }

    // const onFinishFailed = (errorInfo: any) => {
    //     console.log('Failed:', errorInfo)
    //     message.error('Login failed. Please check your input.')
    // }

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
            width: '100vw',
            height: '100vh',
            paddingTop: '50px',
            background: '#f0f2f5',
            gap: '20px'
        }}>
            <img
                src="vite.svg"
                alt="Logo"
                style={{
                    width: 120,
                    height: 'auto',
                    display: 'block',
                }}
            />
            <Card title={<div style={{ textAlign: 'center' }}>Welcome to Sales Monitoring Dashboard</div>} style={{ width: 400 }}>
                {/* <LoginForm />
                <Text style={{ display: 'flex', justifyContent: 'center' }}>Poor Developer</Text> */}
                <Form
                    name="login"
                    initialValues={{ remember: true }}
                    style={{ maxWidth: 360 }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: 'Please input your Username!' }]}
                    >
                        <Input placeholder="Username" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Please input your Password!' }]}
                    >
                        <Input type="password" placeholder="Password" />
                    </Form.Item>
                    <Form.Item>
                        <Flex justify="space-between" align="center">
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                                <Checkbox>Remember me</Checkbox>
                            </Form.Item>
                            <a href="">Forgot password</a>
                        </Flex>
                    </Form.Item>

                    <Form.Item>
                        <Button block type="primary" htmlType="submit">
                            Log in
                        </Button>
                        or <a href="">Register now!</a>
                    </Form.Item>
                </Form>
                <Text style={{ display: 'flex', justifyContent: 'center' }}>
                    By Warkop Developer ©{new Date().getFullYear()}
                </Text>
            </Card>
        </div>
    )
}

export default LoginPage
