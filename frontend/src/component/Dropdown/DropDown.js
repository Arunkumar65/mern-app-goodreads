import React, { useState } from 'react'
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import './DropDown.css';

export const DropDown = () => {

    const [value, setValue] = useState("Want to read");

    return (
        <>
            <Dropdown className="group-dropdown" as={ButtonGroup}>
                <Button className=''>{value}</Button>

                <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

                <Dropdown.Menu>
                    <Link onChange={() => {

                    }} className='dropdown-menu-li'>Want to read</Link>
                    <Link className='dropdown-menu-li'>Currently reading</Link>
                    <Link className='dropdown-menu-li'>Read</Link>
                </Dropdown.Menu>
            </Dropdown>
        </>
    )
}
