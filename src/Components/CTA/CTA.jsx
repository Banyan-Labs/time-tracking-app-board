import React from 'react';
import {Title, Description, Button} from './style.';

const activateSignup = () => {
    e.preventDefault();
    console.log("button clicked")
}

const CtaComponent = () => {
    return (
        <section>
            <Title>TIME TAB</Title>
            <Description>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?</Description>

            <Button onClick={activateSignup}>
                Sign-Up
            </Button>

        </section>

    )
}

export default CtaComponent