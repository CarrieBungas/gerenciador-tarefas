
function Lista({ tarefas, concluirTarefa, removerTarefa }) {
  return (
    <ul>
      {tarefas.map((tarefa) => (
        <li key={tarefa.id}>
          <span
            style={{
              textDecoration: tarefa.concluida
                ? "line-through"
                : "none"
            }}
          >
            {tarefa.nome}
          </span>

          <button onClick={() => concluirTarefa(tarefa.id)}>
            Concluir
          </button>

          <button onClick={() => removerTarefa(tarefa.id)}>
            Excluir
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Lista;
