import SyntaxHighlighter from "react-syntax-highlighter";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import DoneIcon from "@mui/icons-material/Done";
import { useState, useEffect } from "react";
import copy from "copy-to-clipboard";
import { useDispatch, useSelector } from "react-redux";
import { setCopy } from "../redux/slices";

const serializerFn = () => {
    const dispatch = useDispatch();

    const serializers = {
        types: {
            code: (props) => (
                <div className=" relative">
                    <SyntaxHighlighter language={props.node.language}>
                        {props.node.code}
                    </SyntaxHighlighter>
                </div>
            ),
        },
    };
    return serializers;
};

export default serializerFn;
