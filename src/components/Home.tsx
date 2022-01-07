import React, { useState } from 'react';
import { Box, Button, TextField } from "@material-ui/core";

export function Home() {
    const [content, setContent] = useState('');
    const onSubmit = () => {
        console.log(content);
    };
    return (
        <>
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
