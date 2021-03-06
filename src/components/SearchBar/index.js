import React, {useState, useEffect, useRef} from 'react';
import Proptypes from 'prop-types'
//Image
import searchIcon from '../../images/search-icon.svg';
// Styles
import { Wrapper, Content } from './SearchBar.styles';

const SearchBar = ({setSearchTerm}) => {

    const [state, setState] = useState('');
    const initial = useRef(true);

    useEffect(() => {
        // skip the initial render of the timer
        if(initial.current){
            initial.current = false;
            return;
        }
        const timer = setTimeout(() => {
            setSearchTerm(state)
        }, 500);

        return () => clearTimeout(timer);
    },[setSearchTerm, state])
    
    return (
        <Wrapper>
            <Content>
                <img src={searchIcon} alt='search-icon'/>
                <input type='text' placeholder='Search Movie' onChange={event => setState(event.currentTarget.value)} value={state}/>
            </Content>
        </Wrapper>
    )

};

SearchBar.propTypes = {
    setSearchTerm: Proptypes.func
}

export default SearchBar;
