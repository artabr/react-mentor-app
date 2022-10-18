import React from "react";

type CounterButtonProps = {
    text: string;
    type?: 'blue' | 'red';
    onClick?: React.MouseEventHandler;
};

export class CounterButton extends React.PureComponent<CounterButtonProps> {
    render() {
        console.log("CounterButton rendered.");

        return (<button onClick={this.props.onClick}
                        className="h-full w-20 inline-flex items-center py-2.5 px-3 mr-2 text-sm font-medium text-white bg-rose-600 rounded-lg border border-rose-600 hover:bg-rose-800 focus:ring-4 focus:outline-none focus:ring-rose-300 dark:bg-rose-600 dark:hover:bg-rose-700 dark:focus:ring-rose-800">{this.props.text}
        </button>);
    }
}