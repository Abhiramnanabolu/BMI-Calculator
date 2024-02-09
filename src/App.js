import { Component } from 'react';
import './App.css';

class App extends Component {

  cal=(e)=>{
    e.preventDefault()
    console.log("CALCUALTE")
  }

  render(){
    return (
      <div className="w-screen h-screen bg-neutral-950 p-12 font-[Poppins]">
        <h1 className="mx-auto text-white font-[Poppins] text-3xl font-semibold mb-3">BMI Calculator</h1>
        <p className="font-poppins text-gray-500 font-semibold text-lg">Body mass index (BMI) is a measure of your weight relative to your height and functions as a rough estimate of body fat. When you enter your height and weight into a BMI calculator, you’ll get a number. That number is one way to gauge if you have a healthy or unhealthy weight.</p>
        <form className="flex flex-col mt-10" onSubmit={this.cal}>
          <label htmlFor="weight" className="text-white mb-2">Weight</label>
          <div className="flex mb-2">
            <input id='weight' placeholder='Enter Weight' className="w-32 text-black p-2 rounded-l-md border-2 border-sky-500 border-r-0"/>
            <select id="w" className="w-14 rounded-r-md  border-2 border-sky-500">
              <option value="kg">kg</option>
              <option value="lb">lb</option>
            </select>
          </div>
          <label htmlFor="height" className="text-white mb-2">Height</label>
          <div className="flex">
            <input id='height' placeholder='Enter Height' className="w-32 p-2 text-slate-950 rounded-l-md border-2 border-sky-500 border-r-0"/>
            <select id="h" className="w-14 rounded-r-md  border-2 border-sky-500">
              <option value="in">in</option>
              <option value="cm">cm</option>
            </select>
          </div>
          <button className="bg-sky-500 text-white px-6 py-2 w-32 mt-10 rounded" onClick={this.cal}>Calculate</button>
        </form>
      </div>
    );
  }
  
}

export default App;
