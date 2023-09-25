import React from "react";

interface PropTypes {}

const Success: React.FC<PropTypes> = () => {
    return (
        <div>
            <h1>Order successfully send.</h1>
        </div>
    );
};

export default Success;