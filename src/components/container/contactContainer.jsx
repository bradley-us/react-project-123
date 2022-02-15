import React, { useState, useEffect } from 'react';
import { Contact } from '../../models/Contact.class';
import ContactComponent from '../pure/contact';

const ContactContainer = () => {

	// DATA FOR STATES
	const defaultContact = new Contact('Mark', 'Brown', 'mail@gmail.com', false);

	// COMPONENT STATES
	const [contacts, setContacts] = useState(defaultContact)

	return (
		<div className='col-12'>
			<ContactComponent
			contact={contacts}
			></ContactComponent>
		</div>
	);
};


export default ContactContainer;
