🎫 Sistema de Gestão de Ingressos para Eventos

📌 Descrição

Você foi contratado para desenvolver um backend para um sistema de venda de ingressos para eventos. O sistema deve permitir o cadastro, consulta, atualização e remoção de ingressos disponíveis para diferentes eventos, além de conter duas regras de negócio para garantir um controle eficiente das vendas e preços.

💻  BANCO DE DADOS

A implemenração do banco de dados na API de ingressos tem as seguintes inserções

CREATE TABLE  tickets (
    id SERIAL PRIMARY KEY,
    evento VARCHAR(255) NOT NULL,
    local VARCHAR(255),
    data_evento  DATE,
    categoria VARCHAR(50),
    preco DECIMAL(10,2),
    quantidade_disponivel INTEGER
);

Que traz os resultados sobre o evento, local do evento, data do evento, a categoria do setor, o atual preço do ingresso e a quantidade de ingressos disponiveis para aquele evento.

Preço mínimo por categoria:

O sistema deve garantir que o preço mínimo de cada categoria siga estas regras:

"Pista": mínimo de R$100,00
"Pista VIP": mínimo de R$200,00
"Camarote": mínimo de R$300,00
"Arquibancada": mínimo de R$80,00

🛠 BACK - END

O back-end da API de ingressos deve garantir a metodologia CRUD

 Create,
 Read, 
 Update, 
 Delete.

Com as Rotas:

💻POST /ingressos → Cadastrar um novo ingresso
📃GET /ingressos → Listar todos os ingressos disponíveis
📑GET /ingressos/:id → Consultar um ingresso específico
🕐PUT /ingressos/:id → Atualizar um ingresso
🗑DELETE /ingressos/:id → Remover um ingresso
POST /venda → Realizar a venda de um ingresso