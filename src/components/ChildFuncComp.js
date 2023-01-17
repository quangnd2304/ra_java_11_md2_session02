import React from 'react'

function ChildFuncComp(props) {
    return (
        <div>
            <h2>Lớp {props.className} có các bạn học viên rất thông minh</h2>
            <p>Các bạn sẽ trở thành những {props.children} giỏi trong lương lai</p>
        </div>
    )
}
export default ChildFuncComp;
