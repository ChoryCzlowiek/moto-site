import styled from "styled-components";
import logo from "../../assets/images/logo.png";

const StyledLogo = styled.img`
  height: 2rem;
  max-width: 15rem;
  cursor: pointer;
`;

const Logo = ({ onClick }) => <StyledLogo onClick={onClick} src={logo} />;

export default Logo;
