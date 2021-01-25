import React from 'react';
import moment from "moment";
import { FormattedMessage } from "react-intl";
// function component with props
const Moment = (props) => {
    return ( 
    <div>
        {/* Unix Millisecond Timestamp ago */}
        {moment(1316116057189).fromNow()}
        <br/>
        {moment("11-15-2020", "MM-DD-YYYY").fromNow()}
        <br/>
        *************
        <FormattedMessage id="app.title.original"/>
        *************
        <br/>
    </div>)
}

export default Moment;