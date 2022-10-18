import React from "react";

type SimpleTextProps = {
    text: string;
};

export class SimpleText extends React.Component<SimpleTextProps> {
    render() {
        return React.createElement('span', null, this.props.text);
    }
}
