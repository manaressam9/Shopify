import React from 'react';
import { useParams } from 'react-router-dom';

export default function ProductScreen() {
  const params = useParams();
  const { slug } = params;
  return <div>{slug}</div>;
}
