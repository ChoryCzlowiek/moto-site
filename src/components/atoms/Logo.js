import styled from "styled-components";
import logo from "../../assets/images/logo.png";

const StyledLogo = styled.img`
  height: 3rem;
  max-width: 15rem;
  cursor: pointer;
  object-fit: contain;
  position: relative;
`;

const Logo = ({ onClick }) => <StyledLogo onClick={onClick} src={logo} />;

export default Logo;
