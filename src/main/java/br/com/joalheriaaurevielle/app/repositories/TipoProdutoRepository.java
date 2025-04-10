package br.com.joalheriaaurevielle.app.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.joalheriaaurevielle.app.entities.TipoProduto;

@Repository
public interface TipoProdutoRepository extends JpaRepository<TipoProduto, Long> {
	
}