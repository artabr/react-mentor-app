import React from 'react';

type SimpleTextProps = {
  text: string;
};

export function SimpleText(props: SimpleTextProps) {
  return React.createElement('span', null, props.text);
}
