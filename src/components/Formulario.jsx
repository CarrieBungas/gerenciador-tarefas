
function Formulario({ adicionarTarefa }) {
  function handleSubmit(event) {
    event.preventDefault();

    const tarefa = event.target.elements.tarefa.value.trim();

    if (!tarefa) return;

    adicionarTarefa(tarefa);
    event.target.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="tarefa"
        placeholder="Digite uma tarefa..."
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}

export default Formulario;
