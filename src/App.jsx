
import { useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import Lista from "./components/Lista";
import Contador from "./components/Contador";
import "./App.css";

function App() {
  const [tarefas, setTarefas] = useState([]);

  function adicionarTarefa(nome) {
    const novaTarefa = {
      id: Date.now(),
      nome: nome,
      concluida: false
    };

    setTarefas((lista) => [...lista, novaTarefa]);
  }

  function concluirTarefa(id) {
    setTarefas((lista) =>
      lista.map((tarefa) =>
        tarefa.id === id
          ? { ...tarefa, concluida: !tarefa.concluida }
          : tarefa
      )
    );
  }

  function removerTarefa(id) {
    setTarefas((lista) =>
      lista.filter((tarefa) => tarefa.id !== id)
    );
  }

  const pendentes = tarefas.filter(
    (tarefa) => !tarefa.concluida
  ).length;

  useEffect(() => {
    document.title = `${pendentes} tarefas pendentes`;
  }, [pendentes]);

  return (
    <div className="container">
      <h1>Gerenciador de Tarefas</h1>

      <h2>{pendentes} tarefas pendentes</h2>

      <Formulario adicionarTarefa={adicionarTarefa} />

      <Lista
        tarefas={tarefas}
        concluirTarefa={concluirTarefa}
        removerTarefa={removerTarefa}
      />

      <Contador />
    </div>
  );
}

export default App;
