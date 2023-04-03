import React, { Component } from 'react'
import PropType from 'prop-types'
import Item from '../item/index'
import './list.css'

export default class List extends Component {

    static propTypes = {
        todos: PropType.array.isRequired,
        checked: PropType.func.isRequired,
        deleteById: PropType.func.isRequired,
    }
    render() {
        const { todos, checked, deleteById } = this.props
        return (
            <ul className="todo-main">
                {
                    todos.map((todo) => {
                        return <Item key={todo.id} {...todo} createCheck={checked} deleteById={deleteById} />
                    })
                }
            </ul>
        )
    }
}