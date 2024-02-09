import { Component } from 'react';
import './App.css';

class App extends Component {

  state={s1:"kg",s2:"in",inp1:"",inp2:"",res:"",c:"",des:""}

  cal=(e)=>{
    const {s1,s2,inp1,inp2}=this.state
    e.preventDefault()
    let w=0
    let h=0
    if (s1==="kg"){
      w=inp1
    }
    else{
      w=inp1/2.205
    }
    if (s2==="in"){
      h=inp2/39.37
    }
    else{
      h=inp2/100
    }
    let bmi=w/(h*h)
    console.log("w in kg"+ w)
    console.log("h in m"+ h)
    console.log(bmi)
    if (bmi<=16 || bmi>=35){
      this.setState({c:"text-rose-800"})
    }
    else if((bmi>16 && bmi<18.5)||(bmi>25 && bmi<35)){
      this.setState({c:"text-yellow-300"})
    }
    else if(bmi<=25 || bmi>=18.5){
      this.setState({c:"text-green-600"})
    }

    let classification = "";
let description = "";

if (bmi < 16) {
  classification = "Severe Thinness";
  description = "You are classified as severely thin.";
} else if (bmi >= 16 && bmi < 17) {
  classification = "Moderate Thinness";
  description = "You are classified as moderately thin.";
} else if (bmi >= 17 && bmi < 18.5) {
  classification = "Mild Thinness";
  description = "You are classified as mildly thin.";
} else if (bmi >= 18.5 && bmi < 25) {
  classification = "Normal";
  description = "You have a normal BMI.";
} else if (bmi >= 25 && bmi < 30) {
  classification = "Overweight";
  description = "You are classified as overweight.";
} else if (bmi >= 30 && bmi < 35) {
  classification = "Obese Class I";
  description = "You are classified as Obese Class I.";
} else if (bmi >= 35 && bmi < 40) {
  classification = "Obese Class II";
  description = "You are classified as Obese Class II.";
} else if (bmi >= 40) {
  classification = "Obese Class III";
  description = "You are classified as Obese Class III.";
}

// Set the state 'des' with the calculated description
this.setState({ des: description });
    this.setState({res:bmi})
  }

  sel1 = (e) => {
    this.setState({ s1: e.target.value });
  }

  sel2 = (e) => {
    this.setState({ s2: e.target.value });
  }

  i1 = (e) => {
    this.setState({ inp1: e.target.value });
  }

  i2 = (e) => {
    this.setState({ inp2: e.target.value });
  }

  render(){

    const {res,c,des}=this.state

    return (
      <div className="w-screen h-screen bg-neutral-950 p-12 font-[Poppins]">
        <h1 className="mx-auto text-white font-[Poppins] text-3xl font-semibold mb-3">BMI Calculator</h1>
        <p className="font-poppins text-gray-500 font-semibold text-lg">Body mass index (BMI) is a measure of your weight relative to your height and functions as a rough estimate of body fat. When you enter your height and weight into a BMI calculator, you’ll get a number. That number is one way to gauge if you have a healthy or unhealthy weight.</p>
        <form className="flex flex-col mt-10" onSubmit={this.cal}>
          <label htmlFor="weight" className="text-white mb-2">Weight</label>
          <div className="flex mb-2">
            <input id='weight' onChange={this.i1} type="number" placeholder='Enter Weight' className="w-36 text-black p-2 rounded-l-md border-2 border-sky-500 border-r-0"/>
            <select id="w" onChange={this.sel1} className="w-14 rounded-r-md  border-2 border-sky-500">
              <option value="kg">kg</option>
              <option value="lb">lb</option>
            </select>
          </div>
          <label htmlFor="height" className="text-white mb-2">Height</label>
          <div className="flex">
            <input id='height' onChange={this.i2} type="number" placeholder='Enter Height' className="w-36 p-2 text-slate-950 rounded-l-md border-2 border-sky-500 border-r-0"/>
            <select id="h" onChange={this.sel2} className="w-14 rounded-r-md  border-2 border-sky-500">
              <option value="in">in</option>
              <option value="cm">cm</option>
            </select>
          </div>
          <button className="bg-sky-500 text-white px-6 py-2 w-32 mt-10 rounded" onClick={this.cal}>Calculate</button>
        </form>
        {res!==""?<p className="text-white mt-6">Your BMI is <span className={`${c} text-xl font-semibold ml-2`}>{res.toFixed(2)}</span><p className={`${c} text-lg font-semibold `}>{des}</p></p>:""}
      </div>
    );
  }
  
}

export default App;
