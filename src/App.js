import { Component } from 'react';
import ListItem from './components/grocery_list/ListItem';
import ListForm from './components/grocery_list/ListForm';

class App extends Component {
  state = { grocery_list: [
    { id: 1, title: 'Chicken', desc: 'Chicken for Tuesday', complete: true, },
    { id: 2, title: 'Beef', desc: 'Beef for Wednesday', complete: true, },
    { id: 3, title: 'Broccoli', desc: 'Broccoli for Thursday', complete: false, },
  ] }

  // all of crud action functions will be in a HOC
  getUniqId = () => {
    //NOTE We are just using this as a helper function for id's since we aren't using a db yet
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }

  addList = (incomingList) => {
    const { grocery_list } = this.state 
    // include id because not connected to db
    // const newTodo = { id: this.getUniqId(), title: incomingTodo.title, desc: incomingTodo.desc, complete: incomingTodo.complete  }
    const newList = { id: this.getUniqId(), ...incomingList  }
    this.setState({ grocery_list: [...grocery_list, newList ]})
  }

  render() {
    const { grocery_list } = this.state
    return (
      <>
        <h1>Grocery List</h1>
        <ListForm addList={this.addList} />
        <ListItem grocery_list={grocery_list} listName="Groceries" />
      </>
    )
  }
}

export default App;
