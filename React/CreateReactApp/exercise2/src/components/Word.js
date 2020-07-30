import React from 'react';
import "./Word.css";


const Word = props => (
<li>Słowo po angielsku: <strong>{props.eng}</strong><br/> Tłumaczenie: <strong>{props.polish}</strong><br/><br/> </li>
)


export default Word;