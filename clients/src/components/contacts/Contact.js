import React,{Fragment, useContext,useEffect }from 'react';
import ContactContext from '../../context/contact/contactContext';
import ContactItem from './ContactItem';

const Contact = (props) => {
	const contactContext=useContext(ContactContext);
  const { contacts,getContacts,loading } = contactContext;
  useEffect(()=>{
    getContacts();
    //eslint-disable-next-line
  },[]);
  return (
    <Fragment>
    	{contacts.map(contact=>(
        <ContactItem key={contact._id} contact={contact}/>
      ))}
    </Fragment>
  )
}

export default Contact;