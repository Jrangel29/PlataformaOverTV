import React, { useState, useEffect } from "react";
import "../../Styles/Navbar.css";
import { Navbar, Nav, Container, Tabs, Tab } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { logOut } from "../../firebase";
import {fetchNews, fetchNewsTitle} from '../../API/Requests';

function TerminarSessao(props) {
  return (
    <div onClick={() => props.navegar('/account')} className={"btn btnNav account logout"}>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
      </svg>
    </div>
  );
}

const BarraNav = () => {
  const lugar = window.location.pathname;
  const [tipo, setTipo] = useState("");

  let navigate = useNavigate();

  const stringEvent = lugar.substring(0, 7);
  const stringUser = lugar.substring(0, 6);
  const stringHouse = lugar.substring(0, 7);
  const stringHistory = lugar.substring(0, 8);
  const stringNotification = lugar.substring(0, 14);

  fetchNews();
  fetchNewsTitle();

  useEffect(() => {
    if (lugar === "/notifications/create" || lugar === "/events" || stringEvent === "/events") {
      setTipo("Eventos");
    } else if (
      lugar === "/users" ||
      stringUser === "/users" ||
      lugar === "/users/create" ||
      lugar === "/houses" ||
      stringHouse === "/houses" ||
      lugar === "/houses/create"
    ) {
      setTipo("Destino");
    } else if (lugar === "/" || lugar === "/account") {
      setTipo("nada");
    } else if (lugar === "/estatisticas" || lugar === "/estatisticasCasas") {
      setTipo("Stats");
    } else {
      setTipo("Notifications");
    }
  }, []);

  return (
    <div
      className={
        tipo === "nada"
          ? ""
          : tipo === "Notifs"
          ? "barraNavegacao pt1 m-0 p-0"
          : "barraNavegacao pt2 m-0 p-0"
      }
    >
      <div className="containerNavBar topPart">
        <div className="topBar m-0 p-0 h-100">
          <div className={"btn btnNav home logout"} onClick={() => navigate("/")}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="white"
              className="bi bi-box-arrow-right"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
              />{" "}
              <path
                fillRule="evenodd"
                d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
              />
            </svg>
          </div>
          <div
            className={
              tipo === "Eventos" ? "btn btnNav escolheHalf" : "btn btnNav escolheHalfNot H1"
            }
            onClick={() => setTipo("Eventos")}
          >
            Eventos
          </div>
          <div
            className={
              tipo === "Notifications" ? "btn btnNav escolheHalf" : "btn btnNav escolheHalfNot H2"
            }
            onClick={() => setTipo("Notifications")}
          >
            Notificações
          </div>
          <div
            className={
              tipo === "Destino" ? "btn btnNav escolheHalf" : "btn btnNav escolheHalfNot H2"
            }
            onClick={() => setTipo("Destino")}
          >
            Destinatários
          </div>
          <div
            className={tipo === "Stats" ? "btn btnNav escolheHalf" : "btn btnNav escolheHalfNot H2"}
            onClick={() => setTipo("Stats")}
          >
            Estatísticas
          </div>
          <TerminarSessao navegar={navigate}/>
        </div>
      </div>
      <div className="containerNavBar w-100 row" style={{ paddingLeft: "5%", paddingRight: "5%" }}>
        <Navbar className="m-0 p-0 h-100 w-100">
          <Nav
            activeKey={lugar}
            className={
              tipo === "Eventos"
                ? "containerNavBar col-3 p-0"
                : tipo === "Notifications"
                ? "containerNavBar col-3 offset-3 p-0"
                : tipo === "Stats"
                ? "containerNavBar col-3 offset-9 p-0"
                : "containerNavBar col-3 offset-6 p-0"
            }
            style={{ justifyContent: "center" }}
          >
            {tipo === "Eventos" ? (
              <>
                <Nav.Link
                  as={Link}
                  className={lugar === "/events/create" ? "navSelected" : ""}
                  to="/events/create"
                >
                  Criar
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  className={
                    lugar === "/events" || (stringEvent === "/events" && lugar !== "/events/create")
                      ? "navSelected"
                      : ""
                  }
                  to="/events"
                >
                  Eventos
                </Nav.Link>
              </>
            ) : tipo === "nada" ? (
              <></>
            ) : tipo === "Notifications" ? (
              <>
                <Nav.Link
                  as={Link}
                  className={
                    lugar === "/notifications" || stringNotification === "/notifications"
                      ? "navSelected"
                      : ""
                  }
                  to="/notifications"
                >
                  Agendadas
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  className={
                    lugar === "/history" ||
                    lugar === "/history/details" ||
                    stringHistory === "/history"
                      ? "navSelected"
                      : ""
                  }
                  to="/history"
                >
                  Enviadas
                </Nav.Link>
              </>
            ) : tipo === "Stats" ? (
              <>
                <Nav.Link
                  as={Link}
                  className={lugar === "/estatisticas" ? "navSelected" : ""}
                  to="/estatisticas"
                >
                  Geral
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  className={lugar === "/estatisticasCasas" ? "navSelected" : ""}
                  to="/estatisticasCasas"
                >
                  Por Casa
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link
                  as={Link}
                  className={
                    lugar === "/users" || stringUser === "/users" || lugar === "/users/create"
                      ? "navSelected"
                      : ""
                  }
                  to="/users"
                >
                  Utilizadores
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  className={
                    lugar === "/houses" || stringHouse === "/houses" || lugar === "/houses/create"
                      ? "navSelected"
                      : ""
                  }
                  to="/houses"
                >
                  Casas
                </Nav.Link>
              </>
            )}
            {/*<Nav.Link as={Link} to="/groups">
                            Grupos
                        </Nav.Link>
                        <Nav.Link as={Link} to="/templates">
                            Templates
                        </Nav.Link>*/}
          </Nav>
        </Navbar>
      </div>
    </div>
  );
};

export default BarraNav;
