package br.com.joalheriaaurevielle.app.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.joalheriaaurevielle.app.entities.TipoUsuario;
import br.com.joalheriaaurevielle.app.repositories.TipoUsuarioRepository;

import java.util.List;
import java.util.Optional;

@Service
public class TipoUsuarioService {

    @Autowired
    private TipoUsuarioRepository tipoUsuarioRepository;

    // Método para salvar ou atualizar o TipoUsuario
    public TipoUsuario saveTipoUsuario(TipoUsuario tipoUsuario) {
        return tipoUsuarioRepository.save(tipoUsuario);
    }

    // Método para buscar todos os Tipos de Usuário
    public List<TipoUsuario> getAllTiposUsuario() {
        return tipoUsuarioRepository.findAll();
    }

    // Método para buscar um TipoUsuario por ID
    public TipoUsuario getTipoUsuarioById(Long id) {
        Optional<TipoUsuario> tipoUsuario = tipoUsuarioRepository.findById(id);
        return tipoUsuario.orElseThrow(() -> new RuntimeException("Tipo de Usuário não encontrado para o ID: " + id));
    }

    // Método para deletar um TipoUsuario por ID
    public void deleteTipoUsuario(Long id) {
        tipoUsuarioRepository.deleteById(id);
    }
}