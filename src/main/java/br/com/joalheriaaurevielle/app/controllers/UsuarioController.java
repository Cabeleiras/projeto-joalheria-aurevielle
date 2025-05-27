package br.com.joalheriaaurevielle.app.controllers;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import br.com.joalheriaaurevielle.app.entities.Usuario;
import br.com.joalheriaaurevielle.app.services.UsuarioService;

@RestController
@RequestMapping("/cadastrousuario")
public class UsuarioController {
	
    @Autowired
    private UsuarioService usuarioService;
	
	@PostMapping
	public ResponseEntity<Usuario> createUsuario(@RequestBody Usuario usuario) {
	    Usuario novoUsuario = usuarioService.saveUsuario(usuario);
	    return ResponseEntity.ok(novoUsuario);
	}
    
    @GetMapping
    public List<Usuario> getAllUsuarios() {
        return usuarioService.getAllUsuarios();
    }

    @GetMapping("/{id}")
    public Usuario getUsuario(@PathVariable Long id) {
        return usuarioService.getUsuarioById(id);
    }

    @PutMapping
    public Usuario editUsuario(@RequestBody Usuario usuario) {
        return usuarioService.saveUsuario(usuario);
    }

    @DeleteMapping("/{id}")
    public void deleteUsuario(@PathVariable Long id) {
        usuarioService.deleteUsuario(id);
    }
    
    @GetMapping("/{cpf}")
    public Usuario getUsuario(@PathVariable String cpf) {
    	return usuarioService.getUsuarioByCpf(cpf);
    }
    
    @PostMapping("/login")
    public Usuario login(@RequestBody Usuario loginRequest) {
    	Usuario usuario = usuarioService.autenticarUsuario(loginRequest.getEmail(), loginRequest.getSenha());

        if (usuario != null) {
            return usuario;
        }
        return null;
    }
}