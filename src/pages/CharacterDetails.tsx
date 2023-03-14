import React from "react";
import styled from "styled-components";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useParams, Link } from "react-router-dom";
import { useGetCharacterByIdQuery } from "../redux/charactersApi";
import ImageByReact from "../components/ImageByReact/ImageByReact";
import { SpinningCircles } from "react-loading-icons";

const CharacterDetailsContainer = styled.div`
    max-width: 1540px;
    padding: 21px 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 448px) {
        padding: 21px 35px;
    }
`;

const GoBackCSS = styled(Link)`
    align-self: flex-start;
    font-family: "Roboto Bold";
    font-weight: normal;
    font-style: normal;
    font-size: 18px;
    line-height: 21px;
    color: #000000;
    gap: 8px;
    margin-bottom: 31px;
    display: flex;
    align-items: center;
    transition: all 0.3s ease-in-out;

    :hover {
        transform: scale(1.03);
        transition: all 0.3s ease-in-out;
    }
`;

const GoBackArrowCSS = styled.div`
    width: 24px;
    height: 24px;
`;

const AvatarOfCharacterCSS = styled.div`
    border: 5px solid #f2f2f7;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    overflow: hidden;
    margin-bottom: 16px;
    @media (max-width: 448px) {
        width: 150px;
        height: 150px;
        margin-bottom: 34px;
    }
`;

const CharacterTitleCSS = styled.div`
    font-family: "Roboto Regular";
    font-weight: normal;
    font-style: normal;
    font-size: 48px;
    line-height: 56px;
    color: #081f32;
    text-align: center;
    @media (max-width: 448px) {
        font-size: 32px;
    }
`;

const CharacterSubTitleCSS = styled.div`
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0.15px;
    color: #8e8e93;
    margin: 48px 0;
    @media (max-width: 448px) {
        font-size: 20px;
        line-height: 24px;
        align-self: flex-start;
        margin-top: 34px;
        margin-bottom: 16px;
    }
`;

const CharacterInformationsCSS = styled.div`
    width: 413px;
    display: flex;
    flex-direction: column;
    @media (max-width: 448px) {
        width: 312px;
    }
    @media (max-width: 332px) {
        width: 260px;
    }
    @media (max-width: 290px) {
        width: 200px;
    }
`;

const InformationsNameCSS = styled.div`
    font-family: "Roboto Bold";
    font-weight: normal;
    font-style: normal;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.15px;
    color: #081f32;
`;

const InformationsStatusCSS = styled.div`
    font-family: "Roboto Regular";
    font-weight: normal;
    font-style: normal;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.25px;
    color: #6e798c;
`;
const LineCSS = styled.div`
    height: 0.5px;
    width: 100%;
    background-color: #b0b0b0;
    margin-top: 6px;
    margin-bottom: 6px;
`;

const CharacterDetails: React.FC = () => {
    const { id } = useParams();

    const { data, isSuccess, isLoading, isError } = useGetCharacterByIdQuery(
        `${id}`,
        { refetchOnMountOrArgChange: true }
    );

    return (
        <CharacterDetailsContainer>
            <GoBackCSS to={"/"}>
                <GoBackArrowCSS>
                    <AiOutlineArrowLeft
                        style={{ height: "100%", width: "100%" }}
                    />
                </GoBackArrowCSS>
                GO BACK
            </GoBackCSS>
            {isError && <h2>Error Fetching data =(</h2>}
            {isLoading && <SpinningCircles />}
            {isSuccess && (
                <>
                    <AvatarOfCharacterCSS>
                        <ImageByReact src={data.image} />
                    </AvatarOfCharacterCSS>
                    <CharacterTitleCSS>{data.name}</CharacterTitleCSS>
                    <CharacterSubTitleCSS>Informations</CharacterSubTitleCSS>
                    <CharacterInformationsCSS>
                        <InformationsNameCSS>Gender</InformationsNameCSS>
                        <InformationsStatusCSS>
                            {data.gender}
                        </InformationsStatusCSS>
                        <LineCSS />
                        <InformationsNameCSS>Status</InformationsNameCSS>
                        <InformationsStatusCSS>
                            {data.status}
                        </InformationsStatusCSS>
                        <LineCSS />
                        <InformationsNameCSS>Specie</InformationsNameCSS>
                        <InformationsStatusCSS>
                            {data.species}
                        </InformationsStatusCSS>
                        <LineCSS />
                        <InformationsNameCSS>Origin</InformationsNameCSS>
                        <InformationsStatusCSS>
                            {data.origin.name}
                        </InformationsStatusCSS>
                        <LineCSS />
                        <InformationsNameCSS>Type</InformationsNameCSS>
                        <InformationsStatusCSS>
                            {!data.type ? "unknown" : data.type}
                        </InformationsStatusCSS>
                        <LineCSS />
                    </CharacterInformationsCSS>
                </>
            )}
        </CharacterDetailsContainer>
    );
};

export default CharacterDetails;
