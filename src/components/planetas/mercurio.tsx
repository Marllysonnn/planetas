import { useState } from "react";
import Button from "../button";
import Card from "../card";
import "../scss/layout.scss";

function Mercurio() {
  const [textoAtual, setTextoAtual] = useState("geral");

  return (
    <main>
      <div className="informacao">
        <Card titleName="HORAS POR DIA" info="4.222h" />
        <Card titleName="DIAS AO ANO" info="88 dias" />
        <Card titleName="CIRCUNFERENCIA" info="15.329km" />
        <Card titleName="TEMPERATURA" info="430°C" />
      </div>

      <div className="imagens">
        {textoAtual !== "internamente" && (
          <img 
            style={{width: '145px'}}
            src="/img/planet-mercury.svg" 
            alt="mercury" />
        )}
        {textoAtual === "internamente" && (
          <img
            id="inner"
            style={{width: '145px'}}
            src="/img/planet-mercury-internal.svg"
            alt="Estrutura interna"
          />
        )}
        {textoAtual === "geologia" && (
          <img
            className="geo"
            style={{width: '145px'}}
            src="/img/geology-mercury.webp"
            alt="Geologia da mercury"
          />
        )}
      </div>

      <div className="text">
        <h1>MERCURIO</h1>

        {textoAtual === "geral" && (
          <p>
            Mercúrio é o menor planeta do Sistema Solar e o mais próximo do Sol.
            Sua órbita ao redor do Sol leva 87,97 dias terrestres, o mais curto
            de todos os planetas do Sol. Mercúrio é um dos quatro planetas
            terrestres do Sistema Solar e é um corpo rochoso como a Terra.
          </p>
        )}
        {textoAtual === "internamente" && (
          <p>
            Mercúrio parece ter uma crosta sólida de silicato e manto
            sobrepostos a uma camada de núcleo externo sólida de sulfeto de
            ferro, uma camada de núcleo líquido mais profunda e um núcleo
            interno sólido. A densidade do planeta é a segunda mais alta do
            Sistema Solar, com 5,427 g/cm3, apenas um pouco menor que a
            densidade da Terra.
          </p>
        )}
        {textoAtual === "geologia" && (
          <p>
            A superfície de Mercúrio é similar em aparência à da Lua, mostrando
            extensas planícies semelhantes a mares e crateras pesadas, indicando
            que ela tem sido geologicamente inativa por bilhões de anos. Ela é
            mais heterogênea do que a de Marte ou da Lua.
          </p>
        )}

        <i>
          Fonte:{" "}
          <a href="https://pt.wikipedia.org/wiki/Merc%C3%BArio_(planeta)">
            Wikipedia
          </a>
        </i>

        <Button
          className="button-mercurio"
          onClick={() => setTextoAtual("geral")} 
          nameButton="Geral" 
        />
        <Button
          className="button-mercurio"
          onClick={() => setTextoAtual("internamente")}
          nameButton="Internamente"
        />
        <Button
          className="button-mercurio"
          onClick={() => setTextoAtual("geologia")}
          nameButton="Geologia"
        />
      </div>
    </main>
  );
}

export default Mercurio;
