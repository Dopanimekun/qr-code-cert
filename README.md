# 🔐 QR Code com Certificado (PoC)

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/PWA-5A0FC8?style=for-the-badge&logo=pwa&logoColor=white" alt="PWA" />
  <img src="https://img.shields.io/github/license/Dopanimekun/qr-code-cert?style=for-the-badge" alt="License" />
</p>

## 📖 Sobre o Projeto

Este repositório contém uma **Prova de Conceito (PoC)** desenvolvida para um **TCC de Defesa Cibernética**. O objetivo principal é demonstrar na prática a lógica de geração e assinatura criptográfica de QR Codes, garantindo a autenticidade e integridade da informação lida. 

O projeto também conta com um aplicativo validador construído como **PWA (Progressive Web App)**, projetado para oferecer a máxima portabilidade entre diferentes sistemas e dispositivos móveis.

O aplicativo se encontra neste [repositório](https://github.com/joao730/qr-verifier-android).

---

## ⚠️ Aviso Importante

> **Atenção:** Boa parte do código deste repositório foi produzida utilizando *vibe coding* (experimentação rápida/geração assistida). Este código foi feito estritamente como uma Prova de Conceito (PoC) para fins acadêmicos e validação de ideias. **Não crie expectativas acerca da qualidade do código para um ambiente de produção.**

---

## ✨ Funcionalidades

* **Geração de QR Code:** Criação de QR Codes contendo as informações necessárias.
* **Assinatura Criptográfica:** Implementação de chaves (com dados de exemplo) para assinar digitalmente o QR Code, prevenindo falsificações.
* **Validação Mobile (PWA):** Leitura e verificação da assinatura do QR Code através de um aplicativo web instalável.

---

## 📂 Estrutura de Arquivos

* `index.html` — Interface principal responsável pela lógica de geração e assinatura do QR Code.
* `verificador.html` — Aplicação PWA de validação e leitura de QR Codes.
* `keys.js` e `demo-keys.js` — Arquivos responsáveis por armazenar e manipular as chaves criptográficas de exemplo para a PoC.
* `LICENSE` — Licença de código aberto do projeto.

---

## 🛠️ Tecnologias Utilizadas

* **HTML5 & CSS** - Estruturação e interface.
* **JavaScript (Vanilla)** - Lógica principal de geração, assinatura e verificação.
* **PWA (Progressive Web App)** - Utilizado no validador para funcionamento multiplataforma mobile.

---

## 🚀 Como Executar Localmente

1. Faça o clone do repositório em sua máquina:
```bash
git clone https://github.com/Dopanimekun/qr-code-cert.git
```
2. Acesse o diretório do projeto:   
```bash
cd qr-code-cert
```
    
3. Por ser um projeto construído com HTML, CSS e JS puro, você não precisa instalar dependências. Basta abrir os arquivos em seu navegador: 
    - Abra o arquivo `index.html` para acessar o gerador de QR Codes.
        
    - Abra o arquivo `verificador.html` para testar o sistema de leitura (ideal testar com câmera em dispositivos móveis).

## Github pages

O projeto também está disponível via github pages para experimentação:
- [Emissor](https://dopanimekun.github.io/qr-code-cert/)
- [Verificador PWA](https://dopanimekun.github.io/qr-code-cert/verificador.html)

## 📄 Licença

Este projeto está sob a licença **GPL-3.0**. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
