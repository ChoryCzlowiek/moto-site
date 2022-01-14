import styled from "styled-components";
import logo from "../../assets/images/logo.png";
import whitelogo from "../../assets/images/logo_oneserwis_white.png";

const StyledLogo = styled.img`
  height: 4rem;
  max-width: 22rem;
  cursor: pointer;
  object-fit: contain;
  position: relative;
  @media (max-width: 768px) {
    max-width: 14rem;
  }
`;

const Logo = ({ onClick, white }) => <>{white ? <StyledLogo onClick={onClick} src={whitelogo} /> : <StyledLogo onClick={onClick} src={logo} />}</>;

export default Logo;
