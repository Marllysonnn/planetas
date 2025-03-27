import { useState } from "react";
import Button from "../button";
import Card from "../card";
import "../scss/layout.scss";

function Urano() {
  const [textoAtual, setTextoAtual] = useState("geral");

  return (
    <main>
      <div className="informacao">
        <Card titleName="HORAS POR DIA" info="17h12min" />
        <Card titleName="DIAS AO ANO" info="30.687 dias" />
        <Card titleName="CIRCUNFERENCIA" info="159.354km" />
        <Card titleName="TEMPERATURA" info="-224°C" />
      </div>

      <div className="imagens">
        {textoAtual !== "internamente" && (
          <img
            style={{width: '55%'}} 
            src="/img/planet-uranus.svg" 
            alt="urano" />
        )}
        {textoAtual === "internamente" && (
          <img
            style={{width: '55%'}}
            id="inner"
            src="/img/planet-uranus-internal.svg"
            alt="Estrutura interna de Urano"
          />
        )}
        {textoAtual === "geologia" && (
          <img
            style={{width: '8em'}}
            className="geo"
            src="/img/geology-uranus.webp"
            alt="Geologia de Urano"
          />
        )}
      </div>

      <div className="text">
        <h1>URANO</h1>

        {textoAtual === "geral" && (
          <p>
            Urano é o sétimo planeta a partir do Sol. Seu nome é uma referência
            ao deus grego do céu, Urano. Ele possui o terceiro maior raio
            planetário e a quarta maior massa planetária no Sistema Solar.
          </p>
        )}
        {textoAtual === "internamente" && (
          <p>
            O modelo padrão da estrutura de Urano sugere que ele possui três
            camadas: um núcleo rochoso no centro, um manto de gelo no meio e um
            envelope gasoso de hidrogênio e hélio na parte externa.
          </p>
        )}
        {textoAtual === "geologia" && (
          <p>
            A atmosfera de Urano é composta principalmente de hidrogênio
            molecular e hélio. O planeta é conhecido por seu tom azul-esverdeado
            devido à presença de metano, que absorve a luz vermelha e reflete a
            azul.
          </p>
        )}

        <i>
          Fonte:{" "}
          <a target="_blank" href="https://pt.wikipedia.org/wiki/Urano_(planeta)">Wikipedia</a>
        </i>

        <Button
          className="button-urano" 
          onClick={() => setTextoAtual("geral")} 
          nameButton="Geral" 
        />
        <Button
          className="button-urano"
          onClick={() => setTextoAtual("internamente")}
          nameButton="Internamente"
        />
        <Button
          className="button-urano"
          onClick={() => setTextoAtual("geologia")}
          nameButton="Geologia"
        />
      </div>
    </main>
  );
}

export default Urano;
