import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

class Header extends React.Component<any, any> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <AppBar position='static'>
          <Toolbar>
            <Typography>
              {this.props.title}
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

export default Header;
