CREATE TABLE  tickets (
    id SERIAL PRIMARY KEY,
    evento VARCHAR(255) NOT NULL,
    local VARCHAR(255),
    data_evento  DATE,
    categoria VARCHAR(50),
    preco DECIMAL(10,2),
    quantidade_disponivel INTEGER
);

INSERT INTO tickets (evento, local, data_evento, categoria,  preco, quantidade_disponivel) VALUES
('LUAN CITY THE END', 'Mercado Livre Arena Pacaembu', '2025-03-29', 'Camarote', 450.99, 0),
('MC IG', 'GATE 22', '2025-03-01', 'Pista Vip', 220.99, 2.500),
('belo', 'festival de pagode', '2024-09-07', 'Arquibancada', 50.33, 2.200);






