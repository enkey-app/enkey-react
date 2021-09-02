import React from 'react';

const SayHello = ({ name, other = true }: { name: string; other?: boolean }): JSX.Element => (
    <div>
        Hey {name}, say {other ? 'hello' : 'goodbye'} to TypeScript.
    </div>
);

export default SayHello;
