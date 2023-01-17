import React, { Component } from 'react';

class EventDemo extends Component {
    constructor(props) {
        super();
        this.state = { buttonName: "Button 05" };
        //version 17
        // this.handleButton05 = this.handleButton05.bind(this);
    }
    handleButton01() {
        console.log("Bạn vừa click vào button 01");
    }
    handleButton02() {
        console.log("Bạn vừa click vào button 02");
    }
    handleButton03 = (buttonName) => {
        console.log("Bạn vừa click vào " + buttonName);
    }
    handleButton04 = (buttonName) => {
        console.log("Bạn vừa click vào " + buttonName);
    }
    handleButton05 = () => {
        console.log("Bạn vừa click vào " + this.state.buttonName);
    }
    handleAClick = (event) => {
        alert("Bạn sẽ chuyển sang web của Rikkei Academy");
        event.preventDefault();
    }
    render() {
        return (
            <div>
                {/* Sự kiện không có tham số*/}
                <button onClick={this.handleButton01()}>Button 01</button>
                <button onClick={this.handleButton02}>Button 02</button>
                {/* Sự kiên có tham số*/}
                <button onClick={this.handleButton03("button 03")}>Button 03</button>
                <button onClick={() => this.handleButton04("button 04")}>Button 04</button>
                {/* Sự kiện có sử dụng props và state */}
                <button onClick={this.handleButton05}>Button 05</button>
                {/* Sự kiện với thẻ a */}
                <a href='https://rikkei.edu.vn/' onClick={this.handleAClick}>Rikkei Academy</a>
            </div>
        );
    }
}

export default EventDemo;