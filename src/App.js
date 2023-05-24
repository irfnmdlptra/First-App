import './App.css';
import React from 'react';

class App extends React.Component{
  constructor(props) {
    super(props);

    // Array adalah struktur data untuk menyimpan sebuah data di dalam memory komputer dalam satu tempat. data yang didalam Array harus di apit denagn tanda kutip atas dan untuk memisahkannya menggunakan tanda koma 
    const fruit1 = 'mangga';
    const fruit2 = 'apple';
    const fruit3 = 'delima';
    
    // alert(fruit1);
  }
  
  render() {
    // 1. array.map adalah variable untuk menghasilkan variable baru atau copian nya dan harus menggunakan id atau index
    const fruits = ['mangga', 'apple', 'delima', 'nanas', 'durian', 'jambu', 'manggis', 'rambutan','mengkudu', 'naga'];
    const fruit = fruits.map( (f, index)=> <li key={index} >{f}</li>)

    // 2. Array.filter yaitu menghasilakn array baru tapi item yang didapat sesuai dengan kondisi tertentu sdesuai namanya filter
    const numbers = [2, 4, 1, 6, 8, 10, 7, 9, 5];
    const number = numbers.filter( (n)=> n < 6);
    console.log(number)
    return (<>
      <div>
        <h1>hello world</h1>
        <ul>
         { fruit }
        </ul>
      </div>
    </>
    )
  }
}

export default App;
