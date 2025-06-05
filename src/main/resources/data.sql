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
