# Clean Architecture - Node.js & TypeScript

Este projeto tem como objetivo demonstrar a aplicação prática dos princípios da **Clean Architecture** em um backend desenvolvido com **Node.js e TypeScript**, utilizando **TDD (Test Driven Development)** como abordagem para garantir qualidade e manutenibilidade do código.

O foco está na **separação de responsabilidades**, independência de frameworks e organização do código orientada ao domínio.

---

## 🧠 Objetivo do Projeto

Demonstrar, de forma prática, como estruturar uma aplicação backend seguindo Clean Architecture, facilitando:
- manutenção
- testabilidade
- evolução do sistema
- desacoplamento entre regras de negócio e detalhes técnicos

Este projeto não tem como foco um domínio específico, mas sim **arquitetura e boas práticas de engenharia de software**.

---

## 🏗️ Arquitetura

O projeto segue os princípios da **Clean Architecture**, com divisão clara entre camadas:

### 📦 Domain
- Entidades
- Regras de negócio
- Contratos (interfaces)

### 📦 Application (Use Cases)
- Casos de uso da aplicação
- Orquestração das regras de negócio
- Independente de frameworks

### 📦 Infrastructure
- Implementações concretas (repositórios, serviços externos)
- Banco de dados
- Frameworks e bibliotecas

### 📦 Interface / Presentation
- Camada responsável pela comunicação externa (controllers, handlers, etc.)

Essa separação garante que **mudanças em frameworks ou banco de dados não impactem o domínio da aplicação**.

---

## 🧪 Testes

O projeto foi desenvolvido seguindo a abordagem de **TDD**, priorizando testes unitários para os casos de uso e regras de negócio.

```bash
npm run test
```
Os testes garantem:

- confiabilidade das regras de negócio
- facilidade para refatorações
- documentação viva do comportamento do sistema

## 🛠 Tecnologias Utilizadas

- Node.js
- TypeScript
- Jest
- Clean Architecture
- TDD

## ▶️ Como Executar o Projeto

Pré-requisitos
- Node.js (versão LTS)

Passos

```bash
# Clonar o repositório
git clone https://github.com/P3DR0DEV/clean-arch.git

# Acessar o diretório
cd clean-arch

# Instalar dependências
npm install

# Executar os testes
npm run test
```
## 📄 Contexto

Este projeto foi desenvolvido com o objetivo de aprofundar conhecimentos em arquitetura de software, servindo como base para aplicações backend mais complexas e escaláveis.

## Autor

 [Pedro Henrique Campos Mendes](https://www.linkedin.com/in/pedro-cmendes/)
