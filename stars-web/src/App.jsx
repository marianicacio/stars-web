import planets from './assets/images/planets.png'
import logo from './assets/images/logo.png'
import './App.css'
import Button from './components/button/Button'
import Card from './components/Card/Card'

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
      <Card placa={"JKLIH-5F"} data={"27-08"} hora={"18:00"}/>
    </>
  )
}

export default App
