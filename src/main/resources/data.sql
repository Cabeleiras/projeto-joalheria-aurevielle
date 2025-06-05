INSERT IGNORE INTO tb_tipo_usuario (id_tipo_usuario, nome_tipo_usuario) 
VALUES (1, 'Admin'), (2, 'Cliente'), (3, 'Vendedor'), (4, 'Gerente');

-- Inserindo Categorias (se não existirem)
INSERT IGNORE INTO tb_categoria_produto (id_categoria_produto, nome_categoria_produto, descricao_categoria_produto) VALUES
(1, 'Anéis', 'Acessório para os dedos'),
(2, 'Colares', 'Acessório para o pescoço'),
(3, 'Brincos', 'Acessório para as orelhas'),
(4, 'Pulseiras', 'Acessório para os braços'),
(5, 'Relógios', 'Acessório para não atrasar no SENAI');


-- Inserindo Tipos (se não existirem)
INSERT IGNORE INTO tb_tipo_produto (id_tipo_produto, nome_tipo_produto, descricao_tipo_produto) VALUES
(1, 'Ouro', '18k'),
(2, 'Prata', '750'),
(3, 'Bijuteria', 'É biju mas é de rico');


-- Inserindo Ornamentos (se não existirem)
INSERT IGNORE INTO tb_ornamentos (id_ornamento, nome_ornamento, descricao_ornamento) VALUES 
(1, 'Nenhum', 'Não possui nenhum ornamento'),
(2, 'Ruby', 'Pedra preciosa vermelha, símbolo de paixão e nobreza'),
(3, 'Ametista', 'Pedra roxa associada à proteção e espiritualidade'),
(4, 'Topázio', 'Pode ter várias cores, ligada à clareza e foco'),
(5, 'Lápis-lazúli', 'Azul intenso, símbolo de realeza e intuição'),
(6, 'Jade', 'Símbolo de sabedoria e serenidade, de cor verde');

ALTER TABLE tb_produto MODIFY COLUMN img_url TEXT;


-- Inserindo Usuarios predefinidos
INSERT IGNORE INTO tb_usuario (id_usuario, cpf, dt_nascimento, email, nome_usuario, senha, telefone, tipo_usuario_id) VALUES
(1, '00000000000', '2000-01-01', 'admin@gmail.com', 'AdminQu8', 'admin32u', '15999999999', 1),
(2, '12345678901', '1995-06-15', 'joao.silva@gmail.com', 'JoaoSilva95', 'J0a0@2024', '11988887777', 2),
(3, '98765432100', '1990-09-23', 'maria.souza@gmail.com', 'MariaSouza90', 'M@ria#90', '21997776666', 2),
(4, '45678912309', '1988-03-10', 'lucas.lima@gmail.com', 'LucasLima88', 'L!m@1988', '31996665555', 2),
(5, '32165498702', '2002-12-01', 'ana.costa@gmail.com', 'AnaCosta02', 'Ana*2002', '41995554444', 2);


-- Inserindo Produtos predefinidos
INSERT IGNORE INTO tb_produto (id_produto, descricao_produto, img_url, nome_produto, preco, categoria_id, ornamento_id, tipo_produto_id) VALUES
(1, 'Anel elegante de ouro com detalhe em Ruby', 'https://img.com/anel_ruby.jpg', 'Anel Ruby Real', 799.90, 1, 2, 1),
(2, 'Colar delicado de prata com ametista', 'https://img.com/colar_ametista.jpg', 'Colar Ametista Luz', 349.00, 2, 3, 2),
(3, 'Brinco clássico sem ornamento em bijuteria dourada', 'https://img.com/brinco_classico.jpg', 'Brinco Clássico', 59.99, 3, 1, 3),
(4, 'Pulseira de ouro com detalhes em topázio azul', 'https://img.com/pulseira_topazio.jpg', 'Pulseira Topázio Azul', 499.90, 4, 4, 1),
(5, 'Relógio de prata com jade no mostrador', 'https://img.com/relogio_jade.jpg', 'Relógio Verde Tempo', 1299.00, 5, 6, 2),
(6, 'Anel moderno de bijuteria com ametista roxa', 'https://img.com/anel_ametista.jpg', 'Anel Roxo Chic', 89.90, 1, 3, 3),
(7, 'Colar de ouro sem ornamentos, minimalista', 'https://img.com/colar_minimalista.jpg', 'Colar Ponto de Ouro', 599.99, 2, 1, 1),
(8, 'Brinco com lápis-lazúli, estrutura de prata', 'https://img.com/brinco_lazuli.jpg', 'Brinco Real Azul', 259.50, 3, 5, 2),
(9, 'Pulseira com jade, bijuteria dourada de luxo', 'https://img.com/pulseira_jade.jpg', 'Pulseira Jade Dourada', 109.90, 4, 6, 3),
(10, 'Relógio dourado com detalhe em ruby', 'https://img.com/relogio_ruby.jpg', 'Relógio Ruby Premium', 1499.90, 5, 2, 1),
(11, 'Anel de prata com topázio branco', 'https://img.com/anel_topazio.jpg', 'Anel Topázio White', 429.00, 1, 4, 2),
(12, 'Colar bijuteria com pingente de ametista', 'https://img.com/colar_biju_ametista.jpg', 'Colar Lilás Encanto', 69.90, 2, 3, 3),
(13, 'Brinco de ouro com jade esculpida', 'https://img.com/brinco_jade.jpg', 'Brinco Verde Nobre', 749.00, 3, 6, 1),
(14, 'Pulseira prata pura, sem ornamento', 'https://img.com/pulseira_simples.jpg', 'Pulseira Essencial', 199.00, 4, 1, 2),
(15, 'Relógio bijuteria, azul com lápis-lazúli falso', 'https://img.com/relogio_biju.jpg', 'Relógio Azul Fashion', 89.00, 5, 5, 3),
(16, 'Anel delicado em ouro com ametista central', 'https://img.com/anel_ouro_ametista.jpg', 'Anel Coração Roxo', 899.99, 1, 3, 1),
(17, 'Colar com jade em estrutura de prata', 'https://img.com/colar_jade_prata.jpg', 'Colar Verde Luz', 379.00, 2, 6, 2),
(18, 'Brinco de bijuteria com pequenos rubys', 'https://img.com/brinco_rubys.jpg', 'Brinco Paixão', 74.90, 3, 2, 3),
(19, 'Pulseira dourada com ornamento de lápis-lazúli', 'https://img.com/pulseira_lazuli.jpg', 'Pulseira Azul Solar', 399.00, 4, 5, 1),
(20, 'Relógio prata com mostrador limpo, sem ornamento', 'https://img.com/relogio_prata.jpg', 'Relógio Clássico', 999.90, 5, 1, 2);

