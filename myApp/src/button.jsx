// We need to show a button and a list
// This component should know when to show the list

import React from 'react';

class Button extends React.Component {
   render() {
      return <button
               onClick={this.props.whenClicked}
               className={"btn " + this.props.className}
               type="button"
               data-toggle="dropdown"
               aria-haspopup="true"
               aria-expanded="true">
                  {this.props.title}
               <span className={this.props.subTitleClassName}>
                  {this.props.subTitle}
               </span>
             </button>
   }
}

export default Button;
