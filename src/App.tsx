import { useState } from 'react'
import axios from 'axios'
import './App.css'

type GithubData = {
  name: string
  bio: string
  avatar_url:string
}


function App() {

 const [username, setUsername] = useState("")
 const [name, setName] = useState("Loading...")
 const [bio, setBio] = useState("")
 const [avatar_url, setAvatrURL] = useState("Loading...")



 const haandlePesquisar = () => {
    axios.get<GithubData>(`https://api;github.com/users/${username}`).then
    ((response) => 
    {setName(response.data.name)
      setBio(response.data.bio)
      setAvatrURL(response.data.avatar_url)
    })
  }



  return (
   <div className="container-geral">
    <div className="container">
      <header className="header-top">
        Projeto Emides3am
      </header>
      <main>
        <div className="form">
          <h1>Pesquisar Github</h1>
          <input type="text" placeholder="Digite o úsuario" onChange={(e) => setUsername(e.target.value)}/>
          <button onClick={haandlePesquisar}>Consultar</button>
        </div>
        <div className="conteudo">
          <div>
          <img src={avatar_url} alt="" />
          <h1>{name}</h1>
          <p>{bio}</p>
          </div>
        </div>
      </main>
    </div>
   </div>
  )
}

export default App
