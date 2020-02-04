import React from 'react';

export default function Account(props) {

    let plusTwo = 2 + +props.match.params.userId;

    return (
        <section>
            <h1>Account Component</h1>
            <p>Your user id is: {plusTwo}</p>
        </section>
    )
}