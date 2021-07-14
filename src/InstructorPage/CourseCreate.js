import React from 'react'


import * as React from "react";
import { render } from 'react-dom';
import { Admin, Resource } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';

import { PostList, PostEdit, PostCreate, PostIcon } from './posts';

const [dataProvider, setDataProvider] = useState([])

    

    const fetchCourses = () => {
        fetch(`${APIURL}/course/mycourses`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                // 'Authorization': props.token,
                'Authorization': props.role
            })
        }).then((res) => res.json())
            .then((result) => {
                setDataProvider(result);
                props.updateToken(result.sessionToken)
                // props.updateRole(result.user.role)
                console.log(result);
            })
    }
    console.log(dataProvider);
    useEffect(() => {
        fetchCourses();
    }, [])


render(
    <Admin dataProvider={dataProvider}>
        <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon}/>
    </Admin>,
    document.getElementById('root')
);
