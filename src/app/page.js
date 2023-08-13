"use client";
import Head from "next/head"
import { doLogin } from "@/services/Web3Services";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {

  const { push } = useRouter();
  const [ message, setMessage ] = useState("");

  function btnLoginClick(){
    setMessage("Conectando com a metamask...aguarde...");
    doLogin()
      .then(wallet => push("/timeline"))
      .catch(err => {
        console.error(err);
        setMessage(err.message);
      })
  }

  return (
    <>
    <Head>
      <title>CrypTwitter | Login</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <div className="container px-4 py-5">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6">
        <img src="https://images.pexels.com/photos/17800471/pexels-photo-17800471/free-photo-of-arquitetura-ponte-espaco-construcao.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="d-block mx-lg-auto img-fluid" width="700" height="500" />
        </div>
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">CrypTwitter</h1>
          <p className="lead">Sua rede social descentralizada</p>
          <p className="lead mb-3">Autentifique-se com sua carteira, escreva mensagens e saiba o que esta acontecendo</p>
          <div className="d-grip gap-2 d-md-flex justify-content-md-start">
            <button type="button" className="btn btn-primary btn-lg px-4 me-md-2" onClick={btnLoginClick}>
              <img src="/metamask.svg" width="64" className="me-3" />
              Conectar com a MetaMask
            </button>
          </div>
          <p className="message">{message}</p>
        </div>
      </div>
    </div>
    </>
  )
}
