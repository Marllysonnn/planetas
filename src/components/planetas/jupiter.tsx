import { useState } from "react";
import Button from "../button";
import Card from "../card";
import "../scss/layout.scss";

function Jupiter() {
  const [textoAtual, setTextoAtual] = useState("geral");

  return (
    <main>
      <div className="informacao">
        <Card titleName="HORAS POR DIA" info="9h54min" />
        <Card titleName="DIAS AO ANO" info="4.333 dias" />
        <Card titleName="CIRCUNFERENCIA" info="439.264km" />
        <Card titleName="TEMPERATURA" info="-108°C" />
      </div>

      <div className="imagens">
        {textoAtual !== "internamente" && (
          <img
            style={{width: '85%'}} 
            src="/img/planet-jupiter.svg" 
            alt="Júpiter" />
        )}
        {textoAtual === "internamente" && (
          <img
            style={{width: '85%'}}
            id="inner"
            src="/img/planet-jupiter-internal.svg"
            alt="Estrutura interna"
          />
        )}
        {textoAtual === "geologia" && (
          <img
            style={{width: '8em'}}
            className="geo"
            src="/img/geology-jupiter.webp"
            alt="Geologia de Júpiter"
          />
        )}
      </div>

      <div className="text">
        <h1>JÚPITER</h1>

        {textoAtual === "geral" && (
          <p>
            Júpiter é o quinto planeta a partir do Sol e o maior do Sistema
            Solar. É um gigante gasoso com uma massa duas vezes e meia maior que
            a de todos os outros planetas do Sistema Solar combinados, mas ainda
            assim possui menos de um milésimo da massa do Sol.
          </p>
        )}
        {textoAtual === "internamente" && (
          <p>
            Quando a sonda Juno chegou a Júpiter em 2016, descobriu que o
            planeta possui um núcleo muito difuso que se mistura com o manto.
            Uma possível causa para isso é um impacto com um planeta de cerca de
            dez vezes a massa da Terra, ocorrido alguns milhões de anos após a
            formação de Júpiter, que teria desestabilizado seu núcleo
            originalmente sólido.
          </p>
        )}
        {textoAtual === "geologia" && (
          <p>
            A característica mais conhecida de Júpiter é a Grande Mancha
            Vermelha, uma tempestade anticiclônica persistente localizada a 22°
            ao sul do equador. Ela é conhecida por existir pelo menos desde 1831
            e possivelmente desde 1665.
          </p>
        )}

        <i>
          Fonte:{" "}
          <a target="_blank" href="https://pt.wikipedia.org/wiki/J%C3%BApiter_(planeta)">
            Wikipedia
          </a>
        </i>

        <Button
          className="button-jupiter" 
          onClick={() => setTextoAtual("geral")} 
          nameButton="Geral" 
        />
        <Button
          className="button-jupiter"
          onClick={() => setTextoAtual("internamente")}
          nameButton="Internamente"
        />
        <Button
          className="button-jupiter"
          onClick={() => setTextoAtual("geologia")}
          nameButton="Geologia"
        />
      </div>
    </main>
  );
}

export default Jupiter;
