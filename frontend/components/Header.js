import Nav from './Nav.js';
import Router from 'next/router';
import Link from 'next/link';
import NProgress from 'nprogress';
import styled from 'styled-components';
import Cart from './Cart';
import Search from './Search';


// listen to changes in the router as we go from one component to another and set each to a function
Router.onRouteChangeStart = () => {
    NProgress.start();
};
Router.onRouteChangeComplete = () => {
    NProgress.done();
};
Router.onRouteChangeError = () => {
    NProgress.done();
};

// again, using a constant styling variable, tag template literal
// notice the use of media query to center when we hit < 1300px
const Logo = styled.h1`
    font-size: 4rem;
    margin-left: 2rem;
    position: relative;
    z-index: 2;
    transform: skew(-7deg);
    a {
        padding: 0.5rem 1rem;
        background: ${props => props.theme.red};
        color: ${props => props.theme.offWhite};
        text-transform: uppercase;
        text-decoration: none
    }
    @media (max-width: ${props => props.theme.mediaWidth})
        margin: 0;
        text-align: center;
`;

const StyledHeader = styled.header`
    .bar {
        border-bottom: 10px solid ${props => props.theme.black};
        display: grid;
        grid-template-columns: auto 1fr;
        justify-content: space-between;
        align-items: stretch;
        @media (max-width: ${props => props.theme.mediaWidth}) {
            grid-template-columns: 1fr;
            justify-content: center;     
        }
    }
    .sub-bar{
        display: grid;
        border-bottom: 1px solid ${props => props.theme.lightgrey}:
    }
`;

const Header = () => (
    <StyledHeader>
        <div className="bar">
            <Logo>
                <Link href="/">
                    <a>Sick Fits</a>
                </Link>
            </Logo>
            <Nav/>
        </div>
        <div className="sub-bar">
            <Search/>
        </div>
        <Cart/>
    </StyledHeader>
);

export default Header;