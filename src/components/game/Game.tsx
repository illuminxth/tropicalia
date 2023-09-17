import { useState } from "react";
import { ActionButtons, CandidateInfo, CandidateName, Container, DownButton, Header, Spacer, UpButton } from "../styles";
import { getCandidate1Name, getCandidate1Party, getCandidate2Name, getCandidate2Party, getCandidate3Name, getCandidate3Party, getCandidate4Name, getCandidate4Party, getCandidate5Name, getCandidate5Party } from "../../localStorage/localStorage";
import { CandidatePoints } from "./CandidatePoints";
import { BiSolidUpArrow, BiSolidDownArrow } from "react-icons/bi"

export const Game = () => {

    console.log(getCandidate1Name())
    const rawCandidates: Candidate[] = [
        {
            name: getCandidate1Name(),
            party: getCandidate1Party() as Party,
            points: 0
        },
        {
            name: getCandidate2Name(),
            party: getCandidate2Party() as Party,
            points: 0
        },
        {
            name: getCandidate3Name(),
            party: getCandidate3Party() as Party,
            points: 0
        },
        {
            name: getCandidate4Name(),
            party: getCandidate4Party() as Party,
            points: 0
        },
        {
            name: getCandidate5Name(),
            party: getCandidate5Party() as Party,
            points: 0
        },
    ];

    function getOrderCandidates() {
        let ordered: Candidate[] = [];
        const nationalistParty = rawCandidates.find((candidate: Candidate) => candidate.party == "Partido Nacionalista")!;
        const sportsParty = rawCandidates.find((candidate: Candidate) => candidate.party == "Partido do Esporte")!;
        const treeParty = rawCandidates.find((candidate: Candidate) => candidate.party == "Partido da Árvore")!;
        const agroParty = rawCandidates.find((candidate: Candidate) => candidate.party == "Partido da Agropecuária")!;
        const studentsParty = rawCandidates.find((candidate: Candidate) => candidate.party == "Unidade Estudantil")!;

        ordered[0] = nationalistParty;
        ordered[1] = treeParty;
        ordered[2] = agroParty;
        ordered[3] = studentsParty;
        ordered[4] = sportsParty;

        return ordered;
    }

    const [candidates, setCandidates] = useState(getOrderCandidates());

    const handleUpButton = (candidate: Candidate) => {
        // Crie uma cópia do array de candidatos
        const updatedCandidates = [...candidates];

        // Encontre o índice do candidato no array
        const candidateIndex = updatedCandidates.findIndex(
            (c) => c.name === candidate.name
        );

        // Verifique se o candidato foi encontrado
        if (candidateIndex !== -1) {
            // Crie uma cópia do candidato e atualize os pontos
            const updatedCandidate = { ...updatedCandidates[candidateIndex] };
            updatedCandidate.points += 1;

            // Atualize o array de candidatos com o candidato modificado
            updatedCandidates[candidateIndex] = updatedCandidate;

            // Defina o estado com o novo array de candidatos
            setCandidates(updatedCandidates);
        }
    };

    const handleDownButton = (candidate: Candidate) => {
        // Crie uma cópia do array de candidatos
        const updatedCandidates = [...candidates];

        // Encontre o índice do candidato no array
        const candidateIndex = updatedCandidates.findIndex(
            (c) => c.name === candidate.name
        );

        // Verifique se o candidato foi encontrado
        if (candidateIndex !== -1) {
            // Crie uma cópia do candidato e atualize os pontos
            const updatedCandidate = { ...updatedCandidates[candidateIndex] };
            updatedCandidate.points -= 1;

            // Atualize o array de candidatos com o candidato modificado
            updatedCandidates[candidateIndex] = updatedCandidate;

            // Defina o estado com o novo array de candidatos
            setCandidates(updatedCandidates);
        }
    };

    return (
        <Container>
            <Header>
                {
                    candidates.map((candidate: Candidate) => {
                        return (
                            <CandidateInfo>
                                <CandidateName>{candidate.name}</CandidateName>
                                <CandidatePoints candidate={candidate} />
                                <ActionButtons>
                                    <UpButton onClick={() => handleUpButton(candidate)}>
                                        <span><BiSolidUpArrow /></span>
                                    </UpButton>
                                    <Spacer></Spacer>
                                    <DownButton onClick={() => handleDownButton(candidate)}>
                                        <span><BiSolidDownArrow /></span>
                                    </DownButton>
                                </ActionButtons>
                            </CandidateInfo>
                        );
                    })
                }
            </Header>
        </Container>
    );
}