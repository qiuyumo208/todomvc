import React, {Component, PropTypes} from 'react'
//export default class TodoTextInput extends Component{}
import classnames from 'classnames'
class TodoTextInput extends Component {
handleSummit = e =>{
    const text = e.target.value.trim()
    if(e.which === 13){
        this.props.onSave(text)
    }
}
    render() {
return (
<input
type="text"
autoFocus="true"
placeholder="What needs to be done?"
className='new-todo'
/>
)
}
}
export default TodoTextInput;