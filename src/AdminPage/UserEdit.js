import React from 'react'
import {Edit, SimpleForm, TextInput} from 'react-admin'


const UserList = (props) => {
    return <Edit {...props}>
        <SimpleForm>
            <TextInput source='id' />
            <TextInput source='firstname' />
            <TextInput source='lastname' />
            <TextInput source='email' />
            <TextInput source='role' />
        </SimpleForm>
    </Edit>
}

export default UserList;
