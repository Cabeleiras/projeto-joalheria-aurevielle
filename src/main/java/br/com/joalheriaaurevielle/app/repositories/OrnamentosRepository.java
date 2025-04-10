package br.com.joalheriaaurevielle.app.repositories;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.joalheriaaurevielle.app.entities.Ornamentos;

@Repository
public interface OrnamentosRepository extends JpaRepository<Ornamentos, Long> {
	
}