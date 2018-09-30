import React from "react";

/* First we will make a new context */
const AppContext = React.createContext();

/* Then create a provider Component */
class AppProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }
  addItem = item => {
    this.setState({
      items: this.state.items.concat(item)
    });
  };
  // removeItem = item => {
  //   const { items } = this.state
  //   let itemArray = []
  //   itemArray
  // }
  render() {
    return (
      <AppContext.Provider
        value={{
          items: this.state.items,
          addItem: this.addItem
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

/* then make a consumer which will surface it as an HOC */
// This function takes a component...
export function withContext(Component) {
  // ...and returns another component...
  return function ContextComponent(props) {
    // ... and renders the wrapped component with the context theme!
    // Notice that we pass through any additional props as well
    return (
      <AppContext.Consumer>
        {context => <Component {...props} context={context} />}
      </AppContext.Consumer>
    );
  };
}

export default AppProvider;
export { AppConsumer };
