import React from 'react'
import { Link } from 'react-router-dom'
import Proptypes from 'prop-types'
//Styles
import {Wrapper, Content} from './BreadCrumb.styles';

const BreadCrumb = ({movieTitle}) => (
    <Wrapper>
        <Content>
            <Link to='/'>
                <span>Home</span>
            </Link>
            <span>|</span>
            <span>{movieTitle}</span>
        </Content>
    </Wrapper>
);

BreadCrumb.prototypes = {
    movieTitle: Proptypes.string
}

export default BreadCrumb