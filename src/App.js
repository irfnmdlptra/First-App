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
    const fruits = ['mangga', 'apple', 'delima', 'nanas'];
    const fruit = fruits.map( (f, index)=> <li key={index}>{f}</li>)
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
