import React from "react";
import styled from "styled-components";
import ImageByReact from "../components/ImageByReact/ImageByReact";
import img1 from "../assets/img/rickAndMorty.png";
import Search from "../components/Search/Search";
import CharactersList from "../components/CharactersList/CharactersList";

const WrapperCSS = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    align-items: center;
    padding: 0 10px;
`;

const MainImageCSS = styled.div`
    max-width: 600px;
    max-height: 200px;
    margin-top: 86px;
    margin-bottom: 16px;
`;

function App() {
    return (
        <WrapperCSS>
            <MainImageCSS>
                <ImageByReact src={img1} />
            </MainImageCSS>
            <Search />
            <CharactersList />
        </WrapperCSS>
    );
}

export default App;
