import React, {useState} from 'react';
import {Box, Button, TextField} from "@material-ui/core";
import useSWR, {useSWRConfig} from 'swr';
import {useKeycloak} from "@react-keycloak/web";

const CONTENT_API_URL = '/content-api/content';

const headers = (token: string) => ({
    'content-type': 'application/json;charset=UTF-8',
    hostname: window.location.hostname,
    Authorization: `Bearer ${token}`
});

export function Home() {
    const [content, setContent] = useState('');
    const fetcher = (url: string) => fetch(url).then(r => r.json());
    const {data, error} = useSWR(CONTENT_API_URL, fetcher);
    const {mutate} = useSWRConfig();
    const [keycloak, initialized] = useKeycloak();

    const onSubmit = async () => {
        const extraData = {
            "createdBy": "Richard",
            "displayName": content,
            "name": content,
            "published": true
        };
        await fetch(CONTENT_API_URL, {
            method: 'POST',
            headers: (initialized && headers(keycloak.token)) || {},
            body: JSON.stringify(extraData)
        });
        mutate(CONTENT_API_URL).then();
    };
    return (
        <>
            <p>Error: {JSON.stringify(error, null, 4)}</p>
            <pre>
                {JSON.stringify(data, null, 4)}
            </pre>
            <Box p={2}>{content}</Box>
            <TextField
                value={content}
                onChange={event => setContent(event.target.value)}
            />
            <Button onClick={() => onSubmit()} disabled={!initialized}>Submit</Button>
        </>
    );
}

export default Home;
