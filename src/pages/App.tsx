import React from "react";
import styled from "styled-components";
import ImageByReact from "../components/ImageByReact/ImageByReact";
import img1 from "../assets/img/rickAndMorty.png";
import Search from "../components/Search/Search";
import CharactersList from "../components/CharactersList/CharactersList";
import { GoogleLogin } from "@react-oauth/google";
import jwtDecode from "jwt-decode";

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
    @media (max-width: 448px) {
    margin-top: 50px;
    }
`;

const AuthBarCSS = styled.div`
    margin-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`;
const AuthBarTextCSS = styled.div`
    justify-self: center;
    align-self: center;
`;

const AuthBarBtnCSS = styled.div<any>`
    display: ${(props) => props.value};
`;

function App() {
    const [user, setUser] = React.useState<any>("");

    return (
        <WrapperCSS>
            <AuthBarCSS>
                <AuthBarTextCSS>
                    {user !== "" ? `Hello ${user} !` : ""}
                </AuthBarTextCSS>
                <AuthBarBtnCSS value={user !== "" ? "none" : "block"}>
                    <GoogleLogin
                        onSuccess={(credentialResponse) => {
                            console.log(credentialResponse);
                            if (credentialResponse.credential) {
                                let decode: any = jwtDecode(
                                    credentialResponse.credential
                                );
                                setUser(decode.name);
                            }
                        }}
                        onError={() => {
                            console.log("Login Failed");
                        }}
                    />
                </AuthBarBtnCSS>
            </AuthBarCSS>

            <MainImageCSS>
                <ImageByReact src={img1} />
            </MainImageCSS>
            <Search />
            <CharactersList />
        </WrapperCSS>
    );
}

export default App;
