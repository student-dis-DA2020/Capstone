import React, { Component } from 'react';
import MainRouter from './pages/MainRouter/MainRouter';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';



const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
    fontFamily: [
      'Nunito',
    ].join(','),
  },
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <MainRouter />
      </MuiThemeProvider>
    );
  }


}

export default App;