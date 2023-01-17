import React, { Component } from 'react';

class ChildClassComp extends Component {
    /*
    Khởi tạo state:
        1. Trong constructor
        2. super(): gọi constructor của lớp cha
        3. Khởi tạo với this.state
    */
    constructor(props) {
        super();
        this.state = {
            studentId: "SV001",
            studentName: "Nguyễn Văn A",
            age: 20
        }
    }
    handleChangeName = () => {
        // Thay đổi state - setState
        this.setState({
            studentName: "Nguyễn Văn B",
            age: 25
        })
    }
    render() {
        return (
            <div>
                <h2>{this.props.companyName} chào mừng các bạn {this.props.className}</h2>
                <p>Chúc mừng năm mới năm {this.props.children}</p>
                <p>Thông tin sinh viên: Mã sinh viên: {this.state.studentId} - Tên sinh viên:{this.state.studentName} - Tuổi: {this.state.age}</p>
                <button onClick={this.handleChangeName}>Change student name</button>
            </div>
        );
    }
}

export default ChildClassComp;