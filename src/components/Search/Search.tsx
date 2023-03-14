import React from "react";
import styled from "styled-components";
import { BiSearch } from "react-icons/bi";
import { ContainerCSS } from "../MyStyledComponents/ContainerCSS";
import { RootState, useAppDispatch } from "../../redux/store";
import { setInputValue } from "../../redux/searchInputSlice";
import { useSelector } from "react-redux";
import debounce from "lodash.debounce";

const SearchCSS = styled.div`
    width: 100%;
    margin-bottom: 51px;
`;

const InputContainerCSS = styled.div`
    position: relative;
`;

const InputCSS = styled.input`
    height: 56px;
    padding-left: 40px;
    border: 1px solid rgba(0, 0, 0, 0.5);
    border-radius: 8px;
    width: 100%;
`;

const SearchIconCSS = styled(BiSearch)`
    position: absolute;
    top: 50%;
    left: 12px;
    transform: translateY(-50%);
    font-size: 20px;
`;

const Search: React.FC = () => {
    const dispatch = useAppDispatch();

    const [inputChangeValue, setInputChangeValue] = React.useState("");

    const { inputValue } = useSelector(
        (state: RootState) => state.searchInputSlice
    );

    const updateSearchValue = React.useCallback(
        debounce((str: string) => {
            dispatch(setInputValue(str));
        }, 500),
        []
    );

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputChangeValue(e.target.value);
        updateSearchValue(e.target.value);
    };

    React.useEffect(() => {
        const storedSearchText = localStorage.getItem("searchText");
        if (storedSearchText) {
            dispatch(setInputValue(storedSearchText));
            setInputChangeValue(storedSearchText);
        }
    }, [dispatch]);

    React.useEffect(() => {
        localStorage.setItem("searchText", inputValue);
    }, [inputValue]);

    return (
        <SearchCSS>
            <ContainerCSS>
                <InputContainerCSS>
                    <SearchIconCSS />
                    <InputCSS
                        type="text"
                        placeholder="Filter by name..."
                        value={inputChangeValue}
                        onChange={handleInputChange}
                    />
                </InputContainerCSS>
            </ContainerCSS>
        </SearchCSS>
    );
};

export default Search;
