import { Outlet, Link } from 'react-router';
import styled from 'styled-components';

const LayoutContainer = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`;

const Header = styled.header`
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 1rem 2rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
`;

const Logo = styled.h1`
    margin: 0;
    font-size: 1.8rem;
    font-weight: bold;
`;

const NavLinks = styled.div`
    display: flex;
    gap: 2rem;
`;

const NavLink = styled(Link)`
    color: white;
    text-decoration: none;
    font-weight: 500;
    transition: opacity 0.2s;

    &:hover {
        opacity: 0.8;
    }
`;

const Main = styled.main`
    flex: 1;
    padding: 2rem;
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
`;

const Footer = styled.footer`
    background: #f8f9fa;
    padding: 1rem 2rem;
    text-align: center;
    color: #6c757d;
    border-top: 1px solid #dee2e6;
`;

const Layout: React.FC = () => {
    return (
        <LayoutContainer>
            <Header>
                <Nav>
                    <Logo>Ness</Logo>
                    <NavLinks>
                        <NavLink to="/">홈</NavLink>
                        <NavLink to="/about">소개</NavLink>
                    </NavLinks>
                </Nav>
            </Header>

            <Main>
                <Outlet />
            </Main>

            <Footer>
                <p>&copy; 2024 Plitvice. All rights reserved.</p>
            </Footer>
        </LayoutContainer>
    );
};

export default Layout;
