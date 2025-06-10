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
(1, 'Anel elegante de ouro com detalhe em Ruby', 'https://joiasgold.vteximg.com.br/arquivos/ids/195717-1000-1000/Anel-em-Ouro-18k-Gota-Rubi-com-Diamantes-an35242--joiasgold.jpg?v=636703604052470000', 'Anel Ruby Real', 799.90, 1, 2, 1),
(2, 'Colar delicado de prata com ametista', 'https://images.tcdn.com.br/img/img_prod/1124381/colar_de_prata_natural_medalhao_de_ametista_oval_1953_1_683396a52808e44464417c8c243ce2df.jpg', 'Colar Ametista Luz', 349.00, 2, 3, 2),
(3, 'Brinco clássico sem ornamento em bijuteria dourada', 'https://montecarlo.vtexassets.com/arquivos/ids/698902/NIM003377_1.jpg?v=638585637858870000', 'Brinco Clássico', 59.99, 3, 1, 3),
(4, 'Pulseira de ouro com detalhes em topázio azul', 'https://montecarlo.vtexassets.com/arquivos/ids/333950/NIM029026_3.jpg?v=638253928824230000', 'Pulseira Topázio Azul', 499.90, 4, 4, 1),
(5, 'Relógio de ouro com jade no mostrador', 'https://verdeprata.com/cdn/shop/files/H56a631cefbfd44e2bf45c2b7c1384c5ew_1151x.jpg?v=1697668654', 'Relógio Verde Tempo', 1299.00, 5, 6, 1),
(6, 'Anel moderno de bijuteria com ametista roxa', 'https://a-static.mlcdn.com.br/1500x1500/anel-pedra-ametista-facetado-montagem-dourado-aro-ajustavel-cristaisdecurvelo/sojoias/15893477245/5c9b4f96166e8a971966c633fd4db57b.jpeg', 'Anel Roxo Chic', 89.90, 1, 3, 3),
(7, 'Colar de ouro sem ornamentos, minimalista', 'https://images.tcdn.com.br/img/img_prod/1263471/colar_masculino_elo_um_por_um_folheado_em_ouro_18k_5631_1_de17cc9e4acce27f694d6089d2e7e23a.jpg', 'Colar Ponto de Ouro', 599.99, 2, 1, 1),
(8, 'Brinco com lápis-lazúli, estrutura de prata', 'https://lojavivara.vtexassets.com/arquivos/ids/822686/Brinco-Life-Special-Prata-Lapis-Lazuli-67119_1_set.jpg?v=638466734813500000', 'Brinco Real Azul', 259.50, 3, 5, 2),
(9, 'Pulseira com jade, bijuteria dourada de luxo', 'https://down-br.img.susercontent.com/file/br-11134207-7qukw-lhj5r796inml01', 'Pulseira Jade Dourada', 109.90, 4, 6, 3),
(10, 'Relógio dourado com detalhe em ruby', 'https://hodinky.s2.cdn-upgates.com/4/4621e346018c80-022.jpg', 'Relógio Ruby Premium', 1499.90, 5, 2, 1),
(11, 'Anel de prata com topázio branco', 'https://images.tcdn.com.br/img/img_prod/1181849/anel_solitario_wine_ring_de_prata_925_com_pedra_natural_retangular_topazio_branco_667_2_a52e4af7789f8b43e61c05069509cb60.jpg', 'Anel Topázio White', 429.00, 1, 4, 2),
(12, 'Colar bijuteria com pingente de ametista', 'https://images.tcdn.com.br/img/img_prod/691802/colar_relicario_aromatizador_difusor_pessoal_pingente_frasco_de_perfume_de_ametista_pedra_natural_co_1569_1_66b5bd9e1a078df7ca113c6e8fa6f79c.jpg', 'Colar Lilás Encanto', 69.90, 2, 3, 3),
(13, 'Brinco de ouro com jade esculpida', 'https://joiasgold.vteximg.com.br/arquivos/ids/227099-1000-1000/Brinco-de-Ouro-18k-Jade-Verde-Gota-br25268-joiasgold.jpg?v=637695511106330000', 'Brinco Verde Nobre', 749.00, 3, 6, 1),
(14, 'Pulseira prata pura, sem ornamento', 'https://images.tcdn.com.br/img/img_prod/836588/pulseira_grumet_prata_925_14g_3338_1_7878342f67189e1d26e68be0d99dcddc.jpg', 'Pulseira Essencial', 199.00, 4, 1, 2),
(15, 'Relógio bijuteria, azul com lápis-lazúli falso', 'https://sauer.vtexassets.com/arquivos/ids/156102-800-auto?v=637414120237270000&width=800&height=auto&aspect=true', 'Relógio Azul Fashion', 89.00, 5, 5, 3),
(16, 'Anel delicado em ouro com ametista central', 'https://cdn.spiritshop.com.br/alfredomeyer/image/cache/data/up_system/product-55913/anel-em-ouro-18-kt-com-diamantes-e-ametista-natural-416-1500x1500.jpg', 'Anel Coração Roxo', 899.99, 1, 3, 1),
(17, 'Colar com jade em estrutura de prata', 'https://images.tcdn.com.br/img/img_prod/1198977/gargantilha_em_prata_com_pingente_redondo_jade_935_1_18dfcbd66334c713f2c0b399a842c964.jpg', 'Colar Verde Luz', 379.00, 2, 6, 2),
(18, 'Brinco de bijuteria com pequenos rubys', 'https://www.waufen.com.br/wp-content/uploads/2020/04/brinco-dourado-de-gotinha-rubi-fusion-rutilada-semijoias.jpg', 'Brinco Paixão', 74.90, 3, 2, 3),
(19, 'Pulseira dourada com ornamento de lápis-lazúli', 'https://s.antoninacontemporanea.com.br/product/2024/09/04060173-01.jpg', 'Pulseira Azul Solar', 399.00, 4, 5, 1),
(20, 'Relógio prata com mostrador limpo, sem ornamento', 'https://images.tcdn.com.br/img/img_prod/813275/relogio_prata_masculino_seculus_44042g0svna1_29723_1_f7dceab2b544355f7ea1b90479039ea6.jpg', 'Relógio Clássico', 999.90, 5, 1, 2);

