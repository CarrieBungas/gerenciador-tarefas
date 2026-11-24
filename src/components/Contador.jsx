
import { useEffect, useState } from "react";

function Contador() {
  const [segundos, setSegundos] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setSegundos((tempo) => tempo + 1);
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <p>
      Tempo de página aberta: {segundos} segundos
    </p>
  );
}

export default Contador;
