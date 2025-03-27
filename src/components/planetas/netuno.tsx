import { useState } from "react";
import Button from "../button";
import Card from "../card";
import "../scss/layout.scss";

function Netuno() {
  const [textoAtual, setTextoAtual] = useState("geral");

  return (
    <main>
      <div className="informacao">
        <Card titleName="HORAS POR DIA" info="16h06min" />
        <Card titleName="DIAS AO ANO" info="60.190 dias" />
        <Card titleName="CIRCUNFERENCIA" info="155.600km" />
        <Card titleName="TEMPERATURA" info="-214°C" />
      </div>

      <div className="imagens">
        {textoAtual !== "internamente" && (
          <img
            style={{width: '48%'}} 
            src="/img/planet-neptune.svg" 
            alt="netuno" />
        )}
        {textoAtual === "internamente" && (
          <img
            style={{width: '48%'}}
            id="inner"
            src="/img/planet-neptune-internal.svg"
            alt="Estrutura interna de Netuno"
          />
        )}
        {textoAtual === "geologia" && (
          <img
            style={{width: '8em'}}
            className="geo"
            src="/img/geology-neptune.webp"
            alt="Geologia de Netuno"
          />
        )}
      </div>

      <div className="text">
        <h1>NETUNO</h1>

        {textoAtual === "geral" && (
          <p>
            Netuno é o oitavo e mais distante planeta conhecido do Sistema
            Solar. No Sistema Solar, é o quarto maior planeta em diâmetro, o
            terceiro mais massivo e o planeta gigante mais denso. Ele tem 17
            vezes a massa da Terra, sendo mais massivo do que seu quase-gêmeo
            Urano.
          </p>
        )}
        {textoAtual === "internamente" && (
          <p>
            A estrutura interna de Netuno é semelhante à de Urano. Sua atmosfera
            representa cerca de 5% a 10% de sua massa e se estende talvez de 10%
            a 20% em direção ao núcleo. Concentrações crescentes de metano,
            amônia e água são encontradas nas regiões mais baixas.
          </p>
        )}
        {textoAtual === "geologia" && (
          <p>
            A atmosfera de Netuno é composta por 80% de hidrogênio e 19% de
            hélio. Uma pequena quantidade de metano também está presente. Bandas
            de absorção proeminentes de metano existem em comprimentos de onda
            acima de 600 nm, na parte vermelha e infravermelha do espectro.
          </p>
        )}

        <i>
          Fonte:{" "}
          <a target="_blank" href="https://pt.wikipedia.org/wiki/Netuno_(planeta)">Wikipedia</a>
        </i>

        <Button 
          className='button-netuno'
          onClick={() => setTextoAtual("geral")} 
          nameButton="Geral" 
        />
        <Button
          className='button-netuno'
          onClick={() => setTextoAtual("internamente")}
          nameButton="Internamente"
        />
        <Button
          className='button-netuno'
          onClick={() => setTextoAtual("geologia")}
          nameButton="Geologia"
        />
      </div>
    </main>
  );
}

export default Netuno;
