import './App.css';

function App() {
  return (
    <div>
       <div class="logo">
    <img src="song.png" alt="song to Music"/>
    <h1>Songs2Notes</h1>
</div>

<div class="container">
    <h1>Sign In</h1>
    <div class="form">
        <input type="email" placeholder="Email or phone number"/>
        <input type="password" placeholder="Password"/>
        <input type="submit" value="Sign In" id="click"/>
    </div>
    <div class="content">
        <h2>New to Music app? <a href="#">Sign up now.</a> </h2> 
    </div>
</div>
    </div>
   
  );
}

export default App;
