package br.com.joalheriaaurevielle.app.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.joalheriaaurevielle.app.entities.Usuario;
import br.com.joalheriaaurevielle.app.repositories.UsuarioRepository;

@Service
public class UsuarioService {
    
    @Autowired
    private UsuarioRepository usuarioRepository;
    
    public Usuario saveUsuario(Usuario usuario) {
        return usuarioRepository.save(usuario);
    }
    
    public List<Usuario> getAllUsuarios() {
        return usuarioRepository.findAll();
    }
    
    public Usuario getUsuarioById(Long id) {
        return usuarioRepository.findById(id).orElse(null);
    }
    
    public void deleteUsuario(Long id) {
        usuarioRepository.deleteById(id);
    }
}
