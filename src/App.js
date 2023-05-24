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
    fruits[10] = 'pisang';
    // fruits.push('anggur','salak') //untuk menambahkan aray baru 
    // fruits.pop() //untuk menghapus array terakhir
    // fruits.shift() //untuk menghapus array bagian depan
    fruits.splice(0, 5) //untuk menghapus array bagian tertentu
    fruits.includes('naga') //untuk mengecek apakah suatu data itu ada didalam array atau angga
    alert( fruits.includes('naga'))
    alert( fruits.includes('manggu'))
    const fruit = fruits.map( (f, index)=> <li key={index} >{f}</li>)

    // 2. Array.filter yaitu menghasilakn array baru tapi item yang didapat sesuai dengan kondisi tertentu sdesuai namanya filter
    const numbers = [2, 4, 1, 6, 8, 10, 7, 9, 5];
    const number = numbers.filter( (n)=> n <= 6);
    const num = number.map( (n)=> <li key={n.toString()}>{n}</li>)

    // 3. Array.reduce dia akan menggabungkan semua nilai menjadi satu atau istilahnya menghitung semua total nya lah sebagai contoh sederhana nya 
    const total = numbers.reduce( (value, acc) => value + acc);
    console.log(total);
    return (<>
      <div>
        <h1>hello world</h1>
        <ul>
         { fruit },
         { num }
        </ul>
      </div>
    </>
    )
  }
}

export default App;
