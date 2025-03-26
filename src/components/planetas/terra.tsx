import { useState } from "react";
import Button from "../button";
import Card from "../card";
import "../scss/layout.scss";

function Terra() {
  const [textoAtual, setTextoAtual] = useState("geral");

  return (
    <main>
      <div className="informacao">
        <Card titleName="HORAS POR DIA" info="24h" />
        <Card titleName="DIAS AO ANO" info="365,26 dias" />
        <Card titleName="CIRCUNFERENCIA" info="40.075km" />
        <Card titleName="TEMPERATURA" info="16°C" />
      </div>

      <div className="imagens">
        {textoAtual !== "internamente" && (
          <img
            style={{width: '290px'}} 
            src="/img/planet-terra.svg" 
            alt="Terra" />
        )}
        {textoAtual === "internamente" && (
          <img
            style={{width: '290px'}}
            id="inner"
            src="/img/planet-terra-internal.svg"
            alt="Estrutura interna"
          />
        )}
        {textoAtual === "geologia" && (
          <img
            style={{width: '240px'}}
            className="geo"
            src="/img/geology-terra.webp"
            alt="Geologia da Terra"
          />
        )}
      </div>

      <div className="text">
        <h1>TERRA</h1>

        {textoAtual === "geral" && (
          <p>
            Terceiro planeta do Sol e o único planeta conhecido a abrigar vida.
            Cerca de 29,2% da superfície da Terra é terra, com os 70,8%
            restantes cobertos por água. A distância da Terra do Sol, as
            propriedades físicas e a história geológica permitiram que a vida
            evoluísse e prosperasse.
          </p>
        )}
        {textoAtual === "internamente" && (
          <p>
            O interior da Terra, como o de outros planetas terrestres, é
            dividido em camadas por suas propriedades químicas ou físicas
            (reológicas). A camada externa é uma crosta sólida de silicato
            quimicamente distinta, que é sustentada por um manto sólido
            altamente viscoso.
          </p>
        )}
        {textoAtual === "geologia" && (
          <p>
            A área total da superfície da Terra é de cerca de 510 milhões de
            km2. A crosta continental consiste em material de menor densidade,
            como as rochas ígneas granito e andesito. Menos comum é o basalto,
            uma rocha vulcânica mais densa que é o principal constituinte dos
            fundos oceânicos.
          </p>
        )}

        <i>
          Fonte: <a target="_blank" href="https://pt.wikipedia.org/wiki/Terra">Wikipedia</a>
        </i>

        <Button
          className="button-terra" 
          onClick={() => setTextoAtual("geral")} 
          nameButton="Geral" 
        />
        <Button
          className="button-terra"
          onClick={() => setTextoAtual("internamente")}
          nameButton="Internamente"
        />
        <Button
          className="button-terra"
          onClick={() => setTextoAtual("geologia")}
          nameButton="Geologia"
        />
      </div>
    </main>
  );
}

export default Terra;
