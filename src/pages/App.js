import { useState } from 'react';
import gitLogo from '../assets/github.png';
import Button from '../components/Button';
import Input from '../components/Input';
import ItemRepo from '../components/ItemRepo';
import { api } from '../services/api';
import { Container } from "./style";
import Footer from '../components/Footer';

function App() {

  const [currentRepo, setCurrentRepo] = useState('')
  const [repos, setRepos] = useState([])

  const handleSearchRepo = async () => {
    try {
      const { data } = await api.get(`repos/${currentRepo}`);
      if (data.id) {
        const isExist = repos.find((repo) => repo.id === data.id);
        if (!isExist) {
          setRepos((prev) => [...prev, data]);
          setCurrentRepo('');
          return;
        }
      }
      alert('Repositório já listado');
    } catch (error) {
      if (error.response && error.response.status === 404) {
        alert('Repositório não encontrado. Verifique o nome e tente novamente.');
      } else {
        console.error('Erro ao buscar repositório:', error.message);
        alert('Ocorreu um erro ao buscar o repositório. Por favor, tente novamente.');
      }
    }
  };

  const handleRemoveRepo = (id) => {
    setRepos((prevRepos) => prevRepos.filter((repo) => repo.id !== id))
  }

  return (
    <Container>
      <img src={gitLogo} width={72} height={72} alt="Logo do Github"/>
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)}/>
      <Button onClick={handleSearchRepo}/>
      {repos.map(repo => <ItemRepo repo={repo} handleRemoveRepo={handleRemoveRepo}/> )}
      <Footer/>
    </Container>
  );
}

export default App;