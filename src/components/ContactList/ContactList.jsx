import { ContactListItem } from 'components/ContactListItem';

export const ContactList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(({ name, number, id }) => {
        return <ContactListItem name={name} number={number} key={id} />;
      })}
    </ul>
  );
};
