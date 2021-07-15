import React from 'react';
import Proptypes from 'prop-types'
// Helpers
import {calcTime, convertMoney} from '../../helpers'
// Styles
import { Wrapper, Content } from './MovieInfoBar.styles';

const MovieInfoBar = ({time, budget, revenue}) => (
    <Wrapper>
        <Content>
            <div className="column">
                <p>Running Time: {calcTime(time)}</p>
            </div>
            <div className="column">
                <p>Budget: {convertMoney(budget)}</p>
            </div>
            <div className="column">
                <p>Revenue: {convertMoney(revenue)}</p>
            </div>
        </Content>
    </Wrapper>
)

MovieInfoBar.propTypes = {
    time: Proptypes.number,
    budget: Proptypes.number,
    revenue: Proptypes.number
}

export default MovieInfoBar
