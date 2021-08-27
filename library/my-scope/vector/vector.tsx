import React from 'react';
import { Entypo } from '@expo/vector-icons';

export type VectorProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string
};

export function Vector({ text }: VectorProps) {
  return (
    <Entypo name="chevron-thin-left" size={24} color="black" />
  );
}
