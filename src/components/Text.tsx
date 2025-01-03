import "./Text.css";

import pintura from "../assets/casa/pintura.jpg"; 
import balcao from "../assets/casa/balcao.jpg"; 
import area from "../assets/casa/area.jpg"; 
import interior from "../assets/casa/interior.jpg"; 
import ilha2 from "../assets/casa/ilha2.jpg"; 
const Main = () => {
  return (
    <div>
      <section className="about-jg">
        <h2>Sobre a JG Construções</h2>
        <p>
          A <strong>JG Construções</strong> é referência no mercado de construção civil, reforma e pintura, destacando-se pelo compromisso com a qualidade, inovação e satisfação de seus clientes. Atuamos com dedicação em cada projeto, oferecendo soluções personalizadas para transformar sonhos em realidade, seja na construção de novos espaços, reformas residenciais ou comerciais, ou serviços de pintura que valorizam cada detalhe.
        </p>
      </section>

      <section className="qualities">
        <h3>Nossas Qualidades</h3>
        <ul>
          <li>
          <div className="quality-item">
            <p>
              <h4>Acabamento de Alta Qualidade:</h4>
              Garantimos acabamentos impecáveis que transformam ambientes, como demonstrado neste balcão, onde destacamos detalhes refinados e durabilidade.
            </p>
            <div
              className="backimg"
              style={{
                backgroundImage: `url(${balcao})`,
              }}
            ></div>
          </div>
          </li>
          <li>
          <div className="quality-item">
            <p>
              <h4>Infraestrutura e Funcionalidade:</h4>
              Criamos áreas de serviço práticas e eficientes, projetadas para atender às necessidades do dia a dia com organização e estilo, como nesta área moderna.
            </p>
            <div
              className="backimg"
              id="area"
              style={{
                backgroundImage: `url(${area})`,
              }}
            ></div>
          </div>
          </li>
          <li>
          <div className="quality-item">
            <p>
              <h4>Estilo e Sofisticação:</h4>
              Desenvolvemos projetos de pintura que realçam a estética dos ambientes, combinando sofisticação e criatividade, como nesta parede de destaque que enriquece o espaço.
            </p>
            <div
              className="backimg"
              style={{
                backgroundImage: `url(${pintura})`,
              }}
            ></div>
          </div>
          </li>
          <li>
          <div className="quality-item">
            <p>
              <h4>Ambientes Planejados:</h4>
              Projetamos interiores que traduzem a personalidade de nossos clientes, garantindo conforto e funcionalidade em cada detalhe, como este espaço acolhedor.
            </p>
            <div
              className="backimg"
              style={{
                backgroundImage: `url(${interior})`,
              }}
            ></div>
          </div>
          <div className="quality-item">
            <p>
              <h4>Ilha e balcao em porcelanato:</h4>
              Criamos ilhas e balcões em porcelanato com design sofisticado, alta durabilidade e acabamentos personalizados.
            </p>
            <div
              className="backimg"
              style={{
                backgroundImage: `url(${ilha2})`,
              }}
            ></div>
          </div>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Main;
