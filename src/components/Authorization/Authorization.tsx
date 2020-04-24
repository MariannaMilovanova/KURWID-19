import React, {PureComponent} from 'react';
import './Authorization.scss';
import {b, createBlock} from '../../helpers/bem';
/*через гугл, может быть просто в хедере
* возможность посмотреть последнии оцененые места
* */
const block = createBlock('Authorization');

export default class Authorization extends PureComponent {
    render() {
        return (
            <div className={b(block)}>Authorization Block</div>
        );
    }
}
