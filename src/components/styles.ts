import styled from 'styled-components';
import { colors } from '../GlobalStyles/globalValues';

export const Container = styled.div`
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 3%;
  display: flex;
  flex-direction: column;
`;

export const H1 = styled.h1`
  color: white;
`;

export const H2 = styled.h2`
  color: white;
`;

export const InputContainer = styled.div`
  margin-top: 1%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Party = styled.span`
  color: white;
`;

export const Navbar = styled.nav`
  width: 100%;
  background-color: #333; /* Cor de fundo da navbar */
  color: white; /* Cor do texto */
  padding: 40px 20px; /* Espaçamento interno */
`;

export const ButtonContainer = styled.div`
  margin-top: 1%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ButtonStyle = styled.button<{ isDisabled?: boolean }>`
  padding: 10px;
  font-size: 16px;
  border: 2px solid ${colors.white};
  border-radius: 4px;
  outline: none;
  width: 200px;
  cursor: pointer;
  background: none;
  margin-right: 2%;
  color: white;
  cursor: ${({ isDisabled }) => (isDisabled && 'not-allowed')};
  color: ${({ isDisabled }) => (isDisabled && `${colors.grey}`)};
  border: ${({ isDisabled }) => (isDisabled && `2px solid ${colors.grey}`)};
`;

export const InputStyled = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 2px solid #ccc;
  border-radius: 4px;
  outline: none;
  width: 200px;
  margin-right: 1%;

  &:hover {
    border-color: white;
  }

  &:focus {
    border-color: white;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
`;

//game

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const PartyCard = styled.article`
  width: 200px;
  height: 160px;
  border: 2px solid ${colors.white};
  border-radius: 12px;
  display: flex;
  flex-direction: column;
`;

export const CandidateInfo = styled.div`
  width: 19%;
  height: 155px;
  margin: auto 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 5px;
`;

export const CandidateName = styled.div`
  width: 100%;
  height: 40%;
  text-align: center;
  background: purple;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid ${colors.white};
  border-radius: 10px;
  color: ${colors.white};
  background-color: transparent;
`;
export const CandidatePointsContainer = styled.div`
  width: 100%;
  height: 40%;
  text-align: center;
  background: purple;
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  gap: 5px;
  align-items: center;
  border: 2px solid ${colors.white};
  border-radius: 10px;
  background-color: white;

`;

const getPartyColor = (party: Party) => {
  if (party === "Partido Nacionalista") return "#EFD705";
  if (party === "Partido da Árvore") return "#29BE12";
  if (party === "Partido da Agropecuária") return "#F21B1B";
  if (party === "Unidade Estudantil") return "#0866BD";
  if (party === "Partido do Esporte") return "#FE9814";
}

export const Icon = styled.div<{ party: Party }>`
  width: 25px;
  height: 25px;
  border-radius: 999px;
  background: black;
  background: ${({ party }) => (getPartyColor(party))};
`;

export const PointsText = styled.span<{ party: Party }>`
    color: ${({ party }) => (getPartyColor(party))};
    font-weight: bold;
`;

export const ActionButtons = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  border: 2px solid ${colors.white};
  border-radius: 10px;
  cursor: pointer;
`;

export const UpButton = styled.div`
  width: 50%;
  height: 100%;
  border-radius: 10px;

  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  transition: all ease-in-out .2s;
  color: white;
  
  span {
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: center;
    font-size: 1.4rem;
    transition: all ease-in-out .2s;
  }

  span:hover {
    transform: scale(1.3);
  }
`;

export const DownButton = styled.div`
  width: 50%;
  height: 100%;
  border-radius: 10px;

  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  transition: all ease-in-out .2s;
  color: white;
  
  span {
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: center;
    font-size: 1.4rem;
    transition: all ease-in-out .2s;
  }

  span:hover {
    transform: scale(1.3);
  }
`;

export const Spacer = styled.div`
  width: 2px;
  height: 80%;
  background-color: ${colors.white};
`;
