import Icon from '@material-ui/core/Icon'
import Button from '@material-ui/core/Button'
import { useState } from 'react'
import { itemStatuses } from '../contansts'

const { todo, inprogress, done, deleted, canceled } = itemStatuses

const icons = {
  [todo]: 'assignment',
  [inprogress]: 'autorenew',
  [done]: 'assignment_turned_in',
  [deleted]: 'delete',
  [canceled]: 'cancel'
}
const colors = {
  [todo]: 'grey',
  [inprogress]: 'blue',
  [done]: 'green',
  [deleted]: 'red',
  [canceled]: 'black'
}
export default ({ children, status, updateTask, id, title }) => {
  return (
    <>
      <li className="task-list__item">
        <Icon style={{ color: colors[status], margin: 'auto 4px auto 0px' }}>{icons[status]}</Icon>
        <p className="title">{children}</p>
        <div className="btn-group">
          {
            status === todo && (<>
              <Button type="button" onClick={() => { updateTask({ id, title, status: inprogress }) }} color="primary">Start</Button>
              <Button type="button" onClick={() => { updateTask({ id, title, status: deleted }) }}>Delete</Button>
            </>)

          }
          {
            status === inprogress && (<>
              <Button type="button" color="secondary" onClick={() => { updateTask({ id, title, status: done }) }}>Done</Button>
              <Button type="button" onClick={() => { updateTask({ id, title, status: canceled }) }}>Cancel</Button>
            </>)
          }
          {
            (status === done || status === canceled) && (<>
              <Button type="button" onClick={() => { updateTask({ id, title, status: deleted }) }}>Delete</Button>
            </>)
          }
        </div>
      </li>
      <style jsx>{
        `
        .task-list__item {
          padding: 4px 8px;
          margin: 2px 0px;
          display: flex;
          background: #fff;
        }
        .title {
          flex: 1;
          margin: auto 0;
        }
        .btn-group {
          display: flex;
        }
        `
      }</style>
    </>
  )
}