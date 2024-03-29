import React from 'react'
import Form from 'react-bootstrap/Form';

export const FormInputs = (props) => {
    const { labelProps, required, validate } = props;
    return (
        <Form>
            <Form.Group className="mb-3">
                <Form.Label
                    className={labelProps?.className}>
                    {labelProps?.label} {required && <span className='color-red'>*</span>}
                </Form.Label>
                <Form.Control
                    {...props.inputProps}
                />
                {props?.info && <Form.Text>{props?.info}</Form.Text>}
                {validate && <Form.Text className='error-message'>{validate}</Form.Text>}
            </Form.Group>
        </Form>
    );


}
