import React from 'react';

class MainComponent extends React.Component {
  render() {
    const users = [
      { id: 1, name: 'Ivan', role: 'Web Developer' },
      { id: 2, name: 'Petar', role: 'Web Designer' },
      { id: 3, name: 'Silvestar', role: 'Team Leader' },
    ]
    return (
      <>
        <p>The currently active users list:</p>
        <ul>
          {
            users.map(function(user){
              return (
                <li> {user.name} as the {user.role} </li>
              )
            })
          }
        </ul>
       </>
    )    
  }
}


export default MainComponent;
