import css from './ContactList.module.css';
const ContactList = ({ getVisibleName, deleteContact }) => {
  const visibleName = getVisibleName();
  return (
    <ul>
      {visibleName.map(contact => {
        return (
          <li key={contact.id}>
            {contact.name}: {contact.number}
            <button type="button" onClick={() => deleteContact(contact.id)}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
export default ContactList;
