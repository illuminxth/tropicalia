import { ChangeEvent, useState } from 'react';
import { Container, InputContainer, InputStyled, Navbar, ButtonContainer, ButtonStyle, H1, H2, Party } from './styles';
import { useNavigate } from 'react-router-dom';
import routes from '../routes/routes';
import { SaveLocalStorage } from '../localStorage/SaveLocalStorage';
import { saveLocalStorage } from '../localStorage/localStorage';

const CreateCandidates = () => {

  const navigate = useNavigate();

  const initialCandidate: Candidate = {
    name: "",
    party: "Sem Partido", 
    points: 0
  }

  const [candidate1, setCandidate1] = useState<Candidate>({ ...initialCandidate });
  const [candidate2, setCandidate2] = useState<Candidate>({ ...initialCandidate });
  const [candidate3, setCandidate3] = useState<Candidate>({ ...initialCandidate });
  const [candidate4, setCandidate4] = useState<Candidate>({ ...initialCandidate });
  const [candidate5, setCandidate5] = useState<Candidate>({ ...initialCandidate });

  function changeCandidate1Name(event: ChangeEvent<HTMLInputElement>) {
    const inputName = event.target.value;
    setCandidate1({ ...candidate1, name: inputName });
  }

  function changeCandidate2Name(event: ChangeEvent<HTMLInputElement>) {
    const inputName = event.target.value;
    setCandidate2({ ...candidate2, name: inputName });
  }

  function changeCandidate3Name(event: ChangeEvent<HTMLInputElement>) {
    const inputName = event.target.value;
    setCandidate3({ ...candidate3, name: inputName });
  }

  function changeCandidate4Name(event: ChangeEvent<HTMLInputElement>) {
    const inputName = event.target.value;
    setCandidate4({ ...candidate4, name: inputName });
  }

  function changeCandidate5Name(event: ChangeEvent<HTMLInputElement>) {
    const inputName = event.target.value;
    setCandidate5({ ...candidate5, name: inputName });
  }

  function randomizeParties() {
    const avaliableParties: Party[] = [
      'Partido da Agropecuária',
      'Partido da Árvore',
      'Partido do Esporte',
      'Partido Nacionalista',
      'Unidade Estudantil'
    ]

    const randomNumber1 = Math.floor(Math.random() * 5);
    setCandidate1({ ...candidate1, party: avaliableParties[randomNumber1] })
    avaliableParties.splice(randomNumber1, 1);

    const randomNumber2 = Math.floor(Math.random() * 4);
    setCandidate2({ ...candidate2, party: avaliableParties[randomNumber2] })
    avaliableParties.splice(randomNumber2, 1);

    const randomNumber3 = Math.floor(Math.random() * 3);
    setCandidate3({ ...candidate3, party: avaliableParties[randomNumber3] })
    avaliableParties.splice(randomNumber3, 1);

    const randomNumber4 = Math.floor(Math.random() * 2);
    setCandidate4({ ...candidate4, party: avaliableParties[randomNumber4] })
    avaliableParties.splice(randomNumber4, 1);

    const randomNumber5 = Math.floor(Math.random() * 1);
    setCandidate5({ ...candidate5, party: avaliableParties[randomNumber5] })
    avaliableParties.splice(randomNumber5, 1);
  }

  function startGame() {
    const localStorageData: SaveLocalStorage = {
      candidate1Name: candidate1.name,
      candidate1Party: candidate1.party,
      candidate2Name: candidate2.name,
      candidate2Party: candidate2.party,
      candidate3Name: candidate3.name,
      candidate3Party: candidate3.party,
      candidate4Name: candidate4.name,
      candidate4Party: candidate4.party,
      candidate5Name: candidate5.name,
      candidate5Party: candidate5.party
    }

    saveLocalStorage(localStorageData)
    navigate(routes.game());
  }

  const isStartButtonDisabled = candidate1.party == "Sem Partido";

  return (
    <>
      <Container>
        <H2>Bem vindo a Tropicália</H2>
        <H1>Digite os participantes que serão deputados federais.</H1>
        <InputContainer>
          <InputStyled type="text" placeholder="Candidato 1" onChange={(event) => changeCandidate1Name(event)} />
          <Party>{candidate1.party}</Party>
        </InputContainer>
        <InputContainer>
          <InputStyled type="text" placeholder="Candidato 2" onChange={(event) => changeCandidate2Name(event)} />
          <Party>{candidate2.party}</Party>
        </InputContainer>
        <InputContainer>
          <InputStyled type="text" placeholder="Candidato 3" onChange={(event) => changeCandidate3Name(event)} />
          <Party>{candidate3.party}</Party>
        </InputContainer>
        <InputContainer>
          <InputStyled type="text" placeholder="Candidato 4" onChange={(event) => changeCandidate4Name(event)} />
          <Party>{candidate4.party}</Party>
        </InputContainer>
        <InputContainer>
          <InputStyled type="text" placeholder="Candidato 5" onChange={(event) => changeCandidate5Name(event)} />
          <Party>{candidate5.party}</Party>
        </InputContainer>
        <ButtonContainer>
          <ButtonStyle onClick={randomizeParties}>
            Aleatorizar partidos
          </ButtonStyle>
          <span><ButtonStyle onClick={startGame} disabled={isStartButtonDisabled} isDisabled={isStartButtonDisabled}>
            Começar jogo
          </ButtonStyle></span>
        </ButtonContainer>

      </Container>
    </>
  );
};

export default CreateCandidates;
