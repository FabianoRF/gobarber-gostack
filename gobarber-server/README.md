
# Recuperação de senha

  **RF** -> requisitos funcionais

  - O usuario deve poder recuperar sua senha informando o seu email;
  - O Usuario deve receber um email com instruçoes de recuperação de senha;
  - O usuario deve poder resetar sua senha;

  **RNF** -> requisitos nao funcionais

  - Utilizar Mailtrap para testar envios em ambiente de desenvolvimento;
  - Utilizar o Amazon SES para envios em produção;
  - O envio de emails deve acontecer em segundo plano (background job);

  **RN** -> Regras de negocio

  - O Link enviado por email para resetar a senha, deve expirar em 2h;
  - O usuário precisa confirmar a nova senha ao resetar a nova senha;


# atualização do perfil

**RF**

- O Usuario dev poder atualizar seu nome, email e senha

**RN**

- O Usuario nao pode alterar seu email por uma email já utilizado;
- Para atualizar sua senha o usuário deve informar a senha antiga;
- Para atualizar sua senha o usuário precisa confirmar a nova senha;


# Painel do prestador

**RF**

- Usuario depoder listar seua agendamentos de um dia especifico;
- Prestado deve poder receber uma notificação sempre que houver um novo agendamento;
- O Prestador deve poder ler as notificações nao lidas;

**RNF**

- Os agendamentos do prestador no dia devem ser armazenados no cache;
- As notificações do prestador devem ser armazenadas no MongoDB;
- As notificaçoes do prestador devem ser enviadas em tempo-real utilizando de socket.io;

**RN**

- A notificação deve ter um status de lida ou nao lida para que o prestador possa controlar;


# Agendamento de serviços

**RF**

- O usuario deve poder listar todos os prestadores de serviços cadastrados;
- O usuario deve poder listar os dias de um mes com pelo menos um horário disponivel de um prestador;
- O usuario deve poder listar horários disponíveis em um dia especifico de um prestador;
- O usuario deve poder realizar um novo agendamento com um prestador;

**RNF**

- A listagem de prestadores deve ser armazenada em cache

**RN**

- Cada agendamento deve durar 1h;
- Os agendamentos devem estar diponiveis entre 8h às 18h (primeiro as 8h, último às 17h)
- O usuário não pode agendar em um horário já ocupado;
- O usúario não pode agendar em um horário que já passou;
- O usuário não pode agendar serviços consigo mesmo;
