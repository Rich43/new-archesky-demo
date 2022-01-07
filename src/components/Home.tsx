import React, { useState } from 'react';
import { Box, Button, TextField } from "@material-ui/core";
import useSWR, { useSWRConfig } from 'swr';

export function Home() {
    const [content, setContent] = useState('');
    const fetcher = (url: string) => fetch(url).then(r => r.json());
    const { data, error } = useSWR('/content-api/content', fetcher);
    const { mutate } = useSWRConfig();

    const onSubmit = () => {
        console.log(content);
        mutate('/api/user', {
            "createdBy": "Richard",
            "displayName": content,
            "name": content,
            "published": true
        }, false).then();
    };
    return (
        <>
            <p>Error: { JSON.stringify(error, null, 4) }</p>
            <pre>
                { JSON.stringify(data, null, 4) }
            </pre>
            <Box p={2}>{ content }</Box>
            <TextField
                value={content}
                onChange={event => setContent(event.target.value)}
            />
            <Button onClick={() => onSubmit()}>Submit</Button>
        </>
    );
}

export default Home;
