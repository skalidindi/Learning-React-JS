// We need to show a button and a list
// This component should know when to show the list

import React from 'react';
import Button from './button';
import ListItem from './list-item'

class Dropdown extends React.Component {

   // on es5 this is instead a method getInitialState
   constructor(props) {
      super(props);
      this.state = {
         open: false
      };
   };

   handleClick = () => {
      this.setState({open: !this.state.open});
   };

   render() {
      let list = this.props.items.map(function(item, i) {
         return <ListItem item={item} key={i}/>
      });

      return <div className="dropdown">
         <Button
            whenClicked={this.handleClick}
            className="btn-default"
            title={this.props.title}
            subTitleClassName="caret"/>
         <ul className={"dropdown-menu " + (this.state.open ? "vagina" : "penis")}>
            {list}
         </ul>
      </div>

   };
}

export default Dropdown;
