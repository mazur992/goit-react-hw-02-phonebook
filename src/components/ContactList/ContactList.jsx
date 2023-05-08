import { Component } from 'react';

export default class ContactList extends Component {
  getVisible = () => {
    return this.props.getVisibleName();
  };
  render() {
    const visibleName = this.getVisible();
    return (
      <ul>
        {visibleName.map(contact => {
          return (
            <li key={contact.id}>
              {contact.name}: {contact.number}
            </li>
          );
        })}
      </ul>
    );
  }
}
