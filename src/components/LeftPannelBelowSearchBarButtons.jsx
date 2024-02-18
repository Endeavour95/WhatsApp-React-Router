import { Stack, IconButton, Divider, Box } from "@mui/material";

export default function LeftPannelBelowSearchBarButtons(props) {
  const buttonData = [
    { id: "buttonAll", label: "All" },
    { id: "buttonUnread", label: "Unread" },
    { id: "buttonContacts", label: "Contacts" },
    { id: "buttonGroups", label: "Groups" },
  ];

  return (
    <>
      <Stack
        direction="row"
        spacing="8px"
        flexWrap="wrap"
        sx={{
          padding: "2px 16px 7px",
          bgcolor: "#111B21"
        }}
      >
        {buttonData.map((button) => (
          <IconButton
            key={button.id}
            id={button.id}
            onClick={(e) => {
              props.belowSearchBarButtonsSetter(e.currentTarget.id, true);
            }}
            sx={{
              padding: "6px 12px",
              color: props.belowSearchBarButtons[button.id] ? '#00a884' : '#8696A0',
              bgcolor: props.belowSearchBarButtons[button.id] ? '#0a332c' : '#202C33',
              fontSize: "15px",
              fontWeight: "400",
              fontFamily: "inherit",
              cursor: "pointer",
              borderRadius:"42px",
              '&:hover': {
                bgcolor: props.belowSearchBarButtons[button.id] ? '#0a332c' : '#26353d',
              },
            }}
          >
            {button.label}
          </IconButton>
        ))}
      </Stack>
      <Divider
        orientation="horizontal"
        sx={{
          bgcolor: "#262f34",
        }}
      />
    </>
  );
}














// import { Stack, Button, Divider, IconButton } from "@mui/material"


// export default function LeftPannelBelowSearchBarButtons(props) {
//     // const [belowSearchBarButtons , setBelowSearchBarButton] = useState({
//     //     "buttonAll":false,
//     //     "buttonUnread":false,
//     //     "buttonContacts":false,
//     //     "buttonGroups":false
//     // })

//     return (
//         <>
//             <Stack
//                 direction="row"
//                 spacing="8px"
//                 // display="flex"
//                 flexWrap="wrap"
//                 sx={{
//                     // height: "41.79px",
//                     padding: "2px 16px 7px",
//                     bgcolor: "#111B21"
//                 }}
//             >
//                 <IconButton
//                     id="buttonAll"
//                     onClick={(e) => {
//                         props.belowSearchBarButtonsSetter(e.currentTarget.id, true)
//                     }}
//                     sx={{
//                         // height: "31.99px",
//                         padding: "6px 12px",
//                         color: props.belowSearchBarButtons.buttonAll ? '#00a884': '#8696A0',
//                         bgcolor: props.belowSearchBarButtons.buttonAll ? '#0a332c': '#202C33',
//                         // color: '#8696A0',
//                         // bgcolor: "#202C33",
//                         fontSize: "15px",
//                         fontWeight: "400",
//                         fontFamily: "inherit",
//                         // fontFamily:"Segoe UI,Helvetica Neue,Helvetica,Lucida Grande,Arial,Ubuntu,Cantarell,Fira Sans,sans-serif",
//                         cursor: "pointer",
//                         borderBottomRightRadius: "42px",
//                         borderBottomLeftRadius: "42px",
//                         borderTopRightRadius: "42px",
//                         borderTopLeftRadius: "42px",
//                         '&:hover': {
//                             bgcolor: props.belowSearchBarButtons.buttonAll ? '#0a332c' : '#26353d', // Change the color on hover
//                         },
//                         // flexShrink:"1",
//                     }}
//                 >
//                     All
//                 </IconButton>
//                 <IconButton
//                     id="buttonUnread"
//                     onClick={(e) => {
//                         props.belowSearchBarButtonsSetter(e.currentTarget.id, true)
//                     }}
//                     sx={{
//                         // height: "31.99px",
//                         padding: "6px 12px",
//                         color: props.belowSearchBarButtons.buttonUnread ? '#00a884': '#8696A0',
//                         bgcolor: props.belowSearchBarButtons.buttonUnread ? '#0a332c': '#202C33',
//                         fontSize: "15px",
//                         fontWeight: "400",
//                         fontFamily: "inherit",
//                         // fontFamily:"Segoe UI,Helvetica Neue,Helvetica,Lucida Grande,Arial,Ubuntu,Cantarell,Fira Sans,sans-serif",
//                         cursor: "pointer",
//                         borderBottomRightRadius: "42px",
//                         borderBottomLeftRadius: "42px",
//                         borderTopRightRadius: "42px",
//                         borderTopLeftRadius: "42px",
//                         '&:hover': {
//                             bgcolor: props.belowSearchBarButtons.buttonUnread ? '#0a332c' : '#26353d', // Change the color on hover
//                         },
//                     }}
//                 >
//                     Unread
//                 </IconButton>
//                 <IconButton
//                     id="buttonContacts"
//                     onClick={(e) => {
//                         props.belowSearchBarButtonsSetter(e.currentTarget.id, true)
//                     }}
//                     sx={{
//                         // height: "31.99px",
//                         padding: "6px 12px",
//                         color: props.belowSearchBarButtons.buttonContacts ? '#00a884': '#8696A0',
//                         bgcolor: props.belowSearchBarButtons.buttonContacts ? '#0a332c': '#202C33',
//                         fontSize: "15px",
//                         fontWeight: "400",
//                         fontFamily: "inherit",
//                         // fontFamily:"Segoe UI,Helvetica Neue,Helvetica,Lucida Grande,Arial,Ubuntu,Cantarell,Fira Sans,sans-serif",
//                         cursor: "pointer",
//                         borderBottomRightRadius: "42px",
//                         borderBottomLeftRadius: "42px",
//                         borderTopRightRadius: "42px",
//                         borderTopLeftRadius: "42px",
//                         '&:hover': {
//                             bgcolor: props.belowSearchBarButtons.buttonContacts ? '#0a332c' : '#26353d', // Change the color on hover
//                         },
//                     }}
//                 >
//                     Contacts
//                 </IconButton>
//                 <IconButton
//                     id="buttonGroups"
//                     onClick={(e) => {
//                         props.belowSearchBarButtonsSetter(e.currentTarget.id, true)
//                     }}
//                     sx={{
//                         // height: "31.99px",
//                         padding: "6px 12px",
//                         color: props.belowSearchBarButtons.buttonGroups ? '#00a884': '#8696A0',
//                         bgcolor: props.belowSearchBarButtons.buttonGroups ? '#0a332c': '#202C33',
//                         fontSize: "15px",
//                         fontWeight: "400",
//                         fontFamily: "inherit",
//                         // fontFamily:"Segoe UI,Helvetica Neue,Helvetica,Lucida Grande,Arial,Ubuntu,Cantarell,Fira Sans,sans-serif",
//                         cursor: "pointer",
//                         borderBottomRightRadius: "42px",
//                         borderBottomLeftRadius: "42px",
//                         borderTopRightRadius: "42px",
//                         borderTopLeftRadius: "42px",
//                         '&:hover': {
//                             bgcolor: props.belowSearchBarButtons.buttonGroups ? '#0a332c' : '#26353d', // Change the color on hover
//                         },
//                     }}
//                 >
//                     Groups
//                 </IconButton>
//             </Stack>
//             <Divider
//                 orientation="horizontal"
//                 sx={{
//                     bgcolor: "#262f34", 
//                     // height: "0.05px",
//                     // border:"0.5px solid #262f34"
//                     // color: "#262f34"
//                 }}
//             />
//         </>
//     )
// }
