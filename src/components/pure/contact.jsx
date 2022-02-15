import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/Contact.class';


const ContactComponent = ({ contact, removeContact, connectionMode }) => {

	const connection = () => {
		if(!contact.connected){
			return (<i onClick={() => connectionMode(contact)} className='bi bi-toggle-on text-success contact-action'> No</i>)
		} else {
			return (<i onClick={() => connectionMode(contact)} className='bi bi-toggle-off text-primary contact-action'> Sí</i>)
		}
	}

	return (
		<>
			<h1>{contact.name} {contact.lastName}</h1>
			<h2>{contact.email}</h2>
			<h3>¿Conectado?: {connection()}</h3>
		</>
	);
};


ContactComponent.propTypes = {
	contact: PropTypes.instanceOf(Contact)
};


export default ContactComponent;
