import React from "react";
import styled from "styled-components";
import Character from "../Character/Character";
import { ContainerCSS } from "../MyStyledComponents/ContainerCSS";
import { useGetCharactersQuery } from "../../redux/charactersApi";
import { SpinningCircles } from "react-loading-icons";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const CharactersListCSS = styled.div`
    margin-bottom: 168px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 24px;
    justify-items: center;

    @media (max-width: 1050px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 790px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 550px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

const CharactersList: React.FC = () => {
    const { inputValue } = useSelector(
        (state: RootState) => state.searchInputSlice
    );

    const { data, error, isLoading, isSuccess } = useGetCharactersQuery(
        inputValue,
        { refetchOnMountOrArgChange: true }
    );

    return (
        <ContainerCSS>
            <CharactersListCSS>
                {error && <h2>Not Found</h2>}

                {isLoading && <SpinningCircles />}

                {isSuccess &&
                    data.results.map((character) => {
                        return (
                            <Character
                                key={character.id}
                                characterInfo={character}
                            />
                        );
                    })}
            </CharactersListCSS>
        </ContainerCSS>
    );
};

export default CharactersList;
