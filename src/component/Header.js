import React, {Component} from 'react'
import TodoTextInput from "./TodoTextInput";
class Header extends Component {
render() {
return (
<header className="header">
<h1>todos</h1>
<TodoTextInput
    onSave={this.props.onSave}
/>
</header>)
}
render() {
    return (
    <input className='new-todo'
    type="text"
    placeholder="What needs to be done?"
    autoFocus="true"
    //onKeyDown={this.handleSubmit.binf(this)} 
    />
    )
    }
}
export default Header;