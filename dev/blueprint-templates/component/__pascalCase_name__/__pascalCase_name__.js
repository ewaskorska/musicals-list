import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import styles from './{{pascalCase name}}.module.scss';

const {{pascalCase name}} = ({className, children}) => {

    return (
        <div className={clsx(className, styles.root)}>
            <h2>{{pascalCase name}}</h2>
            {children}
        </div>
    )
}

{{pascalCase name}}.PropsTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
}

export default {{pascalCase name}}