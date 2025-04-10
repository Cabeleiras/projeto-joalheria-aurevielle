package br.com.joalheriaaurevielle.app.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.joalheriaaurevielle.app.entities.CategoriaProduto;

@Repository
public interface CategoriaProdutoRepository extends JpaRepository<CategoriaProduto, Long> {
	
}