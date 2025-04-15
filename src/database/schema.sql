CREATE DATABASE ingressos_db;

CREATE TABLE ingressos (
    id SERIAL PRIMARY KEY,
    nome_evento VARCHAR(255) NOT NULL,
    data_evento DATE NOT NULL,
    local_evento VARCHAR(255) NOT NULL,
    preco NUMERIC(10, 2) NOT NULL,
    categoria VARCHAR(50) NOT NULL,
    quantidade_ingressos INT NOT NULL
);
INSERT INTO tickets (evento, local, data_evento, categoria,  preco, quantidade_disponivel) VALUES
('LUAN CITY THE END', 'Mercado Livre Arena Pacaembu', '2025-03-29', 'Camarote', 450.99, 0),
('MC IG', 'GATE 22', '2025-03-01', 'Pista Vip', 220.99, 2.500),
('belo', 'festival de pagode', '2024-09-07', 'Arquibancada', 50.33, 2.200);






