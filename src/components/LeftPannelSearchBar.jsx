import { Grid, Box, Stack, Button, Input, TextField, IconButton, CircularProgress } from "@mui/material"
import SvgIcon from '@mui/material/SvgIcon';
import SearchIcon, { BackIcon, XAltIcon } from "../Icons/SearchBarIcons";
import { useState, useEffect, useRef } from "react";
import debounce from 'lodash/debounce';


export default function LeftPannelSearchBar(props) {
    const inputRef = useRef(null);


    const [xaltIcon, setXaltIcon] = useState(false)

    const [circularProgress, setCircularProgress] = useState(false)



    function handleCircularProgress() {
        setXaltIcon(false)
        setCircularProgress(true)

        setTimeout(() => {
            setCircularProgress(false)
            setXaltIcon(true)
        }, 500)
    }


    // const [loading, setLoading] = useState(false);

    // const debouncedSearch = debounce(handleInputChange, 500);

    // function handleInputChange(value) {
    //     setLoading(true);

    //     setTimeout(() => {
    //         setLoading(false);
    //     }, 1000);
    // }

    // useEffect(() => {
    //     return () => debouncedSearch.cancel();
    // }, [debouncedSearch]);

    return (
        <>
            <Stack
                direction="row"
                sx={{
                    padding: "0px 12px",
                    position: "relative",
                    boxSizing: "border-box",
                    alignItems: "center",
                    // zIndex:"100",
                    height: "49px",
                    width: "100%",
                }}
            >
                <Stack
                    direction="row"
                    sx={{
                        height: "35px",
                        bgcolor: "#202C33",
                        borderTopLeftRadius: "8px",
                        borderBottomLeftRadius: "8px",
                    }}
                >
                    {
                        props.allButtons.searchIcon ? (
                            <IconButton
                                sx={{
                                    paddingLeft: "12px",
                                    paddingRight: "17px",
                                }}
                                id="searchIcon"
                                onClick={(e) => {
                                    props.allButtonsSetter(e.currentTarget.id, false)
                                    inputRef.current.focus();
                                }}
                            >
                                <SearchIcon
                                    colour="#8696a0"
                                />
                            </IconButton>
                        ) : (
                            <IconButton
                                sx={{
                                    paddingLeft: "12px",
                                    paddingRight: "17px",
                                }}
                                // id="backIcon"
                                onClick={(e) => {
                                    props.allButtonsSetter("searchIcon", true)
                                }}
                            >
                                <BackIcon
                                    colour="#00a884"
                                />
                            </IconButton>
                        )
                    }
                </Stack>
                <Input
                    ref={inputRef}
                    onClick={() => {
                        props.allButtonsSetter("searchIcon", false)
                    }}
                    onChange={(e) => {
                        props.setSearchText(e.currentTarget.value)


                        handleCircularProgress()
                        // debouncedSearch(e.currentTarget.value)
                    }}
                    placeholder="Search or start a new chat"
                    value={props.searchText}
                    fullWidth
                    disableUnderline
                    sx={{
                        bgcolor: "#202C33",
                        height: "35px",

                        padding: "9px 0px 9px 12px",
                        color: "#d1d7db",
                        textIndent: "0px",
                        textDecoration: "none",
                    }}
                />

                <Stack
                    direction="row"
                    sx={{
                        height: "35px",
                        bgcolor: "#202C33",
                        borderTopRightRadius: "8px",
                        borderBottomRightRadius: "8px",
                    }}
                >
                    {/* {
                        props.allButtons.searchIcon ? (
                            <IconButton
                                sx={{
                                    paddingLeft: "0px",
                                }}
                            >
                                <></>
                            </IconButton>
                        ) :
                            props.searchText !== "" && loading ? (
                                <IconButton
                                    sx={{
                                        paddingLeft: "0px",
                                    }}
                                >
                                    <CircularProgress
                                        variant="indeterminate"
                                        thickness={5}
                                        size={20}
                                        sx={{
                                            color: "#00a884",
                                        }}
                                    />
                                </IconButton>
                            ) : (
                                props.searchText !== "" && loading === false ? (
                                    <IconButton
                                        sx={{
                                            paddingLeft: "0px",
                                        }}
                                        onClick={(e) => {
                                            props.setSearchText('')
                                        }}
                                    >
                                        <XAltIcon
                                            colour="#8696a0"
                                        />
                                    </IconButton>
                                ) : (
                                    <IconButton
                                        sx={{
                                            paddingLeft: "0px",
                                        }}
                                    >
                                        <></>
                                    </IconButton>
                                )
                            )
                    } */}


                    {/* {
                        loading === true && props.searchText !== "" ? (
                            <IconButton
                                sx={{
                                    paddingLeft: "0px",
                                }}
                            >
                                <CircularProgress
                                    variant="indeterminate"
                                    thickness={5}
                                    size={20}
                                    sx={{
                                        color: "#00a884",
                                    }}
                                />
                            </IconButton>
                        ) : (
                            <IconButton
                                sx={{
                                    paddingLeft: "0px",
                                }}
                                onClick={(e) => {
                                    props.setSearchText('')
                                }}
                            >
                                <XAltIcon
                                    colour="#8696a0"
                                />
                            </IconButton>
                        )
                    } */}
                    {
                        xaltIcon === false && circularProgress === false ? (
                            <IconButton
                                sx={{
                                    paddingLeft: "0px",
                                }}
                            >
                                <></>
                            </IconButton>
                        ) : xaltIcon ? (
                            <IconButton
                                sx={{
                                    paddingLeft: "0px",
                                }}
                                onClick={(e) => {
                                    props.setSearchText('')
                                }}
                            >
                                <XAltIcon
                                    colour="#8696a0"
                                />
                            </IconButton>
                        ) : circularProgress ? (
                            <IconButton
                                sx={{
                                    paddingLeft: "0px",
                                }}
                            >
                                <CircularProgress
                                    variant="indeterminate"
                                    thickness={5}
                                    size={20}
                                    sx={{
                                        color: "#00a884",
                                    }}
                                />
                            </IconButton>
                        ) : (
                            <IconButton
                                sx={{
                                    paddingLeft: "0px",
                                }}
                            >
                                <></>
                            </IconButton>
                        )
                    }


                    {/* {
                        props.searchText !== "" ? (
                            <IconButton
                                sx={{
                                    paddingLeft: "0px",
                                }}
                                onClick={(e) => {
                                    props.setSearchText('')
                                }}
                            >
                                <XAltIcon
                                    colour="#8696a0"
                                />
                            </IconButton>

                        ) : (
                            <>
                                <IconButton
                                    sx={{
                                        paddingLeft: "0px",
                                    }}
                                >
                                    <CircularProgress
                                        variant="indeterminate"
                                        thickness={5}
                                        size={20}
                                        sx={{
                                            color: "#00a884",
                                        }}
                                    />
                                </IconButton>
                            </>
                        )
                    } */}
                </Stack>
            </Stack >
        </>
    )
}