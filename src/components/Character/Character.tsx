import React from "react";
import styled from "styled-components";
import ImageByReact from "../ImageByReact/ImageByReact";
import { CharacterType } from "../../types/fetchedData";
import { Link } from "react-router-dom";

const CharacterCSS = styled(Link)`
    max-width: 312px;
    max-height: 308px;
    min-width: 240px;
    min-height: 244px;
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.12),
        0px 2px 4px rgba(0, 0, 0, 0.14);
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    transition: all 0.3s ease-in-out;

    :hover {
        transform: scale(1.03);
        transition: all 0.3s ease-in-out;
    }
`;

const CharacterAvatarCSS = styled.div`
    overflow: hidden;
    flex: 1 1 auto;
`;

const CharacterInfoCSS = styled.div`
    flex: 1 1 auto;
    padding: 12px 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 120px;
`;

const CharacterNameCSS = styled.div`
    font-family: "Roboto Medium";
    font-weight: normal;
    font-style: normal;
    font-size: 20px;
    line-height: 30px;
    letter-spacing: 0.15px;
    color: rgba(0, 0, 0, 0.87);
`;

const CharacterSpeciesCSS = styled.div`
    font-family: "Roboto Regular";
    font-weight: normal;
    font-style: normal;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: 0.25px;
    color: rgba(0, 0, 0, 0.6);
`;

interface CharacterProps {
    characterInfo: CharacterType;
}



const Character: React.FC<CharacterProps> = ({ characterInfo }) => {


    return (
        <CharacterCSS to={`/${characterInfo.id}`}>
            <CharacterAvatarCSS>
                <ImageByReact src={characterInfo.image} />
            </CharacterAvatarCSS>
            <CharacterInfoCSS>
                <CharacterNameCSS>{characterInfo.name}</CharacterNameCSS>
                <CharacterSpeciesCSS>
                    {characterInfo.species}
                </CharacterSpeciesCSS>
            </CharacterInfoCSS>
        </CharacterCSS>
    );
};

export default Character;
