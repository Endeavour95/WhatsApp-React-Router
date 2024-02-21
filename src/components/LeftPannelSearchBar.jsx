import { Stack, Input, CircularProgress, Tooltip } from "@mui/material"
import SearchIcon, { BackIcon, XAltIcon } from "../Icons/SearchBarIcons";
import { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { handleLeftPannelSearchBar } from "../functions";

export default function LeftPannelSearchBar() {
    const searchText = useSelector((state) => state.chats.searchText)

    const [searchIcon, setSearchIcon] = useState(true)

    const [xaltIcon, setXaltIcon] = useState(false)

    const [circularProgress, setCircularProgress] = useState(false)

    const inputRef = useRef(null);

    const dispatch = useDispatch()

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
            {
                searchIcon ? (
                    <SearchIcon
                        id="searchIcon"
                        colour="#8696a0" height={24} width={24}
                        sx={{
                            padding: "5.5px 29px 5.5px 12px"
                        }}
                        onClick={(e) => {
                            setSearchIcon(false)
                            inputRef.current.focus();
                        }}
                    />
                ) : (
                    <BackIcon
                        id="backIcon"
                        colour="#00a884"
                        sx={{
                            padding: "5.5px 29px 5.5px 12px"
                        }}
                        onClick={(e) => {
                            setSearchIcon(true)
                            setXaltIcon(false)
                            dispatch(handleLeftPannelSearchBar(""))
                        }}
                    />
                )
            }
            {/* <Tooltip title="Search input textbox"> */}
            <Input
                id="messageField"
                inputRef={inputRef}
                onClick={() => {
                    setSearchIcon(false)
                }}
                onChange={(e) => {
                    dispatch(handleLeftPannelSearchBar(e.currentTarget.value))
                    handleCircularProgress()
                }}
                placeholder="Search or start a new chat"
                value={searchText}
                disableUnderline
                sx={{
                    width: "100%",
                    fontFamily: "inherit",
                    padding: "2.44px 0px 2px",
                    color: "#d1d7db",
                    fontSize: "15px",
                }}
            />
            {/* </Tooltip> */}
            <Stack
                direction="row"
                sx={{
                    padding: "5.5px 6px 5.5px 1px"
                }}
            >
                {!((xaltIcon || circularProgress) && searchText !== "") ? (
                    <></>
                ) : xaltIcon ? (
                    <XAltIcon
                        colour="#8696a0"
                        onClick={() => {
                            dispatch(handleLeftPannelSearchBar(""))
                        }}
                    />
                ) : (
                    <CircularProgress
                        variant="indeterminate"
                        thickness={5}
                        size={20}
                        sx={{
                            color: "#00a884",
                        }}
                    />
                )}
            </Stack>
        </>
    )
}