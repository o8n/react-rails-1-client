import React from 'react';
import { Input, Table, TableContainer, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core';

class TaskForm extends React.Component<any,any> {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      desc: ''
    }
    this.createTask = this.createTask.bind(this);
  }

  createTask(event) {
    let request = new Request('/api/v1/tasks', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({
        title: this.state.title,
        desc: this.state.desc
      })
    });

    fetch(request).then(function (response) {
      return response.json();
    }).then((task) => {
      this.props.getTasks();
    }).catch(function (error) {
      console.error(error);
    }).finally(() => {
      this.setState({
        title: '',
        desc: ''
      })
    });

    event.preventDefault();
  }

  render() {
    let { title, desc } = this.state;

    return (
      <form>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Calories</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <Input
                type="text" value={title}
                placeholder="title"
                onChange={(e) => {
                  this.setState({
                    title: e.target.value
                  })
                }}
              />
              <Input
                type="text" value={desc}
                placeholder="description"
                onChange={(e) => {
                  this.setState({
                    desc: e.target.value
                  })
                }}
              />
              {/* <Button type='submit'>Create Task</Button> */}
              <input type="submit" value="Create task" />
            </TableBody>
          </Table>
        </TableContainer>
      </form>
    )
  }
}

export default TaskForm;
