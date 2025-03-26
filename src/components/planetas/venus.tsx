import { useState } from "react";
import Button from "../button";
import Card from "../card";
import "../scss/layout.scss";

function Venus() {
  const [textoAtual, setTextoAtual] = useState("geral");

  return (
    <main>
      <div className="informacao">
        <Card titleName="HORAS POR DIA" info="5.832h" />
        <Card titleName="DIAS AO ANO" info="225 dias" />
        <Card titleName="CIRCUNFERENCIA" info="38.025km" />
        <Card titleName="TEMPERATURA" info="471°c" />
      </div>
      <div className="imagens">
        {textoAtual !== "internamente" && (
          <img
            style={{width: '230px'}} 
            src="/img/planet-venus.svg" 
            alt="terra" />
        )}
        {textoAtual === "internamente" && (
          <img
            style={{width: '230px'}} 
            id="inner" 
            src="/img/planet-venus-internal.svg" 
            alt="geologia" />
        )}
        {textoAtual === "geologia" && (
          <img
            style={{width: '230px'}}
            className="geo"
            src="/img/geology-venus.webp"
            alt="imagem geologia"
          />
        )}
      </div>

      <div className="text">
        <h1>VÊNUS</h1>

        {textoAtual === "geral" && (
          <p>
            Vênus é o segundo planeta a partir do Sol. Ele recebeu esse nome em
            homenagem à deusa romana do amor e da beleza. Como o objeto natural
            mais brilhante no céu noturno da Terra depois da Lua, Vênus pode
            projetar sombras e pode ser, em raras ocasiões, visível a olho nu em
            plena luz do dia.
          </p>
        )}
        {textoAtual === "internamente" && (
          <p>
            A similaridade em tamanho e densidade entre Vênus e a Terra sugere
            que eles compartilham uma estrutura interna similar: um núcleo,
            manto e crosta. Assim como o da Terra, o núcleo venusiano é
            provavelmente pelo menos parcialmente líquido porque os dois
            planetas têm esfriado aproximadamente na mesma taxa.
          </p>
        )}
        {textoAtual === "geologia" && (
          <p>
            Grande parte da superfície venusiana parece ter sido moldada por
            atividade vulcânica. Vênus tem várias vezes mais vulcões que a
            Terra, e tem 167 grandes vulcões com mais de 100 km (60 mi) de
            diâmetro. O único complexo vulcânico desse tamanho na Terra é a Ilha
            Grande do Havaí.
          </p>
        )}

        <i>
          Fonte <a href="https://pt.wikipedia.org/wiki/Terra">Wikipedia</a>
        </i>

        <Button
          className="button-venus" 
          onClick={() => setTextoAtual("geral")} 
          nameButton="Geral" 
        />
        <Button
          className="button-venus"
          onClick={() => setTextoAtual("internamente")}
          nameButton="Internamente"
        />
        <Button
          className="button-venus"
          onClick={() => setTextoAtual("geologia")}
          nameButton="Geologia"
        />
      </div>
    </main>
  );
}

export default Venus;
