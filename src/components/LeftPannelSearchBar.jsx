import { Grid, Box, Stack, Button, Input, TextField, IconButton, CircularProgress, Tooltip } from "@mui/material"
import SvgIcon from '@mui/material/SvgIcon';
import SearchIcon, { BackIcon, XAltIcon } from "../Icons/SearchBarIcons";
import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSearchText } from "../slices/chatsSlice";
import { Propane } from "@mui/icons-material";

export default function LeftPannelSearchBar() {
    const searchText = useSelector((state) => state.chats.searchText)

    const dispatch = useDispatch()

    const inputRef = useRef(null);

    const [searchIcon, setSearchIcon] = useState(true)

    const [xaltIcon, setXaltIcon] = useState(false)

    const [circularProgress, setCircularProgress] = useState(false)

    function handleCircularProgress() {
        setXaltIcon(false)
        setCircularProgress(true)

        setTimeout(() => {
            setCircularProgress(false)
            setXaltIcon(true)
        }, 1000)
    }

    return (
        <>
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
                    searchIcon ? (
                        <IconButton
                            sx={{
                                paddingLeft: "12px",
                                paddingRight: "17px",
                            }}
                            id="searchIcon"
                            onClick={(e) => {
                                setSearchIcon(false)
                                inputRef.current.focus();
                            }}
                        >
                            <SearchIcon
                                colour="#8696a0" height={24} width={24}
                            />
                        </IconButton>
                    ) : (
                        <IconButton
                            sx={{
                                paddingLeft: "12px",
                                paddingRight: "17px",
                            }}
                            id="backIcon"
                            onClick={(e) => {
                                setSearchIcon(true)
                                setXaltIcon(false)
                                dispatch(setSearchText(""))
                            }}
                        >
                            <BackIcon
                                colour="#00a884"
                            />
                        </IconButton>
                    )
                }
            </Stack>
            {/* <Tooltip title="Search input textbox"> */}
                <Input
                    id="messageField"
                    inputRef={inputRef}

                    onClick={() => {
                        setSearchIcon(false)
                    }}
                    onChange={(e) => {
                        dispatch(setSearchText(e.currentTarget.value))
                        handleCircularProgress()
                    }}
                    placeholder="Search or start a new chat"
                    value={searchText}
                    fullWidth
                    disableUnderline
                    sx={{
                        bgcolor: "#202C33",
                        height: "35px",
                        font: "inherit",
                        padding: "9px 0px 9px 12px",
                        color: "#d1d7db",
                        textIndent: "0px",
                        textDecoration: "none",
                        lineHeight: "inherit",
                        fontSize: "15px",
                    }}
                />
            {/* </Tooltip> */}
            <Stack
                direction="row"
                sx={{
                    height: "35px",
                    bgcolor: "#202C33",
                    borderTopRightRadius: "8px",
                    borderBottomRightRadius: "8px",
                }}
            >
                {
                    (xaltIcon === false && circularProgress === false) || searchText === "" ? (
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
                                dispatch(setSearchText(''))
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
            </Stack>
        </>
    )
}