import React, { Component } from "react";
import { Form, Input, Button, Card, message } from "antd";
import "antd/dist/antd.css";

export default class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: "",
    };
  }
  onFinishFailed(event) {
    console.log("Failed!" + event);
  }

  sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms || 3000));
  }
  async handleSubmit() {
    this.setState({
      loading: "loading",
    });

    // let user = {
    //   username: event.username,
    //   password: event.password,
    // };

    await this.sleep(3000);
    //const response = await axios.post('http://localhost:5000/signin', user)
    this.setState({
      loading: "",
    });
    await this.sleep(500);

    this.props.signIn();
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: "1px solid black",
          height: "100vh",
        }}
      >
        <Card title="Sign in" style={{ width: 350 }}>
          <Form
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            name="basic"
            onFinish={() => this.handleSubmit()}
            onFinishFailed={(event) => this.onFinishFailed(event)}
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your usename",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button
                loading={this.state.loading}
                type="primary"
                htmlType="submit"
                block
              >
                Sign in
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    );
  }
}
