import { useState } from "react";
import Button from "../button";
import Card from "../card";
import "../scss/layout.scss";

function Saturno() {
  const [textoAtual, setTextoAtual] = useState("geral");

  return (
    <main>
      <div className="informacao">
        <Card titleName="HORAS POR DIA" info="10h42min" />
        <Card titleName="DIAS AO ANO" info="10.759 dias" />
        <Card titleName="CIRCUNFERÊNCIA" info="365.882km" />
        <Card titleName="TEMPERATURA" info="-139°C" />
      </div>

      <div className="imagens">
        {textoAtual !== "internamente" && (
          <img
            style={{width: '420px'}} 
            src="/img/planet-saturn.svg" 
            alt="Saturno" />
        )}
        {textoAtual === "internamente" && (
          <img
            style={{width: '420px'}}
            id="inner"
            src="/img/planet-saturn-internal.svg"
            alt="Estrutura interna"
          />
        )}
        {textoAtual === "geologia" && (
          <img
            style={{width: '250px'}}
            className="geo"
            src="/img/geology-saturn.webp"
            alt="Geologia de Saturno"
          />
        )}
      </div>

      <div className="text">
        <h1>SATURNO</h1>

        {textoAtual === "geral" && (
          <p>
            Saturno é o sexto planeta a partir do Sol e o segundo maior do
            Sistema Solar, depois de Júpiter. É um gigante gasoso com um raio
            médio cerca de nove vezes e meia maior que o da Terra. No entanto,
            sua densidade média é apenas um oitavo da densidade da Terra.
          </p>
        )}
        {textoAtual === "internamente" && (
          <p>
            Apesar de ser composto principalmente de hidrogênio e hélio, a maior
            parte da massa de Saturno não está na forma gasosa. O hidrogênio se
            comporta como um líquido não ideal quando a densidade ultrapassa
            0,01 g/cm³, o que ocorre em uma camada que contém 99,9% da massa do
            planeta.
          </p>
        )}
        {textoAtual === "geologia" && (
          <p>
            A atmosfera externa de Saturno contém aproximadamente 96,3% de
            hidrogênio molecular e 3,25% de hélio em volume. A característica
            mais famosa do planeta é seu sistema de anéis, composto
            principalmente de partículas de gelo, com uma pequena quantidade de
            detritos rochosos e poeira.
          </p>
        )}

        <i>
          Fonte:{" "}
          <a href="https://pt.wikipedia.org/wiki/Saturno_(planeta)">
            Wikipedia
          </a>
        </i>

        <Button
          className="button-saturno" 
          onClick={() => setTextoAtual("geral")} 
          nameButton="Geral" />
        <Button
          className="button-saturno"
          onClick={() => setTextoAtual("internamente")}
          nameButton="Internamente"
        />
        <Button
          className="button-saturno"
          onClick={() => setTextoAtual("geologia")}
          nameButton="Geologia"
        />
      </div>
    </main>
  );
}

export default Saturno;
