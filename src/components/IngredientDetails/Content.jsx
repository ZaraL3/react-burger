import React from "react";
import PropTypes from 'prop-types'





export const Content = (props) => {
    const { content, children } = props;
    return (
        <div>
            <p className={`text text_type_main-small text_color_inactive `}>{content}</p>
            <span className="mt-2 text text_type_digits-default text_color_inactive">{children}</span>

        </div>
    )
}

Content.propTypes = {
    children: PropTypes.node.isRequired,
    content: PropTypes.string.isRequired
};

export default Content;