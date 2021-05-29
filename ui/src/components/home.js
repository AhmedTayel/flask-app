import React, { Component } from "react";
import { Card, Space, Typography, Divider, Input, message, Button } from "antd";
import axios from "axios";
import "antd/dist/antd.css";

const { Text } = Typography;
export default class Home extends Component {
  constructor(props) {
    super(props);

    this.regex = /^\d+$/;
    this.state = {
      dbNumber: 1,
      inputNumber: 1,
      result: `100`,
    };
  }

  async execute() {
    const response = await axios.get(
      `http://localhost:5000/execute?input_number=${this.state.inputNumber}&db_number=${this.state.dbNumber}`
    );
    this.setState({
      result: Math.floor(response.data.result),
    });
  }
  async handleInputNumber(event) {
    if (this.regex.test(event.target.value)) {
      this.setState({
        inputNumber: event.target.value,
      });
    } else if (event.target.value === "") {
      this.setState({
        inputNumber: event.target.value,
      });
    } else {
      message.warning(
        "You're using a letter in a field that should have a number"
      );
    }
  }

  async generateNumber() {
    const rand = Math.floor(Math.random() * 100);
    const response = await axios.get(`http://localhost:5000/number/${rand}`);
    this.setState({
      dbNumber: response.data.number,
    });

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
        <Card style={{ width: 800, border: "1px solid black" }}>
          <h2>Application</h2>

          <Text type="secondary">
            Enter a number to get how much that number represents from a number
            fetched from the database in percentage.
          </Text>
          <Divider />
          <Space size={4} direction="horizontal">
            <Card style={{ width: 250 }}>
              <Input
                onChange={(event) => this.handleInputNumber(event)}
                value={this.state.inputNumber}
                name="inputNumber"
              />
            </Card>
            <Card style={{ width: 250 }}>
              <Space size={60} direction="horizontal">
                <h4>{this.state.dbNumber}</h4>
                <Button onClick={() => this.generateNumber()}>
                  Generate number
                </Button>
              </Space>
            </Card>
            <Card style={{ height: 82, width: 250 }}>
              <Space size={4} direction="horizontal">
                <h3>Result: </h3>
                <div>
                  <h3>{this.state.result}%</h3>
                </div>
              </Space>
            </Card>
          </Space>
          <Divider />
          <Button type="primary" style={{marginLeft: 675}} onClick={() => this.execute()}>Execute</Button>
        </Card>
      </div>
    );
  }
}
