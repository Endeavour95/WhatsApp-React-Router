import SvgIcon from '@mui/material/SvgIcon';

const CustomSvgIcon = (props) => {
    const { height, width, ...otherProps } = props;

    return (
        <SvgIcon {...otherProps} style={{ height, width }}>
            {props.children}
        </SvgIcon>
    );
};

export default function SearchIcon(props) {
    //#8696a0 white
    return (
        <CustomSvgIcon
            {...props}
            viewBox="0 0 24 24"
            colour={props.colour}
            height={props.height}
            width={props.width}
        >
            <path
                fill={props.colour}
                d="M15.009,13.805h-0.636l-0.22-0.219c0.781-0.911,1.256-2.092,1.256-3.386 c0-2.876-2.332-5.207-5.207-5.207c-2.876,0-5.208,2.331-5.208,5.207s2.331,5.208,5.208,5.208c1.293,0,2.474-0.474,3.385-1.255 l0.221,0.22v0.635l4.004,3.999l1.194-1.195L15.009,13.805z M10.201,13.805c-1.991,0-3.605-1.614-3.605-3.605 s1.614-3.605,3.605-3.605s3.605,1.614,3.605,3.605S12.192,13.805,10.201,13.805z"
            />
        </CustomSvgIcon>
        // <SvgIcon {...props}>
        //     <path
        //         fill={props.colour}
        //         d="M15.009,13.805h-0.636l-0.22-0.219c0.781-0.911,1.256-2.092,1.256-3.386 c0-2.876-2.332-5.207-5.207-5.207c-2.876,0-5.208,2.331-5.208,5.207s2.331,5.208,5.208,5.208c1.293,0,2.474-0.474,3.385-1.255 l0.221,0.22v0.635l4.004,3.999l1.194-1.195L15.009,13.805z M10.201,13.805c-1.991,0-3.605-1.614-3.605-3.605 s1.614-3.605,3.605-3.605s3.605,1.614,3.605,3.605S12.192,13.805,10.201,13.805z"
        //     />
        // </SvgIcon>
    );
};


export function BackIcon(props) {
    //#d9dee0 white
    //#00a884 green
    return (
        <SvgIcon {...props}>
            <path
                fill={props.colour}
                d="M12,4l1.4,1.4L7.8,11H20v2H7.8l5.6,5.6L12,20l-8-8L12,4z"
            />
        </SvgIcon>
    );
};

export function XAltIcon(props) {
    //#8696a0 white
    return (
        <SvgIcon {...props}>
            <path
                fill={props.colour}
                d="M17.25,7.8L16.2,6.75l-4.2,4.2l-4.2-4.2L6.75,7.8l4.2,4.2l-4.2,4.2l1.05,1.05l4.2-4.2l4.2,4.2l1.05-1.05 l-4.2-4.2L17.25,7.8z"
            />
        </SvgIcon>
    );
};