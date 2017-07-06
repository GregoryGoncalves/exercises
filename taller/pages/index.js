import React from 'react'
import Link from 'next/link'
import paths from '../utils/paths';
import Home from '../components/Home';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';

//Material UI tem um delay enorme pra onClick no celular, essa é uma solução
try { 
  injectTapEventPlugin(); 
} catch (error) {  }

const muiTheme = getMuiTheme({ userAgent: false });

export default class extends React.Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
          <Home />
      </MuiThemeProvider>
    )
  }
}