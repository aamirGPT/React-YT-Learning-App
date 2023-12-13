import React from "react";

const Alert = (props) => {
    const capitalize = (word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    };
    return (
        <div style={{ height: "50px" }}>
            {props.alert && (
                <div>
                    <div
                        className={`alert alert-${props.alert.Type} alert-dismissible fade show`}
                        role="alert"
                    >
                        <strong>{capitalize(props.alert.Type)} :</strong>{" "}
                        {props.alert.Message}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Alert;
