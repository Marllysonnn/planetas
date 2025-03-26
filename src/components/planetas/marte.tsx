import { useState } from "react";
import Button from "../button";
import Card from "../card";
import "../scss/layout.scss";

function Marte() {
  const [textoAtual, setTextoAtual] = useState("geral");

  return (
    <main>
      <div className="informacao">
        <Card titleName="HORAS POR DIA" info="24h37min" />
        <Card titleName="DIAS AO ANO" info="687 dias" />
        <Card titleName="CIRCUNFERENCIA" info="21.344km" />
        <Card titleName="TEMPERATURA" info="-28°C" />
      </div>

      <div className="imagens">
        {textoAtual !== "internamente" && (
          <img
            style={{width: '220px'}} 
            src="/img/planet-mars.svg" 
            alt="Marte" />
        )}
        {textoAtual === "internamente" && (
          <img
            style={{width: '220px'}}
            id="inner"
            src="/img/planet-mars-internal.svg"
            alt="Estrutura interna"
          />
        )}
        {textoAtual === "geologia" && (
          <img
            style={{width: '220px'}}
            className="geo"
            src="/img/geology-mars.webp"
            alt="Geologia de Marte"
          />
        )}
      </div>

      <div className="text">
        <h1>MARTE</h1>

        {textoAtual === "geral" && (
          <p>
            Marte é o quarto planeta a partir do Sol e o segundo menor do
            Sistema Solar, sendo maior apenas que Mercúrio. Em português, Marte
            leva o nome do deus romano da guerra e é frequentemente referido
            como o "Planeta Vermelho".
          </p>
        )}
        {textoAtual === "internamente" && (
          <p>
            Assim como a Terra, Marte possui um núcleo metálico denso coberto
            por materiais menos densos. Cientistas inicialmente determinaram que
            o núcleo é, pelo menos, parcialmente líquido. Modelos atuais do seu
            interior indicam que o núcleo é composto principalmente de ferro e
            níquel, com cerca de 16–17% de enxofre.
          </p>
        )}
        {textoAtual === "geologia" && (
          <p>
            Marte é um planeta terrestre cuja superfície é composta por minerais
            contendo silício e oxigênio, metais e outros elementos que
            normalmente formam rochas. A superfície é composta principalmente de
            basalto toleítico, embora algumas regiões tenham maior teor de
            sílica do que o basalto típico.
          </p>
        )}

        <i>
          Fonte:{" "}
          <a target="_blank" href="https://pt.wikipedia.org/wiki/Marte_(planeta)">Wikipedia</a>
        </i>

        <Button
          className="button-marte" 
          onClick={() => setTextoAtual("geral")} 
          nameButton="Geral" 
        />
        <Button
          className="button-marte"
          onClick={() => setTextoAtual("internamente")}
          nameButton="Internamente"
        />
        <Button
          className="button-marte"
          onClick={() => setTextoAtual("geologia")}
          nameButton="Geologia"
        />
      </div>
    </main>
  );
}

export default Marte;
