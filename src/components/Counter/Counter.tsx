import React from "react";
import {CounterButton} from "./CounterButton";

type CounterProps = {};
type CounterState = {
    count: number;
};

export class Counter extends React.Component<CounterProps, CounterState> {
    constructor(props){
        super(props);
        this.state = {
            count: 0,
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    increment() {
        this.setState(previousValue => ({
            count: previousValue.count + 1,
        }));
    }

    decrement() {
        this.setState(previousValue => ({
            count: previousValue.count - 1,
        }));
    }

    render() {
        console.log("Counter rendered.");

        return (
            <div className="custom-number-input h-10 w-44">
                <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                    <CounterButton text="-" onClick={this.decrement} />
                    <input type="number"
                           className="w-full text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full pl-5 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
                           name="custom-input-number" value={this.state.count}></input>
                    <CounterButton text="+" onClick={this.increment} />
                </div>
            </div>
        );
    }
};
