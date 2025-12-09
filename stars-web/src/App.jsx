import planets from './assets/images/planets.png'
import logo from './assets/images/logo.png'
import './App.css'
import Button from './components/button/Button'
import Card from './components/Card/Card'
import Input from './components/Input/input'

function App() {

  return (
    <>
      {/* <section>
        <img src={planets} alt="" />
        <img src={logo} alt="" />
        <form>
                <Input placeholder="E-mail" value={email} onChangeText={setEmail} />
                <Input placeholder="Senha" value={password} onChangeText={setPassword} password={true} />
                <Btn>
                    <Button onPress={handleLogin} label="Entrar" color={"#FF92C2"} />
                </Btn>
            </form>
      </section> */}
     <Input placeholder={"E-mail"} password={true}/>
    </>
  )
}

export default App
